// 镜像版构建：node scripts/build-mirror.mjs [gh]
// gh 参数 -> GitHub Pages 版（basePath=/resume-site），产物输出到 out-gh/
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const gh = process.argv[2] === "gh";
const apiDir = path.join(root, "src", "app", "api");
const backupDir = path.join(root, ".next", "api-backup");
let moved = false;

try {
  if (fs.existsSync(apiDir)) {
    fs.mkdirSync(path.dirname(backupDir), { recursive: true });
    fs.renameSync(apiDir, backupDir);
    moved = true;
    console.log("[mirror] 已暂时移开 API 路由");
  }
  process.env.EXPORT_MODE = "1";
  if (gh) process.env.GH_PAGES = "1";
  const result = spawnSync("next", ["build"], { stdio: "inherit", shell: true });
  if (result.status === 0 && gh) {
    const out = path.join(root, "out");
    const outGh = path.join(root, "out-gh");
    if (fs.existsSync(outGh)) fs.rmSync(outGh, { recursive: true, force: true });
    fs.renameSync(out, outGh);
    console.log("[mirror] GitHub Pages 版已输出到 out-gh/");
  }
  process.exitCode = result.status ?? 1;
} finally {
  if (moved && fs.existsSync(backupDir)) {
    fs.renameSync(backupDir, apiDir);
    console.log("[mirror] 已恢复 API 路由");
  }
}
