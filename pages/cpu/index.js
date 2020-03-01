// pages/cpu/index.js
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
    
    "cpudata": [
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/422/ceyEBz2WkKiE.jpg",
      "goodname": "AMD Ryzen 7 2700X",
      "price": "1999",
      "ghz": "3.7GHz",
      "maxghz": "4.3GHz",
      "corenum": "八核心",
      "thread": "十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6902456.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/687/ceXUbURc8l4SA.jpg",
      "goodname": "Intel 酷睿i5 9400F",
      "price": "1299",
      "ghz": "2.9GHz",
      "maxghz": "4.1GHz",
      "corenum": "六核心",
      "thread": "六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002657042.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/199_120x90/602/cekcuHOFyJTCc.jpg",
      "goodname": "Intel 酷睿i7 8700",
      "price": "2499",
      "ghz": "3.2GHz",
      "maxghz": "4.6GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5448942.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/732/ceQzf6ODbKYtU.jpg",
      "goodname": "Intel 酷睿i3 9100F",
      "price": "799",
      "ghz": "3.6GHz",
      "maxghz": "4.2GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003372319.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/91/ce0ZgsXUEw8cA.jpg",
      "goodname": "Intel 酷睿i7 8700K",
      "price": "2799",
      "ghz": "3.7GHz",
      "maxghz": "4.7GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5008395.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/766/ceTurXd1oIlEo.jpg",
      "goodname": "Intel 酷睿i5 8400",
      "price": "1549",
      "ghz": "2.8GHz",
      "maxghz": "4GHz",
      "corenum": "六核心",
      "thread": "六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5008397.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/18/ceLz5Thur7Dqc.jpg",
      "goodname": "Intel 酷睿i9 9900K",
      "price": "4099",
      "ghz": "3.6GHz",
      "maxghz": "5GHz",
      "corenum": "八核心",
      "thread": "十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000634429.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/186_120x90/176/cerPsZmWmwdoA.jpg",
      "goodname": "Intel 酷睿i3 8100",
      "price": "999",
      "ghz": "3.6GHz",
      "maxghz": "暂无数据",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5008447.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/199_120x90/119/ceSwl1H5P0OYU.jpg",
      "goodname": "Intel 酷睿i7 9700K",
      "price": "3099",
      "ghz": "3.6GHz",
      "maxghz": "4.9GHz",
      "corenum": "八核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000634417.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/177_120x90/372/ced6dq0QzCJ0k.jpg",
      "goodname": "Intel 酷睿i5 4590",
      "price": "1359",
      "ghz": "3.3GHz",
      "maxghz": "3.7GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24431346583.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/513/ceBBflX8kQGEQ.jpg",
      "goodname": "AMD Ryzen 5 2600",
      "price": "1199",
      "ghz": "3.4GHz",
      "maxghz": "3.9GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7115861.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/507/cev043M3Z440.jpg",
      "goodname": "AMD Ryzen 5 2600X",
      "price": "1499",
      "ghz": "3.6GHz",
      "maxghz": "4.2GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6902454.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/179_120x90/931/ceEhNZPu9s8R2.jpg",
      "goodname": "Intel 酷睿i7 7700",
      "price": "2999",
      "ghz": "3.6GHz",
      "maxghz": "4.2GHz",
      "corenum": "四核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26094743313.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/577/cenD00LUkiNlI.jpg",
      "goodname": "Intel 酷睿i5 8500",
      "price": "1799",
      "ghz": "3GHz",
      "maxghz": "4.1GHz",
      "corenum": "六核心",
      "thread": "六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6405178.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/40/ceVmfra662CY.jpg",
      "goodname": "Intel 奔腾 G5400",
      "price": "559",
      "ghz": "3.7GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6576629.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/180_120x90/118/celEtXii0H93w.jpg",
      "goodname": "Intel 奔腾 G4560",
      "price": "599",
      "ghz": "3.5GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4167802.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/177_120x90/811/ceLOmWOieFtiY.jpg",
      "goodname": "Intel 酷睿i5 6500",
      "price": "1679",
      "ghz": "3.2GHz",
      "maxghz": "3.6GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29874548077.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/44/ce1ncEe6y2JYQ.jpg",
      "goodname": "Intel 酷睿i5 7500",
      "price": "1699",
      "ghz": "3.4GHz",
      "maxghz": "3.8GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29257780472.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/53/ceFNGOZbTeN7E.jpg",
      "goodname": "Intel 酷睿i5 7400",
      "price": "1499",
      "ghz": "3GHz",
      "maxghz": "3.5GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3701899.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/179_120x90/954/cefrWawUgFPpY.jpg",
      "goodname": "Intel 酷睿i7 7700K",
      "price": "2899",
      "ghz": "4.2GHz",
      "maxghz": "4.5GHz",
      "corenum": "四核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/16806117050.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/134_120x90/226/ce3yCCJTHor2.jpg",
      "goodname": "Intel 酷睿i5 4460",
      "price": "1299",
      "ghz": "3.2GHz",
      "maxghz": "3.4GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24388708818.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/199_120x90/734/ceLnFRMfgh7c.jpg",
      "goodname": "Intel 酷睿i5 9600K",
      "price": "1999",
      "ghz": "3.7GHz",
      "maxghz": "4.6GHz",
      "corenum": "六核心",
      "thread": "六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33774385603.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/141_120x90/821/cenO13s0qAOuI.jpg",
      "goodname": "Intel 酷睿i7 4790K",
      "price": "2599",
      "ghz": "4GHz",
      "maxghz": "4.4GHz",
      "corenum": "四核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28420054354.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/188_120x90/598/ceyXzuTFclew.jpg",
      "goodname": "AMD Ryzen 3 2200G",
      "price": "649",
      "ghz": "3.5GHz",
      "maxghz": "3.7GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6491565.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/134_120x90/633/ceACrLmsiQmXs.jpg",
      "goodname": "Intel 酷睿i7 4790",
      "price": "1899",
      "ghz": "3.6GHz",
      "maxghz": "4GHz",
      "corenum": "四核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27404076518.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/900/ceO4HvNLDWQB6.jpg",
      "goodname": "AMD Ryzen 7 1700",
      "price": "1429",
      "ghz": "3GHz",
      "maxghz": "3.7GHz",
      "corenum": "八核心",
      "thread": "十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3885181.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/345/cejiKBV6OITY.jpg",
      "goodname": "Intel 酷睿i9 9980XE",
      "price": "15500",
      "ghz": "3GHz",
      "maxghz": "4.4GHz",
      "corenum": "十八核心",
      "thread": "三十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/18843874546.html?jd_pop=33ed01cf-bcf4-428f-a5f2-e4bcb68c8353"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/977/ceSMRtZfo6p1o.jpg",
      "goodname": "AMD Ryzen Threadripper 2990WX",
      "price": "136000",
      "ghz": "3GHz",
      "maxghz": "4.2GHz",
      "corenum": "三十二核心",
      "thread": "六十四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8714533.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/772/ce4gyfB02smw.jpg",
      "goodname": "Intel 酷睿i3 7100",
      "price": "1049",
      "ghz": "3.9GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33025008508.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/169_120x90/974/cezNk3j1c33I.jpg",
      "goodname": "Intel 酷睿i3 6100",
      "price": "1599",
      "ghz": "3.7GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1472530402.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/177_120x90/854/ceaxX6O3jkqLw.jpg",
      "goodname": "AMD 速龙 X4 860K（盒）",
      "price": "339",
      "ghz": "3.7GHz",
      "maxghz": "4GHz",
      "corenum": "四核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11250589820.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/148_120x90/246/ceZkrq4Jh0Gq.jpg",
      "goodname": "AMD FX-8300",
      "price": "439",
      "ghz": "3.3GHz",
      "maxghz": "4.2GHz",
      "corenum": "八核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27749305618.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/177_120x90/558/ceCd8RUsfGDk.jpg",
      "goodname": "Intel 酷睿i3 4170",
      "price": "999",
      "ghz": "3.7GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24388708817.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/38/ceKijecfEGXig.jpg",
      "goodname": "AMD Athlon 200GE",
      "price": "379",
      "ghz": "3.2GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34432277294.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/184_120x90/903/ceQDp3l34iWEk.jpg",
      "goodname": "Intel 酷睿i9 7980XE 至尊版",
      "price": "13000",
      "ghz": "2.6GHz",
      "maxghz": "4.2GHz",
      "corenum": "十八核心",
      "thread": "三十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30150622861.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/186_120x90/185/ceHqsIoOGCkE.jpg",
      "goodname": "Intel 酷睿i3 8350K",
      "price": "1199",
      "ghz": "4GHz",
      "maxghz": "暂无数据",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18972496167.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/973/ce0TIRXLrXBZs.jpg",
      "goodname": "Intel 赛扬 G3930",
      "price": "459",
      "ghz": "2.9GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "双线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33329429032.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/410/ceswIpPwQHGPI.jpg",
      "goodname": "AMD Ryzen 5 1600X",
      "price": "999",
      "ghz": "3.6GHz",
      "maxghz": "4GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4802774.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/182_120x90/438/ceu4GGGYFmrw.jpg",
      "goodname": "AMD Ryzen 5 1400",
      "price": "659",
      "ghz": "3.2GHz",
      "maxghz": "3.4GHz",
      "corenum": "四核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4773496.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/177_120x90/447/ceVsfcfMhzLLk.jpg",
      "goodname": "Intel 酷睿i5 6400",
      "price": "1399",
      "ghz": "2.7GHz",
      "maxghz": "3.3GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32425359507.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/257/cefpZKmJkcerE.jpg",
      "goodname": "Intel 酷睿i5 8600K",
      "price": "2199",
      "ghz": "3.6GHz",
      "maxghz": "4.3GHz",
      "corenum": "六核心",
      "thread": "六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24453438550.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/177_120x90/230/ceqFFHWb3fDQ.jpg",
      "goodname": "Intel 奔腾双核 G4400",
      "price": "549",
      "ghz": "3.3GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "双线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2011988.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/433/celbP995QtRag.jpg",
      "goodname": "AMD Ryzen 7 2700",
      "price": "1799",
      "ghz": "3.2GHz",
      "maxghz": "4.1GHz",
      "corenum": "八核心",
      "thread": "十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7115899.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/431/ceUhpRuAEPE2.jpg",
      "goodname": "AMD Ryzen 5 1600",
      "price": "859",
      "ghz": "3.2GHz",
      "maxghz": "3.6GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11927440653.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/550/cezPAdS2hpa.jpg",
      "goodname": "Intel 酷睿i7 9700KF",
      "price": "2999",
      "ghz": "3.6GHz",
      "maxghz": "4.9GHz",
      "corenum": "八核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002106617.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/180_120x90/853/ceO6Jbbs2soAc.jpg",
      "goodname": "AMD Ryzen 7 1700X",
      "price": "1699",
      "ghz": "3.4GHz",
      "maxghz": "3.8GHz",
      "corenum": "八核心",
      "thread": "十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4466792.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/185_120x90/732/cel3jGdHB7EU.jpg",
      "goodname": "AMD Ryzen 3 1200",
      "price": "459",
      "ghz": "3.1GHz",
      "maxghz": "3.4GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4559497.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/583/ceTnjcZlO6Ku6.jpg",
      "goodname": "AMD A10-9700",
      "price": "379",
      "ghz": "3.5GHz",
      "maxghz": "3.8GHz",
      "corenum": "四核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4245985.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/556/ceaj8ExB7esc.jpg",
      "goodname": "Intel 酷睿i5 9600KF",
      "price": "2199",
      "ghz": "3.7GHz",
      "maxghz": "4.6GHz",
      "corenum": "六核心",
      "thread": "六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003026162.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/350/cexgSw2DXOgdA.jpg",
      "goodname": "AMD Ryzen 5 1500X",
      "price": "829",
      "ghz": "3.5GHz",
      "maxghz": "3.7GHz",
      "corenum": "四核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4802786.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/484/ceYVPJ3H30tac.jpg",
      "goodname": "AMD APU系列 A6-7480",
      "price": "239",
      "ghz": "3.5GHz",
      "maxghz": "3.8GHz",
      "corenum": "双核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003855134.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/189_120x90/55/ce03c55FTnHOM.jpg",
      "goodname": "Intel 赛扬G4900",
      "price": "429",
      "ghz": "3.1GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "双线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6576627.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/320/ceWCmPPXbm.jpg",
      "goodname": "Intel 酷睿i9 9900X",
      "price": "7199",
      "ghz": "3.5GHz",
      "maxghz": "4.4GHz",
      "corenum": "十核心",
      "thread": "二十线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/26866087878.html#crumb-wrap"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/199_120x90/56/cekvdOv35DTA.jpg",
      "goodname": "Intel 酷睿i9 9920X",
      "price": "8799",
      "ghz": "3.5GHz",
      "maxghz": "4.4GHz",
      "corenum": "十二核心",
      "thread": "二十四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/23616945058.html#crumb-wrap"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/184_120x90/876/ce3fT0kOZWoTc.jpg",
      "goodname": "Intel 酷睿i9 7900X",
      "price": "7199",
      "ghz": "3.3GHz",
      "maxghz": "4.3GHz",
      "corenum": "十核心",
      "thread": "二十线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30150622857.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/536/ceidqh72pMF.jpg",
      "goodname": "Intel 酷睿i9 9900KF",
      "price": "4499",
      "ghz": "3.6GHz",
      "maxghz": "5GHz",
      "corenum": "八核心",
      "thread": "十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002106619.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/148_120x90/508/ceysWrqkvtYo.jpg",
      "goodname": "AMD APU系列 A8-7650K",
      "price": "569",
      "ghz": "3.3GHz",
      "maxghz": "3.8GHz",
      "corenum": "四核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1479083783.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/179_120x90/985/ceRCL5GnuNyU.jpg",
      "goodname": "Intel 酷睿i5 7600",
      "price": "1499",
      "ghz": "3.5GHz",
      "maxghz": "4.1GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3701897.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/177_120x90/344/ceMdJNX1HSclE.jpg",
      "goodname": "Intel 酷睿i7 6800K",
      "price": "4499",
      "ghz": "3.4GHz",
      "maxghz": "3.6GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12910979539.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/155/cek6wcEGV1Z4o.jpg",
      "goodname": "Intel 酷睿i7 8086K（限量版）",
      "price": "2669",
      "ghz": "4GHz",
      "maxghz": "5GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34244607163.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/311/ceqxZIrR8l6YA.jpg",
      "goodname": "AMD Ryzen Threadripper 2950X",
      "price": "6699",
      "ghz": "3.5GHz",
      "maxghz": "4.4GHz",
      "corenum": "十六核心",
      "thread": "三十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000626524.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/143_120x90/761/cejPUBkNfZ42.jpg",
      "goodname": "AMD A6-7400K（盒）",
      "price": "249",
      "ghz": "3.5GHz",
      "maxghz": "3.9GHz",
      "corenum": "双核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18781570119.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/404/cembHZifNCCDc.jpg",
      "goodname": "Intel Xeon W 3175X",
      "price": "22000",
      "ghz": "3.1GHz",
      "maxghz": "3.8GHz",
      "corenum": "二十八核心",
      "thread": "五十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13205156823.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/185_120x90/704/ceIT1rWF8od6A.jpg",
      "goodname": "AMD Ryzen Threadripper 1950X",
      "price": "5199",
      "ghz": "3.4GHz",
      "maxghz": "4GHz",
      "corenum": "十六核心",
      "thread": "三十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20737293894.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/670/cep4apnafQ0gI.jpg",
      "goodname": "AMD Ryzen 7 2700X纪念版",
      "price": "2449",
      "ghz": "3.7GHz",
      "maxghz": "4.3GHz",
      "corenum": "八核心",
      "thread": "十六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003142721.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/177_120x90/843/ce6bdgitxv56.jpg",
      "goodname": "AMD 速龙II X4 870K（盒）",
      "price": "399",
      "ghz": "3.9GHz",
      "maxghz": "4.1GHz",
      "corenum": "四核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11251274404.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/341/ceZg24qWzUtf2.jpg",
      "goodname": "Intel 酷睿i9 9960X",
      "price": "12500",
      "ghz": "3.1GHz",
      "maxghz": "4.4GHz",
      "corenum": "十六核心",
      "thread": "三十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/25247835340.html#crumb-wrap"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/788/ceRvOKoMNQfDs.jpg",
      "goodname": "Intel 奔腾 G5500",
      "price": "599",
      "ghz": "3.8GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6405164.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/255/cePzdMpYqxm0Q.jpg",
      "goodname": "Intel 酷睿i5 8600",
      "price": "2099",
      "ghz": "3.1GHz",
      "maxghz": "4.3GHz",
      "corenum": "六核心",
      "thread": "六线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6576603.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/180_120x90/160/ceXuMGQ5bVpn6.jpg",
      "goodname": "Intel 奔腾 G4600",
      "price": "629",
      "ghz": "3.6GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12936240380.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/309/ceZYBJ3SD5YYE.jpg",
      "goodname": "AMD Ryzen Threadripper 2920X",
      "price": "4699",
      "ghz": "3.5GHz",
      "maxghz": "4.3GHz",
      "corenum": "十二核心",
      "thread": "二十四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001422264.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/893/ceBSJ4Dfc9fdk.jpg",
      "goodname": "Intel 酷睿i9 7960X",
      "price": "11900",
      "ghz": "2.8GHz",
      "maxghz": "4.2GHz",
      "corenum": "十六核心",
      "thread": "三十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25892820000.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/110/ceghpuL4K2vg.jpg",
      "goodname": "AMD A10-7890K",
      "price": "649",
      "ghz": "4.1GHz",
      "maxghz": "4.3GHz",
      "corenum": "四核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11298405988.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/181_120x90/383/ceVyJCemuYMRs.jpg",
      "goodname": "Intel 酷睿i3 7350K",
      "price": "999",
      "ghz": "4.2GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12867157865.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/865/ceIqg0JotJxow.jpg",
      "goodname": "Intel 酷睿i7 7800X",
      "price": "2999",
      "ghz": "3.5GHz",
      "maxghz": "4GHz",
      "corenum": "六核心",
      "thread": "十二线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25892819995.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/314/ceP0s8gIol3wY.jpg",
      "goodname": "Intel 酷睿i9 9820X",
      "price": "6299",
      "ghz": "3.3GHz",
      "maxghz": "4.2GHz",
      "corenum": "十核心",
      "thread": "二十线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/23616945057.html#crumb-wrap"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/678/ceUOhMiBKjSog.jpg",
      "goodname": "Intel 酷睿i5 6402P",
      "price": "1240",
      "ghz": "2.8GHz",
      "maxghz": "暂无数据",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25165559311.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/775/ceZsRiDFNwov.jpg",
      "goodname": "AMD Ryzen 3 1300X",
      "price": "789",
      "ghz": "3.5GHz",
      "maxghz": "3.7GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14734898257.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/184_120x90/860/ceq15cYWuw1Dw.jpg",
      "goodname": "Intel 酷睿i7 7740X",
      "price": "3549",
      "ghz": "4.3GHz",
      "maxghz": "4.5GHz",
      "corenum": "四核心",
      "thread": "八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14608396734.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/78/cehR24mJebN8w.jpg",
      "goodname": "Intel 奔腾 G3260（盒装）",
      "price": "409",
      "ghz": "3.3GHz",
      "maxghz": "暂无数据",
      "corenum": "双核心",
      "thread": "双线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1472533008.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/28/ceCHwkMZ7s2.jpg",
      "goodname": "AMD Ryzen 3 2200GE",
      "price": "759",
      "ghz": "3.2GHz",
      "maxghz": "3.6GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33838908842.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2b.zol-img.com.cn/product/177_120x90/237/cegAS87Ki47wg.jpg",
      "goodname": "AMD A10-7870K",
      "price": "999",
      "ghz": "3.9GHz",
      "maxghz": "4.1GHz",
      "corenum": "四核心",
      "thread": "四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1687468868.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/310/ceNWIaNyDPqDE.jpg",
      "goodname": "AMD Ryzen Threadripper 2970WX",
      "price": "9499",
      "ghz": "3GHz",
      "maxghz": "4.2GHz",
      "corenum": "二十四核心",
      "thread": "四十八线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001421822.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/883/cenGoEFizIYeM.jpg",
      "goodname": "Intel 酷睿i9 7920X",
      "price": "7999",
      "ghz": "2.9GHz",
      "maxghz": "4.3GHz",
      "corenum": "十二核心",
      "thread": "二十四线程",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18547358701.html"
    },
    {
      "selectnum": 0,       "imageurl": "https://2d.zol-img.com.cn/product/171_120x90/599/ceIaSCURZ4p4c.jpg",
      "goodname": "AMD 速龙 X4 845",
      "price": "299",
      "ghz": "3.5GHz",
      "maxghz": "3.8GHz",
      "corenum": "四核心",
      "thread": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18603697400.html"
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

  handle: function(e) {
    var $data = e.currentTarget.dataset;
    //console.log($data.bean)
    //console.log($data.bean.name)
    //$data.bean.selectnum +=1;
    wx.setStorage({
      key: "cpudata",
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
    console.log(curtime-this.data.firsttaptime);
    if (curtime - this.data.firsttaptime < 100)
    {
      wx.navigateTo({
        url: '../cart/cart',
      })
    }
  }

})
