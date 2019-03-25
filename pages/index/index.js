//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    seconds: 5,
    si: "",
  },
  onReady: function() {
    console.log(this.route)
    this.countDown();
  },
  countDown() {
    let data = this.data;
    data.si = setInterval(() => {
      this.setData({
        seconds: data.seconds - 1
      })
      if (data.seconds <= 0) {
        this.countEnd();
        this.onUnload();
      }
    }, 1000)
  },
  countEnd() {
    this.onUnload();
    console.log(1);                                      
    wx.navigateTo({
      url: '/pages/home/home'
    });
    
  },
  onUnload() {
    if (this.data.si){
      clearInterval(this.data.si);
      this.data.si = null;
    }
  }

})