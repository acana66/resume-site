// 简历数据集中管理：改简历只改这个文件，页面会自动更新
export const resume = {
  name: "覃杰",
  title: "计算机应用专业学生 · 求职 AI Coding / 网络运维 / 前端开发实习",
  location: "广西南宁市",
  school: "职业技术学院（三年制）",
  major: "计算机应用",
  degree: "大专",
  period: "2024.07 — 2027.06（预计毕业）",
  email: "aacanaaa@outlook.com",
  intention: "AI Coding 开发 / 网络运维 / 前端开发（实习）",
  tags: ["网络运维", "AI Coding", "全栈开发", "codex"],
  evaluation: [
    "技术扎实、动手能力强：能独立完成从网络搭建到前后端开发的实训任务，具备快速上手能力。",
    "学习敏锐、抗压性好：习惯通过查阅官方文档和 API 解决问题，能适应技术学习和项目开发的节奏。",
    "踏实稳重、责任心强：做事细心有耐心，注重流程和规范，愿意从基础岗位做起，在实战中快速成长。",
  ],
};

export const skills = [
  {
    title: "网络与系统运维",
    description: "熟练配置 H3C 企业级网络设备（VLAN、静态路由、OSPF），能搭建多设备互联网络并排查连通性故障；熟练操作 Linux 系统，配置 DHCP/DNS/Web 服务，会编写 Shell 脚本处理日常运维任务；熟悉 OpenStack 云平台。",
  },
  {
    title: "前端开发",
    description: "掌握 HTML/CSS/JavaScript 基础，能开发响应式页面；有微信小程序开发经验（商品列表、购物车、下单流程）。",
  },
  {
    title: "数据库",
    description: "熟悉 MySQL，能完成表结构设计、增删改查与前后端数据交互；正在使用 SQLite 开发全栈作品。",
  },
  {
    title: "AI 工具与智能体",
    description: "使用扣子（Coze）搭建过网络运维知识库智能体（人设、工作流、知识库、插件）；使用 Trae、Codex 等 AI 编程工具辅助开发，能读懂、修改、调试 AI 生成的代码。",
  },
];

export const projects = [
  {
    title: "AI 智能体搭建实践——网络运维知识库助手",
    tag: "AI 方向",
    description: "基于扣子（Coze）智能体构建系统，搭建面向网络运维场景的知识库助手。",
    duties: [
      "设计智能体人设与回复逻辑，整理常见网络故障处理方法形成知识库",
      "通过工作流实现按步骤引导排查，并接入插件扩展能力",
      "产出可用助手，理解智能体构建核心流程，加深对 AI 工具应用的体会",
    ],
  },
  {
    title: "个人简历网站（resume-site）",
    tag: "全栈 · AI Coding",
    description: "用 Codex 等 AI Coding 工具独立完成的简历作品集网站，本项目。",
    duties: [
      "Next.js 全栈：前端简历展示 + 后端接口 + SQLite 数据库",
      "功能：访客留言板、访问统计，含 README / AGENTS.md / Git 提交规范",
      "掌握用 AI 工具从 0 到 1 交付完整产品并部署上线的流程",
    ],
  },
  {
    title: "微信小程序购物平台（课程实训）",
    description: "基于微信小程序开发一个简易购物平台。",
    duties: [
      "负责商品列表、商品详情、购物车、下单等页面开发",
      "实现前端与后端数据交互，使用 MySQL 存储商品和订单数据",
      "完成功能测试，跑通用户登录、商品浏览、加购下单的完整流程",
    ],
  },
  {
    title: "图书管理系统（AI 辅助开发 · 课程实训）",
    tag: "AI 辅助",
    description: "使用 Trae 等 AI 编程工具辅助开发一个简单的图书管理系统。",
    duties: [
      "结合 Java Web 与 MySQL 完成图书增删改查、借还登记等功能的逻辑设计与数据库设计",
      "通过 AI 工具辅助生成、调试代码，体会到 AI 是提效工具、理解需求和代码逻辑才是根本",
    ],
  },
  {
    title: "网络组建与故障排查（课程实训）",
    tag: "网络",
    description: "基于 H3C 企业级设备的网络实训项目。",
    duties: [
      "配置 VLAN 划分、端口、静态路由与 OSPF 动态路由，搭建多设备互联网络",
      "独立排查连通性故障，完成网络拓扑验证",
    ],
  },
];

export const education = [
  {
    school: "职业技术学院（三年制）",
    major: "计算机应用",
    degree: "大专（2027 届）",
    period: "2024.07 — 2027.06",
  },
];
