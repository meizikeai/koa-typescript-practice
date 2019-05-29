# koa-typescript-practice

### KOA框架原型

基于Node.js(v8.11.2)、npm(5.6.0)、Koa(2.7.0)、MySQL、React(16.8.6)开发，使用来创建项目原型〜

#### 项目地址
https://github.com/meizikeai/koa-typescript-practice.git

#### 项目结构

| 路径           | 描述        | 详情 |
| -------------- | ----------- | ---- |
| build          | 生成目录    | -    |
| client         | 客户端目录  | -    |
| pm2            | pm2配置目录 | -    |
| public         | 静态目录    | -    |
| server         | 服务端目录  | -    |
| task           | 任务目录    | -    |
| views          | 静态目录    | -    |
| webpack        | webpack     | -    |
| .babelrc       | Babel       | -    |
| .eslintrc.json | ESLint      | -    |
| .gitignore     | Git         | -    |
| .gitlab-ci.yml | CI/CD       | -    |
| package.json   | package     | -    |
| tsconfig.json  | TypeScript  | -    |


#### 开发环境

开发环境需要依赖ESLint，请使用支持它的编辑器，如[开发神器](https://code.visualstudio.com/)

- 克隆项目
  - `$ git clone https://github.com/meizikeai/koa-typescript-practice.git`

- 安装依赖
  - `$ cd koa-typescript-practice && npm i`

- 启动项目
  - `$ npm run test           // 启动项目-连接测试环境的数据库 - 开发使用`
  - `$ npm run start          // 启动项目-测试环境`

- 测试地址
  - http://localhost:5000
  - http://localhost:5000/demo
  - http://localhost:5000/403
  - http://localhost:5000/404
  - http://localhost:5000/json
  - http://localhost:5000/string

