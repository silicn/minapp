//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '乌龟小土豆',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../home/home'
    })
  },

  tiqianhuankuan:function(){
    if (this.data.show) {
      this.setData({
        show:false
      })
    }else{
      this.setData({
        show:true
      })
    }
    
  },

  gotoSee:function(){
    wx.showToast({
      title: '去看看',
      icon: 'success',
      duration: 3000
  })
  },
  goToMineBill:function(){
    wx.showToast({
      title: '我的账单',
      icon: 'success',
      duration: 3000
  })
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