
module.exports = {
  attributes: {
    username: { type: String, index: true, comment: '用户登陆名' },
    phone: { type: String, index: true, comment: '用户手机' },
    email: { type: String, index: true, comment: '用户 email' },
    realName: { type: String, comment: '用户真实姓名' },
    role: { type: Number, default: 1, comment: '用户角色' },
    encryptedPassword: { type: String, comment: '密码' },
    merchantId: { type: String, comment: '商户ID' },
    status: {type: String, default: 'pending', comment: '用户状态'}
  },
  statics: {},
  methods: {},
  setSchema (schema) {
  },
  name: 'operators'
}
