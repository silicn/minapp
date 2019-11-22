// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memSize:"20.0M",
    showDialog: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  openDialog: function () {
    this.setData({
        istrue: true
    })
},
closeDialog: function () {
    this.setData({
        istrue: false
    })
},

  cleanMem:function(){
    wx.showToast({
      title: '缓存清除成功',
      icon: 'success',
      duration: 3000
    })

    this.setData({
      memSize:"0.0M"
    })
  },

  logout:function(){
    // export.sho
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