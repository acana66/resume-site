#  个人简历网站（resume-site）

一个用 **AI Coding 工具（Codex）** 全栈开发的作品集网站：前端简历展示 + 访客留言板 + 访问统计。

## 线上地址

| 入口 | 链接 | 说明 |
|---|---|---|
| 主站（完整版） | https://resume-site-ebon-six.vercel.app | 简历 + 留言板 + 访问统计（海外节点） |
| 国内直连（推荐） | https://resume-site-d7ghrz7w3b2ff6a84-1462520728.tcloudbaseapp.com | 腾讯云托管，国内免 VPN 直连，GitHub 推送自动更新 |
| GitHub Pages | https://acana66.github.io/resume-site | 仓库托管版，静态版 |

## 技术栈

- 前端 & 后端：Next.js（App Router，JavaScript）
- 样式：Tailwind CSS v4
- 数据库：better-sqlite3（本地文件型，零安装）
- 部署：Vercel（主站）/ 腾讯云 CloudBase（国内直连，GitHub Actions 自动部署）/ GitHub Pages（仓库版）

## 本地运行

```bash
npm install
npm run dev
# 打开 http://localhost:3000
```

## 构建命令

```bash
npm run build          # 主站完整版（含后端接口）
npm run build:mirror   # 国内静态镜像版 -> out/
npm run build:mirror:gh # GitHub Pages 版（/resume-site 子路径）-> out-gh/
```

## 功能

- `/` 首页：简历展示（基本信息 / 专业技能 / 项目经历 / 教育背景）
- `/guestbook` 留言板：访客留言，数据存 SQLite
- `/api/guestbook` 留言接口（GET 列表 / POST 提交）
- `/api/visits` 访问统计接口（GET 统计 / POST 记录一次访问）

## 目录结构

```
src/
├── app/            # 页面与 API 路由
│   ├── page.js     # 首页（简历展示）
│   ├── guestbook/  # 留言板页
│   └── api/        # 后端接口
├── components/     # 组件
└── lib/
    ├── db.js       # 数据库封装
    └── resume-data.js  # 简历内容（改简历改这里）
data/resume.db      # SQLite 数据库（运行时生成，不入库）
```



- 完整全栈闭环：前端页面 → 后端接口 → 数据库
- 多环境部署：Vercel / 腾讯云 COS / GitHub Pages
- 工程化：Git 提交规范、README、AGENTS.md 规则、部署说明
- AI Coding 工作流：用 Codex 从 0 到 1 构建，人工审查与调整关键逻辑
