// 国内镜像版构建：EXPORT_MODE=1 -> next build -> 静态文件输出到 out/
// 静态导出不支持 API 路由，构建前暂时移开 src/app/api，构建后恢复
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
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
  const result = spawnSync("next", ["build"], { stdio: "inherit", shell: true });
  process.exitCode = result.status ?? 1;
} finally {
  if (moved && fs.existsSync(backupDir)) {
    fs.renameSync(backupDir, apiDir);
    console.log("[mirror] 已恢复 API 路由");
  }
}
