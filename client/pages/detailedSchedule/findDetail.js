const date = new Date()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    adate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    atime: date.getHours() + ':' + date.getMinutes(),
    bdate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    btime: date.getHours() + ':' + date.getMinutes(),
    cdate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    ctime: date.getHours() + ':' + date.getMinutes(),
    places: [{ name: "南湖", id: 0 }, { name: "浑南", id: 1 }],
  },

  bindDateChange: function (e) {
    if (e.target.id == 1) {
      this.setData({ adate: e.detail.value, })
    }
    else if (e.target.id == 2) {
      this.setData({ bdate: e.detail.value, })
    }
    else {
      this.setData({ cdate: e.detail.value, })
    }
  },

  bindTimeChange: function (e) {
    if (e.target.id == 1) {
      this.setData({ atime: e.detail.value, })
    }
    else if (e.target.id == 2) {
      this.setData({ btime: e.detail.value, })
    }
    else {
      this.setData({ ctime: e.detail.value, })
    }
  },

  selectDestination: function (e) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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