/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT_MODE === "1";
const isGhPages = process.env.GH_PAGES === "1";

const nextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  // 国内镜像/Pages 版：EXPORT_MODE=1 时构建纯静态文件
  // GitHub Pages 部署在 /resume-site/ 子路径，需要 basePath
  ...(isExport
    ? {
        output: "export",
        ...(isGhPages ? { basePath: "/resume-site" } : {}),
      }
    : {}),
};
export default nextConfig;
