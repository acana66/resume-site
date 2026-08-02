# AGENTS.md
|IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning for any project tasks.
|Project:resume-site
|Goal:简历网站全栈应用|前端展示|留言板|访问统计|可作为 AI Coding 作品集上线.
|Stack:Next.js(App Router,JS)|Tailwind CSS v4|better-sqlite3|部署 Vercel
|Commands:dev=`npm run dev`|build=`npm run build`|start=`npm run start`|lint=无
|Data:简历内容在 `src/lib/resume-data.js`|改数据只改该文件|页面不要硬编码内容
|DB:src/lib/db.js|SQLite 文件 `data/resume.db`|本地自动建表|API 在 `src/app/api`
|Rules:'use client' 仅客户端组件需要|组件小而单一|界面文案用中文|不用外链图片
|Verify:提交前必须 `npm run build` 通过|dev server 本地验证页面
|Git:提交信息用中文|一次提交一个功能点
