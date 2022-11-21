# koa-typescript-practice

### 项目构架

基于[koa](https://koajs.com)、[react](https://reactjs.org)构建，支持[mysql](https://www.npmjs.com/package/mysql)、[redis](https://www.npmjs.com/package/redis)查询，依赖[Node.js](https://nodejs.org)环境。

#### 项目地址

https://github.com/meizikeai/koa-typescript-practice.git

#### 项目结构

| 路径          | 描述               | 详情 |
|---------------|--------------------|------|
| client        | react.js           | --   |
| pm2           | pm2.keymetrics.io  | --   |
| public        | koa-static         | --   |
| server        | koa.js             | --   |
| views         | koa-views          | --   |
| package.json  | package.json       | --   |
| tsconfig.json | typescriptlang.org | --   |

#### 开发环境

  + 克隆项目 - `$ git clone https://github.com/meizikeai/koa-typescript-practice.git`
  + 安装依赖 - `$ cd koa-typescript-practice && npm i`
  + 启动项目 - `$ npm run start`

开发依赖[eslint.org](https://eslint.org)，请使用支持它的编辑器。推荐[Visual Studio Code](https://code.visualstudio.com)编辑器。

#### 访问地址

  + http://127.0.0.1:3000
  + http://127.0.0.1:3000/demo
  + http://127.0.0.1:3000/json
  + http://127.0.0.1:3000/string

#### 监控支持

使用 elastic-apm-node 对项目进行链路追踪，建议测试服使用！
具体见 [Get started with Koa](https://www.elastic.co/guide/en/apm/agent/nodejs/current/koa.html)
