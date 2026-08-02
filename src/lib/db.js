import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import os from "os";

// 找到可写目录存数据库：本地用 data/，云端（Vercel）用系统临时目录
function resolveDataDir() {
  const candidates = [];
  if (process.env.VERCEL) candidates.push(process.env.TMPDIR || os.tmpdir());
  candidates.push(path.join(process.cwd(), "data"), os.tmpdir());
  for (const dir of candidates) {
    try {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const testFile = path.join(dir, ".write-test");
      fs.writeFileSync(testFile, "1");
      fs.unlinkSync(testFile);
      return dir;
    } catch {
      // 不可写，尝试下一个
    }
  }
  return path.join(process.cwd(), "data");
}

const dataDir = resolveDataDir();
const db = new Database(path.join(dataDir, "resume.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS guestbook (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
  );
  CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visited_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
  );
`);

export function addGuestbook(name, message) {
  const info = db
    .prepare("INSERT INTO guestbook (name, message) VALUES (?, ?)")
    .run(name, message);
  return db.prepare("SELECT * FROM guestbook WHERE id = ?").get(info.lastInsertRowid);
}

export function listGuestbook(limit = 50) {
  return db.prepare("SELECT * FROM guestbook ORDER BY id DESC LIMIT ?").all(limit);
}

export function addVisit() {
  db.prepare("INSERT INTO visits DEFAULT VALUES").run();
}

export function getStats() {
  const totalVisits = db.prepare("SELECT COUNT(*) AS c FROM visits").get().c;
  const todayVisits = db
    .prepare("SELECT COUNT(*) AS c FROM visits WHERE date(visited_at) = date('now', 'localtime')")
    .get().c;
  const guestbookCount = db.prepare("SELECT COUNT(*) AS c FROM guestbook").get().c;
  return { totalVisits, todayVisits, guestbookCount };
}
