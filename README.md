# irajs-graphql
在 koa + mongoose 架构里，快速试用 graphQL 服务。
主要整合了 `graphql-compose` 与 `graphql-compose-mongoose`, 生成 graphQL schema。

在小于 v1.0.0 实验版本里：使用 irajs-graphql，你只要编写 10 行以内的代码即可。

```
npm i irajs-graphql
```
## 提示
当前版本 v0.2.0，不宜用于生产环境。更多用于实验与探索。

## 尝试解决问题
 - 能快速搭建 graphql 服务, 而不需要犹豫与编写过多的代码。（请看示例）
 - 尝试以一人之力，建设与维护一个公共的 DATA 服务。
 - 借力 graphiql 加速客户端开发, 不用写 api 文档， 不用写 api 文档，不用写 api 文档。
 
## 运行 example
安装： `npm i`

运行： `npm run example`

主要代码如下：
graphql schema
```javascript
// example/graphql/index.js
const {buildModels} = require('../../lib/')
const Model = require('../model/')

const models = Object.keys(Model).map(k => Model[k])

exports.GqlSchema = buildModels(models)
```
router
```javascript
// example/router.js
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
const {GqlSchema} = require('./graphql/')
const router = require('koa-router')({
  prefix: '/api/v1'
})

// graphQL 服务
router.get('/graphql', graphqlKoa({schema: GqlSchema}))
router.post('/graphql', graphqlKoa({schema: GqlSchema}))
router.get('/graphiql', graphiqlKoa({endpointURL: '/api/v1/graphql'}))

module.exports = router
```

访问 http://localhost:11301/api/v1/graphiql, 可以看到 graphiql 的操作界面
![](images/2018-01-18-01-13-25.png)

## TODO
- [ ] 编写 test
- [x] 发布 npm package
- [ ] 编写更好的文档
- [ ] 封装易用的客户端
- [ ] 优化后端取数

## LICENSE
MIT