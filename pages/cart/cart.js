// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    cpudata:{},
    boarddata: {},
    boxdata: {},
    memorydata: {},
    gpudata: {},
    ssddata: {},
    diskdata: {},
    fandata: {},
    boxdata: {},
    screendata: {},
    powerdata: {},
    mousedata: {},
    keyboarddata: {},
    ssddata:{},
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'cpudata',
      success: function (res) {
        //console.log(res.data)
        that.setData({
          cpudata: res.data
        })
        var app = getApp();
        app.globalData.list[0].gooddata = that.data.cpudata;
        //that.data.list.push(res.data)

        console.log(app.globalData.list)
        that.setData({
          list: app.globalData.list
        })
        wx.clearStorage({ key: 'cpudata' })
        wx.removeStorage({ key: 'cpudata' })
      },
      fail: function (res) {
        var app = getApp();
        console.log(app.globalData.list)
        that.setData({
          list: app.globalData.list
        })
      }
    }),

    wx.getStorage({
      key: 'boarddata',
      success: function (res) {
        //console.log(res.data)
        that.setData({
          boarddata: res.data
        })
        var app = getApp();
        app.globalData.list[1].gooddata = that.data.boarddata;
        //that.data.list.push(res.data)

        console.log(app.globalData.list)
        that.setData({
          list: app.globalData.list
        })
        wx.clearStorage({ key: 'boarddata' })
        wx.removeStorage({ key: 'boarddata' })
      },
      fail: function (res) {
        var app = getApp();
        console.log(app.globalData.list)
        that.setData({
          list: app.globalData.list
        })
      }
    }),

      wx.getStorage({
        key: 'boxdata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            boxdata: res.data
          })
          var app = getApp();
          app.globalData.list[2].gooddata = that.data.boxdata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'boxdata' })
          wx.removeStorage({ key: 'boxdata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),

      wx.getStorage({
        key: 'diskdata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            diskdata: res.data
          })
          var app = getApp();
          app.globalData.list[3].gooddata = that.data.diskdata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'diskdata' })
          wx.removeStorage({ key: 'diskdata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),

      wx.getStorage({
        key: "ssddata",
        success: function (res) {
          //console.log(res.data)
          that.setData({
            ssddata: res.data
          })
          var app = getApp();
          app.globalData.list[4].gooddata = that.data.ssddata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'ssddata' })
          wx.removeStorage({ key: 'ssddata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),
      wx.getStorage({
        key: 'fandata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            fandata: res.data
          })
          var app = getApp();
          app.globalData.list[5].gooddata = that.data.fandata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'fandata' })
          wx.removeStorage({ key: 'fandata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),
      wx.getStorage({
        key: 'gpudata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            gpudata: res.data
          })
          var app = getApp();
          app.globalData.list[6].gooddata = that.data.gpudata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'gpudata' })
          wx.removeStorage({ key: 'gpudata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),

      wx.getStorage({
        key: 'keyboarddata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            keyboarddata: res.data
          })
          var app = getApp();
          app.globalData.list[7].gooddata = that.data.keyboarddata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'keyboarddata' })
          wx.removeStorage({ key: 'keyboarddata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),
      wx.getStorage({
        key: 'memorydata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            memorydata: res.data
          })
          var app = getApp();
          app.globalData.list[8].gooddata = that.data.memorydata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'memorydata' })
          wx.removeStorage({ key: 'memorydata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),
      wx.getStorage({
        key: 'mousedata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            mousedata: res.data
          })
          var app = getApp();
          app.globalData.list[9].gooddata = that.data.mousedata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'mousedata' })
          wx.removeStorage({ key: 'mousedata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),
      wx.getStorage({
        key: 'powerdata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            powerdata: res.data
          })
          var app = getApp();
          app.globalData.list[10].gooddata = that.data.powerdata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'powerdata' })
          wx.removeStorage({ key: 'powerdata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
      }),

wx.getStorage({
        key: 'screendata',
        success: function (res) {
          //console.log(res.data)
          that.setData({
            screendata: res.data
          })
          var app = getApp();
          app.globalData.list[11].gooddata = that.data.screendata;
          //that.data.list.push(res.data)

          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
          wx.clearStorage({ key: 'screendata' })
          wx.removeStorage({ key: 'screendata' })
        },
        fail: function (res) {
          var app = getApp();
          console.log(app.globalData.list)
          that.setData({
            list: app.globalData.list
          })
        }
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