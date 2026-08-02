import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "覃杰 · 个人简历网站",
  description: "覃杰的个人简历与作品集网站：AI Coding、网络运维、全栈开发方向。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
          <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-indigo-700">
              覃杰 · 简历
            </Link>
            <div className="flex gap-5 text-sm font-medium">
              <Link href="/" className="hover:text-indigo-600">首页</Link>
              <Link href="/guestbook" className="hover:text-indigo-600">留言板</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          覃杰 © {new Date().getFullYear()} · 使用 AI Coding 工具（Codex）构建
        </footer>
      </body>
    </html>
  );
}
