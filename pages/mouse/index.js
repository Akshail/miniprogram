// pages/mouse/index.js
var startPoint;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    buttonTop: 1,
    buttonLeft: 1,
    windowHeight: '',
    windowWidth: '',
    firsttaptime: 0,
    "mousedata": [{
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/714/ceK6wce2yFcsk.jpg",
      "price": "999",
      "goodname": "罗技G903无线鼠标",
      "maxdpi": "12000dpi",
      "buttonnum": "11个",
      "way": "有线，无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4870951.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/134_120x90/708/cewE1eGL0rJk.jpg",
      "price": "329",
      "goodname": "罗技G502游戏鼠标",
      "maxdpi": "12000dpi",
      "buttonnum": "11个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27027877560.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/37_120x90/829/ceoQjbhPJPwnc.jpg",
      "price": "139",
      "goodname": "Razer 地狱狂蛇鼠标",
      "maxdpi": "3500dpi",
      "buttonnum": "3个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20802505994.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/930/ceVWlrTXYnLQU.jpg",
      "price": "329",
      "goodname": "雷柏VT950电竞游戏鼠标",
      "maxdpi": "16000dpi",
      "buttonnum": "11个",
      "way": "有线，无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8133273.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/177_120x90/736/ce1DRAJiNHPmY.jpg",
      "price": "119",
      "goodname": "罗技G102游戏鼠标",
      "maxdpi": "6000dpi",
      "buttonnum": "6个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4155894.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/139_120x90/395/ceuGC6Q2Os8A.jpg",
      "price": "269",
      "goodname": "罗技G402游戏鼠标",
      "maxdpi": "4000dpi",
      "buttonnum": "8个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1192014.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/61/ceBPRih44WWM.jpg",
      "price": "429",
      "goodname": "Razer 锐蝮蛇竞技版游戏鼠标",
      "maxdpi": "16000dpi",
      "buttonnum": "9个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4991110.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/271/ceP9ppzLsak.jpg",
      "price": "109",
      "goodname": "雷柏V302幻彩RGB电竞游戏鼠标",
      "maxdpi": "7000dpi",
      "buttonnum": "8个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4685456.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/177_120x90/512/ceWC5ZBVJ0Ps.jpg",
      "price": "349",
      "goodname": "罗技G403有线版游戏鼠标",
      "maxdpi": "12000dpi",
      "buttonnum": "6个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3777926.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/690/ceeF1AmArguMU.jpg",
      "price": "649",
      "goodname": "罗技G703无线鼠标",
      "maxdpi": "12000dpi",
      "buttonnum": "6个",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/16887509120.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/804/cezsxBEFD3lI.jpg",
      "price": "399",
      "goodname": "达尔优EM945游戏有线鼠标",
      "maxdpi": "16000dpi",
      "buttonnum": "9个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/38369744840.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/142_120x90/607/ceScrz1nz5P6.jpg",
      "price": "99",
      "goodname": "罗技M280无线鼠标",
      "maxdpi": "1000dpi",
      "buttonnum": "3个",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1796974.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/870/ce2fAk2Tzywh2.jpg",
      "price": "209",
      "goodname": "达尔优EM925 PRO游戏鼠标",
      "maxdpi": "10800dpi",
      "buttonnum": "7个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4415951.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/144_120x90/332/ceROZsT9f9Vwc.jpg",
      "price": "169",
      "goodname": "罗技G302游戏鼠标",
      "maxdpi": "4000dpi",
      "buttonnum": "6个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6974494.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/835/ceHoDB0qFjEY.jpg",
      "price": "399",
      "goodname": "罗技G502 HERO游戏鼠标",
      "maxdpi": "16000dpi",
      "buttonnum": "11个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41745318610.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/178_120x90/385/ceOsXMIK75XSU.jpg",
      "price": "219",
      "goodname": "达尔优EM925钻石版游戏鼠标",
      "maxdpi": "10800dpi",
      "buttonnum": "7个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13278831994.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/118_120x90/521/ceOyabSRS0CSo.jpg",
      "price": "535",
      "goodname": "罗技G602无线游戏鼠标",
      "maxdpi": "2500dpi",
      "buttonnum": "11个",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1992711957.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/123_120x90/106/ceHD9z7JcMuls.jpg",
      "price": "199",
      "goodname": "罗技M705鼠标",
      "maxdpi": "1000dpi",
      "buttonnum": "6个",
      "way": "无线（多连）",
      "kind": "激光",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10782710039.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/123_120x90/115/ceaAJhXc6C3UY.jpg",
      "price": "129",
      "goodname": "罗技M545鼠标",
      "maxdpi": "1000dpi",
      "buttonnum": "5个",
      "way": "无线（多连）",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12334407209.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/172_120x90/324/ceuXzgwtx9Jk.jpg",
      "price": "719",
      "goodname": "罗技G900 Chaos Spectrum游戏鼠标",
      "maxdpi": "12000dpi",
      "buttonnum": "11个",
      "way": "有线，无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12300011325.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/931/cePuAFIxv7r9w.jpg",
      "price": "99",
      "goodname": "戴尔WM326无线鼠标",
      "maxdpi": "1600dpi",
      "buttonnum": "5个",
      "way": "无线（蓝牙）",
      "kind": "激光",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10623418375.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/607/celyaZCiG8Lwg.jpg",
      "price": "79",
      "goodname": "雷柏M500多模式无线鼠标",
      "maxdpi": "1600dpi",
      "buttonnum": "7个",
      "way": "无线（蓝牙）",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7386565.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/187_120x90/586/cehiMOZUBFi.jpg",
      "price": "379",
      "goodname": "明基EC1-A游戏鼠标",
      "maxdpi": "3200dpi",
      "buttonnum": "5个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2744238.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/375/ceHMpCSyau3P6.jpg",
      "price": "178",
      "goodname": "达尔优EM915荆棘版游戏有线鼠标 黑色",
      "maxdpi": "6000dpi",
      "buttonnum": "7个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31544378652.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/144_120x90/639/ceVVMexwkzzsI.jpg",
      "price": "158",
      "goodname": "达尔优牧马人白色版游戏鼠标",
      "maxdpi": "4000dpi",
      "buttonnum": "7个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13179511185.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/49_120x90/196/cePv7peTUhveg.jpg",
      "price": "30",
      "goodname": "摩天手G52无线蓝光鼠标",
      "maxdpi": "1600dpi",
      "buttonnum": "6个",
      "way": "无线",
      "kind": "光电（蓝光）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/355215.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/168_120x90/68/ceFwEYx1CfCpk.jpg",
      "price": "59",
      "goodname": "联想N1901A无线鼠标",
      "maxdpi": "1000dpi",
      "buttonnum": "3个",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12296961936.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/499/ceZTNzFORrieo.jpg",
      "price": "79",
      "goodname": "E元素Z-7000雷峰游戏鼠标",
      "maxdpi": "2400dpi",
      "buttonnum": "6个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13617836724.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/95_120x90/910/cePsz7mdVn0E6.jpg",
      "price": "29",
      "goodname": "优派MW291鼠标",
      "maxdpi": "1000dpi",
      "buttonnum": "3个",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1013101.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/164_120x90/284/ce5aXZzde70rI.jpg",
      "price": "70",
      "goodname": "华硕WT425无线静音鼠标",
      "maxdpi": "1600dpi",
      "buttonnum": "6个",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1714753.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/153_120x90/902/ceROHOm3OdLMk.jpg",
      "price": "189",
      "goodname": "血手幽灵T70终结者光微动游戏鼠标",
      "maxdpi": "4000dpi",
      "buttonnum": "9个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1341282.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/164_120x90/284/ce5aXZzde70rI.jpg",
      "price": "70",
      "goodname": "华硕WT425无线静音鼠标",
      "maxdpi": "1600dpi",
      "buttonnum": "6个",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1714753.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/178_120x90/410/cec4N7s67wJ2g.jpg",
      "price": "149",
      "goodname": "雷柏V26S幻彩RGB电竞游戏鼠标",
      "maxdpi": "7000dpi",
      "buttonnum": "7个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3724959.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/179_120x90/846/cebA7ksDQPncQ.jpg",
      "price": "249",
      "goodname": "达尔优EM915火影忍者版游戏鼠标",
      "maxdpi": "4000dpi",
      "buttonnum": "7个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13179511183.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/80_120x90/645/ceLf22MuogVIY.jpg",
      "price": "49",
      "goodname": "联想M40A鼠标",
      "maxdpi": "1000dpi",
      "buttonnum": "3个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11093844035.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/178_120x90/737/ceDlgUNbzKvPk.jpg",
      "price": "29",
      "goodname": "飞利浦SPK7101有线鼠标",
      "maxdpi": "1000dpi",
      "buttonnum": "3个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2963554.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/255/cehMNe35WHifQ.jpg",
      "price": "219",
      "goodname": "血手幽灵J90双枪侠RGB彩漫游戏鼠标",
      "maxdpi": "5000dpi",
      "buttonnum": "12个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/36934066871.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/772/cexo4j67QssM.jpg",
      "price": "128",
      "goodname": "爱国者Q34",
      "maxdpi": "暂无数据",
      "buttonnum": "暂无数据",
      "way": "无线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18777378610.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/214/ceMBrdsjXpI.jpg",
      "price": "179",
      "goodname": "双飞燕J91",
      "maxdpi": "4000dpi",
      "buttonnum": "8个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1373994.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/182_120x90/758/ce88KTCO3OUQ.jpg",
      "price": "119",
      "goodname": "多彩M618 Plus幻彩版垂直鼠标",
      "maxdpi": "4000dpi",
      "buttonnum": "6个",
      "way": "有线",
      "kind": "光电",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4230569.html"
    },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 屏幕宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
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

  },

 handle: function (e) {
    var $data = e.currentTarget.dataset;
    //console.log($data.bean)
    //console.log($data.bean.name)
    //$data.bean.selectnum +=1;
    wx.setStorage({
      key: "mousedata",
      data: $data.bean
    })
    // console.log($data.bean)
   wx.showToast({
     title: '加入购物车成功',
     icon: 'success',
     duration: 2000
   });
  },

  buttonStart: function (e) {
    var curtime = e.timeStamp;
    this.data.firsttaptime = curtime;
    startPoint = e.touches[0]
  },
  buttonMove: function (e) {
    var endPoint = e.touches[e.touches.length - 1]
    var translateX = endPoint.clientX - startPoint.clientX
    var translateY = endPoint.clientY - startPoint.clientY
    startPoint = endPoint
    var buttonTop = this.data.buttonTop + translateY
    var buttonLeft = this.data.buttonLeft + translateX
    //判断是移动否超出屏幕
    if (buttonLeft + 50 >= this.data.windowWidth) {
      buttonLeft = this.data.windowWidth - 50;
    }
    if (buttonLeft <= 0) {
      buttonLeft = 0;
    }
    if (buttonTop <= 0) {
      buttonTop = 0
    }
    if (buttonTop + 50 >= this.data.windowHeight) {
      buttonTop = this.data.windowHeight - 50;
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },
  buttonEnd: function (e) {
    var curtime = e.timeStamp;
    console.log(curtime - this.data.firsttaptime);
    if (curtime - this.data.firsttaptime < 100) {
      wx.navigateTo({
        url: '../cart/cart',
      })
    }
  }




})