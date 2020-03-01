// pages/keyboard/index.js
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
    "keyboarddata": [{
      "imageurl": "https://2b.zol-img.com.cn/product/199_120x90/229/ceGcXdq1Dx2iU.jpg",
      "price": "929",
      "goodname": "Vortexgear TAB90",
      "key": "德国樱桃轴（cherry）",
      "way": "有线，无线（蓝牙）",
      "interface": "USB Type-c",
      "keynum": "105键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47041264807.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/148_120x90/757/cePVaebYJ5w3.jpg",
      "price": "159",
      "goodname": "达尔优机械合金版机械键盘",
      "key": "机械轴（凯华黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002304462.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/174_120x90/806/ce5s6hdUBHrg2.jpg",
      "price": "99",
      "goodname": "雷柏V500游戏机械键盘",
      "key": "机械轴（雷柏黑轴，雷柏青轴，雷柏茶....",
      "way": "有线",
      "interface": "USB",
      "keynum": "92键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/16545781823.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/172_120x90/594/ce9qGPfVO37s2.jpg",
      "price": "549",
      "goodname": "罗技G610 Orion游戏机械键盘",
      "key": "机械轴（红轴），机械轴（茶轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "107键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3378484.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/285/cessoKCj1L5A2.jpg",
      "price": "449",
      "goodname": "Vortexgear Type Q机械键盘",
      "key": "德国樱桃轴（cherry），茶轴，青轴，....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47043599220.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/184_120x90/244/ceecOTH0kmqA.jpg",
      "price": "324",
      "goodname": "IKBC C87机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3491224.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/181_120x90/170/cembJRqeDHivg.jpg",
      "price": "1649",
      "goodname": "海盗船K95 RGB铂金版机械键盘",
      "key": "机械轴（茶轴），机械轴（银轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "114键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3787831.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/437/cehHe9Ao7gfPQ.jpg",
      "price": "459",
      "goodname": "血手幽灵B975复活者光轴三代RGB机械键盘",
      "key": "机械轴（光轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5276518.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/141_120x90/317/ceNf5Ga7vmWvw.jpg",
      "price": "849",
      "goodname": "罗技G910 Orion Spark RGB机械键盘",
      "key": "机械轴（罗技Romer-G轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "121键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12373248920.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/285/cey7wfSeb6aTQ.jpg",
      "price": "499",
      "goodname": "雷柏V808RGB幻彩背光游戏机械键盘",
      "key": "机械轴（黑轴），机械轴（青轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002536793.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/178_120x90/635/cehXhsE0c5glc.jpg",
      "price": "399",
      "goodname": "IKBC C104机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3491192.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/828/ceH0FGCYVEIw6.jpg",
      "price": "1499",
      "goodname": "海盗船K70 RGB MK.2游戏机械键盘",
      "key": "机械轴（红轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8133265.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/49_120x90/788/ceEaPHTvXdyik.jpg",
      "price": "47",
      "goodname": "罗技K120键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/262214.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/834/ce2IiAPpyD6Kw.jpg",
      "price": "99",
      "goodname": "雷柏V500合金版机械键盘",
      "key": "机械轴（黑轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5730030.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/112_120x90/292/ceoz0iOr42gJg.jpg",
      "price": "779",
      "goodname": "罗技G710+机械键盘",
      "key": "机械轴（茶轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "121键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1992711958.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/622/ceM2FiiQkWd9A.jpg",
      "price": "299",
      "goodname": "达尔优EK925暗夜流光RGB机械键盘",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000205908.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/142_120x90/601/ceERNO51usyIE.jpg",
      "price": "179",
      "goodname": "罗技K480无线蓝牙键盘",
      "key": "火山口架构",
      "way": "无线（蓝牙）",
      "interface": "暂无数据",
      "keynum": "82键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1239062.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/287/cef00EUQ7mfas.jpg",
      "price": "139",
      "goodname": "达尔优机械合金版机械键盘",
      "key": "机械轴（凯华黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11627895683.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/621/ceYBgTx823z7Y.jpg",
      "price": "829",
      "goodname": "Vortexgear TAB75",
      "key": "德国樱桃轴（cherry）",
      "way": "有线，无线（蓝牙）",
      "interface": "USB Type-c",
      "keynum": "84键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47034063129.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/96_120x90/43/ceKiSXqBg0n6U.jpg",
      "price": "139",
      "goodname": "罗技K310水洗键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "103键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/712162.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/356/ce7jwatudn2us.jpg",
      "price": "399",
      "goodname": "Vortexgear Type D机械键盘",
      "key": "德国樱桃轴（cherry），茶轴，青轴，....",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47042907916.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/166_120x90/230/ceGMRXo60Yew.jpg",
      "price": "189",
      "goodname": "罗技K380多设备蓝牙键盘",
      "key": "暂无数据",
      "way": "无线（蓝牙）",
      "interface": "暂无数据",
      "keynum": "79键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1914336.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/170_120x90/918/cefsK9JiNj8pc.jpg",
      "price": "699",
      "goodname": "罗技G810机械键盘",
      "key": "机械轴（罗技Romer-G轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12299780217.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/175_120x90/47/ce6FeLarfeRYg.jpg",
      "price": "458",
      "goodname": "IKBC F108机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3176567.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/672/ce9Z0MJaJs0Y6.jpg",
      "price": "899",
      "goodname": "HyperX Alloy FPS机械键盘",
      "key": "机械轴（青轴），机械轴（棕轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11349341460.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/37/cezdtNtWwmMg.jpg",
      "price": "299",
      "goodname": "罗技K840机械键盘",
      "key": "机械轴（罗技Romer-G轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12440661773.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/820/cefgZoGMo9EsY.jpg",
      "price": "549",
      "goodname": "Vortexgear Type F机械键盘",
      "key": "德国樱桃轴（cherry）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47045322641.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/183_120x90/198/ceItXOQK1BpA.jpg",
      "price": "179",
      "goodname": "黑爵刺客Ⅱ AK35i机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "110键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5009392.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/858/cetbJare5qRgY.jpg",
      "price": "398",
      "goodname": "IKBC C200 87键 红轴",
      "key": "机械轴（红轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005626702.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/146_120x90/665/ce96FGAfs3lV2.jpg",
      "price": "1599",
      "goodname": "海盗船K95 RGB版茶轴机械键盘",
      "key": "机械轴（茶轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "122键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4272314.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/183_120x90/737/ceaJkkJrMvppM.jpg",
      "price": "499",
      "goodname": "海盗船K68机械键盘",
      "key": "机械轴（红轴），机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4936193.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/80_120x90/299/ceyWR1nGQY2r6.jpg",
      "price": "339",
      "goodname": "Cherry MX board2.0机械键盘",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB或PS/2",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/584773.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/123_120x90/539/ceBahEmHmM0pw.jpg",
      "price": "39",
      "goodname": "双飞燕WK-100键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/540588.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/561/cewxQ6XbxWEA.jpg",
      "price": "729",
      "goodname": "Vortexgear TAB60",
      "key": "德国樱桃轴（cherry）",
      "way": "有线，无线（蓝牙）",
      "interface": "USB Type-c",
      "keynum": "61键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47032540357.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/576/ceOkz7IuL8aKc.jpg",
      "price": "399",
      "goodname": "罗技G413机械游戏键盘",
      "key": "机械轴（罗技Romer-G轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4911552.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/741/ce43Cet3wHnKw.jpg",
      "price": "539",
      "goodname": "罗技G613无线机械键盘",
      "key": "机械轴（罗技Romer-G轴）",
      "way": "无线",
      "interface": "USB",
      "keynum": "110键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1997257830.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/180_120x90/73/ceKdVnKDpcUE.jpg",
      "price": "749",
      "goodname": "Razer 黑寡妇蜘蛛幻彩版V2机械键盘",
      "key": "机械轴（Razer橙轴），机械轴（Razer....",
      "way": "有线",
      "interface": "USB",
      "keynum": "109键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/5008238.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/72_120x90/488/ceinuTdYUMf7k.jpg",
      "price": "89",
      "goodname": "罗技K230窄边键盘",
      "key": "火山口架构",
      "way": "无线",
      "interface": "暂无数据",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/502332.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/169_120x90/233/cerreNetekRs.jpg",
      "price": "339",
      "goodname": "Cherry MX board 2.0 G80-3800机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2299410.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/155_120x90/585/ce2SegbUIrM8A.jpg",
      "price": "219",
      "goodname": "Razer 萨诺狼蛛专业版游戏键盘",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1772859.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/179_120x90/314/ceOkYnFb6206.jpg",
      "price": "499",
      "goodname": "罗技K780多设备无线蓝牙键盘",
      "key": "暂无数据",
      "way": "无线（蓝牙），无线（多连）",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3177616.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/123_120x90/910/ce8yhnohsozfw.jpg",
      "price": "599",
      "goodname": "联想ThinkPad 0B47189蓝牙笔记本键盘",
      "key": "火山口架构",
      "way": "无线（蓝牙）",
      "interface": "Micro USB",
      "keynum": "88键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/931836.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/271/celEl8hYl9eos.jpg",
      "price": "699",
      "goodname": "Alienware Advanced Gaming AW568机械键盘",
      "key": "机械轴（茶轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "113键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19590471443.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/974/ceCkCtK7vfDBU.jpg",
      "price": "299",
      "goodname": "雷柏V708多模式背光游戏机械键盘",
      "key": "机械轴（雷柏黑轴），机械轴（雷柏茶....",
      "way": "有线，无线（蓝牙4.0，蓝牙3.0）",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33580086074.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/179_120x90/837/ce86Yw4o5biQM.jpg",
      "price": "149",
      "goodname": "罗技K375s多设备无线蓝牙键盘",
      "key": "暂无数据",
      "way": "无线（蓝牙），无线（多连）",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3518149.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/176_120x90/479/cezrheA3MitAo.jpg",
      "price": "219",
      "goodname": "达尔优水耀EK815机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3681679.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/178_120x90/948/cefTvuVYMPiyg.jpg",
      "price": "369",
      "goodname": "罗技G213 RGB游戏键盘",
      "key": "薄膜轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "117键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3521759.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/429/cezrdgctl8MZE.jpg",
      "price": "1699",
      "goodname": "华硕GK2000 ROG猎鹰机械游戏键盘",
      "key": "机械轴（红轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10139049487.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/434/ceqSJJQinI7U.jpg",
      "price": "869",
      "goodname": "Razer 黑寡妇蜘蛛X幻彩版机械键盘",
      "key": "机械轴（Razer绿轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4870939.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/645/ceY1vEaNIPkww.jpg",
      "price": "289",
      "goodname": "雷柏V720全彩背光游戏机械键盘",
      "key": "机械轴（黑轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2155835.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/173_120x90/981/ceB4lCAqK2yOg.jpg",
      "price": "129",
      "goodname": "新盟曼巴狂蛇K918机械游戏键盘",
      "key": "机械轴（黑轴），机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10124497302.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/101_120x90/814/ce4X3HQ4U5k32.jpg",
      "price": "989",
      "goodname": "罗技K810蓝牙键盘",
      "key": "X架构",
      "way": "无线（蓝牙）",
      "interface": "暂无数据",
      "keynum": "79键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1982565178.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/161_120x90/813/ce3nZcPU82KhE.jpg",
      "price": "159",
      "goodname": "罗技K400 Plus无线触控键盘",
      "key": "暂无数据",
      "way": "无线",
      "interface": "USB",
      "keynum": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1708462.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/32_120x90/430/ceHSusyFnMxu6.jpg",
      "price": "900",
      "goodname": "Cherry G80-3494LYCUS-0",
      "key": "机械轴（红轴），奶轴，灰轴，绿轴",
      "way": "有线",
      "interface": "USB+PS/2",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/372399.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/532/cek03WXx9h2.jpg",
      "price": "679",
      "goodname": "罗技G512 CARBON RGB有线机械游戏键盘",
      "key": "机械轴（红轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7005818.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/79_120x90/293/ceCzkNsnbzy9Y.jpg",
      "price": "79",
      "goodname": "双飞燕WK-300键盘",
      "key": "X架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/540462.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/171_120x90/715/ce92F7v9hUWKA.jpg",
      "price": "379",
      "goodname": "Razer 黑寡妇蜘蛛X竞技版机械键盘",
      "key": "机械轴（Razer绿轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15975759379.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/383/cea7eJs49foA.jpg",
      "price": "359",
      "goodname": "魔力鸭Zero 3108机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4991042.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/185_120x90/445/ceLP1kMvZpa7k.jpg",
      "price": "1599",
      "goodname": "罗技Craft无线键盘",
      "key": "暂无数据",
      "way": "无线（蓝牙），无线（多连）",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4870943.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/155_120x90/108/cebYaFMe4SIAI.jpg",
      "price": "149",
      "goodname": "Razer 萨诺狼蛛游戏键盘",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1693264.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/165_120x90/232/ceJ4otL0wJ8Gc.jpg",
      "price": "278",
      "goodname": "狼蛛收割者专业游戏机械键盘",
      "key": "机械轴（黑轴），机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12373542765.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/459/ced2U4Xy6VNMc.jpg",
      "price": "1399",
      "goodname": "Cherry MX board 6.0 G80-3931LSAEU-2 RGB狐/a>",
      "key": "机械轴（红轴）,机械轴（青轴）",
      "way": "有线",
      "interface": "USB2.0",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8029507.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/74/ceM7vumMgSWqs.jpg",
      "price": "199",
      "goodname": "达尔优EK812混光版机械键盘",
      "key": "机械轴（国产黑轴），机械轴（国产红....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12034881489.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/169_120x90/486/ceGGJYGokwwiw.jpg",
      "price": "70",
      "goodname": "联想K5819键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1135827.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/155_120x90/310/ceMlkOCvpDuE.jpg",
      "price": "399",
      "goodname": "罗技G310紧凑型机械游戏键盘",
      "key": "机械轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18296317890.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/371/ceTFc7PfRnqYA.jpg",
      "price": "1299",
      "goodname": "Alienware Pro Gaming AW768机械键盘",
      "key": "机械轴（茶轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "110键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26508080683.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/282/ce7L8iyx75uvo.jpg",
      "price": "899",
      "goodname": "SteelSeries APEX M750 TKL RGB背光机械键狞/a>",
      "key": "机械轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27425764389.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/32_120x90/466/ceaGlk5LEpdc.jpg",
      "price": "900",
      "goodname": "Cherry G80-3494LYCUS-2",
      "key": "机械轴（红轴）",
      "way": "有线",
      "interface": "USB或PS/2",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/336830.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/180_120x90/580/cePj3i1V6I7eY.jpg",
      "price": "788",
      "goodname": "微软Surface键盘",
      "key": "薄膜轴",
      "way": "无线（蓝牙）",
      "interface": "USB",
      "keynum": "110键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13699996415.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/201/ceTqxfWNanIiU.jpg",
      "price": "279",
      "goodname": "雷柏V700 RGB合金版幻彩背光游戏机械键盘",
      "key": "机械轴（雷柏黑轴），机械轴（雷柏茶....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4838674.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/191_120x90/727/ceUJlKKlGE4vk.jpg",
      "price": "255",
      "goodname": "双飞燕B2418 8光轴机械电竞键盘",
      "key": "机械轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3707192.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/185_120x90/111/ceoWDo0KiYvAU.jpg",
      "price": "749",
      "goodname": "Razer 黑寡妇蜘蛛竞技幻彩版V2机械键盘",
      "key": "机械轴（Razer橙轴），机械轴（Razer....",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/16664072886.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/639/ceC0fT4ydl46.jpg",
      "price": "969",
      "goodname": "Razer 黑寡妇蜘蛛精英版机械键盘",
      "key": "机械轴（黄轴），机械轴（绿轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000082595.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/181_120x90/894/cefmD4cMLMIUE.jpg",
      "price": "1249",
      "goodname": "华硕ROG Claymore RGB机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3700939.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/515/ceHK4KciltYvY.jpg",
      "price": "59",
      "goodname": "联想K4803A键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15531319342.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/336/cezK8aMZP96rc.jpg",
      "price": "98",
      "goodname": "达尔优DK100背光版游戏机械键盘",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4237678.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/166_120x90/404/cenSj6sWHplWA.jpg",
      "price": "229",
      "goodname": "联想MK100机械键盘",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15531212223.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/213/cecF9Cjhbk8Mc.jpg",
      "price": "149",
      "goodname": "雷柏V500PRO单光黑轴游戏机械键盘",
      "key": "雷柏轴（黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7768381.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/167_120x90/505/cebFmJaqenbsY.jpg",
      "price": "99",
      "goodname": "优派KU520合金版机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2138639.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/98_120x90/728/ceEcFA8ZugBxU.jpg",
      "price": "99",
      "goodname": "戴尔KB522商务多媒体键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "116键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1434075689.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/455/cexN5gdp2BoR2.jpg",
      "price": "299",
      "goodname": "雷柏V750防水背光游戏机械键盘",
      "key": "机械轴（红外机械开关）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32599411545.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/642/ce8M6DSrrNluY.jpg",
      "price": "119",
      "goodname": "狼蛛F2068混光机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45682805519.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/167_120x90/317/ceueJPpw303z6.jpg",
      "price": "790",
      "goodname": "Razer 黑寡妇蜘蛛终极版2016机械键盘",
      "key": "机械轴（Razer绿轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2920011.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/372/ce8snsfG9NwB2.jpg",
      "price": "349",
      "goodname": "海盗船K55 RGB游戏键盘",
      "key": "薄膜轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "110键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1986031793.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/78_120x90/697/cebkcQReFpYQ.jpg",
      "price": "25",
      "goodname": "戴尔SK-8120键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10119412105.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/79_120x90/825/ce3l0u3ueGchs.jpg",
      "price": "99",
      "goodname": "双飞燕WK-310键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "115键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/540447.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/974/ceJad3v3uSAAU.jpg",
      "price": "349",
      "goodname": "雷神蓝血人K750机械键盘",
      "key": "机械轴（黑轴），机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11568252466.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/189_120x90/857/cehUUerWYhm2c.jpg",
      "price": "179",
      "goodname": "达尔优EK812橙光版机械键盘",
      "key": "机械轴（国产黑轴），机械轴（国产红....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30712548474.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/173_120x90/933/ceoKLzjkVV2o.jpg",
      "price": "799",
      "goodname": "Razer 《守望先锋》定制版游戏键盘",
      "key": "机械轴（Razer绿轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10833931495.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/174_120x90/270/ceNxnKYbeSOJw.jpg",
      "price": "568",
      "goodname": "雷柏Miss定制版V760混彩背光游戏机械键盘",
      "key": "机械轴（黑轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45859225958.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/32_120x90/584/ceNNemKB75x0Y.jpg",
      "price": "699",
      "goodname": "Cherry G80-3000LSCEU-0",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB+PS/2",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/338870.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/74_120x90/961/cep2JvyKs3hM.jpg",
      "price": "37",
      "goodname": "富勒L400有线键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/308524.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/181_120x90/145/ceMpBlfqQYFHA.jpg",
      "price": "399",
      "goodname": "联想ThinkPad 0B47190笔记本键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "88键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/931835.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/745/cenGZbSI0lkGg.jpg",
      "price": "449",
      "goodname": "海盗船K63红光有线版机械键盘",
      "key": "机械轴（红轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "92键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41627521161.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/127/ceEcRQxFfDAs2.jpg",
      "price": "199",
      "goodname": "雷柏V550 RGB幻彩背光单手游戏机械键盘",
      "key": "机械轴（雷柏青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "35键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001591669.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/779/ceRmDEtDtpoWE.jpg",
      "price": "49",
      "goodname": "惠普K1500有线键盘",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10081163840.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/187_120x90/91/ceNXeu5xG3JRQ.jpg",
      "price": "199",
      "goodname": "雷柏V52S混彩背光游戏键盘",
      "key": "薄膜轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20468807521.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/153_120x90/753/ceB1QUF10nxI.jpg",
      "price": "139",
      "goodname": "狼蛛斩月有线键盘",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2144773.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/645/cepfi3cZlkRsE.jpg",
      "price": "299",
      "goodname": "雷柏V580背光游戏机械键盘",
      "key": "机械轴（红外机械开关）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44608797028.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/167_120x90/861/cebvmQe3Qi7tE.jpg",
      "price": "883",
      "goodname": "SteelSeries APEX 300游戏键盘",
      "key": "薄膜轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12196599541.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/32_120x90/653/ceer4GRISkG2.jpg",
      "price": "669",
      "goodname": "Cherry G80-3000LPCEU-0",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/339236.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/166_120x90/701/ceKEAEWreC5W6.jpg",
      "price": "968",
      "goodname": "微软Surface Pro 4键盘盖",
      "key": "暂无数据",
      "way": "暂无数据",
      "interface": "暂无数据",
      "keynum": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2147674.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/135_120x90/694/ceip3sQ0LpQnU.jpg",
      "price": "299",
      "goodname": "微软ALL-in-One无线多媒体键盘",
      "key": "X架构",
      "way": "无线",
      "interface": "暂无数据",
      "keynum": "84键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1163230.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/223/ce3AkCoFa1uc.jpg",
      "price": "149",
      "goodname": "雷柏V500PRO单光茶轴游戏机械键盘",
      "key": "机械轴（茶轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555264.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/169_120x90/944/ceosXbH2RKDA.jpg",
      "price": "459",
      "goodname": "联想Y系列游戏机械键盘",
      "key": "机械轴（凯华红轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15532459495.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/155_120x90/349/ceUr0LmqkhD4M.jpg",
      "price": "289",
      "goodname": "联想拯救者MK310机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15893470195.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/153_120x90/614/ceWv3zhEkY8Lo.jpg",
      "price": "275",
      "goodname": "E元素Z-77战隼机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "88键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10443566371.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/123_120x90/623/ce6gZ3YL9N8c.jpg",
      "price": "269",
      "goodname": "Razer 噬魂金蝎标准版游戏键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/822871.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/281/ceDnJ1JSM4xRY.jpg",
      "price": "99",
      "goodname": "联想0A36411标准USB键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14710271465.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/924/cewMKjmngOOsI.jpg",
      "price": "599",
      "goodname": "洛斐EH112S DOT蓝牙机械键盘",
      "key": "暂无数据",
      "way": "无线（蓝牙）",
      "interface": "USB",
      "keynum": "79键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14743609104.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/183_120x90/607/cerXiMVB3HdE.jpg",
      "price": "50",
      "goodname": "双飞燕K-100防水键盘",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13671073774.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/165_120x90/820/ceTdK4YlAWjbc.jpg",
      "price": "120",
      "goodname": "黑爵极客AK33背光机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "82键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1832307.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/182_120x90/640/ce0PHkDeILkKE.jpg",
      "price": "129",
      "goodname": "黑爵蒸汽朋克机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12049538027.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/177_120x90/421/ce4W4QeL15fhs.jpg",
      "price": "789",
      "goodname": "SteelSeries APEX M500青轴版机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12050860621.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/116_120x90/888/ce3SmA9qZ23Nc.jpg",
      "price": "199",
      "goodname": "雷柏E6700蓝牙触控键盘",
      "key": "X架构",
      "way": "无线（蓝牙）",
      "interface": "Micro USB",
      "keynum": "82键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1026854.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/154_120x90/781/cecdt1ZtUzQ3Y.jpg",
      "price": "199",
      "goodname": "雷柏V510游戏机械键盘",
      "key": "机械轴（黑轴），机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "107键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1668313.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/181_120x90/186/ceyJSmZ5Gc1gI.jpg",
      "price": "350",
      "goodname": "凯酷荣耀2代104 RGB机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12187711077.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/362/cevuPczlsFgCs.jpg",
      "price": "329",
      "goodname": "新贵C104机械键盘",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003310123.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/32_120x90/716/ceqfA7Y41F5m6.jpg",
      "price": "669",
      "goodname": "Cherry G80-3000LPCEU-2",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB或PS/2",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/339238.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/167_120x90/18/ce1VoUM2bfxBc.jpg",
      "price": "79",
      "goodname": "雷柏V51游戏键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1332229.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/4_120x90/499/cetUXBIiAMJY.jpg",
      "price": "65",
      "goodname": "双飞燕KL-5",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4935272.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/752/ce8tsVmMeAz7c.jpg",
      "price": "159",
      "goodname": "宜博K753拯救者机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13300570871.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/325/ceecLrKcOewY.jpg",
      "price": "589",
      "goodname": "Razer 黑寡妇蜘蛛轻装版游戏键盘",
      "key": "机械轴（Razer橙轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001946376.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/807/cevIxX7rMunoo.jpg",
      "price": "299",
      "goodname": "雷柏V700S背光游戏机械键盘",
      "key": "机械轴（雷柏黑轴），机械轴（雷柏茶....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1939304.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/168_120x90/883/ce53liTQ4fa7c.jpg",
      "price": "868",
      "goodname": "微软Surface Pro 3键盘盖",
      "key": "X架构",
      "way": "暂无数据",
      "interface": "暂无数据",
      "keynum": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11276147093.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/775/cejARo7Tincg.jpg",
      "price": "300",
      "goodname": "凯酷荣耀2代87 RGB机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12187717906.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/129_120x90/495/celUH96VmBCAw.jpg",
      "price": "129",
      "goodname": "富勒L460智能背光键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1029404.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/86_120x90/210/cey1UScAu7HDw.jpg",
      "price": "359",
      "goodname": "Cherry MX board2.0机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/613974.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/170_120x90/403/ceGKs2NZjHBtE.jpg",
      "price": "299",
      "goodname": "黑爵刺客 合金版全彩机械键盘",
      "key": "机械轴（黑轴），机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "107键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11587482364.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/124_120x90/28/cedlpsLFM9blc.jpg",
      "price": "49",
      "goodname": "黑爵机械战士3色背光游戏键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "103键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1150042.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/698/ce7sDJgf75XrQ.jpg",
      "price": "459",
      "goodname": "双飞燕",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4228917.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/172_120x90/999/ceFkhdqQY9D6.jpg",
      "price": "490",
      "goodname": "华硕M801机械键盘",
      "key": "机械轴（凯华红轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14931072065.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/227/ceS1nyi9ExlrY.jpg",
      "price": "159",
      "goodname": "雷柏V500PRO单光红轴游戏机械键盘",
      "key": "机械轴（红轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7768383.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/86_120x90/210/cey1UScAu7HDw.jpg",
      "price": "359",
      "goodname": "Cherry MX board2.0机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/613974.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/155_120x90/460/cevZIMWcm0B6.jpg",
      "price": "599",
      "goodname": "达尔优S600 RGB机械键盘",
      "key": "机械轴",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1430544.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/170_120x90/636/ce0tuMOyaaW8Y.jpg",
      "price": "199",
      "goodname": "摩豹CK104处罚者RGB背光机械键盘",
      "key": "机械轴（青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11716103275.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/173_120x90/604/ceXL9m89jVfLs.jpg",
      "price": "380",
      "goodname": "黑爵AK60光环侧刻RGB机械键盘",
      "key": "机械轴（国产青轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "110键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5324590.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/105/cezPb0sYQC2SY.jpg",
      "price": "219",
      "goodname": "摩豹CK101 RGB背光机械键盘",
      "key": "机械轴（高特红轴），机械轴（高特青....",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13851879562.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/641/ceuGJSUuaWsfw.jpg",
      "price": "1199",
      "goodname": "Filco FKBC87M蓝牙有线双模机械键盘",
      "key": "机械轴（黑轴，红轴，青轴，茶轴）",
      "way": "有线，无线（蓝牙）",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3721316.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/963/cegvvGtg51D56.jpg",
      "price": "329",
      "goodname": "雷柏V780S防水背光游戏机械键盘",
      "key": "机械轴（红外机械开关）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44043736752.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/40/ceHC0I22p4GVM.jpg",
      "price": "179",
      "goodname": "RK ROYAL KLUDGE圆点有线/蓝牙双模机械键盘",
      "key": "国产机械轴（青轴）",
      "way": "有线，无线（蓝牙）",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6654345.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/131_120x90/938/ceGZJ0FdzmvpQ.jpg",
      "price": "799",
      "goodname": "海盗船K30游戏键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "123键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1986031794.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/165_120x90/257/ce6xuJNmQ5k.jpg",
      "price": "369",
      "goodname": "达尔优机械合金版2代 点彩版机械键盘",
      "key": "机械轴（凯华黑轴），机械轴（凯华红....",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11627895677.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/195_120x90/698/ceAQQTa8BzWk.jpg",
      "price": "699",
      "goodname": "IKBC E412机械键盘",
      "key": "机械轴（红轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002658116.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/18_120x90/264/ceXTvxx0e8ASw.jpg",
      "price": "39",
      "goodname": "新贵掌中宝TK-011键盘",
      "key": "火山口架构",
      "way": "有线",
      "interface": "USB",
      "keynum": "19键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/127328.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/165_120x90/143/ceJHD9Ge3ZAhI.jpg",
      "price": "825",
      "goodname": "Razer 金丝魔蛛幻彩版游戏键盘",
      "key": "机械轴（绿轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "22键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1874704.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/181_120x90/940/ceRsavhMaYxk.jpg",
      "price": "259",
      "goodname": "血手幽灵B770光轴电竞机械键盘",
      "key": "机械轴（光轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28857750366.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/526/cefIf1GO0og1s.jpg",
      "price": "1039",
      "goodname": "Cherry MX Board 5.0 G80-3920HSAEU-2 背光",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5716471.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/176_120x90/102/cediVBYlL4XKw.jpg",
      "price": "599",
      "goodname": "钛度幻彩师TKM600电竞机械键盘",
      "key": "机械轴（黑轴），机械轴（红轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3604698.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/177_120x90/827/ceuWqnqpsa9HY.jpg",
      "price": "199",
      "goodname": "雷柏V500L混彩背光游戏机械键盘",
      "key": "机械轴（黑轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/16552260157.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/180_120x90/266/ceM0bvysGEAKA.jpg",
      "price": "65",
      "goodname": "富德K3超薄静音无线键盘",
      "key": "X架构",
      "way": "无线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12324813336.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/542/cesefjtLTEHMw.jpg",
      "price": "389",
      "goodname": "双飞燕",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4228901.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/171_120x90/766/cew0HK7IJL1Kw.jpg",
      "price": "699",
      "goodname": "Razer 黑寡妇蜘蛛X竞技幻彩版机械键盘",
      "key": "机械轴（Razer绿轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15975759377.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/386/ceuN2NjpHS2Q.jpg",
      "price": "998",
      "goodname": "洛斐EH112S冬季限量版DOT蓝牙机械键盘",
      "key": "暂无数据",
      "way": "无线（蓝牙）",
      "interface": "USB",
      "keynum": "79键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27395071808.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/172_120x90/396/ce8lOLQ1T4VHk.jpg",
      "price": "698",
      "goodname": "微软Surface 3键盘盖",
      "key": "X架构",
      "way": "无线",
      "interface": "暂无数据",
      "keynum": "78键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12353610027.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/176_120x90/97/ceJTdklp79cb.jpg",
      "price": "1400",
      "goodname": "冰豹智能豹 Skeltr智能通讯RGB游戏键盘",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "113键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3569422.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/176_120x90/388/cegGdHDSMlaA.jpg",
      "price": "299",
      "goodname": "雷柏V760混彩背光游戏机械键盘",
      "key": "机械轴（黑轴），机械轴（茶轴），机....",
      "way": "有线",
      "interface": "USB",
      "keynum": "108键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2924555.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/551/cegbJjmXu580A.jpg",
      "price": "199",
      "goodname": "RK 龙盾蓝牙有线机械键盘",
      "key": "机械轴（黑轴）",
      "way": "有线，无线（蓝牙）",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/37208529796.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/345/ceIaVDc5XoVhw.jpg",
      "price": "499",
      "goodname": "Razer  Tantarus V2游戏键盘",
      "key": "暂无数据",
      "way": "有线",
      "interface": "USB",
      "keynum": "19键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5899799.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/649/ce8uTMKCPz3yE.jpg",
      "price": "119",
      "goodname": "狼蛛F2068混光机械键盘",
      "key": "机械轴（黑轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45682805520.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/818/ce8BIJdEUzm2.jpg",
      "price": "329",
      "goodname": "RK 987有线/蓝牙双模机械键盘",
      "key": "机械轴（茶轴）",
      "way": "有线，无线（蓝牙）",
      "interface": "USB",
      "keynum": "87键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6654371.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/32_120x90/917/ceZrS1KrgIU.jpg",
      "price": "709",
      "goodname": "Cherry G80-3000LXCEU-0",
      "key": "机械轴（茶轴）",
      "way": "有线",
      "interface": "USB+PS/2",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/346667.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/81_120x90/533/ceiRzgtShoGC6.jpg",
      "price": "399",
      "goodname": "Cherry MX board2.0机械键盘",
      "key": "机械轴（红轴）",
      "way": "有线",
      "interface": "USB",
      "keynum": "104键",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/613972.html"
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
      key: "keyboarddata",
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