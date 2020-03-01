// pages/screen/index.js
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
    "screendata": [{
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/81/ceiH9ksJeWzpU.jpg",
      "goodname": "AOC AG322QCG",
      "price": "5199",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI，DP",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003980176.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/846/cezsKhN9gURuM.jpg",
      "goodname": "三星S27R750QEC",
      "price": "2999",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI，Mini Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41836591371.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/187_120x90/83/cey07BqWvnuc.jpg",
      "goodname": "HKC GF40",
      "price": "959",
      "size": "23.6英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "DVI-D，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5556889.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/199_120x90/788/ceImwqYIx1lJg.jpg",
      "goodname": "优派VX2780-4K-HD",
      "price": "2799",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "HDMI2.0×2，Displayport1.2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42206758034.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/971/ce5NcmLC7IOpI.jpg",
      "goodname": "航嘉X3481CK",
      "price": "3499",
      "size": "34英寸",
      "kind": "VA",
      "resolution": "3440x1440",
      "interface": "DVI-D，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27797284702.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/914/ce2FNXmX35YIY.jpg",
      "goodname": "AOC 24B1XH",
      "price": "849",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40309295634.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/132/ce44OS0mFANs.jpg",
      "goodname": "AOC 27B1H",
      "price": "1099",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20363659997.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/467/ceADiBCSZHI12.jpg",
      "goodname": "飞利浦273V7QSB",
      "price": "849",
      "size": "27英寸",
      "kind": "AH-IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7299682.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/170_120x90/217/ceeGXRIdIbomA.jpg",
      "goodname": "三星C24F390FHC",
      "price": "899",
      "size": "23.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2357097.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/365/ceiuBCei1yQ7M.jpg",
      "goodname": "三星C27JG52QQC",
      "price": "2499",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8249576.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/926/ceTWCWE73zOpk.jpg",
      "goodname": "AOC I2490PXZ",
      "price": "1199",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20020156953.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/964/ceWaOrwxwW.jpg",
      "goodname": "AOC I2490VXH/BS",
      "price": "929",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5155905.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/632/ceWvFTvatjxo.jpg",
      "goodname": "航嘉X2772CK",
      "price": "2799",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32276770001.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/956/cegHehkVDMK2.jpg",
      "goodname": "AOC AG273QCG",
      "price": "5099",
      "size": "27英寸",
      "kind": "TN",
      "resolution": "2560x1440",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000863201.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/258/cePmhIzQJjirw.jpg",
      "goodname": "飞利浦243V7QDSB",
      "price": "799",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D，HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5189035.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/835/ced6l6mBhzY0g.jpg",
      "goodname": "ANTGAMER ANT321QC",
      "price": "3499",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000215083.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/170_120x90/48/ceX2tSLaL8O8w.jpg",
      "goodname": "三星C27F591FDC",
      "price": "1299",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2356082.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/63/cenLfSxkAnk36.jpg",
      "goodname": "AOC I2769V",
      "price": "1699",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34670255688.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/186_120x90/406/cexc3Usi1kiYI.jpg",
      "goodname": "AOC AG273QCX",
      "price": "3599",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001585127.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/181_120x90/522/ceq78IpidgA.jpg",
      "goodname": "三星C27H711QEC",
      "price": "1888",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI，Mini Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11566482826.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/136_120x90/434/ceXLnI8N3DWU.jpg",
      "goodname": "AOC E2270SWN",
      "price": "579",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15944335707.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/360/ceTThAeUlfcs.jpg",
      "goodname": "AOC I2490VXH5/BS",
      "price": "748",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002222528.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/173_120x90/640/ce6kR7K4MJ6.jpg",
      "goodname": "三星C32F395FWC",
      "price": "1179",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10403720207.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/544/cef3Jx2etb0Zc.jpg",
      "goodname": "AOC C27B1H",
      "price": "1099",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30353242084.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/632/ceU6q7ovQiY6g.jpg",
      "goodname": "明基EL2870U",
      "price": "2699",
      "size": "27.9英寸",
      "kind": "TN",
      "resolution": "3840x2160",
      "interface": "HDMI2.0×2，Displayport1.4",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26877865879.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/383/cePiiRo4ZSxKU.jpg",
      "goodname": "飞利浦242M7",
      "price": "1199",
      "size": "23.6英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI 1.4，DisplayPor....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/21683988433.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/177_120x90/641/ceYBnE524NIzs.jpg",
      "goodname": "AOC Q3279VWF8/WS",
      "price": "1399",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11346638635.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/927/ceHS3uxkiPB.jpg",
      "goodname": "三星S32R750UEC",
      "price": "3899",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "3840x2160",
      "interface": "HDMI，Mini Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41836818269.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/786/ceShmhz3FS6.jpg",
      "goodname": "AOC Q3279VWFD8",
      "price": "1599",
      "size": "31.5英寸",
      "kind": "IPS",
      "resolution": "1920x1080（D-SUB）",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6574079.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/119_120x90/1/cetmS2XyAtzAY.jpg",
      "goodname": "戴尔23系列 P2314H",
      "price": "1299",
      "size": "23英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11294443962.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/128_120x90/350/ceAe1jayi97UY.jpg",
      "goodname": "三星S24D360HL",
      "price": "1129",
      "size": "23.6英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307007&to=http://item.jd.com/1057210.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/171_120x90/897/ce6NT28t7wTA.jpg",
      "goodname": "三星S32E360F",
      "price": "1799",
      "size": "31.5英寸",
      "kind": "MVA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10372491351.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/175_120x90/202/cenbm0U4c9zt6.jpg",
      "goodname": "LG 34UC79G",
      "price": "2949",
      "size": "34英寸",
      "kind": "IPS",
      "resolution": "2560x1080",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/17809370505.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/265/ceTcEhpE1mrA.jpg",
      "goodname": "三星C27HG70",
      "price": "2999",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11483528607.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/176/cejsQ1nageyo.jpg",
      "goodname": "飞利浦326E8FJSB",
      "price": "1249",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33200965547.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/191_120x90/589/cesWFWPV6YKo.jpg",
      "goodname": "AOC Q2790PQ",
      "price": "1788",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080（D-Sub）",
      "interface": "D-Sub（VGA），HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6241719.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/758/cev5YtcqPubs.jpg",
      "goodname": "AOC C24G1",
      "price": "1299",
      "size": "23.6英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7142897.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/908/ceGKU3TdoaG1.jpg",
      "goodname": "AOC U2790VQ",
      "price": "1699",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "HDMI1.4，HDMI2.0，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002630424.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/476/cet7aePakFDU.jpg",
      "goodname": "AOC 24V2H",
      "price": "879",
      "size": "23.8英寸",
      "kind": "AH-IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11467238982.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/187_120x90/759/cezZlAdcGRefU.jpg",
      "goodname": "AOC Q2490PXQ",
      "price": "1399",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5375281.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/578/ceX5aNbWVHs.jpg",
      "goodname": "明基EW277HDR",
      "price": "1599",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5008449.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/429/celCYlRuvMvA.jpg",
      "goodname": "三星C49HG90DMC",
      "price": "9999",
      "size": "49英寸",
      "kind": "VA",
      "resolution": "3840x1080",
      "interface": "HDMI×2，Displayport，Mini Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4524673.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/154_120x90/615/ceWNh7o4jkfE.jpg",
      "goodname": "AOC I2279VW/WS",
      "price": "679",
      "size": "21.5英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11467606070.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/169_120x90/534/ceKftRcBmMkc.jpg",
      "goodname": "飞利浦243V5QSB",
      "price": "656",
      "size": "23.6英寸",
      "kind": "MVA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34730883143.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/599/ceuPMXXCWHfIY.jpg",
      "goodname": "AOC 24E1H",
      "price": "999",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7036942.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/183_120x90/808/cedXI0WqcRmbc.jpg",
      "goodname": "AOC AG272QCX",
      "price": "2899",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI×2，Displayport....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5068744.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/171_120x90/127/ceAjorGj22TVE.jpg",
      "goodname": "飞利浦BDM4350UC",
      "price": "2899",
      "size": "43英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "D-Sub（VGA），HDMI（MHL）×2，Disp....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2749769.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/113/cemJWE8dmbJCQ.jpg",
      "goodname": "飞利浦248E9QHSB",
      "price": "799",
      "size": "23.6英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI1.4×1",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7294155.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/180/cemCl9cRW3Fc.jpg",
      "goodname": "戴尔P2419H",
      "price": "1098",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34607033407.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/561/cen59oWeNPrY.jpg",
      "goodname": "HKC T7000钻石版",
      "price": "1448",
      "size": "27英寸",
      "kind": "IPS-ADS",
      "resolution": "2560x1440",
      "interface": "DVI，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4718309.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/393/cegoPLRsFWk.jpg",
      "goodname": "三星C34H890WJC",
      "price": "4099",
      "size": "34英寸",
      "kind": "VA",
      "resolution": "3440x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4488901.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/108/ceq7ItNpjIts.jpg",
      "goodname": "AOC 24B1H",
      "price": "799",
      "size": "23.6英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26984936041.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/132_120x90/966/ceiueW222vxjQ.jpg",
      "goodname": "飞利浦223V5LSB2",
      "price": "549",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20909401743.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/171_120x90/31/ce0016qdkiflo.jpg",
      "goodname": "三星C32F391FWC",
      "price": "1399",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2956476.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/474/cekz7WJDYGu0A.jpg",
      "goodname": "三星C43J890DKC",
      "price": "6999",
      "size": "43英寸",
      "kind": "VA",
      "resolution": "3840x1200",
      "interface": "HDMI×1，Displayport×1",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8993305.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/681/cetBWPvMUWM6.jpg",
      "goodname": "AOC Q2789VQ/BS",
      "price": "1499",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080（D-Sub）",
      "interface": "D-Sub（VGA），HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29282635849.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/750/ceTs5GnkaMT2g.jpg",
      "goodname": "AOC I24B1XH",
      "price": "819",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41425202505.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/242/ce80H2C4EGIK.jpg",
      "goodname": "飞利浦278E9QHSB",
      "price": "1159",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI1.4",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32116336153.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/173_120x90/391/cebSishmRJpzg.jpg",
      "goodname": "三星S22F350FH",
      "price": "749",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11904225765.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/154_120x90/57/ceIQ7vEJvn0.jpg",
      "goodname": "三星S24E360HL",
      "price": "749",
      "size": "23.6英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1312124.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/126_120x90/894/ceJJwLjs31OlQ.jpg",
      "goodname": "戴尔UltraSharp U2414H",
      "price": "1949",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "HDMI，Displayport，Mini Displaypor....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8025285.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/601/ce1GMswIAcPE.jpg",
      "goodname": "飞利浦327E8FJSW",
      "price": "1399",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），DVI-D，DisplayPort，....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5918529.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/180_120x90/588/ceM2Ec9zPrlHc.jpg",
      "goodname": "AOC AG322FCX",
      "price": "1999",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2791485.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/164_120x90/740/ce2HWHRbslyqY.jpg",
      "goodname": "戴尔24系列 SE2416H",
      "price": "819",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1769180.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/810/ce8FyMIhtRp6o.jpg",
      "goodname": "联想Legion Y44w",
      "price": "9999",
      "size": "43.4英寸",
      "kind": "VA",
      "resolution": "3840x1200",
      "interface": "HDMI2.0×2，Displayport1.4",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003349979.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/834/cewvXzBYiHbic.jpg",
      "goodname": "三星S34J550WQC",
      "price": "2599",
      "size": "34英寸",
      "kind": "VA",
      "resolution": "3440x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/35510258165.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/170_120x90/779/cezlgQucgzhJw.jpg",
      "goodname": "LG 29UM58-P",
      "price": "1199",
      "size": "29英寸",
      "kind": "IPS",
      "resolution": "2560x1080",
      "interface": "HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15016872560.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/147_120x90/770/cegWBglrINamY.jpg",
      "goodname": "三星S24E390HL",
      "price": "749",
      "size": "23.6英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1312114.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/179_120x90/61/ce5u7wO5IV59c.jpg",
      "goodname": "戴尔UP3218K",
      "price": "55000",
      "size": "32英寸",
      "kind": "IPS",
      "resolution": "7680x4320",
      "interface": "Displayport×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7920756.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/885/ceFR9yaliWA6.jpg",
      "goodname": "AOC U2777PQU",
      "price": "2399",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "D-Sub（VGA），HDMI，Displayport，D....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002527396.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/186_120x90/273/ce8UWq2YzSpL.jpg",
      "goodname": "戴尔P2418D",
      "price": "1569",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4847027.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/167_120x90/578/ce6VjnFU0lMs.jpg",
      "goodname": "AOC I2280SWD",
      "price": "666",
      "size": "21.5英寸",
      "kind": "AH-IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11370047678.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/791/ceJEgKyAd0l.jpg",
      "goodname": "三星C27JG50QQC",
      "price": "2799",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1661978271.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/171_120x90/236/ceUDrYgZhnqRE.jpg",
      "goodname": "戴尔UltraSharp U2717D",
      "price": "3599",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "HDMI（MHL），Displayport，Mini Dis....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2557168.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/482/ceyPzie77nOIU.jpg",
      "goodname": "Acer VG270U",
      "price": "1999",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "DP，HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6652363.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/119_120x90/30/ceWq5IaqpW77k.jpg",
      "goodname": "戴尔P2414H",
      "price": "1499",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1604149839.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/176_120x90/446/ceg3KRKtDoSuw.jpg",
      "goodname": "华硕MG248Q",
      "price": "1599",
      "size": "24英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "DVI-D，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10391870250.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/108_120x90/768/ces2wgqhjd6Qo.jpg",
      "goodname": "AOC I2269VW",
      "price": "899",
      "size": "21.5英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1592585091.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/131_120x90/305/ceRMZU6X8TVso.jpg",
      "goodname": "三星S22D300NY",
      "price": "759",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1800580437.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/795/cepx0hjLDBeU.jpg",
      "goodname": "AOC AG320FC8/3W",
      "price": "1299",
      "size": "31.5英寸",
      "kind": "MVA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1668992545.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/768/cexY8hDY0w8bk.jpg",
      "goodname": "AOC Q241PXQ",
      "price": "1249",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42833434922.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/154_120x90/764/ceRvFaWqfWVHA.jpg",
      "goodname": "AOC I2080SW",
      "price": "599",
      "size": "19.5英寸",
      "kind": "IPS",
      "resolution": "1440x900",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5043713.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/165_120x90/819/ceHX2sg9UtM6c.jpg",
      "goodname": "AOC I2481FXH",
      "price": "899",
      "size": "23.8英寸",
      "kind": "AH-IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1868424.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/808/cerCZGQ7xwiJY.jpg",
      "goodname": "三星U32R590CWC",
      "price": "3999",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "3840x2160",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10388315733.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/183_120x90/336/cecfZYy5aKBE.jpg",
      "goodname": "HKC 蚂蚁电竞G27",
      "price": "1299",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "DVI，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3531552.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/147_120x90/949/ceZwOtjPGeG7g.jpg",
      "goodname": "三星S27E360H",
      "price": "1199",
      "size": "27英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1312115.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/188_120x90/559/cefC8v8uIDBQ.jpg",
      "goodname": "优派VX3276-2K-HD",
      "price": "1499",
      "size": "31.5英寸",
      "kind": "ADS",
      "resolution": "2560x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33075551811.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/177_120x90/40/cebcAzanCGPMo.jpg",
      "goodname": "HKC C340",
      "price": "2049",
      "size": "34英寸",
      "kind": "VA",
      "resolution": "3440x1440",
      "interface": "DVI，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3899758.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/131_120x90/711/ceAk0wNII7Cw.jpg",
      "goodname": "三星S24D300H",
      "price": "1069",
      "size": "24英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1087521.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/174_120x90/371/cemmH5wbq8bIA.jpg",
      "goodname": "戴尔27系列 P2717H",
      "price": "1499",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7811662.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/270/cePgoqvWGIrA.jpg",
      "goodname": "戴尔P2719H",
      "price": "1465",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30171222863.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/146/cenaIUAnyoJTM.jpg",
      "goodname": "AOC AG322QC4",
      "price": "3399",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI2.0，HDMI1.4，Di....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002454107.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/167_120x90/904/ce4if8b42841o.jpg",
      "goodname": "AOC Q3477FQ/WS",
      "price": "1899",
      "size": "34英寸",
      "kind": "IPS",
      "resolution": "2560x1080",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2683319.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/176_120x90/251/ceeeaN5BaMnOc.jpg",
      "goodname": "戴尔27系列 SE2717H",
      "price": "1199",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12571411935.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/856/ce5QQeN9WkVb2.jpg",
      "goodname": "AOC 24B1XHS",
      "price": "749",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28751759322.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/144_120x90/113/ceL9VkxQ6TYyU.jpg",
      "goodname": "戴尔24系列超高清4K P2415Q",
      "price": "4300",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "HDMI（MHL），Displayport，Mini Dis....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1287950.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/170_120x90/111/ce68FNzVt4e9k.jpg",
      "goodname": "戴尔24系列 SE2417HG",
      "price": "869",
      "size": "23.6英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2452950.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/565/ceZbzz5lgcgf2.jpg",
      "goodname": "华硕VG278Q",
      "price": "1999",
      "size": "27英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "DVI，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4497131.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/187_120x90/532/ceitJKFMt57lU.jpg",
      "goodname": "AOC Q3279VWF/WS",
      "price": "1349",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25395124636.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/187_120x90/554/ceTdJCSkm0zQ.jpg",
      "goodname": "戴尔22系列 SE2218HV",
      "price": "679",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5137654.html,http://altfarm.mediaplex.com/ad/ck/10592-245840-23401-2?MPRE=https%3A%2F%2Feshop.dell-brand.com%2Fwork%2F21-in%2Fpd%3Foc%3DSE2218HV%26amp%3Bmodel_id%3D21-in"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/168_120x90/108/ceGHRAnijO0Xo.jpg",
      "goodname": "AOC U2879VF",
      "price": "1798",
      "size": "28英寸",
      "kind": "TN",
      "resolution": "3840x2160",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2168835.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/500/ce9dEwc3DDCSc.jpg",
      "goodname": "AOC C27V1QD",
      "price": "1299",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7266482.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/159/certidm2ZQgi2.jpg",
      "goodname": "Alienware 34系列 AW3418DW",
      "price": "14000",
      "size": "34英寸",
      "kind": "IPS",
      "resolution": "3440x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44107018897.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/176_120x90/333/cexoKa3JrlaTU.jpg",
      "goodname": "三星C27F396FH",
      "price": "1079",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10992617678.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/916/ceEf6F6hugyE.jpg",
      "goodname": "AOC C32V1Q",
      "price": "1399",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11313845035.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/170_120x90/179/ceMnGEmeNszvE.jpg",
      "goodname": "LG 34UC88",
      "price": "4899",
      "size": "34英寸",
      "kind": "IPS",
      "resolution": "3440x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2422709.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/182/ceIUIObIp1GfU.jpg",
      "goodname": "戴尔27系列 S2719DGF",
      "price": "2799",
      "size": "27英寸",
      "kind": "TN",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32292003419.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/171_120x90/970/ceJGsvmagSkDM.jpg",
      "goodname": "三星C27F391FHC",
      "price": "999",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2519437.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/176_120x90/589/ceDamsuc3y9I.jpg",
      "goodname": "三星C24F396FH",
      "price": "899",
      "size": "23.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12081595479.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/132_120x90/974/ceeVxIahtwIOA.jpg",
      "goodname": "飞利浦223V5LSB",
      "price": "599",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13829881729.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/170_120x90/498/ce4aiejKq3u5.jpg",
      "goodname": "AOC AG320FC/3W",
      "price": "1349",
      "size": "31.5英寸",
      "kind": "MVA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6115455.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/131_120x90/762/ceE074YO9s8c2.jpg",
      "goodname": "飞利浦272G5DJEB",
      "price": "900",
      "size": "27英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D，HDMI，HDMI（M....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12049302196.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/172/ceRWfEqIvrxKc.jpg",
      "goodname": "戴尔24系列 S2419HGF",
      "price": "1649",
      "size": "24英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32289463356.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/181_120x90/227/certQw4gNjDNE.jpg",
      "goodname": "飞利浦349X7FJEW",
      "price": "2999",
      "size": "34英寸",
      "kind": "VA",
      "resolution": "3440x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4935468.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/462/ce3BTBz5Ft8oQ.jpg",
      "goodname": "AOC C24B1H",
      "price": "869",
      "size": "23.6英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30353242083.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/737/ce88ezkKud9k6.jpg",
      "goodname": "三星C32JG50QQC",
      "price": "2299",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26602815060.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/149_120x90/184/ceHw4uBs2Ox3.jpg",
      "goodname": "三星S27E390H",
      "price": "1129",
      "size": "27英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12654023089.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/262/ceUZmzwsRm5c.jpg",
      "goodname": "飞利浦276E9QHSW",
      "price": "999",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8898981.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/198/cenWexgPUSc2.jpg",
      "goodname": "飞利浦272P7VPTKEB",
      "price": "2999",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4847348.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/172_120x90/151/ceyLsHOP9FZZo.jpg",
      "goodname": "三星S32F351FU",
      "price": "1888",
      "size": "31.5英寸",
      "kind": "MVA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10393835264.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/183_120x90/394/ce82eun44jPN2.jpg",
      "goodname": "Alienware AW2518HF",
      "price": "2899",
      "size": "25英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4626351.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/102_120x90/887/ceiNffjYdlsfs.jpg",
      "goodname": "华硕MX279H",
      "price": "2399",
      "size": "27英寸",
      "kind": "AH-IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/760359.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/456/ceABrkqFGnheg.jpg",
      "goodname": "三星U28H750UQC",
      "price": "2399",
      "size": "28英寸",
      "kind": "TN",
      "resolution": "3840x2160",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4488923.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/164_120x90/567/ceL2evQ5ms3Ks.jpg",
      "goodname": "AOC I2781FH",
      "price": "1198",
      "size": "27英寸",
      "kind": "AH-IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2384393.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/594/ceuomn2kzzZls.jpg",
      "goodname": "华硕MG248QR",
      "price": "1549",
      "size": "24英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "DVI，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4556059.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/180_120x90/34/ce6Owr1KlEM.jpg",
      "goodname": "AOC C2708VH8",
      "price": "999",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6312103.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/185_120x90/2/cehna5cqDMtlo.jpg",
      "goodname": "戴尔UltraSharp 25系列 U2518D",
      "price": "2199",
      "size": "25英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport，Mini Displaypor....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5437311.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/75/cepo3MseCFim6.jpg",
      "goodname": "LG 27UK850",
      "price": "3599",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6510603.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/851/cen1hJuDtvJvM.jpg",
      "goodname": "飞利浦499P9H1",
      "price": "13000",
      "size": "48.8英寸",
      "kind": "VA",
      "resolution": "5120x1440",
      "interface": "HDMI2.0×2，Displayport1.4",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002630404.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/953/ceFJhORgiLyyg.jpg",
      "goodname": "飞利浦327E8QSW",
      "price": "1199",
      "size": "31.5英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31538347352.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/254/ceYLfQ4Ztq6Kg.jpg",
      "goodname": "三星C27HG70QQC",
      "price": "2699",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6331503.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/184_120x90/4/cekqzWjTdzZ8s.jpg",
      "goodname": "AOC E2270SWN5",
      "price": "599",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1002408.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/177_120x90/848/ceUeHkdMZh5WY.jpg",
      "goodname": "飞利浦323E7QJSK8",
      "price": "2549",
      "size": "31.5英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），DVI，HDMI，Displaypo....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19239033841.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/401/ceifXHEimrWVI.jpg",
      "goodname": "Alienware AW2518H",
      "price": "4899",
      "size": "24.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4484173.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/530/ce5yBkpOz0dTo.jpg",
      "goodname": "三星C27FG70FQ",
      "price": "1899",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3943484.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/172_120x90/954/ceCM8dJQJpUic.jpg",
      "goodname": "优派VX3209-2K",
      "price": "1199",
      "size": "31.5英寸",
      "kind": "ADS",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3008557.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/169_120x90/597/cekqn2Mym0UJo.jpg",
      "goodname": "LG 32MP58HQ-W",
      "price": "1499",
      "size": "32英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11252882015.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/182_120x90/881/ceyW9E8y7w4WA.jpg",
      "goodname": "明基GW2470HL",
      "price": "799",
      "size": "23.8英寸",
      "kind": "AMVA",
      "resolution": "1920x1080",
      "interface": "D-Sub，HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4845380.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/32/ce1CCfMBa0U.jpg",
      "goodname": "AOC I2490PXH5",
      "price": "798",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004309184.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/167_120x90/341/ce52rTYr7eE7k.jpg",
      "goodname": "戴尔E2216HV",
      "price": "699",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5607748.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/78_120x90/963/cersQfGOBRTQ6.jpg",
      "goodname": "HP LV2011",
      "price": "960",
      "size": "20英寸",
      "kind": "TN",
      "resolution": "1600x900",
      "interface": "D-Sub（VGA），DVI-D，HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29745238960.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/409/cewJN6QGbii6.jpg",
      "goodname": "优派VA2478-H-2",
      "price": "699",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7126948.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/190/cexPRHKz7C8c2.jpg",
      "goodname": "华硕ROG XG32VQ",
      "price": "3699",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "DVI-D，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20613102211.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/186_120x90/288/cerlo93G8s1.jpg",
      "goodname": "Eizo ColorEdge CG318-4K",
      "price": "43000",
      "size": "31.1英寸",
      "kind": "IPS",
      "resolution": "4096x2160",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32572363681.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/627/cebWYXFTGSF82.jpg",
      "goodname": "AOC 22E1",
      "price": "599",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8324359.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/174_120x90/626/cexZktvUXd5rA.jpg",
      "goodname": "戴尔24系列 P2417H",
      "price": "1288",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5380035.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/949/cebB4EDznfOA6.jpg",
      "goodname": "AOC C32G1",
      "price": "1799",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8441864.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/751/cehIEa1ZEZyo6.jpg",
      "goodname": "Acer EH243YU",
      "price": "999",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7191774.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/82/cePFDddXcjxPA.jpg",
      "goodname": "HKC G271F",
      "price": "1449",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "DVI-D，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6381073.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/177_120x90/29/ceClH4X7sNy.jpg",
      "goodname": "戴尔24系列 S2417DG",
      "price": "2989",
      "size": "23.8英寸",
      "kind": "TN",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14234010381.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/154_120x90/885/ceMHIbpfEOmNk.jpg",
      "goodname": "AOC E2180SWN",
      "price": "579",
      "size": "20.7英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1571438.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/321/cemr2P9EF6HW.jpg",
      "goodname": "AOC 24N1H",
      "price": "828",
      "size": "23.8英寸",
      "kind": "AH-IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8441866.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/947/ceUiGRsCYQgRE.jpg",
      "goodname": "华硕ROG XG49VQ",
      "price": "7999",
      "size": "49英寸",
      "kind": "VA",
      "resolution": "3840x1080",
      "interface": "DVI-D，HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41564601252.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/409/ceP8nzWxgeKYk.jpg",
      "goodname": "三星U32H850UMC",
      "price": "3999",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "3840x2160",
      "interface": "HDMI×2，Displayport，Mini Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5276690.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/169_120x90/778/ceRVoGcYjHm6.jpg",
      "goodname": "AOC P2491VWHE/BW",
      "price": "799",
      "size": "23.6英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2168838.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/66/ceAfs4JEjRQ.jpg",
      "goodname": "AOC AG272FCX",
      "price": "2099",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12384050242.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/167_120x90/181/ceXe7IB5IBpmc.jpg",
      "goodname": "飞利浦206V6QSB6",
      "price": "599",
      "size": "19.5英寸",
      "kind": "IPS",
      "resolution": "1440x900",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7854078.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/133/cegA3SnfhXTLg.jpg",
      "goodname": "微星MPG27CQ",
      "price": "4299",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI 2.0×2，Displayport1.2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8131952.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/167_120x90/782/ceJgK2XtqtEQ2.jpg",
      "goodname": "AOC E2280SWN",
      "price": "499",
      "size": "21.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11539412800.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/179_120x90/648/ceGjcJNorhLbk.jpg",
      "goodname": "AOC LV323WUPX",
      "price": "3999",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "3840x2160",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4527770.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/421/cehfkeQhPVNfQ.jpg",
      "goodname": "AOC 27E1H",
      "price": "999",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8324361.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/103/cefw4o3I5QhvQ.jpg",
      "goodname": "AOC LE32M3776",
      "price": "809",
      "size": "32英寸",
      "kind": "ADS",
      "resolution": "1366x768",
      "interface": "D-Sub（VGA），HDMI，AV",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30194121090.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/520/cenLCfMtuQvhk.jpg",
      "goodname": "三星C34F791WQ",
      "price": "4999",
      "size": "34英寸",
      "kind": "MVA",
      "resolution": "3440x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1611421405.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/168_120x90/34/ceJeYNBDTJE.jpg",
      "goodname": "Acer XB271HU bmiprz",
      "price": "3499",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5918549.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/263/ceuC0IHs1wJPo.jpg",
      "goodname": "三星S24F350FHC",
      "price": "719",
      "size": "23.8英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6242064.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/472/ceBE6B5GOTk3Q.jpg",
      "goodname": "AOC 20E1H",
      "price": "649",
      "size": "19.5英寸",
      "kind": "TN",
      "resolution": "1600x900",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6972328.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/208/ceq6XeySHRWZY.jpg",
      "goodname": "三星C32JG52QQC",
      "price": "2799",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8461713.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/187_120x90/602/ceUbDheJFrc.jpg",
      "goodname": "HKC H240",
      "price": "729",
      "size": "23.6英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1582566553.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/187_120x90/439/ceaahOZJ0q7L2.jpg",
      "goodname": "HKC H270",
      "price": "799",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11975017689.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/724/cesKk152rwMUc.jpg",
      "goodname": "华硕VG279Q",
      "price": "2688",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "DVI-D，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001525674.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/296/ceeT4Mi9dGcs.jpg",
      "goodname": "飞利浦328E9FJSB",
      "price": "1599",
      "size": "32英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8898997.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/131_120x90/890/cet61q2gOZzlo.jpg",
      "goodname": "三星S24D300HL",
      "price": "999",
      "size": "23.6英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1342061.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/912/cenJAmaPuGoSU.jpg",
      "goodname": "LG 38WK95C",
      "price": "10400",
      "size": "37.5英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6652407.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/756/cefKNTdBtn8EY.jpg",
      "goodname": "AOC Q240VXQ",
      "price": "1099",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32149468373.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/153_120x90/235/ce2EXpCgMNoTE.jpg",
      "goodname": "AOC LV243XIP",
      "price": "1199",
      "size": "23.8英寸",
      "kind": "不闪式（AH-IPS）",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，HDMI（MHL），D....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1132488.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/152_120x90/984/ceqspiwmCvf1.jpg",
      "goodname": "戴尔UltraSharp U2415",
      "price": "1699",
      "size": "24英寸",
      "kind": "IPS",
      "resolution": "1920x1200",
      "interface": "HDMI（MHL）×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1268447.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/171/cersiwI6FJ6ho.jpg",
      "goodname": "三星C32JG53FDC",
      "price": "1499",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/37023216198.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/428/cemsG45AzrkK.jpg",
      "goodname": "AOC CQ32V1D",
      "price": "1598",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000053722.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/193/ceoxvkMFzZPs.jpg",
      "goodname": "Acer VG240YU",
      "price": "1499",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "DP，HDMI×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8066727.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/174_120x90/747/ce3QDDeRWzWyo.jpg",
      "goodname": "戴尔23系列 P2317H",
      "price": "1149",
      "size": "23英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5639784.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/147_120x90/223/ceypNeG80767Y.jpg",
      "goodname": "三星S22E360H",
      "price": "1199",
      "size": "21.5英寸",
      "kind": "PLS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1602667639.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/840/cevMXV3gCdh6M.jpg",
      "goodname": "创维G1AF27C",
      "price": "1099",
      "size": "27英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000911929.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/181_120x90/555/ce3Yb26r8Fiw.jpg",
      "goodname": "HKC 蚂蚁电竞G32 PRO",
      "price": "2199",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "DVI，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4933739.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/191_120x90/274/ceuMRVWvfMnEs.jpg",
      "goodname": "AOC CQ32V1",
      "price": "1999",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29844029751.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/189_120x90/511/cegyVzZfmhmxc.jpg",
      "goodname": "LG 29WK500",
      "price": "1249",
      "size": "29英寸",
      "kind": "IPS",
      "resolution": "2560x1080",
      "interface": "HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25548888485.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/459/ceBlWfGXT7Ijk.jpg",
      "goodname": "AOC 27V2H",
      "price": "1250",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30505889384.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/181_120x90/954/ce0pK3Tmc6QBQ.jpg",
      "goodname": "AOC AG322QCX",
      "price": "2999",
      "size": "31.5英寸",
      "kind": "MVA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI×2，Displayport....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12991030921.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/191_120x90/965/cek0crlQRBRKQ.jpg",
      "goodname": "HP 27XQ",
      "price": "2399",
      "size": "27英寸",
      "kind": "TN",
      "resolution": "2560x1440",
      "interface": "HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7763243.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/181_120x90/158/celqosfigiR6A.jpg",
      "goodname": "LG 27UD58",
      "price": "2299",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "3840x2160",
      "interface": "HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3446665.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/176_120x90/922/ceW7mlXc0k81E.jpg",
      "goodname": "HP Z27q",
      "price": "8999",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "5120x2880",
      "interface": "DVI-D，HDMI，Displayport，Mini Dis....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8132327.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/69/ce56SocVWjI8w.jpg",
      "goodname": "戴尔27系列 S2719DM",
      "price": "2999",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "HDMI（MHL）×2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6652399.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/849/ceclOWkPkOuDE.jpg",
      "goodname": "AOC AG251FX",
      "price": "1799",
      "size": "24.5英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），HDMI×2，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/17305068002.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/154_120x90/364/ce4ESNoYWpxE.jpg",
      "goodname": "戴尔24系列 P2416D",
      "price": "1580",
      "size": "23.8英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12280580306.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/263/ceGYhbPcgoXWw.jpg",
      "goodname": "优派VX3479-2KPC",
      "price": "2649",
      "size": "34英寸",
      "kind": "VA",
      "resolution": "3440x1440",
      "interface": "DVI，HDMI2.0，Displayport1.2",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41501697108.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/173_120x90/620/ce7QCTAzEps6.jpg",
      "goodname": "AOC AG271QX",
      "price": "2999",
      "size": "27英寸",
      "kind": "TN",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），DVI-D，HDMI，Display....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11320314473.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/178_120x90/542/cehvThgnc5Drg.jpg",
      "goodname": "飞利浦328E8QSW",
      "price": "1399",
      "size": "31.5英寸",
      "kind": "MVA",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1629998638.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/186_120x90/335/ceJXGI2VqtJ6.jpg",
      "goodname": "HKC GX32",
      "price": "1749",
      "size": "31.5英寸",
      "kind": "VA",
      "resolution": "1920x1080",
      "interface": "DVI-D，HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11607281470.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/181_120x90/482/ceD8hnCylpoIs.jpg",
      "goodname": "飞利浦276E8FJAB",
      "price": "1599",
      "size": "27英寸",
      "kind": "IPS",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），HDMI，Displayport",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12263389807.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/635/ce5kyNTUL06Q.jpg",
      "goodname": "飞利浦328M6FJSB",
      "price": "1799",
      "size": "31.5英寸",
      "kind": "MVA",
      "resolution": "2560x1440",
      "interface": "D-Sub（VGA），Displayport1.2，HDMI....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27621467646.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/139_120x90/791/ce1gOztPgJdBU.jpg",
      "goodname": "明基XL2430T",
      "price": "2399",
      "size": "24英寸",
      "kind": "TN",
      "resolution": "1920x1080",
      "interface": "D-Sub（VGA），DVI-D，HDMI",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3505338.html"
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
      key: "screendata",
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