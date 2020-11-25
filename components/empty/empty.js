/**
 * 空状态组件
 */

const app = getApp();

Component({

  options: {
    addGlobalClass: true,
  },

  properties: {
    image: {
      type: String,
      value: app.globalData.imghttp + 'icon_empty.png'
    },
    description: {
      type: String,
      value: '暂无数据'
    },
    descColor: {
      type: String,
      value: '#666666'
    },
    link: { // 按钮跳转路径, hasButton为false可不填写
      type: String,
      value: ''
    },
    linkType: {
      type: String,
      value: 'navigate'
    },
    hasButton: { // 是否显示按钮
      type: Boolean,
      value: false
    },
    buttonText: {
      type: String,
      value: '去查看'
    },
    buttonBg: {
      type: String,
      value: 'var(--pureYellow)'
    }
  }

})