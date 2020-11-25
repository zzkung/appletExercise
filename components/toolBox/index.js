const app = getApp();

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    toolObj: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imghost: app.globalData.imghost
  },

  methods: {
    scan(e) {
      this.triggerEvent('scan',{id:e.currentTarget.dataset.id},{});
    }
  }
})