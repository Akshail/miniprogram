// pages/memory/index.js
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
    "memorydata": [{
      "imageurl": "https://2b.zol-img.com.cn/product/167_120x90/353/ceDh9tAMUGXcI.jpg",
      "price": "259",
      "goodname": "金士顿骇客神条FURY 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2121097.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/314/ceb9wuJM8B46c.jpg",
      "price": "799",
      "goodname": "海盗船复仇者RGB PRO 16GB DDR4 3000",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30672468676.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/174_120x90/705/ce8gWMIGXgyhM.jpg",
      "price": "529",
      "goodname": "金士顿骇客神条FURY 16GB DDR4 2400",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2551276.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/173_120x90/791/ceZMhVCgEfffk.jpg",
      "price": "239",
      "goodname": "影驰GAMER 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10807206712.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/166_120x90/775/ceRWLxM2PrHsw.jpg",
      "price": "299",
      "goodname": "金士顿HyperX Savage 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12163351251.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/576/ceyXBPkxkaCOM.jpg",
      "price": "299",
      "goodname": "科赋BOLT X 8GB DDR4 3200",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34890257463.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/593/ce9RgqH4QBWxI.jpg",
      "price": "489",
      "goodname": "威刚XPG 16GB DDR4 2666",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19151434823.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/180_120x90/407/cea8g1AWP4LIg.jpg",
      "price": "279",
      "goodname": "海盗船复仇者LPX 8GB DDR4 3000",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5536581.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/138_120x90/627/ce5aNu1nFSx3o.jpg",
      "price": "315",
      "goodname": "金士顿骇客神条FURY 8GB DDR3 1866",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1866MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1117003.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/138_120x90/836/cegohxYUg84YY.jpg",
      "price": "149",
      "goodname": "金士顿4GB DDR3 1600",
      "capacity": "4GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29962556752.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/184_120x90/6/ceaOaROlaRp8A.jpg",
      "price": "269",
      "goodname": "金士顿8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4476199.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/96_120x90/954/ce1sZ747VdhNE.jpg",
      "price": "299",
      "goodname": "金士顿8GB DDR3 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/664483.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/178_120x90/826/ce1AYqpRDYE6.jpg",
      "price": "289",
      "goodname": "威刚XPG威龙 8GB DDR4 3200",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19151434820.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/883/ceQuVmuzff2bo.jpg",
      "price": "249",
      "goodname": "铭瑄 复仇者M3 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31460024304.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/997/ceMQGRkBRzb4o.jpg",
      "price": "249",
      "goodname": "海盗船复仇者LPX 8GB DDR4 3000马甲条",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44020286260.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/731/ceCvLbhVdOoaM.jpg",
      "price": "859",
      "goodname": "金士顿HyperX Predator  8GB DDR4 3200",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15228680383.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/652/cel6z9NCxjm5E.jpg",
      "price": "1249",
      "goodname": "海盗船复仇者LPX 32GB DDR4 3200",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3064213.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/184_120x90/264/ce83tTLmBgCM.jpg",
      "price": "639",
      "goodname": "金士顿HyperX Predator  16GB DDR4 3000",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4431691.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/420/cecLVYSwD14X.jpg",
      "price": "399",
      "goodname": "影驰GAMER 极光RGB 16GB DDR4 3000",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24861326892.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/97_120x90/57/ce7bWVmUHlGn.jpg",
      "price": "299",
      "goodname": "金士顿8GB DDR3 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/664484.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/156/cek9CQByMKHHw.jpg",
      "price": "369",
      "goodname": "金士顿骇客神条FURY 8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25926607286.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/773/ceRJ8DBcj2M.jpg",
      "price": "599",
      "goodname": "金士顿骇客神条FURY 16GB DDR4 3200",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005089420.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/195_120x90/448/cerxBWw33SUIA.jpg",
      "price": "599",
      "goodname": "金士顿骇客神条Impact 16GB DDR4 2666",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8173850.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/350/ceHz4u8pTZoak.jpg",
      "price": "799",
      "goodname": "金士顿HyperX Predator 16GB DDR4 3200 RGB",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000798362.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/167_120x90/494/cehCfqhyWILhg.jpg",
      "price": "249",
      "goodname": "威刚XPG威龙 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1945472.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/413/cezeJrf24NZAo.jpg",
      "price": "629",
      "goodname": "海盗船复仇者RGB PRO 16GB DDR4 3000",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002192330.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/777/ceQNd7s0z8J4E.jpg",
      "price": "299",
      "goodname": "金士顿骇客神条FURY 8GB DDR4 3200",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003138151.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/901/ceg0iowYQRzXA.jpg",
      "price": "309",
      "goodname": "英睿达镁光8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24347582576.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/169_120x90/634/cep6Yg6SwJZaM.jpg",
      "price": "499",
      "goodname": "金士顿8GB DDR4 2133",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2133MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29873946960.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/90_120x90/619/cewEvys4fqiY.jpg",
      "price": "189",
      "goodname": "金士顿4GB DDR3 1600",
      "capacity": "4GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28472284718.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/97_120x90/879/ce4xmjuVUIvPk.jpg",
      "price": "269",
      "goodname": "威刚万紫千红 8GB DDR3 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/741538.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/455/cej4I0MpiF2fA.jpg",
      "price": "739",
      "goodname": "海盗船复仇者LPX 16GB DDR4 3000",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2012141.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/169_120x90/191/cef6vbtAm38g.jpg",
      "price": "279",
      "goodname": "金士顿4GB DDR4 2133",
      "capacity": "4GB",
      "kind": "DDR4",
      "hz": "2133MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29876874757.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/167_120x90/589/ceeoIQXJS7kAM.jpg",
      "price": "549",
      "goodname": "海盗船复仇者LPX 16GB DDR4 2400",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2939894.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/332/ce0kZOMWeCbRw.jpg",
      "price": "259",
      "goodname": "三星8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258419.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/100/cem3O8z78toP2.jpg",
      "price": "399",
      "goodname": "三星8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258426.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/444/ceYdOrDEYKk.jpg",
      "price": "1449",
      "goodname": "海盗船复仇者RGB PRO 32GB DDR4 3000",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000350858.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/661/ceXN4svQxBqkU.jpg",
      "price": "519",
      "goodname": "威刚XPG威龙 16GB DDR4 3200",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19151434821.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/554/cecvPxn5MEfAw.jpg",
      "price": "249",
      "goodname": "芝奇AEGIS 8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7063936.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/195_120x90/716/ceSB4GIzTJezw.jpg",
      "price": "269",
      "goodname": "科赋BOLT 雷霆 8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/32531964666.html#crumb-wrap"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/82_120x90/710/ceQjGvGT44Y9M.jpg",
      "price": "299",
      "goodname": "金士顿8GB DDR3 1333",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1333MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/564325.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/739/cenIoOAk6jb7I.jpg",
      "price": "1299",
      "goodname": "金士顿骇客神条FURY 32GB DDR4 2400",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2551254.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/39/cecjjQSkcQ7I.jpg",
      "price": "349",
      "goodname": "三星8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258421.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/378/cezUzRVnvhZFs.jpg",
      "price": "599",
      "goodname": "金士顿骇客神条Impact 16GB DDR4 2666",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8179330.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/188_120x90/491/ceScOvgeqT1jk.jpg",
      "price": "949",
      "goodname": "科赋Cras II 炎龙RGB 16GB DDR4 3200",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32203413280.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/799/ceUE8ZZWzJ9y.jpg",
      "price": "669",
      "goodname": "金士顿骇客神条FURY 16GB DDR4 3200",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005116786.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/88_120x90/374/ceMhNR2Wb6GQ.jpg",
      "price": "139",
      "goodname": "威刚万紫千红 4GB DDR3 1600",
      "capacity": "4GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/665254.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/715/cevoseMZQAHgM.jpg",
      "price": "1599",
      "goodname": "金士顿HyperX Predator  16GB DDR4 3200",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15228680382.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/450/ceh58om0NM9w.jpg",
      "price": "1199",
      "goodname": "影驰HOF 16GB DDR4 3600",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29474859304.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/61_120x90/863/cexGam4C1Pgdw.jpg",
      "price": "159",
      "goodname": "金士顿4GB DDR3 1333",
      "capacity": "4GB",
      "kind": "DDR3",
      "hz": "1333MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/265647.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/107_120x90/559/ce2vllaxbI6s.jpg",
      "price": "99",
      "goodname": "金士顿2GB DDR3 1600",
      "capacity": "2GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/814821.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/644/cedr98s5bMSn6.jpg",
      "price": "769",
      "goodname": "金士顿HyperX Predator 16GB DDR4 3200 RGB",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002595725.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/166_120x90/559/ceWsitD3AGx8I.jpg",
      "price": "399",
      "goodname": "金士顿骇客神条FURY 8GB DDR4 2133",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2133MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31581580422.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/438/cebhvrM6Sevc.jpg",
      "price": "1499",
      "goodname": "海盗船复仇者RGB Pro 32GB DDR4 3200",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000350902.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/373/ceS88EtpHIhI.jpg",
      "price": "359",
      "goodname": "海盗船复仇者RGB PRO 8GB DDR4 3000",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002192320.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/174_120x90/458/cemcWEaKVEl4s.jpg",
      "price": "199",
      "goodname": "金士顿骇客神条FURY 4GB DDR4 2400",
      "capacity": "4GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2551103.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/409/ceuNKAxXHPWdo.jpg",
      "price": "419",
      "goodname": "威刚XPG 8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11039662922.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/138_120x90/555/ceCphylCv002.jpg",
      "price": "299",
      "goodname": "金士顿骇客神条FURY 8GB DDR3 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1099630.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/187_120x90/138/ceSo6LLCZ2FWc.jpg",
      "price": "279",
      "goodname": "影驰GAMER 极光RGB 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24861326891.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/247/ceBVERK0hm5mQ.jpg",
      "price": "899",
      "goodname": "三星16GB DDR4 2666",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258429.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/181/ceJduASVICB0U.jpg",
      "price": "259",
      "goodname": "三星8GB DDR4 2133",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2133MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258416.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/45_120x90/79/ceY8RxodZWlwU.jpg",
      "price": "109",
      "goodname": "金士顿2GB DDR3 1333",
      "capacity": "2GB",
      "kind": "DDR3",
      "hz": "1333MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/213896.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/113/ceSK8QpZ2rBzA.jpg",
      "price": "1249",
      "goodname": "海盗船复仇者LPX 32GB DDR4 3000",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1990572.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/188_120x90/192/ceX6qyYeVSEM.jpg",
      "price": "119",
      "goodname": "金泰克磐虎 4GB DDR4 2400",
      "capacity": "4GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5416963.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/167_120x90/280/cexzj6up75wEI.jpg",
      "price": "599",
      "goodname": "金士顿骇客神条FURY 16GB DDR4 2400",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2121093.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/169_120x90/117/ceUAlGJ0QrCw.jpg",
      "price": "1599",
      "goodname": "海盗船统治者铂金 32GB DDR4 3000",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2132492.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/153_120x90/776/ce2tgPqJVmjJA.jpg",
      "price": "389",
      "goodname": "海盗船复仇者LPX 8GB DDR4 2400 ",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1451450.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/972/ceA74kN7l2QE.jpg",
      "price": "229",
      "goodname": "威刚XPG威龙 8GB DDR4 2800",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2800MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19151434822.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/312/cegaxNGWmiV.jpg",
      "price": "1499",
      "goodname": "海盗船复仇者RGB Pro 16GB DDR4 3600",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30345583529.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/169_120x90/877/ceb5G00573o.jpg",
      "price": "279",
      "goodname": "金士顿骇客神条Impact 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2209498.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/417/ceGt0xwbIAlg.jpg",
      "price": "3499",
      "goodname": "海盗船复仇者RGB PRO 64GB DDR4 3000",
      "capacity": "64GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000402899.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/166_120x90/568/ceeENYxZVK4A.jpg",
      "price": "979",
      "goodname": "海盗船统治者铂金 16GB DDR4 3000",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2012148.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/165_120x90/637/ceqSPMnFFKxM.jpg",
      "price": "199",
      "goodname": "光威悍将 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3641308.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/627/ceAkza4MvqYs.jpg",
      "price": "299",
      "goodname": "芝奇Flare X 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/4925960.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/570/ceKexwKsRyoBk.jpg",
      "price": "239",
      "goodname": "科赋BOLT X 8GB DDR4 2666",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25530791594.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/124/ceDaNSgfP3M6.jpg",
      "price": "659",
      "goodname": "三星16GB DDR4 2666",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258422.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/167_120x90/94/ceDu1EtwdJw0Y.jpg",
      "price": "269",
      "goodname": "芝奇Ripjaws4 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8752916.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/111/cesC9vLDEPNM.jpg",
      "price": "849",
      "goodname": "三星16GB DDR4 2400",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258420.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/111_120x90/763/cenSsfGPPcTWs.jpg",
      "price": "269",
      "goodname": "威刚8GB DDR3L 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/752948.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/64_120x90/291/ceUlxxZcmShQ.jpg",
      "price": "268",
      "goodname": "ThinkPad 4GB DDR3 1333",
      "capacity": "4GB",
      "kind": "DDR3",
      "hz": "1333MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10602043317.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/70_120x90/495/ceoeWGMjeohfE.jpg",
      "price": "299",
      "goodname": "芝奇8GB DDR3 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/348609.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/179_120x90/103/ceBSAAShaUpgw.jpg",
      "price": "559",
      "goodname": "威刚XPG威龙 16GB DDR4 2400",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29568466950.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/238/ceEu1l4tMkthA.jpg",
      "price": "279",
      "goodname": "影驰GAMER Ⅱ 8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25774181926.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/178_120x90/757/ceAfzBrhrfzv2.jpg",
      "price": "699",
      "goodname": "威刚XPG威龙 16GB DDR4 3200",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/3064135.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/15/ce2BgEyGnA21I.jpg",
      "price": "759",
      "goodname": "威刚XPG龙耀D41 RGB 16GB DDR4 3000",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "3000MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32641401753.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/612/celvqS0IHQNu2.jpg",
      "price": "389",
      "goodname": "三星8GB DDR4 2400",
      "capacity": "8GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258425.html"
    },
      {
        "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/699/cevclVBvtepEw.jpg",
        "price": "429",
        "goodname": "金士顿HyperX Predator 8GB DDR4 3200",
        "capacity": "8GB",
        "kind": "DDR4",
        "hz": "3200MHz",
        "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000798274.html"
      },
		{
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/715/cecxrifmXBDDM.jpg",
      "price": "759",
      "goodname": "威刚XPG龙耀D41 RGB 16GB DDR4 2666",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2666MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32641401754.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/138_120x90/902/ceAyLvxKGhF.jpg",
      "price": "379",
      "goodname": "金士顿骇客神条Impact 8GB DDR3 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1153795.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/315/cePL5ZhBzXv8Q.jpg",
      "price": "1949",
      "goodname": "海盗船复仇者RGB Pro 32GB DDR4 3200",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "3200MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30672468680.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/116_120x90/761/cepvrxqJtC8aw.jpg",
      "price": "399",
      "goodname": "海盗船8GB DDR3 1600",
      "capacity": "8GB",
      "kind": "DDR3",
      "hz": "1600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/333198.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/998/ceDYxaqsBIkSo.jpg",
      "price": "249",
      "goodname": "三星4GB DDR4 2133",
      "capacity": "4GB",
      "kind": "DDR4",
      "hz": "2133MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258415.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/779/ceOF6uWO9ms.jpg",
      "price": "2569",
      "goodname": "金士顿HyperX Predator  32GB DDR4 3600",
      "capacity": "32GB",
      "kind": "DDR4",
      "hz": "3600MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24430539448.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/166_120x90/311/ce80aM4QLeR3o.jpg",
      "price": "729",
      "goodname": "金士顿HyperX Savage 16GB DDR4 2400",
      "capacity": "16GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10485251066.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/786/cebBJZe8OXW0.jpg",
      "price": "229",
      "goodname": "三星4GB DDR4 2400",
      "capacity": "4GB",
      "kind": "DDR4",
      "hz": "2400MHz",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39203258418.html"
    },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      key: "memorydata",
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