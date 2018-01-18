const {buildModels} = require('../../lib/')
const Model = require('../model/')

const models = Object.keys(Model).map(k => Model[k])

exports.GqlSchema = buildModels(models)
