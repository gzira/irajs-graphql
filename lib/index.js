const {GQC} = require('graphql-compose')
const {composeWithMongoose} = require('graphql-compose-mongoose')

exports.buildModel = buildModel
exports.buildModels = buildModels

// 生成 graphQL Schema
function buildModel (model, opts = {}) {
  addQueryRoot(GQC, model, opts)
  const gqlSchema = GQC.buildSchema()
  return gqlSchema
}

// 批量生成 graphQL Schema
function buildModels (models, opts = {}) {
  models.map(m => {
    addQueryRoot(GQC, m, opts)
  })
  const gqlSchema = GQC.buildSchema()
  return gqlSchema
}

// 添加 query 字段
/**
 * 
 * @param {Function} gqc graphql-compose.GQC
 * @param {Function} model mongoose model
 * @param {Object} opts {namespace}
 *  namespace 每个 collection 命名空间，防止多个数据库重名
 *  如果只有一个数据，则不用填，默认是 model.modelName
 */
function addQueryRoot (gqc, model, opts = {}) {
  let modelName = model.modelName
  let cwmOpts = {}
  if (opts.namespace) {
    cwmOpts.name = opts.namespace + modelName
  }
  let tc = composeWithMongoose(model, cwmOpts)
  gqc.rootQuery().addFields({
    [`${modelName}ById`]: tc.getResolver('findById'),
    [`${modelName}ByIds`]: tc.getResolver('findById'),
    [`${modelName}One`]: tc.getResolver('findOne'),
    [`${modelName}`]: tc.getResolver('findMany'),
    [`${modelName}Many`]: tc.getResolver('findMany'),
    [`${modelName}Count`]: tc.getResolver('count'),
    [`${modelName}Connection`]: tc.getResolver('connection'),
    [`${modelName}Pagination`]: tc.getResolver('pagination')
  })
}
