import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

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
