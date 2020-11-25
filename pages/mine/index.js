const cRequest = require('../../comFunc/cRequest.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imghttp: app.globalData.imghttp,
    com_id: app.globalData.com_id,
    user_id: app.globalData.user_id,
    mytools: null,
    myFortune: null,
    procode: null,
    orderarrs: null,
    redbook: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTempData()
  },
  getTempData() {
    let that = this;
    cRequest.requstGet({
      appName: 'IMall',
      funcName: 'GetTempData',
      data: {
        com_id: that.data.com_id,
        user_id: that.data.user_id,
        version: '',
        isV2: true
      }
    }).then(res => {
      let tempdatas = JSON.parse(res)
      console.log(tempdatas)
      that.setData({
        mytools: tempdatas.mytools,
        myFortune: tempdatas.myFortune,
        procode: tempdatas.procode,
        orderarrs: tempdatas.orderarrs,
        redbook: tempdatas.redbook
      });
    })
  },
})