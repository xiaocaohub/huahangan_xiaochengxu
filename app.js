var axios = require("./utils/axios.js");
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  wxLoginFn: function () {
    var _this = this;
    wx.login({
      success: res => {
        
      }
    })
  },
  globalData: {
    userInfo: null,
    
     host: 'http://192.168.110.62:8090',
    // host: 'https://wxc.hosian.com',
    hostUpFileImg: 'https://res.hosian.com/'
  }
})
