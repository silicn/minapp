//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '真享花',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show:false,
    showActionsheet:false,
    groups: [
      { text: '示例菜单', value: 1 },
      { text: '示例菜单', value: 2 },
      { text: '负向菜单', type: 'warn', value: 3 }
  ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../home/home'
    })
  },

  tiqianhuankuan:function(){
    console.log("dianjai");
    this.setData({
      showActionsheet:true
    })
    
  },
  close: function () {
    this.setData({
        showActionsheet: false
    })
},
btnClick(e) {
    console.log(e)
    this.close()
},

  gotoSee:function(){
    wx.showToast({
      title: '去看看',
      icon: 'success',
      duration: 3000
  })
  },
  goToMineBill:function(){
    wx.navigateTo({
      url:"../repayment/repayment"
    })
  },

  freeOpen:function(){
   wx.navigateTo({
     url:"../opencard/opencard"
   })
  },

  onRefresh:function(){

  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
