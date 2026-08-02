/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  // 国内镜像版：EXPORT_MODE=1 时构建纯静态文件（无后端接口）
  ...(process.env.EXPORT_MODE === "1" ? { output: "export" } : {}),
};
export default nextConfig;
