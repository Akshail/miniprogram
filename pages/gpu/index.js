// pages/gpu/index.js
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
    "gpudata": [{
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/461/ce6ElKKfHpLuU.jpg",
      "price": "9899",
      "goodname": "七彩虹iGame GeForce RTX 2080 Ti Advanced OC",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8963629.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/178_120x90/816/ce78Cz55X5vQE.jpg",
      "price": "1099",
      "goodname": "影驰GeForce GTX 1050Ti大将",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3472255.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/743/ceDQbzkyWEoA.jpg",
      "price": "9999",
      "goodname": "NVIDIA GeForce RTX 2080Ti Founders Edition",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000435614.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/539/cepD5khkNNEzM.jpg",
      "price": "2349",
      "goodname": "铭瑄 GeForce RTX 2060 终结者 6G",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002017341.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/513/ceF3Kl2vTyw.jpg",
      "price": "1349",
      "goodname": "迪兰RX 580 2048SP 8G X-Serial 战将",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/36529198359.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/64/ceCt45vgBcI3M.jpg",
      "price": "3099",
      "goodname": "索泰GeForce RTX 2060-6GD6 至尊PLUS OC6",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002822298.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/169/ceoukTiRj14F6.jpg",
      "price": "1699",
      "goodname": "蓝宝石RX 590 8G D5 超白金 OC",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002293180.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/174_120x90/92/celkWRFkP9Ss.jpg",
      "price": "2099",
      "goodname": "微星GeForce GTX 1060 GAMING X 6G",
      "hz": "8008/8108MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3295240.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/478/ceACqfe1DlIFE.png",
      "price": "5299",
      "goodname": "华硕ROG-STRIX-RTX 2070-O8G-GAMING",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34807685780.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/478/ceACqfe1DlIFE.png",
      "price": "5299",
      "goodname": "华硕ROG-STRIX-RTX 2070-O8G-GAMING",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34807685780.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/271/ceBPpxxTqc.jpg",
      "price": "2199",
      "goodname": "七彩虹iGame GeForce GTX 1660 Ti Ultra 6G",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003098848.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/622/ceVqxIyT99IHM.jpg",
      "price": "1199",
      "goodname": "铭瑄 MS-RX 580 2048SP 巨无霸 8G",
      "hz": "7000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001937411.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/965/ceCCvsYhITCg.jpg",
      "price": "4599",
      "goodname": "七彩虹iGame GeForce RTX 2070 Ultra OC",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34661160448.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/858/cenKQGtQESBUE.jpg",
      "price": "2299",
      "goodname": "索泰GeForce GTX 1660Ti-6GD6 X-GAMING OC",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002242949.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/203/ceQqS9JthdPoc.jpg",
      "price": "2899",
      "goodname": "七彩虹iGame GeForce RTX 2060 Ultra",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002004455.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/406/cedwOva3FvSHM.jpg",
      "price": "2299",
      "goodname": "影驰GeForce GTX 1660Ti 大将",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002192323.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/823/ce58dITBA73s6.jpg",
      "price": "1999",
      "goodname": "蓝宝石RX 590 8G D5 超白金 极光版",
      "hz": "8400MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001800296.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/87/ceZiq9V97ghew.jpg",
      "price": "999",
      "goodname": "蓝宝石RX 560XT 4G D5 白金版 OC",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43093774595.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/789/cetZw42MZAcsI.jpg",
      "price": "2599",
      "goodname": "微星GeForce GTX 1660Ti GAMING X 6G",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003292774.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/195_120x90/428/cenamwwKYJb9E.jpg",
      "price": "3199",
      "goodname": "影驰GeForce RTX 2060 GAMER",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41187246185.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/59/ceOTPyOGsEaAM.jpg",
      "price": "19999",
      "goodname": "七彩虹iGame GeForce RTX 2080 Ti Kudan",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003148810.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/95/cei1t5AIF3iD2.jpg",
      "price": "1749",
      "goodname": "迪兰DEVIL RX 590 8G V2",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002953193.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/195_120x90/193/cea9vVOkzxMw.jpg",
      "price": "5699",
      "goodname": "AMD Radeon VII",
      "hz": "1000MHz",
      "capacity": "16GB",
      "bitwide": "4096bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002238485.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/28/ce0Brbb8B8xmI.jpg",
      "price": "1799",
      "goodname": "七彩虹iGame GeForce GTX 1660 Ultra 6G",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003739778.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/384/ce5IMLVRqCLhI.jpg",
      "price": "4199",
      "goodname": "影驰GeForce RTX 2070 星曜",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003137801.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/590/cepT1OrP2nsOc.jpg",
      "price": "3599",
      "goodname": "蓝宝石RX 580 8G D5 超白金 限量版",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001232432.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/36/cexOeHcozjlcI.jpg",
      "price": "3369",
      "goodname": "丽台Quadro P2000",
      "hz": "暂无数据",
      "capacity": "5GB",
      "bitwide": "160bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4991746.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/175_120x90/290/cebZGa7LM44uI.jpg",
      "price": "2199",
      "goodname": "影驰GeForce GTX 1060 GAMER 6GB",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin+6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33201698891.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/914/ceAtEGnhSSCLc.jpg",
      "price": "7699",
      "goodname": "华硕ROG STRIX-RTX 2080-O8G-GAMING",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8963509.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/312/ce7Bo9NUfZiUg.jpg",
      "price": "1599",
      "goodname": "丽台Quadro P620",
      "hz": "暂无数据",
      "capacity": "2GB",
      "bitwide": "128bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6959146.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/199/ceSVcCXyEY8o.jpg",
      "price": "2199",
      "goodname": "华硕PH-GTX 1660Ti-O6G",
      "hz": "12002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003293292.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/537/ceFp026VMBBds.jpg",
      "price": "6999",
      "goodname": "索泰GeForce RTX 2080-8GD6 玩家力量至尊PGF OC12",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001265013.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/515/ceiX7TLTF26wI.jpg",
      "price": "3288",
      "goodname": "影驰GeForce RTX 2060 大将",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002554600.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/973/ceyEvqMRB1whY.jpg",
      "price": "2299",
      "goodname": "技嘉GTX 1660Ti WINDFORCE OC 6G",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003288662.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/215/cepHGOxGwGBk2.jpg",
      "price": "3599",
      "goodname": "微星GeForce RTX 2060 GAMING Z 6G",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002801776.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/165/ceD5AgaBGLo2A.jpg",
      "price": "84500",
      "goodname": "丽台Quadro RTX 8000",
      "hz": "暂无数据",
      "capacity": "48GB",
      "bitwide": "暂无数据",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000208905.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/736/ceMxtuEQS1II.jpg",
      "price": "5999",
      "goodname": "AMD Radeon VII 50周年纪念版",
      "hz": "1000MHz",
      "capacity": "16GB",
      "bitwide": "4096bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005226160.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/169/ceCiQbqOqNhfg.jpg",
      "price": "13999",
      "goodname": "华硕ROG STRIX-RTX 2080Ti-O11G-GAMING",
      "hz": "14000MHZMHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001121028.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/460/cetZwIrL6R9Io.jpg",
      "price": "1799",
      "goodname": "蓝宝石RX 590 8G D5 超白金 纪念版",
      "hz": "8400MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005268262.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/74/ce6Sf04aa2vzk.jpg",
      "price": "2399",
      "goodname": "技嘉GTX 1660Ti GAMING OC 6G",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003288642.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/794/ceAiZaCOTtM.jpg",
      "price": "3599",
      "goodname": "华硕ROG-STRIX-RTX 2060-O6G-GAMING",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002821746.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/174_120x90/75/cem6nTr9gUdBU.jpg",
      "price": "1449",
      "goodname": "索泰GeForce GTX 1060-6GD5 X-Gaming OC",
      "hz": "8008MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3281156.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/469/ceQ9PU6e1pf.jpg",
      "price": "1349",
      "goodname": "迪兰RX 580 2048SP 4G X-Serial 战将",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34319511470.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/323/ceBn0RBxtBZj.jpg",
      "price": "1799",
      "goodname": "索泰GeForce GTX 1660-6GD5毁灭者OC HA",
      "hz": "8002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004032024.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/802/ce4f24mDwNhwo.jpg",
      "price": "5999",
      "goodname": "NVIDIA GeForce RTX 2070 Founders Edition",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000971956.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/195_120x90/520/cemYroYjtenII.jpg",
      "price": "2599",
      "goodname": "影驰GeForce RTX 2060 骁将",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001893787.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/185_120x90/805/ce3Mw834vlYM.jpg",
      "price": "1399",
      "goodname": "迪兰RX 580 8G X-Serial 战神",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27190010409.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/790/cejNcyzrwFj0E.jpg",
      "price": "20990",
      "goodname": "NVIDIA TITAN RTX",
      "hz": "暂无数据",
      "capacity": "24GB",
      "bitwide": "384bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001808707.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/177_120x90/434/ceBfJpJGuS1dQ.jpg",
      "price": "1249",
      "goodname": "七彩虹iGame1050Ti 烈焰战神U-4GD5",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19439596709.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/696/cepzONMsbg81Q.jpg",
      "price": "599",
      "goodname": "影驰GeForce GT 1030虎将",
      "hz": "6000MHz",
      "capacity": "2GB",
      "bitwide": "64bit",
      "interface": "无外接电源接口",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/36315954684.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/198_120x90/993/ceDbkJMPRg7LI.jpg",
      "price": "999",
      "goodname": "铭瑄 GeForce GTX 1650 终结者 4G",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "无外接电源接口",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003558579.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/831/ceQ11ZVKfGEc.jpg",
      "price": "4598",
      "goodname": "七彩虹iGame GeForce RTX 2070 Ultra",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000675501.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/156/cexVXYBaRd5t.jpg",
      "price": "1099",
      "goodname": "蓝宝石RX 580 2048SP 4G D5 白金版",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000784724.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/956/ceH2ArgNJ4SNw.jpg",
      "price": "1899",
      "goodname": "影驰GeForce GTX 1660 大将",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003883762.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/251/ce9D8Mbwnj6cE.jpg",
      "price": "1799",
      "goodname": "微星GeForce GTX 1660 VENTUS XS C 6G OC",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003855158.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/268/ceJtmtwFXg0Cw.jpg",
      "price": "1199",
      "goodname": "索泰GeForce GTX 1650-4GD5 毁灭者 PA",
      "hz": "8002MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005053928.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/230/ceorKqpzgRdqg.jpg",
      "price": "5699",
      "goodname": "七彩虹iGame GeForce RTX 2080 Advanced OC",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8963621.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/276/ce4AU9T8QOp9g.jpg",
      "price": "1899",
      "goodname": "技嘉GTX 1660 GAMING OC 6G",
      "hz": "8002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002520273.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/166/cetZcvUl02lU.jpg",
      "price": "889",
      "goodname": "迪兰RX 560 XT 4G X-Serial战将",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27190360774.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/304/ceStYHnJrqT6.jpg",
      "price": "3949",
      "goodname": "影驰GeForce RTX 2060 金属大师",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005724118.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/195_120x90/48/ceH5tAmpEg.jpg",
      "price": "2899",
      "goodname": "索泰GeForce RTX 2060-6GD6 X-GAMING OC",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003210740.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/175_120x90/0/cendux3ojCRyQ.jpg",
      "price": "2799",
      "goodname": "华硕ROG STRIX-GTX 1060-O6G-GAMING",
      "hz": "8208MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20520127791.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/221/ceUdOOd6PDtjU.jpg",
      "price": "13299",
      "goodname": "影驰GeForce RTX 2080Ti  HOF PLUS",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004652604.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/145_120x90/33/ceLzWGarPJzM.jpg",
      "price": "1399",
      "goodname": "丽台Quadro K620",
      "hz": "暂无数据",
      "capacity": "2GB",
      "bitwide": "128bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42330443591.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/758/ceK0Ag5sLgp1k.jpg",
      "price": "5999",
      "goodname": "NVIDIA GeForce RTX 2080 Founders Edition",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8646454.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/866/ceoGvAncUgHtM.jpg",
      "price": "3999",
      "goodname": "影驰GeForce RTX 2070",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29777370925.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/511/ceSAc6Qp6fYPs.jpg",
      "price": "2635",
      "goodname": "丽台Quadro P1000",
      "hz": "暂无数据",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4146683.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/229/ceqX37Mfb9Wk.jpg",
      "price": "1349",
      "goodname": "华硕EX-RX580 2048SP-8G",
      "hz": "7000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002131055.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/76/cehGEoKN1nNCc.jpg",
      "price": "18888",
      "goodname": "微星GeForce RTX 2080Ti LIGHTNING Z",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003026158.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/182_120x90/105/cecftQIDHd9Lo.jpg",
      "price": "1480",
      "goodname": "丽台Quadro P600",
      "hz": "暂无数据",
      "capacity": "2GB",
      "bitwide": "128bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4991758.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/517/ceX0DB62OL4ys.jpg",
      "price": "2199",
      "goodname": "影驰GeForce GTX 1660Ti 骁将",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003199310.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/14/ceshicog3hbpI.jpg",
      "price": "7999",
      "goodname": "七彩虹iGame GeForce RTX 2080 Vulcan X OC",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001515730.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/638/cewIOxAyWf5Bg.jpg",
      "price": "6586",
      "goodname": "丽台Quadro P4000",
      "hz": "暂无数据",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5686635.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/429/ceEnUWcwKdE.jpg",
      "price": "1299",
      "goodname": "微星GeForce GTX 1650 GAMING X 4G",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005114232.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/250/cez9iCLc06DU.jpg",
      "price": "1899",
      "goodname": "盈通RX580-8G D5 大地之神",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001285772.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/992/ceTutXWZVOwFM.jpg",
      "price": "1799",
      "goodname": "七彩虹战斧 GeForce GTX 1660 6G",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003980178.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/65/ceb68xg8aYo2.jpg",
      "price": "4799",
      "goodname": "索泰GeForce RTX 2070-8GD6 玩家力量至尊PGF OC14",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001708827.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/80/cetezwIvqNxKo.jpg",
      "price": "1799",
      "goodname": "华硕PH-GTX 1660-O6G-GAMING",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002609761.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/888/ceePeIHI6pIoQ.jpg",
      "price": "3999",
      "goodname": "七彩虹iGame GeForce RTX 2060 Vulcan X OC V2",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100006052372.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/175_120x90/499/cef7Fyi7xZBE.jpg",
      "price": "1599",
      "goodname": "影驰GeForce GTX 1060黑将",
      "hz": "8000MHz",
      "capacity": "3GB",
      "bitwide": "192bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26161544677.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/182_120x90/198/ceXlRX5HjiVM.jpg",
      "price": "2099",
      "goodname": "蓝宝石RX 580 8G D5 超白金 OC",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4394599.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/223/ceQ779VODO0E.jpg",
      "price": "10999",
      "goodname": "Inno3D GeForce RTX 2080Ti 冰龙黑金版",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002106810.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/179/ceoklxcTMUh2.jpg",
      "price": "1699",
      "goodname": "蓝宝石RX 580 2048SP 8G D5 白金版",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000784748.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/448/ceADmEjPZt5uk.jpg",
      "price": "1199",
      "goodname": "影驰GeForce GTX 1650 骁将",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003038889.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/617/ce6tImzzTsZ.jpg",
      "price": "4299",
      "goodname": "技嘉RTX 2070 GAMING OC 8G",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33522879583.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/989/ceUm0ubLGnm8c.jpg",
      "price": "1799",
      "goodname": "影驰GeForce GTX 1660 骁将",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003883758.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/157/cewPPV473v8Ns.jpg",
      "price": "2399",
      "goodname": "微星GeForce GTX 1660Ti ARMOR 6G OC",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003292760.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/415/ce3lmBhGBIKpk.jpg",
      "price": "1299",
      "goodname": "影驰GeForce GTX 1650 大将",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004891240.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/100/ceHm7IOLKgFc.jpg",
      "price": "1799",
      "goodname": "华硕TUF-GTX 1660-O6G-GAMING",
      "hz": "8002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002609751.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/556/ceDTUkbku8hAM.jpg",
      "price": "1269",
      "goodname": "七彩虹iGame GeForce GTX 1650 Ultra 4G",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003061325.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/909/ceOS8tFiVt6z.jpg",
      "price": "2299",
      "goodname": "七彩虹iGame GeForce GTX 1660 Ti AD Special OC",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003375026.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/592/ce98iFmvaoaNE.jpg",
      "price": "4099",
      "goodname": "影驰GeForce RTX 2070 金属大师",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005483726.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/317/cevsIywpY1ZVM.jpg",
      "price": "11688",
      "goodname": "微星GeForce RTX 2080Ti GAMING X TRIO",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8928863.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/242/ceAwkq0nDLWCc.jpg",
      "price": "2799",
      "goodname": "华硕ROG-STRIX-GTX 1660Ti-O6G-GAMING",
      "hz": "12002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003293296.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/742/ceeL2b7fl3tg.jpg",
      "price": "24999",
      "goodname": "NVIDIA TITAN V",
      "hz": "1700MHz",
      "capacity": "12GB",
      "bitwide": "3072bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6630315.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/88/cebiy0ynSY1QQ.jpg",
      "price": "15899",
      "goodname": "影驰GeForce RTX 2080Ti HOF",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002287446.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/175_120x90/17/cezd3SB7r40yM.jpg",
      "price": "1599",
      "goodname": "索泰GeForce GTX 1060-6GD5 至尊PLUS OC",
      "hz": "8108MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3449888.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/14/cezPOYB3PkE.jpg",
      "price": "9999",
      "goodname": "索泰GeForce RTX 2080Ti-11GD6 玩家力量至尊PGF OC",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/46627396749.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/187_120x90/823/ceUpODbwK83mo.jpg",
      "price": "3999",
      "goodname": "影驰GTX 1070Ti 名人堂",
      "hz": "8008MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25768685460.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/451/cek17LFwkqVQ.jpg",
      "price": "2999",
      "goodname": "微星GeForce RTX 2060 VENTUS 6G OC",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002803344.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/207/ce5E9enCasz6A.jpg",
      "price": "2199",
      "goodname": "技嘉GTX 1060 G1 Gaming 6G",
      "hz": "8008MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19598378201.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/187_120x90/973/cevnA8M2UTcWo.jpg",
      "price": "15679",
      "goodname": "丽台Quadro P5000",
      "hz": "暂无数据",
      "capacity": "16GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4335694.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/139/cepNLANMm0XJw.jpg",
      "price": "8999",
      "goodname": "影驰GeForce RTX 2080Ti 大将",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=https://item.jd.com/26120928571.html#crumb-wrap"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/166/ceD3OGPePLgBA.jpg",
      "price": "42679",
      "goodname": "丽台Quadro P6000",
      "hz": "暂无数据",
      "capacity": "24GB",
      "bitwide": "384bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4752260.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/193/ceBKGRA4DMjY.jpg",
      "price": "1799",
      "goodname": "技嘉GTX 1660 OC 6G",
      "hz": "8002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002520275.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/891/ceQoWtzeqnPo.jpg",
      "price": "1999",
      "goodname": "NVIDIA Quadro P1000显卡",
      "hz": "暂无数据",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47758252727.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/817/ceQvDMIjH3L6.jpg",
      "price": "2199",
      "goodname": "Inno3D GeForce GTX 1660Ti冰龙超级版",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005718950.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/50/ceiQtnzCexA.jpg",
      "price": "1499",
      "goodname": "华硕ROG-STRIX-GTX 1650-O4G-GAMING",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003120617.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/324/ceO6dxdBNy9co.jpg",
      "price": "1299",
      "goodname": "华硕DUAL-GTX 1650-O4G",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003120615.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/189_120x90/507/ceRit9d9VI1Rg.jpg",
      "price": "999",
      "goodname": "丽台Quadro P400",
      "hz": "暂无数据",
      "capacity": "2GB",
      "bitwide": "64bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4991744.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/755/ce1Lux8KoM5BI.jpg",
      "price": "3299",
      "goodname": "技嘉RTX 2060 GAMING OC PRO 6G",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003026188.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/175_120x90/639/cess3eP6x9lBQ.jpg",
      "price": "3299",
      "goodname": "技嘉GTX 1070 G1 Gaming 8G",
      "hz": "8008MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10582429305.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/720/ceZ0CRYljCV72.jpg",
      "price": "1299",
      "goodname": "技嘉GTX 1650 GAMING OC 4G",
      "hz": "8002MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003138843.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/191_120x90/573/cec7dxCrrXc2.jpg",
      "price": "3749",
      "goodname": "蓝宝石RX VEGA 56 8G HBM2 白金版 OC",
      "hz": "1600MHz",
      "capacity": "8GB",
      "bitwide": "2048bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7576289.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/176_120x90/68/ceECPTDft57g.jpg",
      "price": "2299",
      "goodname": "七彩虹iGame1060 烈焰战神U-6GD5",
      "hz": "8008MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10555343735.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/571/ce9ppbBMB5qxc.jpg",
      "price": "4099",
      "goodname": "华硕TURBO-RTX 2070-8G",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001120992.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/169_120x90/534/ceV1wRq3hZP5k.jpg",
      "price": "6489",
      "goodname": "丽台NVIDIA Quadro M4000",
      "hz": "暂无数据",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/2911939.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/245/ceIhZoR3nZnwU.jpg",
      "price": "2899",
      "goodname": "微星GeForce RTX 2060 VENTUS XS C 6G OC",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002801774.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/983/ceO75M1uubvrI.jpg",
      "price": "5499",
      "goodname": "七彩虹iGame GeForce RTX 2070 Vulcan X OC",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39545358827.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/556/ce7h7ODh99XY.jpg",
      "price": "1949",
      "goodname": "七彩虹iGame GeForce GTX 1660 Advanced OC 6G",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002862753.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/120/ce0l864pqMJI.jpg",
      "price": "2199",
      "goodname": "华硕TUF-GTX 1660Ti-O6G-GAMING",
      "hz": "12002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004341318.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/989/ceGrOVq4rxcX2.jpg",
      "price": "2999",
      "goodname": "技嘉RTX 2060 OC 6G",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001978951.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/188_120x90/632/ce3jmDxc0lO6.jpg",
      "price": "69999",
      "goodname": "AMD Radeon PRO SSG",
      "hz": "945MHz",
      "capacity": "16GB",
      "bitwide": "2048bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1763633008.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/594/ce1bQAqxZdoTw.jpg",
      "price": "1199",
      "goodname": "七彩虹战斧 GeForce GTX 1650 4G",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003061369.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/881/ceYefJPESqbGY.jpg",
      "price": "2699",
      "goodname": "七彩虹iGame GeForce RTX 2060 AD Special OC",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003877038.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/185_120x90/567/ceUmI6UQHPtE.jpg",
      "price": "2199",
      "goodname": "蓝宝石RX 580 8G D5 超白金 极光特别版",
      "hz": "8000/8400MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4607983.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/370/ceXxS6gH7c6E.jpg",
      "price": "1899",
      "goodname": "铭瑄 GeForce GTX 1660 终结者 6G",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004117248.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/178_120x90/111/cerYgySbAt9us.jpg",
      "price": "4999",
      "goodname": "华硕ROG STRIX-GTX 1080-A8G-GAMING",
      "hz": "10010MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/20520127792.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/565/ceXPKIB0hh.jpg",
      "price": "1999",
      "goodname": "XFX讯景RX 580 8G 黑狼版",
      "hz": "8000/8100MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4075141.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/714/cebHFQQfdbq0Y.jpg",
      "price": "1699",
      "goodname": "耕升GTX 1660 炫光OC",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43805644470.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/189_120x90/525/ceGbC2xPnoQ.jpg",
      "price": "1499",
      "goodname": "AMD Radeon Pro WX3100 4GB",
      "hz": "6000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7253071.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/379/ceWKZYPXMYDKA.jpg",
      "price": "6999",
      "goodname": "微星GeForce RTX 2080 8G DUKE暗黑龙爵",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8928861.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/638/cePnuidnhzOtk.jpg",
      "price": "8999",
      "goodname": "技嘉RTX 2080Ti GAMING OC 11G",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8734528.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/183_120x90/554/ceOw5pHXHhfo.jpg",
      "price": "2299",
      "goodname": "华硕DUAL-RX580-O8G",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5077684.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/178_120x90/144/ce2l6JRrEV4nI.jpg",
      "price": "1299",
      "goodname": "微星GeForce GTX 1050Ti GAMING X 4G",
      "hz": "7008/7108MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3977224.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/745/ceCayzdlZo4.jpg",
      "price": "2199",
      "goodname": "微星GeForce GTX 1660Ti VENTUS XS C 6G OC",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003301482.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/950/cebDsZRyIM.jpg",
      "price": "998",
      "goodname": "铭瑄 MS-RX 580 2048SP 巨无霸 4G",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001800284.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/821/ceULHrWfflEvU.jpg",
      "price": "4199",
      "goodname": "影驰GeForce RTX 2070 大将",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002310024.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/510/ced65eQvQ4Ao.jpg",
      "price": "1199",
      "goodname": "Inno3D GeForce GTX 1650 黑金至尊版",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004876878.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/270/ceeIg1e1RHGIM.jpg",
      "price": "559",
      "goodname": "七彩虹GT1030 黄金版 2G",
      "hz": "6000MHz",
      "capacity": "2GB",
      "bitwide": "64bit",
      "interface": "无外接电源接口",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27922320952.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/527/ceglc7H4psuA.jpg",
      "price": "8699",
      "goodname": "七彩虹iGame GeForce RTX 2080 Ti Advanced",
      "hz": "14000MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32463704936.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/68/cePdYSoZ4ZmGo.jpg",
      "price": "3999",
      "goodname": "技嘉RTX 2070 WINDFORCE 8G",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001022915.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/297/ce7iQPcugXM.jpg",
      "price": "3899",
      "goodname": "华硕AREZ-STRIX-RXVEGA64-O8G-GAMING",
      "hz": "945MHz",
      "capacity": "8GB",
      "bitwide": "2048bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003026146.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/925/ceUcTwzvk0PCA.jpg",
      "price": "2199",
      "goodname": "索泰GeForce GTX 1660Ti-6GD6 毁灭者 OC HA",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003472428.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/716/cePYHNMdKlYc.jpg",
      "price": "3499",
      "goodname": "技嘉AORUS RTX 2060 XTREME 6G",
      "hz": "14140MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002004279.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/54/cervp4ZEJyJkE.jpg",
      "price": "429",
      "goodname": "七彩虹GT730K 黄金版-2GD5",
      "hz": "1800MHz",
      "capacity": "2GB",
      "bitwide": "64bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12533740104.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/794/ceVmzJrhs52qs.jpg",
      "price": "1799",
      "goodname": "耕升GTX 1660 追风",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43235135994.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/873/ceVaaevvdxRU.jpg",
      "price": "3699",
      "goodname": "技嘉GTX 1070Ti Gaming 8G",
      "hz": "8008MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/19603243651.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/212/ce5AQI6uSR80.jpg",
      "price": "4999",
      "goodname": "微星GeForce RTX 2070 DUKE 8G",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001057364.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/176_120x90/28/cevk5vnfIOzzQ.jpg",
      "price": "1999",
      "goodname": "华硕DUAL-GTX 1060-O6G",
      "hz": "8008MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26480051076.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/196_120x90/283/ce3LdL5xWovnk.jpg",
      "price": "2099",
      "goodname": "微星GeForce GTX 1660 GAMING X 6G",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003855156.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/174_120x90/469/ceA8219CXoZE.jpg",
      "price": "3999",
      "goodname": "七彩虹iGame1080 烈焰战神U-8GD5X Top",
      "hz": "10010MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1527161644.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/999/cegXsek8bnU5s.jpg",
      "price": "2199",
      "goodname": "技嘉GTX 1660Ti OC 6G",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003288636.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/318/ce13ffgCsGgic.jpg",
      "price": "1299",
      "goodname": "技嘉GTX 1050Ti G1 Gaming 4G",
      "hz": "7008MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10838988823.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/195_120x90/287/cePIEm26ZvTB2.jpg",
      "price": "2899",
      "goodname": "耕升RTX 2060 追风",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/40957856227.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/596/ceLFhjV3SthwI.jpg",
      "price": "979",
      "goodname": "昂达GTX 1050Ti典范4GD5",
      "hz": "7008MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "无外接电源接口",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4643730.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/692/ceDZbbHoyr9g.jpg",
      "price": "14999",
      "goodname": "技嘉AORUS RTX 2080Ti XTREME WATERFORCE 11G",
      "hz": "14140MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001738399.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/711/ceda49pGFgGk.jpg",
      "price": "1449",
      "goodname": "盈通RX 580-8G D5 游戏高手 OC",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002771218.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/176_120x90/216/ceHCf43nVLISA.jpg",
      "price": "1599",
      "goodname": "铭瑄 GTX 1060 终结者6G",
      "hz": "8000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12278337588.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/50/ce6jJJbwn8e5Y.jpg",
      "price": "2849",
      "goodname": "蓝宝石RX 580 4G D5 白金版 OC",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12139209226.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/556/ceuEvKhzEgnlU.jpg",
      "price": "2699",
      "goodname": "华硕ROG-STRIX-GTX 1660Ti-A6G-GAMING",
      "hz": "12002MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003293294.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/175_120x90/653/ceR7zPnbIT2NE.jpg",
      "price": "2099",
      "goodname": "华硕GTX 1060-O6G-GAMING",
      "hz": "8208MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27823501775.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/318/ce4trq5Hhs5q6.jpg",
      "price": "3149",
      "goodname": "迪兰RX VEGA 56 8G X-Serial 战神",
      "hz": "1600MHz",
      "capacity": "8GB",
      "bitwide": "2048bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7186211.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/174_120x90/496/cedmmzQ0IzzY2.jpg",
      "price": "3599",
      "goodname": "华硕ROG STRIX-GTX 1070-O8G-GAMING",
      "hz": "8008MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27833824612.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/929/ceSvXJwTiARS6.jpg",
      "price": "2799",
      "goodname": "蓝宝石RX570 4G D5 白金版 OC",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12051610354.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/160/cevcDjdtVSgwY.jpg",
      "price": "2299",
      "goodname": "影驰GeForce GTX 1660Ti 金属大师",
      "hz": "12000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003455841.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/172/ceA7EyfqkinTM.jpg",
      "price": "6399",
      "goodname": "影驰GeForce RTX 2080 大将",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8943365.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/182/ceI3PxNc1cNY.jpg",
      "price": "1199",
      "goodname": "AMD Radeon Pro WX2100 2GB",
      "hz": "暂无数据",
      "capacity": "2GB",
      "bitwide": "64bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7039524.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/47/ceYcIQjBV8K5c.jpg",
      "price": "2999",
      "goodname": "华硕TURBO-RTX 2060-6G",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003122976.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/926/ce7vUtHpSE04M.jpg",
      "price": "2999",
      "goodname": "索泰GeForce GTX 1070 X-GAMING OC",
      "hz": "8000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3282626.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/195_120x90/802/cee9eR6SiqvTw.jpg",
      "price": "2899",
      "goodname": "索泰GeForce RTX 2060-6GD6 毁灭者 OC HA",
      "hz": "14000MHz",
      "capacity": "6GB",
      "bitwide": "192bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002004573.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/183_120x90/414/cei4vkvzsoWSQ.jpg",
      "price": "6999",
      "goodname": "技嘉AORUS GTX 1080Ti Xtreme Edition 11G",
      "hz": "11232/11448MHz",
      "capacity": "11GB",
      "bitwide": "352bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4729162.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/65/ceHthWrZZPLBE.jpg",
      "price": "6999",
      "goodname": "影驰GeForce RTX 2080 HOF",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001749019.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/178_120x90/922/ce8Iooswngg.jpg",
      "price": "3299",
      "goodname": "AMD Radeon Pro WX 5100 8GB",
      "hz": "暂无数据",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12193302830.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/308/cegnDdAEdPDp2.jpg",
      "price": "5099",
      "goodname": "微星GeForce RTX 2070 GAMING Z",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001057406.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/911/ceTyhxyfMSk7k.jpg",
      "price": "5699",
      "goodname": "索泰GeForce RTX 2080-8GD6 X-GAMING OC",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44705683060.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/629/celYI7nSJPwPc.jpg",
      "price": "3699",
      "goodname": "微星GeForce RTX 2070 VENTUS 8G",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005472062.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/405/ce3rdtKci7yk.jpg",
      "price": "1199",
      "goodname": "微星GeForce GTX 1650 AERO ITX 4G OC",
      "hz": "8000MHz",
      "capacity": "4GB",
      "bitwide": "128bit",
      "interface": "6pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003150495.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/159/ceA69dqNfI.jpg",
      "price": "4399",
      "goodname": "影驰GeForce RTX 2070 Gamer",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001169280.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/194_120x90/221/certyrY0JXJwc.jpg",
      "price": "3999",
      "goodname": "微星GeForce RTX 2070 ARMOR 8G",
      "hz": "14000MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "6pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000871187.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/173_120x90/483/ce0xzBlYqZBcI.jpg",
      "price": "4099",
      "goodname": "技嘉GTX 1080 G1 Gaming 8G",
      "hz": "10010MHz",
      "capacity": "8GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33016570879.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/195_120x90/275/ceahjiEktSu2.jpg",
      "price": "3199",
      "goodname": "华硕AREZ-STRIX-RXVEGA56-O8G-GAMING",
      "hz": "800MHz",
      "capacity": "8GB",
      "bitwide": "2048bit",
      "interface": "8pin+8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003026154.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/137_120x90/31/ceGkYIJ0K7V1U.jpg",
      "price": "429",
      "goodname": "技嘉GV-N730-2GI",
      "hz": "1600MHz",
      "capacity": "2GB",
      "bitwide": "128bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1474726267.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/81/ceuMGpFJtnzlk.jpg",
      "price": "39999",
      "goodname": "丽台Quadro RTX 6000",
      "hz": "暂无数据",
      "capacity": "24GB",
      "bitwide": "384bit",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000208885.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/521/ceTWJOy4VK5xo.jpg",
      "price": "1499",
      "goodname": "华硕ROG-STRIX-RX570-O4G-GAMING",
      "hz": "7000MHz",
      "capacity": "4GB",
      "bitwide": "256bit",
      "interface": "8pin",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27990576960.html"
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
      key: "gpudata",
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