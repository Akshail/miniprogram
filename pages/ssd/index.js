// pages/ssd/index.js
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
    "ssddata": [{
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/972/ceSluq8OlnXhw.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002580230.html",
      "price": "769",
      "goodname": "三星860 QVO SATA III（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/260/ceZgNa1OjZfRE.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "500MB/s",
      "writespeed": "350MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28441949364.html",
      "price": "199",
      "goodname": "金士顿A400（240GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/7/ceZPZJUFhAclc.jpg",
      "capacity": "500GB",
      "interface": "M.2 NVMe",
      "readspeed": "1700MB/s",
      "writespeed": "1450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004542168.html",
      "price": "499",
      "goodname": "西部数据BLUE SN500 NVME SSD（500GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/185_120x90/582/ceXkjK6EaTi.jpg",
      "capacity": "256GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10746830367.html",
      "price": "229",
      "goodname": "Intel 545S（256GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/181_120x90/259/cePA0IaUJvLyE.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "500MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26694861397.html",
      "price": "219",
      "goodname": "金士顿A400（480GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/80/ceciBff9q9s3A.jpg",
      "capacity": "256GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3210MB/s",
      "writespeed": "1315MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6275020.html",
      "price": "349",
      "goodname": "Intel 760P M.2 2280（256GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/189_120x90/93/ceLpBygjR6W6.jpg",
      "capacity": "512GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3230MB/s",
      "writespeed": "1625MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6380479.html",
      "price": "589",
      "goodname": "Intel 760P M.2 2280（512GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/195_120x90/391/ceTzbl5iixxXA.jpg",
      "capacity": "480GB",
      "interface": "USB Type-C接口",
      "readspeed": "320MB/s",
      "writespeed": "270MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/38698068250.html",
      "price": "399",
      "goodname": "影驰GA-T 480（480GB）移动固态硬盘"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/594/ceAaSRcFMEN1w.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "440MB/s",
      "writespeed": "440MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5904813.html",
      "price": "339",
      "goodname": "Colorful SL500（480GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/189_120x90/267/ceSTxpv2joXCM.jpg",
      "capacity": "512GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3200MB/s",
      "writespeed": "2000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6311638.html",
      "price": "599",
      "goodname": "浦科特M9PeG（512GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/989/ceWwHFFtqtKVQ.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8670900.html",
      "price": "329",
      "goodname": "英睿达BX500 SATA3（480GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/186_120x90/326/cecroRatMJEqQ.jpg",
      "capacity": "240GB",
      "interface": "SATA Revision 3.2",
      "readspeed": "550MB/s",
      "writespeed": "525MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5724596.html",
      "price": "219",
      "goodname": "东芝TR200（240GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/130/cesZc5Vw3Rlg.jpg",
      "capacity": "250GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3400MB/s",
      "writespeed": "1500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28074410908.html",
      "price": "405",
      "goodname": "三星970 EVO NVMe M.2（250GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/842/ceH9pBggSQMw.jpg",
      "capacity": "1TB",
      "interface": "USB3.1接口",
      "readspeed": "550MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6510874.html",
      "price": "1299",
      "goodname": "闪迪至尊极速E60便携式移动固态硬盘（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/188_120x90/334/ceKbycpJ6TfE.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "510MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6164587.html",
      "price": "1499",
      "goodname": "英睿达MX500 SATA（1TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/769/cedwmzd02q6p6.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3500MB/s",
      "writespeed": "3300MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25702420399.html",
      "price": "1999",
      "goodname": "三星970 EVO Plus NVMe M.2（1TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/73/ceLV5z1X6y7Yk.jpg",
      "capacity": "500GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3500MB/s",
      "writespeed": "3200MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003181110.html",
      "price": "759",
      "goodname": "三星970 EVO Plus NVMe M.2（500GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/195_120x90/334/ceXmi72lZunhw.jpg",
      "capacity": "2TB",
      "interface": "M.2接口",
      "readspeed": "3500MB/s",
      "writespeed": "2900MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002019663.html",
      "price": "2769",
      "goodname": "惠普EX950 M.2（2TB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/197/ceRh1RGXCeuBQ.jpg",
      "capacity": "512GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3500MB/s",
      "writespeed": "2300MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7233972.html",
      "price": "1299",
      "goodname": "三星970 PRO NVMe M.2（512GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/832/cec7S3NRrAe6.jpg",
      "capacity": "250GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6287165.html",
      "price": "299",
      "goodname": "三星860 EVO SATA III（250GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/427/ceRxufofLKpnE.jpg",
      "capacity": "2TB",
      "interface": "M.2接口",
      "readspeed": "3500MB/s",
      "writespeed": "3000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40617578062.html",
      "price": "3299",
      "goodname": "海康威视C2000 M.2（2TB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/642/cerwSNWTqTPQ.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3500MB/s",
      "writespeed": "2700MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29321429404.html",
      "price": "2779",
      "goodname": "三星970 PRO NVMe M.2（1TB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/189_120x90/957/cenjMxYuyHI2.jpg",
      "capacity": "250GB",
      "interface": "M.2 SATA接口",
      "readspeed": "550MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6435501.html",
      "price": "339",
      "goodname": "三星860 EVO M.2 SATA III（250GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/346/ceSoO0kLEdROo.jpg",
      "capacity": "500GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3400MB/s",
      "writespeed": "2300MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28671882418.html",
      "price": "759",
      "goodname": "三星970 EVO NVMe M.2（500GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/682/ceQ2OJTvMPZs.jpg",
      "capacity": "1TB",
      "interface": "USB3.1接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5359152.html",
      "price": "1299",
      "goodname": "西部数据MY PASSPORT SSD（WDBKVX0010PSL）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/255/cet4PqVAKdcpw.jpg",
      "capacity": "1TB",
      "interface": "USB3.1接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4718621.html",
      "price": "1269",
      "goodname": "三星T5（1TB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/185_120x90/257/ceHinZIzVpzuk.jpg",
      "capacity": "2TB",
      "interface": "USB3.1接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4718635.html",
      "price": "2999",
      "goodname": "三星T5（2TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/177/ceYHaRPaDpc86.jpg",
      "capacity": "500GB",
      "interface": "USB3.1接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4718625.html",
      "price": "649",
      "goodname": "三星T5（500GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/458/ceeeWwKvTHwNo.jpg",
      "capacity": "1TB",
      "interface": "M.2接口",
      "readspeed": "3500MB/s",
      "writespeed": "3000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40617848833.html",
      "price": "799",
      "goodname": "海康威视C2000 M.2（1TB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/185_120x90/365/cejojFI3UOQI.jpg",
      "capacity": "512GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15458937991.html",
      "price": "579",
      "goodname": "Intel 545S（512GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/147_120x90/362/ceGa0OX0aJ56s.jpg",
      "capacity": "500GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11419210447.html",
      "price": "1199",
      "goodname": "三星850 EVO SATA III（500GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/179_120x90/667/ceReCxyIRwYgM.jpg",
      "capacity": "250GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3200MB/s",
      "writespeed": "1500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12170800231.html",
      "price": "269",
      "goodname": "三星960 EVO NVMe M.2（250GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/183_120x90/103/cegm7w5A2zaJI.jpg",
      "capacity": "256GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1570MB/s",
      "writespeed": "540MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13613130012.html",
      "price": "899",
      "goodname": "Intel 600P M.2 2280（256GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/324/ce2fPsiylzE.jpg",
      "capacity": "240GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1500MB/s",
      "writespeed": "800MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7408647.html",
      "price": "279",
      "goodname": "金士顿A1000（240GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/603/cenb1Bc8nRAD6.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "510MB/s",
      "writespeed": "350MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28605436387.html",
      "price": "109",
      "goodname": "Colorful SL300（120GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/146_120x90/735/ceiCeaJk3o9g.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14114815966.html",
      "price": "1099",
      "goodname": "三星850 EVO SATA III（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/147_120x90/356/ceZjvqG3xDIe.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1279836.html",
      "price": "279",
      "goodname": "三星850 EVO SATA III（120GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/147_120x90/353/celkXHbno1pd2.jpg",
      "capacity": "250GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1546013068.html",
      "price": "329",
      "goodname": "三星850 EVO SATA III（250GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/831/ce1iXX0V72Xg.jpg",
      "capacity": "960GB",
      "interface": "M.2 SATA接口",
      "readspeed": "2100MB/s",
      "writespeed": "1800MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://re.jd.com/cps/item/30060498540.html?cu=true&utm_source=www.fanqianbb.com&utm_medium=tuiguang&utm_campaign=t_1000043395_-1&utm_term=89cc5b06717645b6874d7cea27ab3cd5",
      "price": "869",
      "goodname": "台电幻影NP900C M.2（960GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/179_120x90/651/ceU1bKvLOErk.jpg",
      "capacity": "500GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3200MB/s",
      "writespeed": "1800MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12170800238.html",
      "price": "469",
      "goodname": "三星960 EVO NVMe M.2（500GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/971/cefeta26dVlmo.jpg",
      "capacity": "2TB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42440646311.html",
      "price": "1859",
      "goodname": "三星860 QVO SATA III（2TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/87/cef8ebCEy0zlQ.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "370MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2134245.html",
      "price": "125",
      "goodname": "台电极速 S500（120GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/183_120x90/35/ceJHWvDq3BDA.jpg",
      "capacity": "512GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1775MB/s",
      "writespeed": "560MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13613130010.html",
      "price": "1499",
      "goodname": "Intel 600P M.2 2280（512GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/371/cebHOTW1nFZkI.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3400MB/s",
      "writespeed": "2500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7234468.html",
      "price": "1799",
      "goodname": "三星970 EVO NVMe M.2（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/528/cerBSW3X0QmU2.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "490MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15340646073.html",
      "price": "395",
      "goodname": "金士顿UV400（240GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/540/ceVrdUWMTiEzk.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "350MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15340646071.html",
      "price": "209",
      "goodname": "金士顿UV400（120GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/186_120x90/324/ce1NbCbqqP1o6.jpg",
      "capacity": "480GB",
      "interface": "SATA Revision 3.2",
      "readspeed": "550MB/s",
      "writespeed": "525MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34243209970.html",
      "price": "219",
      "goodname": "东芝TR200（480GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/90/ce7TDQQfD5GrI.jpg",
      "capacity": "128GB",
      "interface": "SATA3",
      "readspeed": "483MB/s",
      "writespeed": "136MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2134256.html",
      "price": "135",
      "goodname": "台电极速 S550（128GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/180_120x90/312/cewv4yiXbrirY.jpg",
      "capacity": "256GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "240MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18176923118.html",
      "price": "199",
      "goodname": "台电极光 A850（256GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/689/ceYExK49QGqHQ.jpg",
      "capacity": "16GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "900MB/s",
      "writespeed": "145MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4890964.html",
      "price": "129",
      "goodname": "Intel Optane 傲腾（16GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/181_120x90/395/ceTEHvq7HdoRw.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "520MB/s",
      "writespeed": "350MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1398969.html",
      "price": "209",
      "goodname": "闪迪加强版（240GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/595/ceiZqXyndSRgA.jpg",
      "capacity": "32GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1350MB/s",
      "writespeed": "290MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13818692807.html",
      "price": "599",
      "goodname": "Intel Optane 傲腾（32GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/179_120x90/486/ceosf7bRhMbCo.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1800MB/s",
      "writespeed": "560MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13613130013.html",
      "price": "2588",
      "goodname": "Intel 600P M.2 2280（1TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/625/cexcrGhgv5ho.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "460MB/s",
      "writespeed": "310MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13704473877.html",
      "price": "115",
      "goodname": "金泰克S300 SATA3（120GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/175_120x90/885/ce05bWBeyyx3s.jpg",
      "capacity": "240GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "2400MB/s",
      "writespeed": "1200MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11199381367.html",
      "price": "359",
      "goodname": "影驰铁甲战将M.2 PCI-E 2280（240GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/181_120x90/463/ce7XR1GYpkG2.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "191MB/s",
      "writespeed": "142MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/16805419686.html",
      "price": "189",
      "goodname": "金士顿V300（240GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/485/cesQVwflWSKo.jpg",
      "capacity": "256GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3000MB/s",
      "writespeed": "1000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6435027.html",
      "price": "369",
      "goodname": "浦科特M9PeG（256GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/181_120x90/82/ce9RBafoPTbNI.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "470MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7080752.html",
      "price": "195",
      "goodname": "台电极光 A800（240GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/579/ceRw2kOEcyZEc.jpg",
      "capacity": "128GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "345MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41084840173.html",
      "price": "199",
      "goodname": "海康威视C160（128GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/184_120x90/620/ceatAe9l7yX0Y.jpg",
      "capacity": "250GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "525MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4533897.html",
      "price": "299",
      "goodname": "闪迪至尊高速 3D（250GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/184_120x90/618/cebZWGcmAAW3g.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "530MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4533865.html",
      "price": "829",
      "goodname": "闪迪至尊高速 3D（1TB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/181_120x90/983/cegx9CjNok2qc.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "480MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7448857.html",
      "price": "299",
      "goodname": "台电极光 A800（480GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/175_120x90/650/cenK2AM4iThU.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "480MB/s",
      "writespeed": "370MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13726443401.html",
      "price": "175",
      "goodname": "金泰克S300 SATA3（240GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/441/ce2WA428tMlJM.jpg",
      "capacity": "256GB",
      "interface": "M.2接口",
      "readspeed": "3500MB/s",
      "writespeed": "3000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40258949865.html",
      "price": "269",
      "goodname": "海康威视C2000 M.2（256GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/822/ceydMcSi4sNY.jpg",
      "capacity": "480GB",
      "interface": "M.2 SATA接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7408611.html",
      "price": "469",
      "goodname": "金士顿UV500（480GB/M.2接口）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/586/ceIBuwPAl1C96.jpg",
      "capacity": "250GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "2100MB/s",
      "writespeed": "1300MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6245665.html",
      "price": "219",
      "goodname": "惠普EX900 M.2（250GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/182/ce7rORTue8ig.jpg",
      "capacity": "250GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "2100MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/37755589326.html",
      "price": "269",
      "goodname": "阿斯加特AN2系列M.2（250GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/619/ce1lZKq9KzyU.jpg",
      "capacity": "500GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "530MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4533907.html",
      "price": "469",
      "goodname": "闪迪至尊高速 3D（500GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/183_120x90/104/ceD1lBYhptZNA.jpg",
      "capacity": "128GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "770MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13613130008.html",
      "price": "358",
      "goodname": "Intel 600P M.2 2280（128GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/166_120x90/30/cegCgjF1M2Lc.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "410MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1895259.html",
      "price": "399",
      "goodname": "威刚SP550（120GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/181_120x90/556/ceV2zD8ZGRdY.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "550MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15340646072.html",
      "price": "699",
      "goodname": "金士顿UV400（480GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/175_120x90/428/cedWK6jQDRgWs.jpg",
      "capacity": "2TB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11419210446.html",
      "price": "5589",
      "goodname": "三星850 EVO SATA III（2TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/171_120x90/806/ce0WiCHyU9jfE.jpg",
      "capacity": "2TB",
      "interface": "PCI-E接口",
      "readspeed": "2800MB/s",
      "writespeed": "1900MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29294181838.html",
      "price": "17699",
      "goodname": "Intel DC P3700（2TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/23/cexBE1KFauE.jpg",
      "capacity": "120GB",
      "interface": "SATA REV3.0接口",
      "readspeed": "520MB/s",
      "writespeed": "320MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7408613.html",
      "price": "199",
      "goodname": "金士顿UV500（120GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/406/ceXxUN8uga0dg.jpg",
      "capacity": "240GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1900MB/s",
      "writespeed": "1200MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28330080230.html",
      "price": "249",
      "goodname": "台电幻影NP800 M.2（240GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/141_120x90/215/ceylxnfnahXSw.jpg",
      "capacity": "512GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13301614908.html",
      "price": "1459",
      "goodname": "三星850 PRO SATA III（512GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/418/ceG71A5UCqHI.jpg",
      "capacity": "512GB",
      "interface": "M.2接口",
      "readspeed": "3500MB/s",
      "writespeed": "3000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40258949866.html",
      "price": "599",
      "goodname": "海康威视C2000 M.2（512GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/166_120x90/775/ceqop9SChOuh6.jpg",
      "capacity": "250GB",
      "interface": "M.2 SATA接口",
      "readspeed": "540MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14543567266.html",
      "price": "519",
      "goodname": "三星850 EVO M.2（250GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/173_120x90/669/ce0EarByZvbfM.jpg",
      "capacity": "256GB",
      "interface": "M.2 SATA接口",
      "readspeed": "547MB/s",
      "writespeed": "404MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3471064.html",
      "price": "379",
      "goodname": "联想SL700 M.2 2242（256GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/183_120x90/57/cePgebtGh3Hug.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "410MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3310859.html",
      "price": "139",
      "goodname": "威刚SP580（120GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/645/ceZFVJMUFWAvk.jpg",
      "capacity": "128GB",
      "interface": "SATA3",
      "readspeed": "470MB/s",
      "writespeed": "340MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28149247082.html",
      "price": "129",
      "goodname": "Colorful SL300（128GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/46/celoIqtWnCoI.jpg",
      "capacity": "240GB",
      "interface": "SATA REV3.0接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30636278420.html",
      "price": "279",
      "goodname": "金士顿UV500（240GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/829/cevhqvrt9vpqk.jpg",
      "capacity": "480GB",
      "interface": "M.2 SATA接口",
      "readspeed": "1800MB/s",
      "writespeed": "1500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28330080231.html",
      "price": "489",
      "goodname": "台电幻影NP900C M.2（480GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/188_120x90/401/ceDqxIY4obfNs.jpg",
      "capacity": "500GB",
      "interface": "SATA",
      "readspeed": "550MB/s",
      "writespeed": "480MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5476990.html",
      "price": "369",
      "goodname": "惠普S700（500GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/336/ceyg9lcr15k2A.jpg",
      "capacity": "512GB",
      "interface": "M.2接口",
      "readspeed": "3500MB/s",
      "writespeed": "2250MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002852560.html",
      "price": "699",
      "goodname": "惠普EX950 M.2（512GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/171_120x90/196/ceCtA7j5DrFw.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "480MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10386117330.html",
      "price": "489",
      "goodname": "Intel 540S SATA III（240GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/357/ce31Hsj7qX8Hg.jpg",
      "capacity": "500GB",
      "interface": "M.2接口",
      "readspeed": "2000MB/s",
      "writespeed": "1750MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40999831392.html",
      "price": "399",
      "goodname": "英睿达P1 M.2（500GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/316/ceZkqcygQSgiY.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "410MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33304525085.html",
      "price": "349",
      "goodname": "威刚SP580（480GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/336/ceDh0HXFbQ52.jpg",
      "capacity": "120GB",
      "interface": "SATA",
      "readspeed": "550MB/s",
      "writespeed": "480MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5236832.html",
      "price": "139",
      "goodname": "惠普S700（120GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/682/cevkPyqhS3xdc.jpg",
      "capacity": "250GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26811784235.html",
      "price": "399",
      "goodname": "三星860 EVO mSATA SATAIII（250GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/171_120x90/260/ceplkEQ5McfM.jpg",
      "capacity": "2TB",
      "interface": "PCI-E接口",
      "readspeed": "2700MB/s",
      "writespeed": "1800MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10655977463.html",
      "price": "8899",
      "goodname": "Intel DC P3500（2TB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/677/ceWev2trNxwQ.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3400MB/s",
      "writespeed": "3000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45226888885.html",
      "price": "2999",
      "goodname": "影驰HOF PCIe AIC（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/684/ceNgRhKHvocF.jpg",
      "capacity": "512GB",
      "interface": "USB3.1接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4738173.html",
      "price": "659",
      "goodname": "西部数据MY PASSPORT SSD（WDBKVX5120PSL）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/632/ceVGbRtX86r2M.jpg",
      "capacity": "320GB",
      "interface": "SATA3",
      "readspeed": "500MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28148791271.html",
      "price": "269",
      "goodname": "Colorful SL500 Plus（320GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/592/ceCi2dq4fNJ2.jpg",
      "capacity": "500GB",
      "interface": "M.2",
      "readspeed": "3400MB/S",
      "writespeed": "2500MB/S",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7510800.html",
      "price": "699",
      "goodname": "西部数据Black 3D NVMe WDS500G2X0C（500GB"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/173_120x90/741/ce20IeYBYZIlI.jpg",
      "capacity": "256GB",
      "interface": "M.2 SATA接口",
      "readspeed": "520MB/s",
      "writespeed": "210MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3083427.html",
      "price": "379",
      "goodname": "联想SL700系列 M.2 2280（256GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/922/celQ0TcX9DFQ.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "530MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6894453.html",
      "price": "2299",
      "goodname": "三星860 PRO SATA III（1TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/166_120x90/785/ce7o1ms5Yjw.jpg",
      "capacity": "120GB",
      "interface": "M.2 SATA接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13680765105.html",
      "price": "649",
      "goodname": "三星850 EVO M.2（120GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/324/ceDGZAazOWNJo.jpg",
      "capacity": "250GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "510MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6164585.html",
      "price": "389",
      "goodname": "英睿达MX500 SATA（250GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/586/cenCONdfx3Mp6.jpg",
      "capacity": "256GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "345MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41084840174.html",
      "price": "225",
      "goodname": "海康威视C160（256GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/648/ce3KTtclSMIdc.jpg",
      "capacity": "960GB",
      "interface": "SATA3",
      "readspeed": "520MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7661208.html",
      "price": "699",
      "goodname": "Colorful SL500（960GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/171_120x90/222/cemkhTzxTRsc.jpg",
      "capacity": "256GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10393327196.html",
      "price": "575",
      "goodname": "闪迪X400 SATA III（256GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/787/cenQBpcsrKSoY.jpg",
      "capacity": "240GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1900MB/s",
      "writespeed": "1200MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28256635573.html",
      "price": "299",
      "goodname": "铭瑄 复仇者 NM5 M.2（240GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/181_120x90/128/ce7JRP5TiCA.jpg",
      "capacity": "128GB",
      "interface": "M.2 SATA接口",
      "readspeed": "550MB/s",
      "writespeed": "200MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18189547348.html",
      "price": "139",
      "goodname": "台电极速 NS550 M.2（128GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/724/ceKAu12lWNU9s.jpg",
      "capacity": "480GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "暂无数据",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000399866.html",
      "price": "429",
      "goodname": "朗科绝影N930E（480GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/799/ceJhHhsoT4Y6Y.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1800MB/s",
      "writespeed": "1800MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002088263.html",
      "price": "889",
      "goodname": "Intel 660P M.2 2280（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/540/cehRhyCca8N8c.jpg",
      "capacity": "256GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1700MB/s",
      "writespeed": "1600MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45839415308.html",
      "price": "299",
      "goodname": "影驰ONE M.2 NVMe SSD（256GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/29/ce6Cj1GY6S7s.jpg",
      "capacity": "480GB",
      "interface": "SATA REV3.0接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7194900.html",
      "price": "469",
      "goodname": "金士顿UV500（480GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/624/ce4P3fLSEQ9h.jpg",
      "capacity": "512GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3200MB/s",
      "writespeed": "1600MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6209322.html",
      "price": "549",
      "goodname": "惠普EX920 M.2（512GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/171_120x90/11/ceY4Ru7cZ41CQ.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "534MB/s",
      "writespeed": "475MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2487228.html",
      "price": "149",
      "goodname": "朗科超光N550S（120GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/183_120x90/184/ceixhRAZ6HLg.jpg",
      "capacity": "1TB",
      "interface": "M.2 SATA接口",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13680765108.html",
      "price": "2099",
      "goodname": "三星850 EVO M.2（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/171_120x90/262/ce2rtNgFBx5is.jpg",
      "capacity": "400GB",
      "interface": "PCI-E接口",
      "readspeed": "2200MB/s",
      "writespeed": "1000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10655977461.html",
      "price": "1659",
      "goodname": "Intel DC P3500（400GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/394/ceXwywYSxSgyA.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3200MB/s",
      "writespeed": "1900MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12170800234.html",
      "price": "2099",
      "goodname": "三星960 EVO NVMe M.2（1TB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/171_120x90/197/ceGlPX8EZ4R8g.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "400MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10386117329.html",
      "price": "459",
      "goodname": "Intel 540S SATA III（120GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/607/ceYPopiNiheEM.jpg",
      "capacity": "500GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "2100MB/s",
      "writespeed": "1500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6245707.html",
      "price": "459",
      "goodname": "惠普EX900 M.2（500GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/603/cevHOR17izu.jpg",
      "capacity": "256GB",
      "interface": "M.2接口",
      "readspeed": "530MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41084840172.html",
      "price": "229",
      "goodname": "海康威视C160N M.2（256GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/169_120x90/994/ceGB1SfCy29lE.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "480MB/s",
      "writespeed": "400MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2248665.html",
      "price": "429",
      "goodname": "闪迪加强版（480GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/360/cePStsOAwROA.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "534MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3500974.html",
      "price": "129",
      "goodname": "朗科超光N530S（120GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/840/ce1c0kJGagYg.jpg",
      "capacity": "250GB",
      "interface": "USB3.1接口",
      "readspeed": "550MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6724671.html",
      "price": "549",
      "goodname": "闪迪至尊极速E60（250GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/690/ceegfAtp4AfzI.jpg",
      "capacity": "256GB",
      "interface": "USB3.1接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4738125.html",
      "price": "599",
      "goodname": "西部数据MY PASSPORT SSD（WDBKVX2560PSL）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/175_120x90/338/ceW5TVSAJFMAg.jpg",
      "capacity": "250GB",
      "interface": "USB3.1接口",
      "readspeed": "450MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15308913844.html",
      "price": "569",
      "goodname": "三星T3（250GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/283/ceUfpvfCoBzfs.jpg",
      "capacity": "120GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "680MB/s",
      "writespeed": "370MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5822125.html",
      "price": "179",
      "goodname": "Colorful CN600（120GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/57/cepu27YVpXBi2.jpg",
      "capacity": "480GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1500MB/s",
      "writespeed": "900MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29818638806.html",
      "price": "579",
      "goodname": "金士顿A1000（480GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/683/ce3f6QDZJWE.jpg",
      "capacity": "512GB",
      "interface": "USB3.1接口",
      "readspeed": "540MB/s",
      "writespeed": "280MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8551616.html",
      "price": "499",
      "goodname": "台电S20（512GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/181_120x90/851/ceMNH6h6iZtHA.jpg",
      "capacity": "240GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "800MB/s",
      "writespeed": "700MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7602784.html",
      "price": "299",
      "goodname": "Colorful CN600S（240GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/718/cemTmJvlIj2.jpg",
      "capacity": "480GB",
      "interface": "mSATA接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7408585.html",
      "price": "479",
      "goodname": "金士顿UV500（480GB/mSATA接口）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/185_120x90/457/ceRmJjc7Hlu8Q.jpg",
      "capacity": "2TB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "530MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4533863.html",
      "price": "2499",
      "goodname": "闪迪至尊高速 3D（2TB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/816/ceBozM0kNMjw.jpg",
      "capacity": "240GB",
      "interface": "M.2 SATA接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7408621.html",
      "price": "299",
      "goodname": "金士顿UV500（240GB/M.2接口）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/171_120x90/223/cenwjnLYfs0w.jpg",
      "capacity": "128GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "340MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10393327195.html",
      "price": "319",
      "goodname": "闪迪X400 SATA III（128GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/58/ceAHzAvq7rVtc.jpg",
      "capacity": "960GB",
      "interface": "SATA REV3.0接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7408625.html",
      "price": "899",
      "goodname": "金士顿UV500（960GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/542/ceOY8geTeC5mw.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "435MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29585178743.html",
      "price": "199",
      "goodname": "海康威视C100（120GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/199_120x90/616/cexbEJqg912U6.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "暂无数据",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45525191675.html",
      "price": "609",
      "goodname": "Colorful SL500（1TB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/566/ceNnrKSGjp8Og.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "345MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41084840176.html",
      "price": "1999",
      "goodname": "海康威视C160（1TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/839/cePDPY2oUC8A.jpg",
      "capacity": "500GB",
      "interface": "USB3.1接口",
      "readspeed": "550MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6724673.html",
      "price": "679",
      "goodname": "闪迪至尊极速E60（500GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/638/ceLr1kaRnN29A.jpg",
      "capacity": "640GB",
      "interface": "SATA3",
      "readspeed": "500MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28148791272.html",
      "price": "399",
      "goodname": "Colorful SL500 Plus（640GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/171_120x90/246/ceeU95qQK9lY.jpg",
      "capacity": "1TB",
      "interface": "mSATA接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11441584680.html",
      "price": "1569",
      "goodname": "三星850 EVO mSATA（1TB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/723/cemDZ2SNTQtcs.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "500MB/s",
      "writespeed": "460MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6245727.html",
      "price": "179",
      "goodname": "惠普M700 （120GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/170_120x90/691/ceikNkYT0ODfE.jpg",
      "capacity": "2TB",
      "interface": "USB3.1 Type-C接口",
      "readspeed": "450MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15308913838.html",
      "price": "3599",
      "goodname": "三星T3（2TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/327/ceM7b1lGLhPc.jpg",
      "capacity": "1TB",
      "interface": "USB3.1接口",
      "readspeed": "450MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15308913843.html",
      "price": "1249",
      "goodname": "三星T3（1TB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/171_120x90/224/cedRBbj2tXAR.jpg",
      "capacity": "512GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10393327198.html",
      "price": "999",
      "goodname": "闪迪X400 SATA III（512GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/599/cejyaB3turDA.jpg",
      "capacity": "128GB",
      "interface": "M.2接口",
      "readspeed": "530MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41084840171.html",
      "price": "139",
      "goodname": "海康威视C160N M.2（128GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/249/ceOiX7LoisnU.jpg",
      "capacity": "240GB",
      "interface": "mSATA接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7408609.html",
      "price": "299",
      "goodname": "金士顿UV500（240GB/mSATA接口）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/300/ceNRTNsxS59MA.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "510MB/s",
      "writespeed": "360MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41214706190.html",
      "price": "119",
      "goodname": "映泰S100E（120GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/170_120x90/684/ce2U7frnrceU.jpg",
      "capacity": "500GB",
      "interface": "USB3.1接口",
      "readspeed": "450MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14568474216.html",
      "price": "589",
      "goodname": "三星T3（500GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/195/ceEKMlFosH5A.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "480MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10386117331.html",
      "price": "1299",
      "goodname": "Intel 540S SATA III（480GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/261/ceFVQSJBmLuk.jpg",
      "capacity": "1.2TB",
      "interface": "PCI-E接口",
      "readspeed": "2600MB/s",
      "writespeed": "1300MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10655977462.html",
      "price": "4799",
      "goodname": "Intel DC P3500（1.2TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/423/ceP7Y7KQpMWuE.jpg",
      "capacity": "240GB",
      "interface": "USB3.1 Type-C接口",
      "readspeed": "550MB/s",
      "writespeed": "400MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33790800771.html",
      "price": "494",
      "goodname": "雷克沙SL100（240GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/409/ce0J9M9VCyaVM.jpg",
      "capacity": "256GB",
      "interface": "M.2 SATA接口",
      "readspeed": "暂无数据",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40346541692.html",
      "price": "389",
      "goodname": "联想X780 M.2 2280（256GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/186_120x90/312/ceARZgsq0KLJU.jpg",
      "capacity": "960GB",
      "interface": "SATA Revision 3.2",
      "readspeed": "550MB/s",
      "writespeed": "525MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32529238598.html",
      "price": "1099",
      "goodname": "东芝TR200（960GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/773/cesj8mtSoZDbM.jpg",
      "capacity": "120GB",
      "interface": "M.2 SATA接口",
      "readspeed": "520MB/s",
      "writespeed": "320MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7194894.html",
      "price": "199",
      "goodname": "金士顿UV500（120GB/M.2接口）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/148_120x90/313/cewORTobOIy0I.jpg",
      "capacity": "400GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "470MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10533143847.html",
      "price": "2880",
      "goodname": "Intel DC S3710（400GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/374/cebjgxVn2GkY.jpg",
      "capacity": "240GB",
      "interface": "M.2 SATA接口",
      "readspeed": "540MB/s",
      "writespeed": "420MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10399377381.html",
      "price": "229",
      "goodname": "金泰克S300 M.2 2280（240GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/274/ce87COz6wi2t2.jpg",
      "capacity": "512GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1650MB/s",
      "writespeed": "1000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41462618545.html",
      "price": "479",
      "goodname": "雷克沙NM500 M.2（512GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/561/cem3UVMncNSS6.jpg",
      "capacity": "512GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "345MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41084840175.html",
      "price": "399",
      "goodname": "海康威视C160（512GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/113/ceHl9KMVuNHc6.jpg",
      "capacity": "512GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1700MB/s",
      "writespeed": "950MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41499776282.html",
      "price": "749",
      "goodname": "海康威视C1000 M.2 （512GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/188_120x90/400/ceTzrBylWghjo.jpg",
      "capacity": "250GB",
      "interface": "SATA",
      "readspeed": "550MB/s",
      "writespeed": "480MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4370111.html",
      "price": "189",
      "goodname": "惠普S700（250GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/613/ceDAzYouLzBA2.jpg",
      "capacity": "256GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3200MB/s",
      "writespeed": "1200MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6209312.html",
      "price": "339",
      "goodname": "惠普EX920 M.2（256GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/422/ce4Tp6qSezyA.jpg",
      "capacity": "512GB",
      "interface": "USB3.1 Type-C接口",
      "readspeed": "550MB/s",
      "writespeed": "400MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/37619023035.html",
      "price": "692",
      "goodname": "雷克沙SL100（512GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/185/ceMg0TxUEtmlc.jpg",
      "capacity": "120GB",
      "interface": "mSATA接口",
      "readspeed": "520MB/s",
      "writespeed": "320MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7194888.html",
      "price": "199",
      "goodname": "金士顿UV500（120GB/mSATA接口）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/34/ceCpVOdV3UpCc.jpg",
      "capacity": "360GB",
      "interface": "SATA3",
      "readspeed": "480MB/s",
      "writespeed": "440MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41608076298.html",
      "price": "269",
      "goodname": "Colorful SL500红粉佳人限量版（360GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/231/cepX7x7KS1bC6.jpg",
      "capacity": "250GB",
      "interface": "mSATA接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11441584679.html",
      "price": "719",
      "goodname": "三星850 EVO mSATA（250GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/834/celf7rbTCFMF.jpg",
      "capacity": "1TB",
      "interface": "SATA",
      "readspeed": "565MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7897121.html",
      "price": "1299",
      "goodname": "惠普S700 Pro（1TB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/834/cecYxW816Vk.jpg",
      "capacity": "2TB",
      "interface": "USB3.1接口",
      "readspeed": "550MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6510894.html",
      "price": "3499",
      "goodname": "闪迪至尊极速E60（2TB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/188_120x90/372/ce3RHHT3D8iTs.jpg",
      "capacity": "120GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1350MB/s",
      "writespeed": "700MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28931081309.html",
      "price": "299",
      "goodname": "东芝RC100 M.2 2242（120GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/199_120x90/830/cexSvCJrwie9Y.jpg",
      "capacity": "960GB",
      "interface": "SATA3",
      "readspeed": "500MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000698165.html",
      "price": "899",
      "goodname": "金士顿FURY SHFR960（960GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/172_120x90/157/cebKjL1VdaSw.jpg",
      "capacity": "240GB",
      "interface": "SATA3",
      "readspeed": "534MB/s",
      "writespeed": "475MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2632397.html",
      "price": "229",
      "goodname": "朗科超光N550S（240GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/166_120x90/776/cesVktCXhoekg.jpg",
      "capacity": "500GB",
      "interface": "M.2 SATA接口",
      "readspeed": "540MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13680765106.html",
      "price": "999",
      "goodname": "三星850 EVO M.2（500GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/581/ceR9zacNB5P5M.jpg",
      "capacity": "120GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1900MB/s",
      "writespeed": "650MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6245663.html",
      "price": "229",
      "goodname": "惠普EX900 M.2（120GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/946/cesf7lGb78zPA.jpg",
      "capacity": "240GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1600MB/s",
      "writespeed": "1050MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42678208695.html",
      "price": "399",
      "goodname": "东芝RC100 M.2 2242（240GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/311/cebVFp68hqiaE.jpg",
      "capacity": "480GB",
      "interface": "M.2接口",
      "readspeed": "2000MB/s",
      "writespeed": "1500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28881122159.html",
      "price": "459",
      "goodname": "Colorful CN600S（480GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/218/cewKumFyaRiAY.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41462314965.html",
      "price": "418",
      "goodname": "雷克沙NS100（480GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/404/ceIOaW9HEyCpc.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "540MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32843935630.html",
      "price": "118",
      "goodname": "THU 小飞侠系列（120GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/991/ceZrSWuqIlQJ2.jpg",
      "capacity": "960GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "480MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8484245.html",
      "price": "649",
      "goodname": "台电极光 A800（960GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/58/ceb8k0EWYgBDQ.jpg",
      "capacity": "960GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1500MB/s",
      "writespeed": "1000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29818638807.html",
      "price": "1299",
      "goodname": "金士顿A1000（960GB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/76/ce4NL8fLdEd5I.jpg",
      "capacity": "120GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "暂无数据",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29818638804.html",
      "price": "499",
      "goodname": "金士顿A1000（120GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/221/ceyqYYYhrAzg.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "300MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4462509.html",
      "price": "179",
      "goodname": "威刚SU600（120GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/431/ceIjXJo6vWZZ.jpg",
      "capacity": "480GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "240MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27996599004.html",
      "price": "399",
      "goodname": "铭瑄 终结者 X6（480GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/335/ce6w1cInZBaFc.jpg",
      "capacity": "1TB",
      "interface": "M.2接口",
      "readspeed": "3500MB/s",
      "writespeed": "2900MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002852562.html",
      "price": "1699",
      "goodname": "惠普EX950 M.2（1TB）"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/166/ce20jyImeXs96.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "550MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13231865077.html",
      "price": "139",
      "goodname": "雷克沙NS100（120GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/842/ceGNXJuWC1yt2.jpg",
      "capacity": "128GB",
      "interface": "USB3.1接口",
      "readspeed": "260MB/s",
      "writespeed": "150MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001357029.html",
      "price": "249",
      "goodname": "台电S30（128GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/191_120x90/803/cevTWTeCTsUM.jpg",
      "capacity": "480GB",
      "interface": "M.2 SATA接口",
      "readspeed": "1900MB/s",
      "writespeed": "1200MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34143837517.html",
      "price": "688",
      "goodname": "铭瑄 复仇者 NM5 M.2（480GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/331/ceIlyf2LGFOUs.jpg",
      "capacity": "960GB",
      "interface": "SATA3",
      "readspeed": "534MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001760465.html",
      "price": "599",
      "goodname": "朗科超光N530S（960GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/171_120x90/239/ceqqfXQQ7m91o.jpg",
      "capacity": "500GB",
      "interface": "mSATA接口",
      "readspeed": "540MB/s",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11441584681.html",
      "price": "1299",
      "goodname": "三星850 EVO mSATA（500GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/141_120x90/698/cejyRVs3qAf0c.jpg",
      "capacity": "128GB",
      "interface": "SATA3",
      "readspeed": "560MB/s",
      "writespeed": "180MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2421930.html",
      "price": "369",
      "goodname": "威刚SP920（128GB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/180_120x90/211/ceEQwlkcp8HeI.jpg",
      "capacity": "250GB",
      "interface": "USB3.1 Type-C接口",
      "readspeed": "500MB/s",
      "writespeed": "450MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5148514.html",
      "price": "1199",
      "goodname": "威刚SE730（250GB）"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/714/cejUSJ9y8T5BA.jpg",
      "capacity": "120GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "暂无数据",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7725489.html",
      "price": "199",
      "goodname": "朗科绝影N930E（120GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/225/ce3lUm8HOOmRA.jpg",
      "capacity": "1TB",
      "interface": "SATA3",
      "readspeed": "545MB/s",
      "writespeed": "520MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10393327197.html",
      "price": "1969",
      "goodname": "闪迪X400 SATA III（1TB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/57/ce7eN0ZNKCG8s.jpg",
      "capacity": "1.92TB",
      "interface": "SATA REV3.0接口",
      "readspeed": "520MB/s",
      "writespeed": "500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8385989.html",
      "price": "2299",
      "goodname": "金士顿UV500（1.92TB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/883/ceo0e0wVuBWJo.jpg",
      "capacity": "480GB",
      "interface": "M.2 SATA接口",
      "readspeed": "1800MB/s",
      "writespeed": "1500MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34132966523.html",
      "price": "599",
      "goodname": "铭瑄 复仇者NM6C（480GB）"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/199_120x90/693/ce7dbEoh7Zlh2.jpg",
      "capacity": "512GB",
      "interface": "SATA3",
      "readspeed": "暂无数据",
      "writespeed": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27794870887.html",
      "price": "349",
      "goodname": "Colorful SL500（512GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/643/ce5SNWsAlzy.jpg",
      "capacity": "1TB",
      "interface": "M.2 PCIe接口",
      "readspeed": "3200MB/s",
      "writespeed": "1800MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6209326.html",
      "price": "1199",
      "goodname": "惠普EX920 M.2（1TB）"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/178_120x90/313/ceMFjA8WBnEWo.jpg",
      "capacity": "120GB",
      "interface": "M.2 SATA接口",
      "readspeed": "540MB/s",
      "writespeed": "420MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13726230793.html",
      "price": "379",
      "goodname": "金泰克S300 M.2 2280（120GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/864/ceVBx7OdOKNpQ.jpg",
      "capacity": "120GB",
      "interface": "SATA3",
      "readspeed": "480MB/s",
      "writespeed": "420MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/32924392989.html#crumb-wrap",
      "price": "119",
      "goodname": "创久天璇R（120GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/741/ce60KqwXxtSw.jpg",
      "capacity": "32GB",
      "interface": "mSATA接口",
      "readspeed": "255MB/s",
      "writespeed": "81MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25986508042.html",
      "price": "69",
      "goodname": "威士奇V800 MSATA（32GB）"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/185_120x90/702/cektLPmbAFrPc.jpg",
      "capacity": "256GB",
      "interface": "USB3.1接口",
      "readspeed": "440MB/s",
      "writespeed": "430MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15350062590.html",
      "price": "746",
      "goodname": "威刚SD700（256GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/263/ceMcJ0qQsgOYg.jpg",
      "capacity": "256GB",
      "interface": "M.2 PCIe接口",
      "readspeed": "1650MB/s",
      "writespeed": "1000MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41462618544.html",
      "price": "289",
      "goodname": "雷克沙NM500 M.2（256GB）"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/841/cefusybKU2UeE.jpg",
      "capacity": "64GB",
      "interface": "USB3.1接口",
      "readspeed": "260MB/s",
      "writespeed": "150MB/s",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001781586.html",
      "price": "149",
      "goodname": "台电S30（64GB）"
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
      key: "ssddata",
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