const cEnv = require('comFunc/env.js')

App({
  onLaunch: function () {
    let that = this
    this.globalData.com_id = cEnv.comp_id
    try {
      const res = wx.getSystemInfoSync()
      console.log('env', res)
      that.globalData.urlhost = res.platform == "devtools" ? cEnv.host_dev : cEnv.host_real
      that.globalData.platform = res.platform == "devtools" ? 'devtools' : res.platform
      console.log(that.globalData)
    } catch (e) {}
  },
  globalData: {
    env: cEnv.env,
    com_id: '',
    platform: '',
    urlhost: '',
    user_id: null,
    imghost: cEnv.imghost,
    imghttp: cEnv.imghttp,
  }
})