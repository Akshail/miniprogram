// pages/box/index.js
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
    "boxdata": [{
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/854/cejEFRnVQpe02.jpg",
      "goodname": "航嘉GX580H（白色）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "219",
      "plunge": "7个",
      "material": "钢板机身，ABS面板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42817376411.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/107/cekIdsOtlXNW.jpg",
      "goodname": "金河田峥嵘Z30",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "429",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001961570.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/185_120x90/323/ceAdl9fYkp6lk.jpg",
      "goodname": "Tt 启航者F1",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "169",
      "plunge": "4个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4607987.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/189_120x90/861/ceLJh0aq0LG1E.jpg",
      "goodname": "鑫谷凡仕F1",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6362220.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/716/ceNfzdoXy5u1w.jpg",
      "goodname": "爱国者YOGO M2",
      "kind": "游戏机箱",
      "structure": "MATX",
      "price": "199",
      "plunge": "4个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004999652.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/445/ceuTpwIn0VES6.jpg",
      "goodname": "鑫谷沙漠之鹰MAX",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "1699",
      "plunge": "2个",
      "material": "铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002227214.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/175_120x90/300/ceRMGtf7MWxo.jpg",
      "goodname": "酷冷至尊毁灭者RC-K100",
      "kind": "台式机箱（中塔）",
      "structure": "MATX，ATX",
      "price": "239",
      "plunge": "7个",
      "material": "SECC（电解镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/123814.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/20/ce4dMfH6vC0Y2.jpg",
      "goodname": "爱国者月光宝盒 T20（炫光版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "359",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带），钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7434526.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/847/ceEqKom9GH4Kg.jpg",
      "goodname": "爱国者月光宝盒 棱",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "349",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005399470.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/851/ceU6i272fNNgA.jpg",
      "goodname": "游戏悍将黑金静音版",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "599",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001858517.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/173_120x90/710/cevMbtewxxZpo.jpg",
      "goodname": "爱国者黑曼巴",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "269",
      "plunge": "暂无数据",
      "material": "带钢（锌粉烤漆）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3106610.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/177_120x90/663/ceEpndRcuve4U.jpg",
      "goodname": "GAMEMAX 电竞2号",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "钣金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3434591.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/943/ceuGx0eqd4CkI.jpg",
      "goodname": "航嘉GX500T",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "179",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555481.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/189_120x90/861/ceLJh0aq0LG1E.jpg",
      "goodname": "鑫谷凡仕F1",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6362220.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/25/ceq9ogoqHUkRo.jpg",
      "goodname": "鑫谷刑天",
      "kind": "台式机箱（中塔）",
      "structure": "ATX2.0",
      "price": "259",
      "plunge": "8个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005145110.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/753/ceOuRbs3vhRro.jpg",
      "goodname": "航嘉GS500C",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "129",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001118724.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/184_120x90/416/ceqmJYJh8scyM.jpg",
      "goodname": "Tt 启航者S5",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "139",
      "plunge": "7个",
      "material": "钢",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11702913543.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/318/ce06mWXe23sXo.jpg",
      "goodname": "航嘉MVP3 觉醒",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555463.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/165_120x90/579/cebHBwV6SCaUQ.jpg",
      "goodname": "先马黑洞",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "279",
      "plunge": "7个",
      "material": "钢板全黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1842778.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/182_120x90/917/ceBkkALpe85g.jpg",
      "goodname": "金河田21+峥嵘 Z2",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4991788.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/185_120x90/542/ceRqYiKIpj1sE.jpg",
      "goodname": "海盗船CRYSTAL 570X RGB",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "1379",
      "plunge": "7个",
      "material": "钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4439301.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/50/ceuJMByR69BoU.jpg",
      "goodname": "超频三暴雪",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "489",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31578783563.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/191_120x90/715/ceJSYhbq4ptJE.jpg",
      "goodname": "金河田铝箱系列 MATE3",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "359",
      "plunge": "4个",
      "material": "铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8374717.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/354/ceG1fgBERfFec.jpg",
      "goodname": "金河田静音坊P1",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003441833.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/159/ceeCdzWgRFuZQ.jpg",
      "goodname": "爱国者炫影",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "219",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15309248997.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/819/ceewh2GTYa8ZE.jpg",
      "goodname": "先马黑洞5（魔镜版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "439",
      "plunge": "8个（支持4卡互联）",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8374739.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/143_120x90/506/cegaU4Hvke2.jpg",
      "goodname": "海盗船780T",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "1499",
      "plunge": "9个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31894920963.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/467/ceOI274dvGtLM.jpg",
      "goodname": "IN WIN Z-Tower",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "39999",
      "plunge": "暂无数据",
      "material": "铝合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001781746.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/212/ceui3dR3aLcVY.jpg",
      "goodname": "金河田21+峥嵘 MUT1",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "279",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7649371.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/161/cefWh2ZfSI5ww.jpg",
      "goodname": "安钛克P7（静音版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SGCC（热浸镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7186031.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/167_120x90/374/ceMUKeIP27vrA.jpg",
      "goodname": "ICE 甲壳虫2",
      "kind": "台式机箱（mini）",
      "structure": "MATX，Mini-ITX",
      "price": "109",
      "plunge": "4个",
      "material": "SGCC（热浸镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13218448930.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/209/cePZgl5XOj66k.jpg",
      "goodname": "酷冷至尊MasterCase H500P",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "999",
      "plunge": "7个+2个（支持垂直显卡安装）",
      "material": "外观：塑壳，钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5626002.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/830/ceAOZJuIg5Is.jpg",
      "goodname": "航嘉GX580H（黑色）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "199",
      "plunge": "7个",
      "material": "钢板机身，ABS面板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42817376410.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/486/ceKgbuXKhozjM.jpg",
      "goodname": "金河田银狐19",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "1299",
      "plunge": "7个",
      "material": "铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42199734178.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/166_120x90/253/ce9AxQZoXFyOw.jpg",
      "goodname": "先马米立方",
      "kind": "游戏机箱",
      "structure": "MATX",
      "price": "189",
      "plunge": "4个",
      "material": "五金黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1884047.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/174_120x90/972/ce8mXkI7dKFs.jpg",
      "goodname": "IN WIN 303",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "659",
      "plunge": "7个",
      "material": "SECC（电解镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2685331.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/187_120x90/666/ceXDhCYLBkIAo.jpg",
      "goodname": "先马工匠5号",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "159",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4515411.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/146_120x90/205/cemDNdaiDtes.jpg",
      "goodname": "Tt 启航者S3",
      "kind": "台式机箱（mini）",
      "structure": "电源类型：标准ATX PS（标配",
      "price": "99",
      "plunge": "5个",
      "material": "钢板机身，工程塑料ABS",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1186783.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/442/ceHbRn0mf2TC.jpg",
      "goodname": "Tt View 71 TG RGB",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "1399",
      "plunge": "8个+2个",
      "material": "SPCC（轧碳钢薄板及带），钢化玻璃（....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4946589.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/583/cejqJU1IExx2.jpg",
      "goodname": "游戏悍将境界1四面玻璃",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "689",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000561882.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/790/cetJ5At3gdsI.jpg",
      "goodname": "鑫谷灵致V",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "149",
      "plunge": "4个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000528269.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/188_120x90/880/ceI9bzcT2ZJ7E.jpg",
      "goodname": "爱国者月光宝盒破晓",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "269",
      "plunge": "7个",
      "material": "面板：铝，侧透：玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5001245.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/673/ce7KRgQiO4r7g.jpg",
      "goodname": "酷冷至尊Q300L",
      "kind": "台式机箱（中塔）",
      "structure": "MATX",
      "price": "299",
      "plunge": "4个",
      "material": "塑料+钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000105376.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/222/ceopo8IgdXwE.jpg",
      "goodname": "酷冷至尊MasterBox Lite 5 睿",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "279",
      "plunge": "7个",
      "material": "镀锌钢板，塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13613718076.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/584/ceSnF9xMZr5c.jpg",
      "goodname": "爱国者月光宝盒 T20（精艺版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带），钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7649067.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/168_120x90/812/ceh7HVMhL6kT6.jpg",
      "goodname": "乔思伯UMX1 PLUS（侧窗版）",
      "kind": "台式机箱（mini）",
      "structure": "ITX",
      "price": "489",
      "plunge": "2个",
      "material": "2.0mm合金铝板（阳极拉丝工艺）+透明....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12476641123.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/177_120x90/15/ceteJc5kjgIEw.jpg",
      "goodname": "航嘉MVP2",
      "kind": "台式机箱",
      "structure": "ATX",
      "price": "229",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11066341796.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/149_120x90/309/cey4JHlccgc.jpg",
      "goodname": "海盗船380T",
      "kind": "台式机箱（mini）",
      "structure": "mini ITX",
      "price": "899",
      "plunge": "暂无数据",
      "material": "钢和塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/23614305444.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/143_120x90/877/cea94whuudt.jpg",
      "goodname": "先马碳立方",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "269",
      "plunge": "4个",
      "material": "SPCC",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1263769.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/885/ceIDIkBRQMsk2.jpg",
      "goodname": "爱国者月光宝盒曜",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "499",
      "plunge": "7个",
      "material": "机身：SPCC，面板：ABS",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24672924992.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/490/cez3iA8tGVd6Y.jpg",
      "goodname": "Tt Level 20 GT RGB Plus",
      "kind": "台式机箱（全塔）",
      "structure": "电源类型：PS2 PSU（选配）",
      "price": "1699",
      "plunge": "8个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000347018.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/292/ce1e7L2mTHTXY.jpg",
      "goodname": "鑫谷光韵7plus",
      "kind": "台式机箱（中塔）",
      "structure": "ATX2.0",
      "price": "169",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7080672.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/188_120x90/669/ce7uR2HrhRM.jpg",
      "goodname": "先马厚道先生G1",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "279",
      "plunge": "8个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5677621.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/173_120x90/442/ce6xte3mTSTGw.jpg",
      "goodname": "鑫谷LUX拉克斯",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "199",
      "plunge": "7",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14704308290.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/91_120x90/244/ce9khqiQcjtEY.jpg",
      "goodname": "酷冷至尊魔方（RC-120A-KKN1）",
      "kind": "台式机箱（mini）",
      "structure": "ITX",
      "price": "239",
      "plunge": "2个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/962972.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/506/ceVfV73oScRo.jpg",
      "goodname": "Phanteks追风者217XE新概念ITX电竞水冷VR全",
      "kind": "台式机箱（mini）",
      "structure": "ITX",
      "price": "1299",
      "plunge": "2个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4615767.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/272/ceiNwHz5vXq1I.jpg",
      "goodname": "酷冷至尊COSMOS C700P",
      "kind": "台式机箱（全塔）",
      "structure": "面板接口：USB3.0接口 x4<br",
      "price": "2101",
      "plunge": "8个",
      "material": "外观：铝，钢,塑壳,钢",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6578072.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/422/ceDjh9KPvkXM.jpg",
      "goodname": "鑫谷凡仕S1",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "279",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7093169.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/168_120x90/924/ceaXsgmJdpQRY.jpg",
      "goodname": "乔思伯UMX4钢化玻璃板",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "799",
      "plunge": "7个",
      "material": "箱体：全为2.0mm铝镁合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6156802.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/832/ceLXUo9jZpBA.jpg",
      "goodname": "先马璃光1号",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "309",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7299660.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/8/cerBlrpV1Vag.jpg",
      "goodname": "先马涡轮(璃彩版黑)",
      "kind": "游戏机箱",
      "structure": "ATX，MATX，ITX，",
      "price": "399",
      "plunge": "8个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/36526000876.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/168_120x90/308/ceyDVv7kMlIk.jpg",
      "goodname": "Tt Core P5",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "879",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2105544.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/191/ceobuOe3LqqOU.jpg",
      "goodname": "华硕玩家国度ROG Strix Helios",
      "kind": "台式机箱（全塔）",
      "structure": "面板接口：USB3.1 Gen2接口",
      "price": "1999",
      "plunge": "暂无数据",
      "material": "钢化玻璃/钢材/塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004887526.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/185_120x90/350/cewD4dEN1TWx2.jpg",
      "goodname": "Tt 启航者F1 静音版",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "169",
      "plunge": "4个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4462529.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/122_120x90/90/cekEknpdhhJIs.jpg",
      "goodname": "先马天机",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "129",
      "plunge": "4个",
      "material": "钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/991533.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/959/cepaaGIheLmE.jpg",
      "goodname": "航嘉GX600P",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "229",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555477.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/715/ceTSjj6ZyA4s.jpg",
      "goodname": "安钛克P110（静音版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "499",
      "plunge": "8（水平）+2（垂直）",
      "material": "铝，钢，ABS",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5186691.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/174_120x90/386/ceVL46GUykDjQ.jpg",
      "goodname": "先马方舟",
      "kind": "游戏机箱",
      "structure": "MATX，ATX，ITX",
      "price": "499",
      "plunge": "8个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2839723.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/64/ceuzMeB99bJhU.jpg",
      "goodname": "撒哈拉太空船",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "29999",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10466888555.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/168_120x90/760/ceyKoWNcJ91XY.jpg",
      "goodname": "乔思伯C3",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "259",
      "plunge": "4个",
      "material": "左右侧板，上盖和底板采用1.5mm阳极....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12919388384.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/120_120x90/107/ceFWBSGNDUeMY.jpg",
      "goodname": "先马奇迹3",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "129",
      "plunge": "7个",
      "material": "SPCC",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/670043.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/130_120x90/689/ceAvAyJD2fKiY.jpg",
      "goodname": "NZXT H440",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "599",
      "plunge": "暂无数据",
      "material": "钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1043829.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/103_120x90/969/ceoE3z6cBSHHc.jpg",
      "goodname": "IN WIN H-FRAME",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB3.0接口 x2<br",
      "price": "5980",
      "plunge": "7个",
      "material": "铝合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1179651.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/98/ce0EeWPPSlnMM.jpg",
      "goodname": "骨伽QBX",
      "kind": "台式机箱（mini）",
      "structure": "ITX",
      "price": "399",
      "plunge": "1个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30979945705.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/101_120x90/933/ce1a4suLki2iU.jpg",
      "goodname": "鑫谷沙漠之鹰2代",
      "kind": "台式机箱（mini）",
      "structure": "电源类型：Flex-ATX服务器级",
      "price": "899",
      "plunge": "暂无数据",
      "material": "铝合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001648542.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/77_120x90/872/ce7kBgysbpGQ.jpg",
      "goodname": "酷冷至尊特警365（RC-250C-KKN2）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "179",
      "plunge": "暂无数据",
      "material": "SECC（电解镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/533484.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/128/ceVd3nGOaRbnw.jpg",
      "goodname": "海盗船400C",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "799",
      "plunge": "7个",
      "material": "钢",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/23268197393.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/567/ceMsOwQ10RotY.jpg",
      "goodname": "Tt 挑战者H1（黑色静音版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "289",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002504346.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/131_120x90/472/cebMRgJPvllt2.jpg",
      "goodname": "海盗船Air 540",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "999",
      "plunge": "8个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12987943138.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/821/ceEQlg4xNuJM.jpg",
      "goodname": "酷冷至尊Q300P",
      "kind": "台式机箱（中塔）",
      "structure": "MATX",
      "price": "499",
      "plunge": "4个",
      "material": "塑料+钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6860683.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/144_120x90/599/ceOmMkBH7Lk.jpg",
      "goodname": "IN WIN 904 plus",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB3.0接口 x4<br",
      "price": "1580",
      "plunge": "8个",
      "material": "铝合金，钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1257562.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/183_120x90/62/ce2l5J3NgAFQo.jpg",
      "goodname": "鑫谷宽寂",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "239",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4342689.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/168_120x90/40/ce1xXeC9ztBmg.jpg",
      "goodname": "酷冷至尊侦察兵2（侧透版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "499",
      "plunge": "暂无数据",
      "material": "塑料，钢板，铁网",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/741471.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/99_120x90/54/ceMR0KcFGZZfE.jpg",
      "goodname": "银欣FT03",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "899",
      "plunge": "4个",
      "material": "铝合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://www.jd.com/product/918608.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/119_120x90/893/ceAualHhiA53g.jpg",
      "goodname": "安钛克GX900",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "269",
      "plunge": "7个",
      "material": "SECC（电解镀锌钢板），面板：塑胶+....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/952615.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/832/cecenmFu1jxK2.jpg",
      "goodname": "安钛克P110（侧透版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "549",
      "plunge": "8个（水平）+2（垂直）",
      "material": "铝，钢，ABS，钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5426464.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/465/ceBOZMAZN9WQ.jpg",
      "goodname": "爱国者月光宝盒X",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "359",
      "plunge": "暂无数据",
      "material": "内部：SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2891706.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/689/ceKIlG8F9NGg.jpg",
      "goodname": "九州风神玄冰55",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "189",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8639326.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/184_120x90/12/cebwTy6MdAyCc.jpg",
      "goodname": "金河田21+预见 N15",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "149",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12948445758.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/166_120x90/69/cekoM7Ab0HKME.jpg",
      "goodname": "先马塔里克（侧透版）",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "169",
      "plunge": "7个",
      "material": "五金黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2390101.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/35/ce774oUwtLKvw.jpg",
      "goodname": "IN WIN H-Frame2.0（30周年纪念版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "11500",
      "plunge": "8个",
      "material": "铝合金，钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4263434.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/27/cemST6Pjw0egA.jpg",
      "goodname": "爱国者炫影mini",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "219",
      "plunge": "4个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32789360689.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/120_120x90/470/ceM7Hq5nYPKTo.jpg",
      "goodname": "酷冷至尊克斯摩 SE（COS-5000-KKN1）",
      "kind": "游戏机箱",
      "structure": "电源类型：ATX PS2电源（选",
      "price": "899",
      "plunge": "7个",
      "material": "铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/981267.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/113/ce86jvK7gtOHg.jpg",
      "goodname": "乔思伯C4",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "499",
      "plunge": "7个",
      "material": "机身：铝镁合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5279462.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/168_120x90/516/cecKVtscYG92o.jpg",
      "goodname": "乔思伯RM3",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "549",
      "plunge": "4个",
      "material": "前面板4mm铝板+内部1.0SGCC钢板+5mm....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6203801.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/689/ceVoQYMfvtBGk.jpg",
      "goodname": "Tt Level 20",
      "kind": "台式机箱（全塔）",
      "structure": "电源类型：PS2 PSU（标配）",
      "price": "6889",
      "plunge": "10个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000912029.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/186_120x90/378/ceksoN9ASJCsM.jpg",
      "goodname": "Phanteks追风者P300钢化玻璃RGB水冷机箱",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7",
      "material": "钢质结构，钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7352218.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/177_120x90/527/cenjIc7pShz6.jpg",
      "goodname": "鑫谷光韵HALO",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "159",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3206315.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/168_120x90/286/ceye8GgNaXYyM.jpg",
      "goodname": "酷冷至尊MasterCase Pro 5",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB 3.0接口 x2<b",
      "price": "699",
      "plunge": "暂无数据",
      "material": "镀锌钢板，冲孔网面板，塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1786887.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/168_120x90/402/cegV6FUOgX3jw.jpg",
      "goodname": "乔思伯G3",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "349",
      "plunge": "7个",
      "material": "SECC（电解镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/11246107221.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/185_120x90/292/cePYj7oLMWiM.jpg",
      "goodname": "长城魔镜V200RGB",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "239",
      "plunge": "7个",
      "material": "SGCC（热浸镀锌钢板），钢化玻璃，AB....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4634675.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/304/ce96EJNXm90Ac.jpg",
      "goodname": "爱国者月光宝盒新月",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "459",
      "plunge": "7个",
      "material": "侧板：玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4357069.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/147_120x90/146/ceUf7HgOvqIA.jpg",
      "goodname": "大水牛SLK-豪华侧透版",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "219",
      "plunge": "4个",
      "material": "机身：SPCC钢板；面板：ABS塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1556012793.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/462/ce9r64DLYRYhE.jpg",
      "goodname": "酷冷至尊MasterBox MB600L（静音版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "钢板，塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5065925.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/598/ceU28WhczDQmc.jpg",
      "goodname": "IN WIN A1 Plus",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "1480",
      "plunge": "2个",
      "material": "SECC（电解镀锌钢板），钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003389985.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/500/ce4zTMSVx6VuM.jpg",
      "goodname": "先马灵狐3",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "239",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8502636.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/169_120x90/803/cegU3TxZdqyqQ.jpg",
      "goodname": "爱国者月光宝盒T10",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "239",
      "plunge": "暂无数据",
      "material": "上盖侧板SPCC (烤漆)，内件SPCC(烤漆....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2773748.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/353/cemcvAaP5njo.jpg",
      "goodname": "鑫谷灵致L",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "169",
      "plunge": "4个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002562038.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/9/ce7t1w05GjeI.jpg",
      "goodname": "安钛克P8",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "外壳及框架材质：SPCC（轧碳钢薄板及....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4533075.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/712/ceZXx3mzibIKs.jpg",
      "goodname": "游戏悍将领域1四面玻璃",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "339",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39777454912.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/198_120x90/297/ceRz02EJNto.jpg",
      "goodname": "IN WIN D-Frame2.0（30周年纪念版）",
      "kind": "台式机箱（全塔）",
      "structure": "ITX",
      "price": "12500",
      "plunge": "暂无数据",
      "material": "铝合金，高强度钢管，钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3738281.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/23/ceSaHx0FoYzsk.jpg",
      "goodname": "金河田21+预见V10",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "1059",
      "plunge": "8个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2994587.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/143_120x90/238/ceGnwmStVE9eA.jpg",
      "goodname": "金河田21+预见N-2",
      "kind": "台式机箱（mini）",
      "structure": "电源类型：标准ATX电源",
      "price": "249",
      "plunge": "2个",
      "material": "铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1217437.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/472/cei9Uy8vAbxqc.jpg",
      "goodname": "爱国者月光宝盒 T30（黑色）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "339",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带），钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000425487.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/934/ceBCM3oacj1Sg.jpg",
      "goodname": "酷冷至尊MasterBox Lite 3.1 小睿",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "269",
      "plunge": "4个",
      "material": "铜，塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4458971.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/112_120x90/277/cejsiTRn9dIhQ.jpg",
      "goodname": "Tt Urban S31开窗版",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "259",
      "plunge": "7个",
      "material": "SECC（电解镀锌钢板），面板：铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/867942.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/109_120x90/718/cev08PK6musm2.jpg",
      "goodname": "酷冷至尊毁灭者2代（RC-K600-KKN1）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "269",
      "plunge": "暂无数据",
      "material": "镀锌钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/813293.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/553/cee0XWb9ijVPs.jpg",
      "goodname": "先马商英（黑）",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "129",
      "plunge": "4个",
      "material": "五金黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4394583.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/183_120x90/681/ceMRxhnTZd2U6.jpg",
      "goodname": "爱国者神盾1",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "189",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13828130101.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/342/ce0gUVkY3VEs.jpg",
      "goodname": "九州风神QUADSTELLAR",
      "kind": "四舱机箱",
      "structure": "3.5英寸仓位：1个",
      "price": "2999",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25050145917.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/52/cef2aRViaFcUE.jpg",
      "goodname": "航嘉GX600H",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "269",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555465.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/189_120x90/109/cebssQkdNZ2KU.jpg",
      "goodname": "骨伽PANZER EVO（红光版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "1299",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41900838961.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/643/ceD1GvtwniLo.jpg",
      "goodname": "乔思伯U4",
      "kind": "机箱结构：ATX",
      "structure": "电源类型：标准ATX PSII PSU",
      "price": "299",
      "plunge": "7个",
      "material": "铝镁合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4209217.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/123_120x90/297/cexQ6JvFSMU.jpg",
      "goodname": "先马破坏神5",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "129",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1159400.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/140_120x90/835/ceMDpMMGNVYOs.jpg",
      "goodname": "金河田21+预见N-1",
      "kind": "台式机箱（mini）",
      "structure": "电源类型：标准ATX电源",
      "price": "159",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1217433.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/856/ce57lBb4v4R7M.jpg",
      "goodname": "游戏悍将FORGAME X次元",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "329",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4708559.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/909/ceyavfUuiKSg.jpg",
      "goodname": "海盗船SPEC-OMEGA",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "699",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6148559.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/49/cemOVyjAgP3D2.jpg",
      "goodname": "酷冷至尊毁灭者三代",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "329",
      "plunge": "7个",
      "material": "钢板，塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6214737.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/179_120x90/655/ceajvfLPD6K1M.jpg",
      "goodname": "鑫谷雷诺塔T5全侧透版",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "459",
      "plunge": "8个+2个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3677459.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/168_120x90/238/cexleLXk3CiE.jpg",
      "goodname": "乔思伯RM2",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "289",
      "plunge": "4个",
      "material": "铝合金",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12919388385.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/129_120x90/918/ceRdflj19zXU.jpg",
      "goodname": "IN WIN 904",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB3.0接口 x4<br",
      "price": "1480",
      "plunge": "8个",
      "material": "铝合金，钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1178838.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/172_120x90/133/cemDc0OsmNmg.jpg",
      "goodname": "先马工匠1号",
      "kind": "游戏机箱",
      "structure": "MATX，ATX，ITX",
      "price": "149",
      "plunge": "7个",
      "material": "五金黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2800974.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/979/ceuPdrlMzChF6.jpg",
      "goodname": "航嘉GX500V",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "239",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7341710.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/111_120x90/952/ce4POqUEvn2M.jpg",
      "goodname": "先马领秀 标准版",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "299",
      "plunge": "8个",
      "material": "钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/874610.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/15/ceS9wVgGf6KLQ.jpg",
      "goodname": "金河田铝箱系列 MATE4",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "439",
      "plunge": "6个",
      "material": "铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000805236.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/144/ce9OSRmptPK92.jpg",
      "goodname": "骨伽PANZER-G",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "549",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30980520355.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/839/ce65si4I9qXxM.jpg",
      "goodname": "Tt Core P90 TG",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "1389",
      "plunge": "8个",
      "material": "SPCC（轧碳钢薄板及带），钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5849121.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/391/cejmFD2iTt0w.jpg",
      "goodname": "爱国者月光宝盒影",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "499",
      "plunge": "8个",
      "material": "内部：SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30785347970.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/292/ceMxMeT9v15JY.jpg",
      "goodname": "安钛克P6",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "259",
      "plunge": "7个",
      "material": "SGCC（热浸镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6600741.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/113_120x90/643/ceXxU49jJYAyU.jpg",
      "goodname": "IN WIN H-Frame Mini",
      "kind": "台式机箱（mini）",
      "structure": "电源类型：180W电源（标配）",
      "price": "1189",
      "plunge": "1个",
      "material": "铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1180575.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/180_120x90/822/ceNozlnLkqe8.jpg",
      "goodname": "海盗船270R（静音版）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "1859",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12157706244.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/891/cej1L28MMqfg.jpg",
      "goodname": "Tt 夜魔",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "459",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4311204.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/191_120x90/643/ceUgd6uCRG182.jpg",
      "goodname": "骨伽PANZER",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "399",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42280007982.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/291/cefeMItadMe4A.jpg",
      "goodname": "爱国者自由之翼",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "800",
      "plunge": "暂无数据",
      "material": "左右侧板：钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3647195.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/183_120x90/660/ceVa8xoQRMaHQ.jpg",
      "goodname": "九州风神伯爵RGB",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "249",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15975775007.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/174_120x90/800/cerL6KlJxlQUM.jpg",
      "goodname": "鑫谷EOS爱欧丝全侧透版",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "319",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3177408.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/329/ce3libiDVkk3E.jpg",
      "goodname": "航嘉暮光2",
      "kind": "游戏机箱",
      "structure": "理线功能：背部理线",
      "price": "139",
      "plunge": "4个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003075966.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/932/ce8xHphsfq9MQ.jpg",
      "goodname": "鑫谷图灵3号（太极白）",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "249",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002895387.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/198_120x90/91/ceUVncuuOTJcs.jpg",
      "goodname": "撒哈拉神光7号",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "169",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41952784761.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/816/ceYbjwjLdWsn.jpg",
      "goodname": "联力双子座（限量版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "699",
      "plunge": "9个",
      "material": "钢化玻璃，SPCC钢板，铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001708121.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/80/ceg2gzQupUgOQ.jpg",
      "goodname": "鑫谷图灵LEX",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "259",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003439198.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/441/ceixmKxdG3Tzk.jpg",
      "goodname": "Tt Level 20 XT",
      "kind": "台式机箱（全塔）",
      "structure": "EATX",
      "price": "1319",
      "plunge": "8个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000347046.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/169_120x90/6/ceha4VNbTSSJo.jpg",
      "goodname": "九州风神公爵",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "299",
      "plunge": "暂无数据",
      "material": "SPCC+PLASTIC",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15977365646.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/981/cerlnUePhZRc.jpg",
      "goodname": "海盗船Graphite 780T",
      "kind": "台式机箱（全塔）",
      "structure": "理线功能：背部理线",
      "price": "1259",
      "plunge": "暂无数据",
      "material": "钢，塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1209635.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/42_120x90/948/cePgLyHb0RbgU.jpg",
      "goodname": "酷冷至尊特警342（rc-342）",
      "kind": "台式机箱（mini）",
      "structure": "MATX",
      "price": "209",
      "plunge": "4个",
      "material": "SECC（电解镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/206853.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/335/ce2dDkpeZF1Cs.jpg",
      "goodname": "PHANTEKS追风者217E",
      "kind": "台式机箱（mini）",
      "structure": "ITX",
      "price": "799",
      "plunge": "暂无数据",
      "material": "铝镁合金；钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4615739.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/372/ceSocLMwEJMRM.jpg",
      "goodname": "爱国者T3",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "139",
      "plunge": "暂无数据",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13731280158.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/872/cehCyr25zE4M.jpg",
      "goodname": "鑫谷图灵LEX3",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "279",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003739534.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/258/ceStJd1MXnNU.jpg",
      "goodname": "超频三杰克船长",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "139",
      "plunge": "4个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30754026452.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/704/ceOTWCkkNjEj2.jpg",
      "goodname": "联力包豪斯-O11 WGX（ROG定制版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "2469",
      "plunge": "8个",
      "material": "钢化玻璃，铝合金，SPCC钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7988739.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/185_120x90/656/ceDHjuJnLsLLE.jpg",
      "goodname": "IN WIN 101",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "399",
      "plunge": "7个",
      "material": "SECC（电解镀锌钢板），钢化玻璃，AB....",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5044618.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/623/ceODgpJ9EWUAk.jpg",
      "goodname": "爱国者启程",
      "kind": "游戏机箱，台式机",
      "structure": "ATX",
      "price": "199",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42095580875.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/650/ce46jQjHibXo.jpg",
      "goodname": "联力包豪斯-O11 Air",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "779",
      "plunge": "8个",
      "material": "钢化玻璃，SPCC钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8232295.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/178_120x90/114/ceRokt8cvw4UU.jpg",
      "goodname": "金河田21+预见N-6PLUS",
      "kind": "游戏机箱",
      "structure": "面板接口：USB2.0接口 x1<br",
      "price": "169",
      "plunge": "4个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15975206815.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/153_120x90/878/ceWSNmgPHtSb6.jpg",
      "goodname": "先马梦想家1",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "129",
      "plunge": "4个",
      "material": "钢板全黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1136637.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/131_120x90/397/ce2bIMXEmGgk.jpg",
      "goodname": "IN WIN 901",
      "kind": "台式机箱（mini）",
      "structure": "面板接口：USB3.0接口 x2<br",
      "price": "1280",
      "plunge": "暂无数据",
      "material": "铝板拉丝，玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1178839.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/75_120x90/354/ceXxyzjt5sqmQ.jpg",
      "goodname": "酷冷至尊坦克兵（SGC-5000-KKN1）",
      "kind": "游戏机箱",
      "structure": "理线功能：背部理线",
      "price": "999",
      "plunge": "10个",
      "material": "镀锌钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1318965.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/132_120x90/102/cesNeBjDnkuI.jpg",
      "goodname": "乔思伯QT01",
      "kind": "台式机箱（中塔）",
      "structure": "MATX",
      "price": "399",
      "plunge": "暂无数据",
      "material": "钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11544442234.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/187_120x90/114/ceOacbLqOKQU.jpg",
      "goodname": "鑫谷轩朗1号",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "99",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25754304403.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/184_120x90/228/cep4z4E6Aqq5E.jpg",
      "goodname": "Phanteks追风者PK614P双路主板双水冷服备器",
      "kind": "台式机箱（全塔）",
      "structure": "EATX",
      "price": "699",
      "plunge": "8",
      "material": "外部：钢+ABS工程塑胶面板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6275336.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/250/cerSCpVZTI2ZU.jpg",
      "goodname": "IN WIN X-Frame2.0（30周年纪念版）",
      "kind": "台式机箱（全塔）",
      "structure": "ITX",
      "price": "11500",
      "plunge": "暂无数据",
      "material": "铝合金，高强度钢管，钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4305218.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/783/ceR3z0wo8gmKQ.jpg",
      "goodname": "金河田D9",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "159",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004920192.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/131_120x90/820/ce6vVkICatmFs.jpg",
      "goodname": "海盗船230T",
      "kind": "游戏机箱",
      "structure": "面板接口：USB3.0接口 x2<br",
      "price": "979",
      "plunge": "暂无数据",
      "material": "侧板：钢材和铝，面板：塑料",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12154315358.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/340/ceJK9VsoF2l3E.jpg",
      "goodname": "航嘉GX560i光影",
      "kind": "台式机箱（中塔）",
      "structure": "电源类型：ATX（标配）",
      "price": "219",
      "plunge": "7个",
      "material": "SPCC",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002131139.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/184_120x90/840/ceRZkVEc3Iiu2.jpg",
      "goodname": "先马逾辉杰作1",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "149",
      "plunge": "暂无数据",
      "material": "五金黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5180672.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/589/cenCeksaKCQI.jpg",
      "goodname": "超频三荣耀Z1",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB2.0接口 x2<br",
      "price": "219",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30752761301.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/888/ce8WhVSrC1NI.jpg",
      "goodname": "IN WIN 101 TUF GAMING",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "599",
      "plunge": "暂无数据",
      "material": "SECC（电解镀锌钢板），钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6600813.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/307/ceoqfr6TNCaYQ.jpg",
      "goodname": "ICE 琥珀",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "499",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带），钢化玻璃",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13645722719.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/199_120x90/351/ceFY8Aniwm36.jpg",
      "goodname": "金河田21+预见 A2B",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "88",
      "plunge": "6个",
      "material": "黑化五金板材+全新ABS",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1666223.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/174/ceRXO8uRt13eA.jpg",
      "goodname": "金河田21+峥嵘 Z6",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "229",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7175079.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/369/cejVyRS2lGWWE.jpg",
      "goodname": "航嘉暗夜幽灵i",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "169",
      "plunge": "4个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003075952.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/630/cexXdTg8fras.jpg",
      "goodname": "撒哈拉海盗P35",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "249",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13391541692.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/171_120x90/291/ceCJOqudPLzc.jpg",
      "goodname": "鑫谷极光刃",
      "kind": "台式机箱（mini）",
      "structure": "ATX",
      "price": "159",
      "plunge": "4个",
      "material": "烤黑钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40773212000.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/122_120x90/348/ceeSvPex3YSA.jpg",
      "goodname": "酷冷至尊剑客",
      "kind": "游戏机箱",
      "structure": "面板接口：USB3.0接口 x1<br",
      "price": "229",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/984157.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/685/ceRWuXpxK00qo.jpg",
      "goodname": "联力包豪斯-O11",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "799",
      "plunge": "8个",
      "material": "钢化玻璃，铝合金，SPCC钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7175027.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/176_120x90/840/cedjdTPtKFn8U.jpg",
      "goodname": "Tt CORE G3",
      "kind": "台式机箱",
      "structure": "ATX",
      "price": "359",
      "plunge": "2个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3783597.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/496/cebZhknntidIY.jpg",
      "goodname": "银欣米罗8 ML08B-H",
      "kind": "台式机箱（mini）",
      "structure": "ITX",
      "price": "559",
      "plunge": "2个",
      "material": "强化塑料外壳，铁质机身",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7434542.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/115_120x90/313/ceR9ergkOqi7o.jpg",
      "goodname": "酷冷至尊蒙面杀手（RC-102C-KKN1）",
      "kind": "台式机箱（中塔）",
      "structure": "电源类型：标准ATX PS2电源",
      "price": "159",
      "plunge": "暂无数据",
      "material": "SGCC（热浸镀锌钢板）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/924642.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/180_120x90/575/cecPDDrpRehUM.jpg",
      "goodname": "先马守望者",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "299",
      "plunge": "8个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4415553.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/602/ceCyEEyg8IL.jpg",
      "goodname": "游戏悍将天空之城（双面玻璃）",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "269",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6973162.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/800/cecJo73N4RsE.jpg",
      "goodname": "联力双子座（幻彩版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "599",
      "plunge": "9个",
      "material": "钢化玻璃，SPCC钢板，铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8238299.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/146_120x90/846/cevX3FULRkg.jpg",
      "goodname": "IN WIN 707（静音版）",
      "kind": "台式机箱（全塔）",
      "structure": "电源类型：ATX 12V，PSII Si",
      "price": "719",
      "plunge": "8个",
      "material": "环保镀锌钢板，静音棉",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1257566.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/660/cezeOFR9eelUE.jpg",
      "goodname": "联力包豪斯-O11 Razer（雷蛇版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "1199",
      "plunge": "8个",
      "material": "钢化玻璃，铝合金，SPCC钢板",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003124866.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/132/ceIfPvUyN0urk.jpg",
      "goodname": "撒哈拉神光1号",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "119",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41952784762.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/116/ceMnZL099zKc.jpg",
      "goodname": "金河田21+峥嵘 Z1",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "299",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/5002796.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/120_120x90/650/ce5qx6sRTrdTw.jpg",
      "goodname": "金河田启源F19",
      "kind": "游戏机箱",
      "structure": "面板接口：USB3.0接口 x1<br",
      "price": "129",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/974958.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/392/ceEYpS0HioRLI.jpg",
      "goodname": "金河田21+预见 N12",
      "kind": "游戏机箱",
      "structure": "MATX",
      "price": "169",
      "plunge": "4个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15975206817.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/187_120x90/415/cejgnhJaIWDao.jpg",
      "goodname": "游戏悍将黑金",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "598",
      "plunge": "7个",
      "material": "面板材质：ABS",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6174252.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/148_120x90/948/ceUgDJ2ZXG1fc.jpg",
      "goodname": "鑫谷竞速者",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB3.0接口 x1<br",
      "price": "129",
      "plunge": "7个",
      "material": "SPCC",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1550976.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/836/ceHHuI6WtcpQ.jpg",
      "goodname": "撒哈拉海盗P30",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "199",
      "plunge": "暂无数据",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/48436149024.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/179_120x90/661/ce1L8yQ92TQU6.jpg",
      "goodname": "先马塞恩5",
      "kind": "游戏机箱",
      "structure": "ATX",
      "price": "229",
      "plunge": "7个",
      "material": "五金黑化",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13703059158.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/183_120x90/599/cedWmGrCpspVE.jpg",
      "goodname": "爱国者神盾2",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "189",
      "plunge": "7个",
      "material": "SPCC（轧碳钢薄板及带）",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13828115798.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/198_120x90/827/ceGtRXLKTiL3g.jpg",
      "goodname": "联力双子座（RGB版）",
      "kind": "台式机箱（全塔）",
      "structure": "ATX",
      "price": "559",
      "plunge": "9个",
      "material": "钢化玻璃，SPCC钢板，铝",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8018330.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/135_120x90/137/ceNSZMVhsMO2.jpg",
      "goodname": "海盗船SPEC-03",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB3.0接口 x2<br",
      "price": "729",
      "plunge": "7个",
      "material": "钢材，拉丝铝制",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12154854637.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/62/cehXVsaeXG0.jpg",
      "goodname": "GAMEMAX 午夜之子",
      "kind": "台式机箱（中塔）",
      "structure": "ATX",
      "price": "209",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002147140.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/178_120x90/382/ceMBxbRJxD34.jpg",
      "goodname": "金河田21+预见 V5",
      "kind": "台式机箱（中塔）",
      "structure": "面板接口：USB3.0接口 x1<br",
      "price": "149",
      "plunge": "7个",
      "material": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3577119.html",
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
      key: "boxdata",
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