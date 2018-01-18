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
