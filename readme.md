# koa-typescript-practice

### 项目构架

基于[koa](https://koajs.com)、[react](https://reactjs.org)构建，支持[mysql](https://www.npmjs.com/package/mysql)、[redis](https://www.npmjs.com/package/redis)查询，依赖[Node.js](https://nodejs.org)环境。

#### 项目地址

https://github.com/meizikeai/koa-typescript-practice.git

#### 项目结构

| 路径          | 描述               | 详情 |
| ------------- | ------------------ | ---- |
| client        | react.js           | --   |
| pm2           | pm2.keymetrics.io  | --   |
| public        | koa-static         | --   |
| server        | koa.js / typescriptlang.org   | --   |
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

#### 代码提交

使用了@commitlint/cli / @commitlint/config-conventional的勾子，支持以下方式提交

  + feat[特性]: 新增feature
  + fix[修复]: 修复bug     
  + docs[文档]: 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
  + style[格式]: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
  + refactor[重构]: 代码重构，没有加新功能或者修复bug
  + perf[优化]: 优化相关，比如提升性能、体验
  + test[测试]: 测试用例，包括单元测试、集成测试等
  + chore[工具]: 改变构建流程、或者增加依赖库、工具等
  + revert[回滚]: 回滚到上一个版本

#### 监控支持

使用 elastic-apm-node 对项目进行性能监控，具体见 [Get started with Koa](https://www.elastic.co/guide/en/apm/agent/nodejs/current/koa.html)
