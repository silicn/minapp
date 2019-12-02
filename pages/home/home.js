// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSheet:Boolean,
    groups: [
      { text: '确认性操作', value: 1 },
      { text: '取消性操作', type: 'warn', value: 2 }
    ],
    dataSource:[],
    showLoading:Boolean
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  tapAction:function(){
    this.setData({
      showSheet:true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.requestData();
  },

  requestData: function(){
    this.setData({
      showLoading:true
    })
    var self = this;
    wx.request({
      url:"https://www.ratjin.com/rat/topic/list",
      success(res){
        console.log(res.data.list);
        self.setData({
          dataSource:res.data.list,
          showLoading:false
        })
      }
    })
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