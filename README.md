# monitor-theme-ume

[monitor](https://github.com/monitor-probe/monitor) 的状态页主题。白纸、梅绿、明朝站名。仪表盘结构沿用 [默认主题](https://github.com/monitor-probe/monitor-theme-default)。

## 安装

```bash
npm ci
npm run build
```

把 `theme.json` 和 `dist/` 放进 hub 的主题目录，目录名必须是 `ume`：

```text
<themes-dir>/ume/
├── theme.json
└── dist/
    └── index.html
```

在后台「主题」页切换，不用重启。

开发时 Vite 把 `/api` 和 WebSocket 代理到本机 hub：

```bash
monitor-hub --listen 127.0.0.1:9911 --db /tmp/monitor.db --site http://127.0.0.1:9911
npm run dev
```

提交前：`npm run build && npm run lint && npm test`。

## 接口

主题是静态页面，只读这些同源接口：

- `GET /api/me` — 站点名、登录状态、公开页开关
- `GET /api/nodes` — 节点、实时指标、累计流量
- `GET /api/nodes/{id}/metrics` — 历史指标和延迟
- `GET /api/ws` — 每 2 秒一次节点快照

窗口丢包率用响应里的 `loss`，不要自己平均样本行里的桶百分比。字段以 hub 的 `src/api.rs` 为准。详情页路径是 `/node/{id}`。

## 许可

MIT。仪表盘逻辑与图表来自 monitor-theme-default，同样 MIT。
