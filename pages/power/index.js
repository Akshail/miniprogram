// pages/power/index.js
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
    "powerdata": [{
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/212/ceHXHSrNkPHUU.jpg",
      "price": "799",
      "goodname": "鑫谷昆仑KL-650W",
      "kind": "模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8927915.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/146_120x90/123/ceWBfbHb1GYXc.jpg",
      "price": "289",
      "goodname": "先马金牌500W",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1231200.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/130_120x90/133/ceyGqCG65iJvI.jpg",
      "price": "429",
      "goodname": "海盗船VS450",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "24pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12299124130.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/114_120x90/36/ceJfUjrGFGsGg.jpg",
      "price": "269",
      "goodname": "长城HOPE-6000DS",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/876229.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/136/ceXn0KTNyViz2.jpg",
      "price": "369",
      "goodname": "航嘉WD500K",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004925348.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/122_120x90/94/cebgTzQttXPss.jpg",
      "price": "289",
      "goodname": "鑫谷GP600G黑金版",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/984222.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/386/cea26LZiD3KrE.jpg",
      "price": "488",
      "goodname": "先马金牌750W",
      "kind": "模组电源",
      "rate": "750W",
      "boardinterface": "20+4pin",
      "diskinterface": "12个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1178929.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/736/ce3iMbQ6Xp9.jpg",
      "price": "899",
      "goodname": "航嘉MVP K850",
      "kind": "模组电源",
      "rate": "850W",
      "boardinterface": "20+4pin",
      "diskinterface": "10个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000436602.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/146_120x90/91/ceKsmgnYW1F76.jpg",
      "price": "329",
      "goodname": "鑫谷GP600P白金版",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1302386.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/574/cenv49UrXPu9Y.jpg",
      "price": "399",
      "goodname": "鑫谷GP700P白金版",
      "kind": "非模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1547016.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/143_120x90/520/cemzcWxRtXpEw.jpg",
      "price": "449",
      "goodname": "长城金牌巨龙GW-6800",
      "kind": "模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1209627.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/108_120x90/725/cepahSBSEUT1g.jpg",
      "price": "159",
      "goodname": "鑫谷核动力 超级战舰 S7",
      "kind": "非模组电源",
      "rate": "400W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/819707.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/64/ce52noPceVilc.jpg",
      "price": "259",
      "goodname": "ANTEC VP450P",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/251340.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/130_120x90/133/ceyGqCG65iJvI.jpg",
      "price": "429",
      "goodname": "海盗船VS450",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "24pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12299124130.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/169_120x90/740/ceI05LaJpIC8I.jpg",
      "price": "859",
      "goodname": "海盗船RM750x",
      "kind": "模组电源",
      "rate": "750W",
      "boardinterface": "20+4pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1598062925.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/125_120x90/929/ceBe1hLwH1JpU.jpg",
      "price": "349",
      "goodname": "鑫谷GP700G黑金版",
      "kind": "非模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1033531.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/100_120x90/47/cexMKtx5cRuA.jpg",
      "price": "199",
      "goodname": "游戏悍将红警RPO500",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/756290.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/169_120x90/160/ceR61EXSVbIns.jpg",
      "price": "799",
      "goodname": "海盗船RM650x",
      "kind": "模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "9个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6544246.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/82_120x90/60/cewRKJKl44rmI.jpg",
      "price": "499",
      "goodname": "振华冰山金蝶550W 能效版",
      "kind": "半模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/600471.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/176_120x90/233/ceUiUgLJgaqUQ.jpg",
      "price": "309",
      "goodname": "长城HOPE-7000DS",
      "kind": "暂无数据",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1237194.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/93/ceL8zho9HM.jpg",
      "price": "299",
      "goodname": "ANTEC VP500P",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/840370.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/168_120x90/335/ceMS6dsunayVE.jpg",
      "price": "1249",
      "goodname": "海盗船RM1000x",
      "kind": "模组电源",
      "rate": "1000W",
      "boardinterface": "20+4pin",
      "diskinterface": "11个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12299931056.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/72_120x90/708/celajJcgTIPUg.jpg",
      "price": "999",
      "goodname": "长城金牌巨龙GW-EPS1250DA",
      "kind": "模组电源",
      "rate": "1250W",
      "boardinterface": "暂无数据",
      "diskinterface": "12个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/876227.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/112_120x90/851/cezlN5IJZ6U6U.jpg",
      "price": "109",
      "goodname": "先马刺客430",
      "kind": "非模组电源",
      "rate": "300W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/874606.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/147_120x90/763/ceftsmwYqan7M.jpg",
      "price": "389",
      "goodname": "航嘉MVP600",
      "kind": "模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "7个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1334373.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/109_120x90/793/cet1WDNKjAc8A.jpg",
      "price": "119",
      "goodname": "鑫谷核动力 巡洋舰C5",
      "kind": "非模组电源",
      "rate": "300W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/819705.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/176_120x90/898/ceSmTUsmTLgcs.jpg",
      "price": "269",
      "goodname": "航嘉Jumper450B",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/604300.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/183/ce1sHFNINcbKw.jpg",
      "price": "329",
      "goodname": "ANTEC VP550P V2",
      "kind": "非模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/348678.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/97_120x90/456/cefapstdAKq2g.jpg",
      "price": "299",
      "goodname": "航嘉Jumper500W",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/708004.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/124_120x90/748/cetkZqshTSCMs.jpg",
      "price": "249",
      "goodname": "长城HOPE-5500ZK",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/998701.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/111_120x90/940/cetwxlTX7nOU.jpg",
      "price": "199",
      "goodname": "长城HOPE-4500DS",
      "kind": "非模组电源",
      "rate": "350W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/876228.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/114_120x90/256/ceIJjXEzVdWw.jpg",
      "price": "379",
      "goodname": "振华冰山金蝶550W 战斗版",
      "kind": "非模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/886416.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/568/ceeTJfoiz3Og.jpg",
      "price": "299",
      "goodname": "ANTEC AP500",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32121825315.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/915/cePlWZlSvwSs.jpg",
      "price": "139",
      "goodname": "金河田战龙RX590",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10817690329.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/74/ceqAQpXVv4yjk.jpg",
      "price": "269",
      "goodname": "金河田Z监制 GF500G",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39671019254.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/131_120x90/887/ceQwtGnfxKQw.jpg",
      "price": "189",
      "goodname": "金河田龙霸500W",
      "kind": "半模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1074391.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/95_120x90/820/ceewxXSZwJKB6.jpg",
      "price": "289",
      "goodname": "长城双卡王冲锋版GW-6000",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/664587.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/102_120x90/589/cePDIymvirS6.jpg",
      "price": "2899",
      "goodname": "海盗船AX1200i",
      "kind": "模组电源",
      "rate": "1200W",
      "boardinterface": "20+4pin",
      "diskinterface": "14个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1039370.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/185_120x90/895/cexlkA8bOP2p2.jpg",
      "price": "859",
      "goodname": "海盗船SF600",
      "kind": "模组电源",
      "rate": "600W",
      "boardinterface": "24pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12299767484.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/176_120x90/356/ceSCI7bhp0zT6.jpg",
      "price": "759",
      "goodname": "振华LEADEX G650",
      "kind": "模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1031177.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/97_120x90/803/ceXJFuKselL5g.jpg",
      "price": "249",
      "goodname": "航嘉Jumper400W",
      "kind": "非模组电源",
      "rate": "400W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/708007.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/110_120x90/227/ceng5UlaWdxPw.jpg",
      "price": "299",
      "goodname": "振华冰山金蝶450W  战斗版",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/821366.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/148_120x90/567/cerntwgnwS3Cs.jpg",
      "price": "379",
      "goodname": "航嘉磐石600S",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "10个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1405936.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/176_120x90/85/ceuzqJck79KtU.jpg",
      "price": "299",
      "goodname": "台达NX450",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/491717.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/86_120x90/884/ce3Jrn4XplFzA.jpg",
      "price": "239",
      "goodname": "台达NX350",
      "kind": "非模组电源",
      "rate": "350W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/491715.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/174_120x90/513/celsdMYld8Ew.jpg",
      "price": "379",
      "goodname": "先马金牌500W",
      "kind": "模组电源",
      "rate": "500W",
      "boardinterface": "24pin",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2816985.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/926/ceb8K4KF7ymks.jpg",
      "price": "2799",
      "goodname": "华硕ROG-THOR-1200P",
      "kind": "模组电源",
      "rate": "1200W",
      "boardinterface": "暂无数据",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001781748.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/183_120x90/990/cegfsRRnXbx2.jpg",
      "price": "459",
      "goodname": "爱国者电竞700",
      "kind": "模组电源",
      "rate": "700W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4211279.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/83_120x90/80/ce7EXZur1s8f.jpg",
      "price": "599",
      "goodname": "振华冰山金蝶GX650",
      "kind": "半模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/600637.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/113_120x90/950/ce6u50RVYOttU.jpg",
      "price": "279",
      "goodname": "Tt Smart SE 530W",
      "kind": "半模组电源",
      "rate": "530W",
      "boardinterface": "24pin",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/869253.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/189_120x90/907/ceJd5Markn1W6.jpg",
      "price": "899",
      "goodname": "鑫谷昆仑KL-750W",
      "kind": "模组电源",
      "rate": "750W",
      "boardinterface": "20+4pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4257725.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/148_120x90/363/ceBTzVUfS05Q.jpg",
      "price": "339",
      "goodname": "航嘉Jumper600",
      "kind": "暂无数据",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1306479.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/18_120x90/160/ceSNxVznbZtQ.jpg",
      "price": "169",
      "goodname": "长城静音大师ATX-350SD",
      "kind": "非模组电源",
      "rate": "270W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1064073.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/398/ceVY2cl2C0a6w.jpg",
      "price": "899",
      "goodname": "ANTEC HCG-750",
      "kind": "模组电源",
      "rate": "750W",
      "boardinterface": "24pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6828141.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/120_120x90/211/cehg7W3Emlvmk.jpg",
      "price": "1399",
      "goodname": "酷冷至尊V850",
      "kind": "非模组电源",
      "rate": "850W",
      "boardinterface": "20+4pin",
      "diskinterface": "9个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/987605.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/12_120x90/895/ceIbZt8hW49G6.jpg",
      "price": "429",
      "goodname": "长城巨龙BTX-600SP",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "9个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/664590.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/931/cerdvbrLtnlr2.jpg",
      "price": "369",
      "goodname": "ANTEC NEO ECO 550M",
      "kind": "模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1039361.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/958/ceXZWkE9iuZ4U.jpg",
      "price": "509",
      "goodname": "ANTEC NEO ECO 650M",
      "kind": "模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1039354.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/933/ceC8FnXQPV68c.jpg",
      "price": "299",
      "goodname": "技嘉GP-PB500",
      "kind": "暂无数据",
      "rate": "500W",
      "boardinterface": "24pin",
      "diskinterface": "7个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29232345932.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/154_120x90/401/ceI0eT7B2xThw.jpg",
      "price": "399",
      "goodname": "鑫谷GP600G 黑金全模版",
      "kind": "模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1861972.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/117_120x90/732/ce0WrHcej9jo.jpg",
      "price": "209",
      "goodname": "长城MATX300",
      "kind": "非模组电源",
      "rate": "270W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/932607.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/97_120x90/341/ce0uIbVSZs7U.jpg",
      "price": "229",
      "goodname": "酷冷至尊战斧2 400W",
      "kind": "非模组电源",
      "rate": "400W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/710679.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/57/ceJUzthoRv8WE.jpg",
      "price": "359",
      "goodname": "先马金牌550W",
      "kind": "非模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1231195.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/83_120x90/815/ceD0baa1XmDvU.jpg",
      "price": "399",
      "goodname": "台达NX550",
      "kind": "非模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/491718.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/113_120x90/616/ce0UA2C912Ik.jpg",
      "price": "1599",
      "goodname": "振华LEADEX P1000",
      "kind": "模组电源",
      "rate": "1000W",
      "boardinterface": "20+4pin",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/904352.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/112_120x90/52/ce60NzGPMA7p.jpg",
      "price": "379",
      "goodname": "Tt Smart SE 730W",
      "kind": "半模组电源",
      "rate": "730W",
      "boardinterface": "24pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/869260.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/127_120x90/156/cezbzzDY8ws.jpg",
      "price": "799",
      "goodname": "酷冷至尊V750S",
      "kind": "半模组电源",
      "rate": "750W",
      "boardinterface": "20+4pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1852501.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/26/ce8kAZiYWRpvc.jpg",
      "price": "229",
      "goodname": "ANTEC VP350P",
      "kind": "非模组电源",
      "rate": "350W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/378512.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/143_120x90/133/ces08xfTw2EUM.jpg",
      "price": "179",
      "goodname": "先马破坏神550",
      "kind": "非模组电源",
      "rate": "400W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1260411.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/435/ceh5YJrhriSNA.jpg",
      "price": "599",
      "goodname": "航嘉HYPER 650G",
      "kind": "暂无数据",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "9个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7510306.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/151_120x90/109/ceQy6FC8QoeU.jpg",
      "price": "389",
      "goodname": "先马金牌600W",
      "kind": "非模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1506773.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/165_120x90/821/ceopuinf5A1g.jpg",
      "price": "2999",
      "goodname": "振华LEADEX T1600",
      "kind": "模组电源",
      "rate": "1600W",
      "boardinterface": "20+4pin",
      "diskinterface": "14个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1861917.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/616/cegTOWOxm38zA.jpg",
      "price": "888",
      "goodname": "振华LEADEX G750",
      "kind": "模组电源",
      "rate": "750W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1013787.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/175_120x90/678/ce4k1iwlaDMf.jpg",
      "price": "139",
      "goodname": "金河田海象 500",
      "kind": "暂无数据",
      "rate": "400W",
      "boardinterface": "暂无数据",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10555812390.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/182_120x90/950/ceJBLwTFV9f12.jpg",
      "price": "1299",
      "goodname": "鑫谷昆仑KL-1080W",
      "kind": "模组电源",
      "rate": "1080W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4278639.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/98_120x90/517/ce8cfNVm3gL0k.jpg",
      "price": "259",
      "goodname": "酷冷至尊战斧2 500W",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/710692.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/120_120x90/202/ceQRJjRhO0D0Q.jpg",
      "price": "1699",
      "goodname": "酷冷至尊V1000",
      "kind": "模组电源",
      "rate": "1000W",
      "boardinterface": "20+4pin",
      "diskinterface": "9个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/987599.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/133_120x90/864/cejZfR6MyFKmg.jpg",
      "price": "599",
      "goodname": "鑫谷GP900G黑金版",
      "kind": "非模组电源",
      "rate": "800W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1128504.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/178_120x90/579/cezOvp42CVzqA.jpg",
      "price": "156",
      "goodname": "金河田海象 600",
      "kind": "暂无数据",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11095513553.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/129_120x90/60/ce4EG5QWLOaE.jpg",
      "price": "2299",
      "goodname": "ANTEC HCP-1300 Platinum",
      "kind": "模组电源",
      "rate": "1300W",
      "boardinterface": "24pin",
      "diskinterface": "9个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1090720.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/153_120x90/407/ce6yrHmzHxLbU.jpg",
      "price": "1949",
      "goodname": "海盗船HX1200i",
      "kind": "模组电源",
      "rate": "1200W",
      "boardinterface": "20+4pin",
      "diskinterface": "16个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2106169.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/117_120x90/366/cekuaLftRRDBQ.jpg",
      "price": "179",
      "goodname": "航嘉Jumper300S",
      "kind": "非模组电源",
      "rate": "300W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/926266.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/780/cen7c97Z0hmuk.jpg",
      "price": "579",
      "goodname": "ANTEC EAG550 EVO",
      "kind": "模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8314094.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/133_120x90/258/ceTG9iSiOEPmo.jpg",
      "price": "699",
      "goodname": "酷冷至尊V650S",
      "kind": "半模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1852511.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/166_120x90/236/ce1oPhxOuRUQ.jpg",
      "price": "159",
      "goodname": "Tt TR2 400W",
      "kind": "暂无数据",
      "rate": "300W",
      "boardinterface": "24pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1838146.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/87_120x90/489/ceZRwuGVWtNI.jpg",
      "price": "549",
      "goodname": "台达NX650",
      "kind": "非模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "7个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/491719.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/30_120x90/399/ceniNK3lVnmKg.jpg",
      "price": "379",
      "goodname": "海韵S12II-430铜牌",
      "kind": "非模组电源",
      "rate": "430W",
      "boardinterface": "暂无数据",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/807929.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/282/cenhzxxIfq8xY.jpg",
      "price": "329",
      "goodname": "金河田Z监制 GF600G",
      "kind": "非模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39973569403.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/149_120x90/833/ceVY5GQM5bXk.jpg",
      "price": "369",
      "goodname": "先马刺客930",
      "kind": "模组电源",
      "rate": "800W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1463506.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/629/cekltdLdWocWk.jpg",
      "price": "129",
      "goodname": "金河田龙霸330W",
      "kind": "非模组电源",
      "rate": "330W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4173433.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/23_120x90/806/ceJ5WlOKncxHM.jpg",
      "price": "129",
      "goodname": "长城网星ATX-3000+宽网版",
      "kind": "非模组电源",
      "rate": "230W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/710101.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/123_120x90/768/ce9eMI82ShnSo.jpg",
      "price": "129",
      "goodname": "先马350M",
      "kind": "非模组电源",
      "rate": "250W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1587996731.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/565/ce03vGt0ECA.jpg",
      "price": "999",
      "goodname": "鑫谷昆仑KL-850W",
      "kind": "模组电源",
      "rate": "850W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4257787.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/754/ceFPrmvF0cYqo.jpg",
      "price": "679",
      "goodname": "ANTEC EAG650 EVO",
      "kind": "模组电源",
      "rate": "650W",
      "boardinterface": "20+4pin",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8314270.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/115_120x90/75/cehyOzkyRu6.jpg",
      "price": "119",
      "goodname": "爱国者黑暗骑士470DK",
      "kind": "暂无数据",
      "rate": "暂无数据",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1034430.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/165_120x90/646/cee2Hp7GPHCcA.jpg",
      "price": "499",
      "goodname": "先马白金600W",
      "kind": "半模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1842794.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/102_120x90/701/cekuJFdJJwLZM.jpg",
      "price": "119",
      "goodname": "金河田省师傅4000",
      "kind": "非模组电源",
      "rate": "300W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/758854.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/146_120x90/721/cec8UoNINWKg.jpg",
      "price": "399",
      "goodname": "大水牛金牛800",
      "kind": "非模组电源",
      "rate": "700W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1195748.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/151_120x90/110/ceKIVm2MQPSyo.jpg",
      "price": "439",
      "goodname": "先马金牌700W",
      "kind": "非模组电源",
      "rate": "700W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1506776.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/113_120x90/701/ceNfa5zLkiI6.jpg",
      "price": "339",
      "goodname": "台达VX500",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/864431.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/89_120x90/338/cePqq6SQ61N2Q.jpg",
      "price": "199",
      "goodname": "台达VX300",
      "kind": "暂无数据",
      "rate": "300W",
      "boardinterface": "24pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://www.jd.com/product/864313.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/127_120x90/946/ce7qMsCB9eGM.jpg",
      "price": "299",
      "goodname": "ANTEC NEO ECO 400M",
      "kind": "半模组电源",
      "rate": "400W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1039355.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/31_120x90/624/cegstwBS7ZIZg.jpg",
      "price": "299",
      "goodname": "长城节电王发烧版GW-5000",
      "kind": "非模组电源",
      "rate": "400W",
      "boardinterface": "暂无数据",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/685517.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/175_120x90/474/cenBzVKC9vHs.jpg",
      "price": "239",
      "goodname": "游戏悍将刀锋50全模组AK450",
      "kind": "模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3243368.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/188_120x90/34/cezihGnNCjfo.jpg",
      "price": "399",
      "goodname": "游戏悍将GX600",
      "kind": "模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001613216.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/83_120x90/421/ce5BnTH2m8VKo.jpg",
      "price": "269",
      "goodname": "台达NX400",
      "kind": "暂无数据",
      "rate": "400W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/491716.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/217/cebA8lumOaYC.jpg",
      "price": "329",
      "goodname": "酷冷至尊MasterWatt 500 Lite",
      "kind": "模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4386726.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/195/ce4w9ph1EE8mE.jpg",
      "price": "399",
      "goodname": "ANTEC VP600P",
      "kind": "非模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1090725.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/87_120x90/192/ceIqB50BFagLg.jpg",
      "price": "799",
      "goodname": "Tt TR2 RX 850W",
      "kind": "模组电源",
      "rate": "850W",
      "boardinterface": "20+4pin",
      "diskinterface": "7个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/608933.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/127_120x90/11/ceUCBB4uSaBYI.jpg",
      "price": "339",
      "goodname": "ANTEC NEO ECO 450M",
      "kind": "半模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1039360.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/175_120x90/683/ceNM3dzLJQdgA.jpg",
      "price": "109",
      "goodname": "金河田海象 400",
      "kind": "暂无数据",
      "rate": "300W",
      "boardinterface": "暂无数据",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10555812389.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/148_120x90/786/ceDFZqaHCYqJY.jpg",
      "price": "1699",
      "goodname": "全汉AURUM PT1200",
      "kind": "模组电源",
      "rate": "1200W",
      "boardinterface": "24pin",
      "diskinterface": "13个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1329145.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/175_120x90/664/ce9Prf8v1tK9I.jpg",
      "price": "999",
      "goodname": "长城极致火力G-750",
      "kind": "暂无数据",
      "rate": "750W",
      "boardinterface": "20+4pin",
      "diskinterface": "9个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1324058.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/81_120x90/132/cezH61rIOtPmY.jpg",
      "price": "399",
      "goodname": "长城0分贝ATX400NF",
      "kind": "非模组电源",
      "rate": "300W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/664594.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/166_120x90/404/celnKttUHh8iA.jpg",
      "price": "549",
      "goodname": "酷冷至尊RS550-AFBAG1-CN",
      "kind": "模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1852502.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/513/ceFRe1bTqpW1E.jpg",
      "price": "649",
      "goodname": "ANTEC EAG550 PRO",
      "kind": "半模组电源",
      "rate": "550W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1334771.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/262/ce4VRPbK7KoYQ.jpg",
      "price": "179",
      "goodname": "金河田战锤T690",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30463483994.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/601/ce6UNBCme36Xo.jpg",
      "price": "218",
      "goodname": "金河田王者650 XT",
      "kind": "非模组电源",
      "rate": "450W",
      "boardinterface": "20+4pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15325954728.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/205/ce1rcz4kFRwv.jpg",
      "price": "879",
      "goodname": "全汉Hydro G HG850",
      "kind": "模组电源",
      "rate": "850W",
      "boardinterface": "20+4pin",
      "diskinterface": "12个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2442130.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/540/cehkyLTSV2Pc.jpg",
      "price": "168",
      "goodname": "金河田王者550",
      "kind": "非模组电源",
      "rate": "330W",
      "boardinterface": "20+4pin",
      "diskinterface": "4个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15325954729.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/132_120x90/260/ceIuGtRoAXRvE.jpg",
      "price": "869",
      "goodname": "振华怒蝶625W",
      "kind": "非模组电源",
      "rate": "625W",
      "boardinterface": "20+4pin",
      "diskinterface": "8个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1608413408.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/102_120x90/881/ce7Bjnt5CaEdc.jpg",
      "price": "109",
      "goodname": "金河田省师傅3000",
      "kind": "非模组电源",
      "rate": "230W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/758855.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/209/ce9ms8jPAyUfg.jpg",
      "price": "399",
      "goodname": "爱国者电竞600直出版",
      "kind": "暂无数据",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "6个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4121816.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/309/ceYbyD045ojPg.jpg",
      "price": "129",
      "goodname": "金河田战锤T490",
      "kind": "非模组电源",
      "rate": "350W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30463495076.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/288/cetbaJVCkKITk.jpg",
      "price": "149",
      "goodname": "金河田战锤T590",
      "kind": "非模组电源",
      "rate": "400W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30463483993.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/165_120x90/786/ceWB9bwfMGKkM.jpg",
      "price": "549",
      "goodname": "先马白金700W",
      "kind": "非模组电源",
      "rate": "700W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1842860.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/197_120x90/178/ceAgOpJ8eakE.jpg",
      "price": "269",
      "goodname": "金河田雷霆800",
      "kind": "非模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "1个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43613664280.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/95_120x90/656/ceIaGTreTvvQ.jpg",
      "price": "629",
      "goodname": "银欣SST-ST45SF-G",
      "kind": "模组电源",
      "rate": "暂无数据",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/918609.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/360/ceqVPzcXcrKus.jpg",
      "price": "249",
      "goodname": "金河田王者750 XT",
      "kind": "模组电源",
      "rate": "500W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15325954725.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/399/ce0vKjhChrZFg.jpg",
      "price": "299",
      "goodname": "金河田王者850 XT",
      "kind": "模组电源",
      "rate": "600W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15325954727.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/102_120x90/669/cecnvsBCMl2YY.jpg",
      "price": "109",
      "goodname": "金河田省师傅3700",
      "kind": "非模组电源",
      "rate": "270W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/758858.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/146_120x90/602/cedLdIwu0a8gk.jpg",
      "price": "229",
      "goodname": "全汉蓝暴炫动II 350W",
      "kind": "暂无数据",
      "rate": "350W",
      "boardinterface": "24pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1293627.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/6/ce7pv3moduF8E.jpg",
      "price": "259",
      "goodname": "技嘉GP-PW400",
      "kind": "暂无数据",
      "rate": "400W",
      "boardinterface": "24pin",
      "diskinterface": "5个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12069088404.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/494/ceQBzWAz9YSgY.jpg",
      "price": "158",
      "goodname": "金河田王者450",
      "kind": "非模组电源",
      "rate": "230W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15325954726.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/34_120x90/459/ce2yDCYAroP6.jpg",
      "price": "229",
      "goodname": "大水牛劲睿600京牛版",
      "kind": "非模组电源",
      "rate": "500W",
      "boardinterface": "暂无数据",
      "diskinterface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/164688.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/119_120x90/898/cenrwP9CDKbU.jpg",
      "price": "149",
      "goodname": "大水牛红暴400",
      "kind": "非模组电源",
      "rate": "300W",
      "boardinterface": "20+4pin",
      "diskinterface": "3个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/936626.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/87_120x90/62/cesw5EgAO2MA.jpg",
      "price": "139",
      "goodname": "大水牛劲强300京牛版",
      "kind": "非模组电源",
      "rate": "300W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/176950.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/122_120x90/602/cecNcgTbjQyc2.jpg",
      "price": "1599",
      "goodname": "振华迷蝶250",
      "kind": "非模组电源",
      "rate": "250W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1600880826.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/88_120x90/359/ceax7CjXOdKBk.jpg",
      "price": "119",
      "goodname": "Tt TR2-320",
      "kind": "非模组电源",
      "rate": "250W",
      "boardinterface": "20+4pin",
      "diskinterface": "2个",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/608915.html"
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
      key: "powerdata",
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