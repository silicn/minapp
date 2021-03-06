// pages/mine/mine.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    userInfo:{},
    hasUserinfo:false,
    showSheet:false,
    actions:[
      {text:"拍照",value:1},
      {text:"从相册中选取",value:2}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserinfo:true
      })
    }else{
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
  //  去登陆
  showToast:function(){
    wx.showToast({
      title: '登录完成',
      icon: 'success',
      duration: 3000
  });
  },

  changeAvatar:function(){
    this.setData({
      showSheet:true
    })
  },
  closesheet:function(){
    this.setData({
      showSheet:false
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})