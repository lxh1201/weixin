const date = new Date()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    time: "上午",
    days: ["今天", "明天", "后天"],
    times: ["上午", "下午", "晚上"],
    places: [{ name: "南湖", id: 0, checked: true, }, { name: "浑南", id: 1, checked: false, }],
  },

  selectDate: function (e) {
    const val = e.detail.value
    var curDate = new Date();
    var date = new Date((curDate / 1000 + 86400 * val[0]) * 1000)
    var tmp_time
    if (val[1] == 0) {
      tmp_time = "上午"
    }
    else if (val[1] == 1) {
      tmp_time = "下午"
    }
    else {
      tmp_time = "晚上"
    }
    this.setData({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      time: tmp_time,
    })
  },

  selectDestination: function (e) {
    console.log(e.detail.value)
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