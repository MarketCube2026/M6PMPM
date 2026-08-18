# M6PMPM 市场部项目管理系统

这是一个面向市场部日常协同的 PMP 项目管理系统 MVP，采用纯静态单页实现，可直接部署到 GitHub Pages。

## 线上访问

Vercel 生产环境：

https://m6pmpm.vercel.app/

GitHub Pages：

https://marketcube2026.github.io/M6PMPM/

## 功能

- 工作台：项目总览、完成数、风险数、平均进度、近期动态
- 项目台账：搜索、分类筛选、状态筛选、PMP 阶段筛选
- 项目管理：新建、查看详情、编辑、删除
- 看板：按规划中、执行中、风险关注、已完成分组
- 可视化：项目组合、状态、PMP 阶段、负责人资源分布
- 数据：浏览器本地保存、CSV 导出、JSON 备份和导入

## 本地运行

```powershell
npm start
```

然后打开：

http://localhost:8088/

也可以直接双击 `index.html` 使用。

## 数据说明

系统已启用 Supabase 线上数据库，线上地址访问者会读写同一份 `m6_marketing_projects` 项目台账。页面会在网络或数据库不可用时回退到浏览器 `localStorage` 缓存，保证基本可用。

当前版本是团队共享台账模式，未接入登录权限；正式多人协作版本可进一步接入 Supabase Auth、角色权限、审批流和企业微信/飞书/钉钉消息提醒。
