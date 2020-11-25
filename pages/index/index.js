Page({
  data: {
      background: ['green', 'red', 'yellow'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
      swipers:[{
          image:"/assets/jd1.jpg"
      },{
          image:"/assets/jd2.jpg"
      },{
          image:"/assets/jd3.jpg"
      },{
          image:"/assets/jd4.jpg"
      },{
          image:"/assets/jd5.jpg"
      }
      ],
      logos:[{
          image:"/assets/logo1.png",
          title:"京东超市"
      },{
          image:"/assets/logo2.png",
          title:"全球购"
      },{
          image:"/assets/logo3.png",
          title:"服装城"
      },{
          image:"/assets/logo4.png",
          title:"京东生鲜"
      },{
          image:"/assets/logo5.png",
          title:"京东到家"
      },{
          image:"/assets/logo6.png",
          title:"充值中心"
      },{
          image:"/assets/logo7.png",
          title:"京东金融"
      },{
          image:"/assets/logo8.png",
          title:"物流查询"
      },{
          image:"/assets/logo9.png",
          title:"领券"
      },{
          image:"/assets/logo10.png",
          title:"我的关注"
      }
      ],
      quicks:[{
          image:"/assets/quick1.jpg",
          price:"￥123"
      },{
          image:"/assets/quick2.jpg",
          price:"￥124"
      },{
          image:"/assets/quick3.jpg",
          price:"￥125"
      },{
          image:"/assets/quick4.jpg",
          price:"￥126"
      },{
          image:"/assets/quick5.jpg",
          price:"￥127"
      },{
          image:"/assets/quick6.jpg",
          price:"￥128"
      }
      ]
  },
  changeIndicatorDots: function (e) {
      this.setData({
          indicatorDots: !this.data.indicatorDots
      })
  },
  changeVertical: function (e) {
      this.setData({
          vertical: !this.data.vertical
      })
  },
  changeAutoplay: function (e) {
      this.setData({
          autoplay: !this.data.autoplay
      })
  },
  intervalChange: function (e) {
      this.setData({
          interval: e.detail.value
      })
  },
  durationChange: function (e) {
      this.setData({
          duration: e.detail.value
      })
  }
})