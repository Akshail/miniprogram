// pages/fan/index.js
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
    "fandata": [{
      "imageurl": "https://2a.zol-img.com.cn/product/125_120x90/976/ce7opXwJIc7E.jpg",
      "price": "279",
      "kind": "水冷散热器",
      "speed": "800至2000±10%RPM",
      "noise": "12-35dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1025469.html",
      "goodname": "酷冷至尊海魔120"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/944/ceT5nGdLqhFa6.jpg",
      "price": "499",
      "kind": "CPU散热器",
      "speed": "800-1800±10%RPMRPM",
      "noise": "31±10%dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8338349.html",
      "goodname": "超频三偃月RGB240水冷"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/147_120x90/585/ceuhMUFJp2zAs.jpg",
      "price": "2899",
      "kind": "水冷散热器",
      "speed": "1200RPM",
      "noise": "20.7dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1330444.html",
      "goodname": "Tt 零度水冷装备"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/179_120x90/310/ceLu4wKNthyuE.jpg",
      "price": "99",
      "kind": "CPU散热器",
      "speed": "600-1600±10%RPM",
      "noise": "9-31dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33670094595.html",
      "goodname": "酷冷至尊暴雪T400i"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/179_120x90/330/ceDV5RoBOuAEQ.png",
      "price": "129",
      "kind": "CPU散热器",
      "speed": "800-1800±10%RPM",
      "noise": "18-30.5dB",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3311611.html",
      "goodname": "超频三东海X6"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/92_120x90/440/ce6GBxf7Hv6.jpg",
      "price": "219",
      "kind": "CPU散热器",
      "speed": "900±150至1500±10%RPM",
      "noise": "21.4-32.1dB",
      "size": "120×120×26mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/689273.html",
      "goodname": "九州风神大霜塔"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/81_120x90/588/ce4KX4P09Jypk.jpg",
      "price": "89",
      "kind": "CPU散热器",
      "speed": "900±150至1500±10%RPM",
      "noise": "21.4-32.1dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/598827.html",
      "goodname": "九州风神玄冰400"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/128_120x90/712/ce4taWMFIcaW2.jpg",
      "price": "599",
      "kind": "CPU散热器",
      "speed": "600至1600±10%RPM",
      "noise": "36dB",
      "size": "140×140×20mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1058207.html",
      "goodname": "酷冷至尊V8GTS"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/143_120x90/700/ce03BXgL68Kgw.jpg",
      "price": "549",
      "kind": "水冷散热器",
      "speed": "600±200至2200±10%RPM",
      "noise": "17.6-39.3dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/36514631253.html",
      "goodname": "九州风神船长360"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/81_120x90/749/ceyoTbod9Sino.jpg",
      "price": "74",
      "kind": "CPU散热器",
      "speed": "900±150至1600±10%RPM",
      "noise": "17.8-21dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/598826.html",
      "goodname": "九州风神玄冰300"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/464/ceGBwzfgA6Pkg.jpg",
      "price": "399",
      "kind": "CPU散热器",
      "speed": "650-2000±10%RPM",
      "noise": "6-30dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4567820.html",
      "goodname": "酷冷至尊冰神B240"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/370/cePbOUjLS1yo.jpg",
      "price": "2499",
      "kind": "CPU散热器",
      "speed": "450-2000±10%RPM",
      "noise": "29.7dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001108885.html",
      "goodname": "ROG 龙神360"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/357/ceSc2UlVniVWA.jpg",
      "price": "529",
      "kind": "CPU散热器",
      "speed": "500±150-1800±10%RPM",
      "noise": "17.8-30dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6757751.html",
      "goodname": "九州风神堡垒240"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/53_120x90/428/ceCENdeayuZSg.jpg",
      "price": "35",
      "kind": "CPU散热器",
      "speed": "2200±10%RPM",
      "noise": "25dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/302653.html",
      "goodname": "九州风神冰凌MINI旗舰版"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/191_120x90/487/cePt6hh8SUcQo.jpg",
      "price": "329",
      "kind": "CPU散热器",
      "speed": "500±200-1800±10%RPM",
      "noise": "17.8-30dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6454809.html",
      "goodname": "九州风神水元素240RGB"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/131_120x90/28/ceJVIJOdp5wA.jpg",
      "price": "89",
      "kind": "CPU散热器",
      "speed": "800至1800±10%RPM",
      "noise": "18-34.7dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1081683.html",
      "goodname": "超频三东海X4"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/179_120x90/291/ceVWmXnKvRVY.png",
      "price": "99",
      "kind": "CPU散热器",
      "speed": "800-1800±10%RPM",
      "noise": "18-30.5dB",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3242536.html",
      "goodname": "超频三东海X5"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/139_120x90/870/ceycecX4l7TNM.jpg",
      "price": "39",
      "kind": "CPU散热器",
      "speed": "2200±10%RPM",
      "noise": "20±10%dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/164112.html",
      "goodname": "超频三红海Mini静音版"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/139_120x90/633/cepbCZrv1gfdo.jpg",
      "price": "89",
      "kind": "笔记本散热器",
      "speed": "2500至4500RPM",
      "noise": "18-20dB",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1189258.html",
      "goodname": "超频三冰营"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/30_120x90/787/ce9fr73Izjco.jpg",
      "price": "119",
      "kind": "CPU散热器",
      "speed": "900至2000±10%RPM",
      "noise": "12.1-22.8dB",
      "size": "90×90×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/158235.html",
      "goodname": "超频三红海至尊版"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/98_120x90/268/ceT5kLxOshWGw.jpg",
      "price": "64",
      "kind": "CPU散热器",
      "speed": "900±150至1600±10%RPM",
      "noise": "17.8-21dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/804505.html",
      "goodname": "九州风神玄冰智能版"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/969/cep2ejyVd0rxs.jpg",
      "price": "199",
      "kind": "CPU散热器",
      "speed": "800-2000±10%RPM",
      "noise": "18-35.8dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3762171.html",
      "goodname": "超频三巨浪120"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/125_120x90/865/cesH94OjSFyZU.jpg",
      "price": "109",
      "kind": "CPU散热器",
      "speed": "1000至1800±10%RPM",
      "noise": "11-18dB",
      "size": "100×100×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1035235.html",
      "goodname": "超频三铁塔S102"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/896/cerJ9fNaNUUFw.jpg",
      "price": "129",
      "kind": "CPU散热器",
      "speed": "1000-1800±10%RPM",
      "noise": "18-25dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6811607.html",
      "goodname": "超频三降龙"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/472/ceDi1PQXLq9iI.jpg",
      "price": "1999",
      "kind": "CPU散热器",
      "speed": "450-2000±10%RPM",
      "noise": "29.7dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001516122.html",
      "goodname": "ROG 龙神240"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/62_120x90/912/ceRc3DAeSXx6.jpg",
      "price": "39",
      "kind": "CPU散热器",
      "speed": "1500至2500±10%RPM",
      "noise": "16-25±10%dB",
      "size": "90mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1020104.html",
      "goodname": "超频三青鸟4智能版 E92F"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/71_120x90/168/ceGUg6S4QsRMI.jpg",
      "price": "80",
      "kind": "CPU散热器",
      "speed": "1000至2700±10%RPM",
      "noise": "16-25dB",
      "size": "80mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/550276.html",
      "goodname": "超频三刀锋S85"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/60_120x90/126/ceutVCTkpvUJw.jpg",
      "price": "15",
      "kind": "风扇",
      "speed": "3500±10%RPM",
      "noise": "22dB",
      "size": "60×60×10mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/429856.html",
      "goodname": "超频三旋风F-62"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/143_120x90/134/cestUr5ZLQ2nw.jpg",
      "price": "45",
      "kind": "CPU散热器",
      "speed": "1800±10%RPM",
      "noise": "18±10%dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1295377.html",
      "goodname": "超频三红海Mini增强版"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/60_120x90/288/ceG6s6rRILUw.jpg",
      "price": "28",
      "kind": "CPU散热器",
      "speed": "2000±10%至2500±10%RPM",
      "noise": "20-25dB",
      "size": "90mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/781541.html",
      "goodname": "超频三青鸟3 11版 E90"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/70_120x90/833/ceB2PGWNAdtyY.jpg",
      "price": "49",
      "kind": "CPU散热器",
      "speed": "2200±10%RPM",
      "noise": "20dB",
      "size": "100mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/521555.html",
      "goodname": "超频三七星瓢虫V4 Q102"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/167_120x90/620/ceWwq6U2bDJtQ.jpg",
      "price": "71",
      "kind": "CPU散热器",
      "speed": "1800±10％RPM",
      "noise": "22dB",
      "size": "120mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10193827640.html",
      "goodname": "超频三七星瓢虫 v6"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/695/ce9KgdgFOczdk.jpg",
      "price": "259",
      "kind": "CPU散热器",
      "speed": "650-2000±10%RPM",
      "noise": "6-30dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3936189.html",
      "goodname": "酷冷至尊冰神B120i"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/190/cexie5VsREvM.jpg",
      "price": "799",
      "kind": "CPU散热器",
      "speed": "2400RPM",
      "noise": "37dB",
      "size": "120mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33213458240.html",
      "goodname": "海盗船H100i PRO RGB"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/106_120x90/972/cePsPs4Emn4w6.jpg",
      "price": "79",
      "kind": "笔记本散热器",
      "speed": "1000±10%至1300±10%RPM",
      "noise": "24dB",
      "size": "140×140×15mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/821621.html",
      "goodname": "九州风神X6"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/873/cetuqNORGfZig.jpg",
      "price": "69",
      "kind": "CPU散热器",
      "speed": "暂无数据",
      "noise": "22dB",
      "size": "92×92×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/695774.html",
      "goodname": "ANTEC 战虎A40 战斗版"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/191_120x90/752/ceyaHIcygBrbg.jpg",
      "price": "219",
      "kind": "风扇",
      "speed": "1500±10%RPM",
      "noise": "23.5dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5119628.html",
      "goodname": "爱国者八度空间C5套装"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/315/ceUD1GJaped0M.jpg",
      "price": "299",
      "kind": "CPU散热器",
      "speed": "1000-2000±10%RPMRPM",
      "noise": "29.5±10%dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001452324.html",
      "goodname": "超频三GI-D66A"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/31_120x90/536/ceSlhEiUHoVgU.jpg",
      "price": "12",
      "kind": "风扇",
      "speed": "1400±10%RPM",
      "noise": "18dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/159927.html",
      "goodname": "超频三旋风F-82"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/55_120x90/919/ceASt0gGJpHQ.jpg",
      "price": "69",
      "kind": "CPU散热器",
      "speed": "2000±10%RPM",
      "noise": "18dB",
      "size": "90×90×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/358817.html",
      "goodname": "超频三黄海增强版S90D"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/608/cebmN4xi1uw52.jpg",
      "price": "99",
      "kind": "CPU散热器",
      "speed": "800-1800±10%RPM",
      "noise": "18-30.5dB",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30322357426.html",
      "goodname": "超频三东海X6烈焰版"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/116_120x90/706/ceeFFgfl22I.jpg",
      "price": "159",
      "kind": "CPU散热器",
      "speed": "500至1600±10%RPM",
      "noise": "30dB",
      "size": "120×120×15mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1249887.html",
      "goodname": "ID-COOLING IS-60"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/255/ceg8x8C0TBwA.jpg",
      "price": "89",
      "kind": "CPU散热器",
      "speed": "800-2500±10%RPM",
      "noise": "29.6dB",
      "size": "100×100×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000911961.html",
      "goodname": "爱国者谍影RGB"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/133_120x90/342/ceanDA7TXMcM.jpg",
      "price": "19",
      "kind": "风扇",
      "speed": "1200±10%RPM",
      "noise": "23.4dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12275886233.html",
      "goodname": "先马游戏风暴"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/139_120x90/914/ceCHw7TyhU4sU.jpg",
      "price": "179",
      "kind": "笔记本散热器",
      "speed": "950至1800±15%RPM",
      "noise": "21-23dB",
      "size": "80×80×10mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1204946.html",
      "goodname": "酷冷至尊NotePal U3 PLUS"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/147_120x90/141/ceOSyqE1ZS1PA.jpg",
      "price": "69",
      "kind": "笔记本散热器",
      "speed": "1100±10%RPM",
      "noise": "5-31.5dB",
      "size": "125×125×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1276314.html",
      "goodname": "超频三控温大师"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/177_120x90/68/ceD3MCfc7p8JU.jpg",
      "price": "749",
      "kind": "水冷散热器",
      "speed": "2435±10%RPM",
      "noise": "37.7dB",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12191031130.html",
      "goodname": "海盗船H80i V2"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/971/ceopFJHyZyxc.jpg",
      "price": "1199",
      "kind": "CPU散热器",
      "speed": "800-1800±10%RPM",
      "noise": "31.1dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30499392076.html",
      "goodname": "超频三凌冻双擎"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/520/cehb2zkfVdMUs.jpg",
      "price": "49",
      "kind": "CPU散热器",
      "speed": "1800（+-10%）RPM",
      "noise": "33.5dB",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8715501.html",
      "goodname": "Tt 五彩凤梨"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/129_120x90/470/ceksyID7c3cT6.jpg",
      "price": "79",
      "kind": "CPU散热器",
      "speed": "1500±10%RPM",
      "noise": "29±10%dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10196129130.html",
      "goodname": "超频三东海X3"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/68_120x90/687/ceOvZ6eqWwwCY.jpg",
      "price": "60",
      "kind": "CPU散热器",
      "speed": "2200RPM",
      "noise": "18dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/496501.html",
      "goodname": "超频三铁塔mini版 S86"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/130/ceKgST5j4POuE.jpg",
      "price": "499",
      "kind": "水冷散热器",
      "speed": "1500±10%RPM",
      "noise": "＜25dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000254334.html",
      "goodname": "鑫谷冰酷240RGB智领版"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/134_120x90/202/ceiSe2HJgotXc.jpg",
      "price": "219",
      "kind": "水冷散热器",
      "speed": "600±150至1800±10%RPM",
      "noise": "18.2-32.4dB",
      "size": "120×120×20mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1143000.html",
      "goodname": "九州风神水元素120K"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/145_120x90/890/cerRICBSwdPI6.jpg",
      "price": "69",
      "kind": "笔记本散热器",
      "speed": "1500至3300±10%RPM",
      "noise": "5-30dB",
      "size": "75×75×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1276305.html",
      "goodname": "超频三降温大师"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/543/ceguL75G3r4W6.jpg",
      "price": "369",
      "kind": "CPU散热器",
      "speed": "300-1300RPM",
      "noise": "15-21dB",
      "size": "152×140×26.5mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6322116.html",
      "goodname": "利民Macho Rev.B"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/121_120x90/315/ceVBX5PQxb4E.jpg",
      "price": "199",
      "kind": "CPU散热器",
      "speed": "800至2800±10%RPM",
      "noise": "21dB",
      "size": "92×92×15mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1269073.html",
      "goodname": "ID-COOLING IS-VC45"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/150_120x90/776/ce7c0vjjQkZ6.jpg",
      "price": "75",
      "kind": "笔记本散热器",
      "speed": "1200±15%RPM",
      "noise": "21dB",
      "size": "140×140×50mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/881399.html",
      "goodname": "酷冷至尊CME2"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/104_120x90/132/ceEcdmp83j2G2.jpg",
      "price": "129",
      "kind": "笔记本散热器",
      "speed": "700至1200±15%RPM",
      "noise": "20-28dB",
      "size": "140×140×15mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/786825.html",
      "goodname": "酷冷至尊A200"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/60_120x90/258/cethCmq7rov3M.jpg",
      "price": "22",
      "kind": "CPU散热器",
      "speed": "2200±10%RPM",
      "noise": "20dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/374410.html",
      "goodname": "超频三甲壳虫Q82"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/279/ce8inxVVVJUTQ.jpg",
      "price": "149",
      "kind": "CPU散热器",
      "speed": "1000-2000±10%RPMRPM",
      "noise": "18-26.3±10%dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8232287.html",
      "goodname": "超频三东海X4-RGB"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/52_120x90/721/ceCeD4a5bnrMc.jpg",
      "price": "89",
      "kind": "CPU散热器",
      "speed": "2200±10%RPM",
      "noise": "22dB",
      "size": "90×90×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/429861.html",
      "goodname": "超频三红海10增强版"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/191_120x90/700/cehOSvFOyBZFM.jpg",
      "price": "129",
      "kind": "CPU散热器",
      "speed": "800-1800±10%RPM",
      "noise": "18-30.5dB",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30320466779.html",
      "goodname": "超频三东海X6冰川版"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/55_120x90/585/cehK1jGpJRjA.jpg",
      "price": "89",
      "kind": "CPU散热器",
      "speed": "2000±10%RPM",
      "noise": "18dB",
      "size": "90mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/429860.html",
      "goodname": "超频三黄海豪华版"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/59_120x90/362/ce6ioMkt08EcU.jpg",
      "price": "29",
      "kind": "笔记本散热器",
      "speed": "1300±150RPM",
      "noise": "18dB",
      "size": "120mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/358814.html",
      "goodname": "超频三野马普及版"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/139_120x90/753/ce7gqjbOtUG6.jpg",
      "price": "30",
      "kind": "CPU散热器",
      "speed": "1600±10%RPM",
      "noise": "20.2dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1340274.html",
      "goodname": "ID-COOLING DK-03"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/113_120x90/388/ce4wPv8lOnc9g.jpg",
      "price": "62",
      "kind": "CPU散热器",
      "speed": "2200±10%RPM",
      "noise": "26dB",
      "size": "90×90×15mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/868293.html",
      "goodname": "酷冷至尊猎鲨V200"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/179_120x90/504/cetTJ3HAlRQfU.jpg",
      "price": "399",
      "kind": "CPU散热器",
      "speed": "800-2000±10%RPM",
      "noise": "18-35.8dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12370881573.html",
      "goodname": "超频三星际原力S1211"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/199/ceOzODKCN9b0k.jpg",
      "price": "129",
      "kind": "CPU散热器",
      "speed": "暂无数据",
      "noise": "暂无数据",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30187654284.html",
      "goodname": "超频三东海X5-I"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/31_120x90/560/cexyNGk2JoDkA.jpg",
      "price": "25",
      "kind": "风扇",
      "speed": "1200±10%RPM",
      "noise": "16dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/158232.html",
      "goodname": "超频三旋风F-122"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/116_120x90/409/ceJap3dei3JYU.jpg",
      "price": "55",
      "kind": "CPU散热器",
      "speed": "1200至2000±10%RPM",
      "noise": "20dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1009567.html",
      "goodname": "超频三星海S88"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/113_120x90/445/ceiDXYteT7zo.jpg",
      "price": "39",
      "kind": "CPU散热器",
      "speed": "1800±10%RPM",
      "noise": "24dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/895735.html",
      "goodname": "酷冷至尊暗黑120"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/60_120x90/270/cetDmFhczUAM.jpg",
      "price": "35",
      "kind": "显卡散热器",
      "speed": "2000±10%RPM",
      "noise": "18dB",
      "size": "90×90×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/625458.html",
      "goodname": "超频三银甲K91"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/147_120x90/569/ce7rVUwytjrsU.jpg",
      "price": "1099",
      "kind": "水冷散热器",
      "speed": "1000至2000RPM",
      "noise": "20dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1221017.html",
      "goodname": "Tt Water 3.0 Ultimate"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/112_120x90/753/ce54vWas9zyY.jpg",
      "price": "20",
      "kind": "CPU散热器",
      "speed": "2500±10%RPM",
      "noise": "29.5dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/849714.html",
      "goodname": "酷冷至尊夜鹰"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/128_120x90/380/ceF5m2viQ9rts.jpg",
      "price": "59",
      "kind": "笔记本散热器",
      "speed": "1000±10%RPM",
      "noise": "26.3dB",
      "size": "140×140×15mmmm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1066992.html",
      "goodname": "九州风神U PAL"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/55_120x90/835/ceDmwujYKbJvk.jpg",
      "price": "19",
      "kind": "风扇",
      "speed": "2200±10%RPM",
      "noise": "18dB",
      "size": "80×80×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/550266.html",
      "goodname": "超频三疾风F-85"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/112_120x90/908/cenZQiiTF7y2.jpg",
      "price": "99",
      "kind": "笔记本散热器",
      "speed": "700至1400±15%RPM",
      "noise": "16-21dB",
      "size": "160×160×15mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/873164.html",
      "goodname": "酷冷至尊尊睿S100"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/420/cePdo61fMHahs.jpg",
      "price": "29",
      "kind": "机箱风扇",
      "speed": "1200±10%RPM",
      "noise": "16dB",
      "size": "120mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26702159443.html",
      "goodname": "鑫谷光晓GX-12"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/60_120x90/198/ceihO2wqJhFJE.jpg",
      "price": "15",
      "kind": "风扇",
      "speed": "1300±10%RPM",
      "noise": "28dB",
      "size": "70×70×15mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/374849.html",
      "goodname": "超频三旋风F-72"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/566/ce8Mvei0iUsiA.jpg",
      "price": "329",
      "kind": "CPU散热器",
      "speed": "300-1300RPM",
      "noise": "21-33dB",
      "size": "130×120 × 25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6448705.html",
      "goodname": "利民Macho120SBM"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/88_120x90/881/ceQJiaVYy8P7Y.jpg",
      "price": "159",
      "kind": "笔记本散热器",
      "speed": "500至800±15%RPM",
      "noise": "16-23dB",
      "size": "200×200×20mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/596021.html",
      "goodname": "酷冷至尊X3"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/36_120x90/596/ce2q8Za8BUI6A.jpg",
      "price": "19",
      "kind": "显卡散热器",
      "speed": "暂无数据",
      "noise": "暂无数据",
      "size": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/104256.html",
      "goodname": "超频三金鱼"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/841/ceW35SJ7i0hDs.jpg",
      "price": "129",
      "kind": "CPU散热器",
      "speed": "800-1900±10%RPM",
      "noise": "20.3-34.5dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2654980.html",
      "goodname": "ANTEC 铜虎C400"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/145_120x90/535/ce8yblxBMujPU.jpg",
      "price": "19",
      "kind": "风扇",
      "speed": "900±10%RPM",
      "noise": "12-21dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1204326.html",
      "goodname": "游戏悍将刀锋"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/22/ce23S14JLGw.jpg",
      "price": "29",
      "kind": "风扇",
      "speed": "1500±10%RPM",
      "noise": "24.8dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005152778.html",
      "goodname": "鑫谷光翼GE-12"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/486/ceOT1XjeykKwE.jpg",
      "price": "15",
      "kind": "风扇",
      "speed": "1200±10%RPM",
      "noise": "25dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47640448192.html",
      "goodname": "爱国者黑暗骑士X6"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/92_120x90/262/ce3IO9cGaBnMI.jpg",
      "price": "32",
      "kind": "风扇",
      "speed": "暂无数据",
      "noise": "19dB",
      "size": "120×120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/658931.html",
      "goodname": "酷冷至尊镰刀流"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/95/cempHHu9m9Ro.jpg",
      "price": "59",
      "kind": "风扇",
      "speed": "1200±10%RPM",
      "noise": "19dB",
      "size": "120×25mm",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001242972.html",
      "goodname": "航嘉MVP120 追影"
    }
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
      key: "fandata",
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