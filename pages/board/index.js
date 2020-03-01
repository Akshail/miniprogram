// pages/board/index.js
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
    "boarddata": [{
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/700/ce5EQCOz0kzt6.jpg",
      "goodname": "七彩虹iGame Z390 Vulcan X",
      "price": "1599",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001962966.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/174/celVra79B2.jpg",
      "goodname": "华硕TUF B360M-PLUS GAMING S",
      "price": "879",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8074512.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/480/ceZofOr58yAM.jpg",
      "goodname": "技嘉Z390 AORUS PRO WIFI",
      "price": "1998",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000612305.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/954/ce97GrgyBDbqs.jpg",
      "goodname": "影驰B360M-M.2",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.5×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18600201544.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/547/cewpEWnAdjwc.jpg",
      "goodname": "华擎A320M-HDV",
      "price": "339",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.1×20.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4791884.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/882/cergh80iEzgY.jpg",
      "goodname": "华硕PRIME Z390-A",
      "price": "1999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000542145.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/209/ceKXZjDg33RoU.jpg",
      "goodname": "微星B360M MORTAR",
      "price": "769",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.3×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6959288.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/197_120x90/137/ceSmoej0RRJgc.jpg",
      "goodname": "七彩虹CVN B365M GAMING PRO V20",
      "price": "699",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "24.5×24.5cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002832055.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/816/ceRkIV71pbBTY.jpg",
      "goodname": "华硕TUF B450M-PLUS GAMING",
      "price": "629",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8364292.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/372/ceKcVxT6onOY.jpg",
      "goodname": "技嘉Z390 AORUS MASTER",
      "price": "2999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000668218.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/92/cexwPzzu8zv9g.jpg",
      "goodname": "技嘉B360M AORUS PRO",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000948479.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/636/ceTZaJ6VFJztE.jpg",
      "goodname": "技嘉B450M DS3H",
      "price": "599",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×21.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8259914.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/186_120x90/645/ce9YxRFn0ZSLg.jpg",
      "goodname": "华硕PRIME Z370-P",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.6cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28144470328.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/124/cee4sdEoR1ho.jpg",
      "goodname": "华硕PRIME H310M-K",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30708268865.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/562/cer0t5quRx1Co.jpg",
      "goodname": "华硕PRIME B365M-K",
      "price": "749",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003337534.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/503/cexDzIleIXnuU.jpg",
      "goodname": "华硕ROG STRIX B365-F GAMING",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003440821.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/781/ce1FucDTCXVos.jpg",
      "goodname": "技嘉B450M GAMING",
      "price": "549",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×20.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000889657.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/601/ceFAw9ArERnh2.jpg",
      "goodname": "华硕PRIME B250M-PLUS",
      "price": "659",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×22.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4252424.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/567/ce9mfN5xMpqs2.jpg",
      "goodname": "微星B360 GAMING PLUS",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28000839154.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/635/ceZMslPUqHeEc.jpg",
      "goodname": "华硕ROG STRIX Z390-H GAMING",
      "price": "2199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34183594089.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/685/ceVBoSeYbBmMk.jpg",
      "goodname": "华硕TUF B360M-PLUS GAMING",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6957643.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/740/cedEUQpZ1bUVY.jpg",
      "goodname": "华硕TUF Z390-PLUS GAMING (WI-FI)",
      "price": "1799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000561832.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/624/cej2TzHwKrfo.jpg",
      "goodname": "华硕TUF B360-PLUS GAMING",
      "price": "1049",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555479.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/191_120x90/334/ce3mba8WMxAfA.jpg",
      "goodname": "华硕ROG STRIX B450-F GAMING",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8515183.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/836/ceqTU0luGAoY.jpg",
      "goodname": "华硕PRIME B360-PLUS",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6756750.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/680/ceIfye84NJk3A.jpg",
      "goodname": "华硕ROG STRIX Z390-I GAMING",
      "price": "2399",
      "maxmemory": "64GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47034490333.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/186_120x90/171/ceVpmyR1jiV7Q.jpg",
      "goodname": "技嘉Z370 HD3",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5218509.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/462/ceefq1MJuKmfo.jpg",
      "goodname": "技嘉Z390 AORUS PRO",
      "price": "1849",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000680991.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/398/ceiFG65aUrxQk.jpg",
      "goodname": "技嘉B360M GAMING HD",
      "price": "649",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6646818.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/184/ce3w2jMVfUqBA.jpg",
      "goodname": "技嘉Z390 GAMING X",
      "price": "1398",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000668194.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/70_120x90/338/cemPDt5qWSgMo.jpg",
      "goodname": "技嘉H61M-DS2",
      "price": "479",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1474315114.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/372/cecE756sFXyxk.jpg",
      "goodname": "微星B360M WIND",
      "price": "549",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7041725.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/193/cebkf17AGLLk.jpg",
      "goodname": "技嘉Z390 UD",
      "price": "1268",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000668192.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/135_120x90/772/ceOC51vPNms.jpg",
      "goodname": "技嘉H81M-DS2(rev.1.0)",
      "price": "409",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1474385898.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/588/cekmo1wLmfUXY.jpg",
      "goodname": "微星B450M PRO-VDH",
      "price": "529",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/35893722877.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/798/cesq1hlSsNV6.jpg",
      "goodname": "七彩虹战斧C.B360M-PLUS V20",
      "price": "629",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.5×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7437966.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/181_120x90/12/ceLTIKFivc9w.jpg",
      "goodname": "微星B350M MORTAR",
      "price": "857",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.3×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41479756440.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/262/ce5Ah3srVKEU.jpg",
      "goodname": "微星B350M PRO-VD PLUS",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×20.6cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14975556621.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/917/ceyxiBG3KWAE.jpg",
      "goodname": "梅捷SY-狂龙 B360M",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "30.5×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7126952.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/841/ceRAu7AvXtHY6.jpg",
      "goodname": "微星MPG Z390 GAMING PLUS",
      "price": "1399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34312294809.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/426/ceLCmtpls9c9M.jpg",
      "goodname": "华硕PRIME B365M-A",
      "price": "849",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "24.4×21.8cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003337586.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/996/ce4fXpxYbNouA.jpg",
      "goodname": "华硕PRIME B450M-K",
      "price": "949",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×22.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8323538.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/442/ceRpsKecZ8CAE.jpg",
      "goodname": "技嘉Z390 AORUS XTREME WATERFORCE",
      "price": "12888",
      "maxmemory": "64GB",
      "kind": "E-ATX板型",
      "size": "30.5×27.1cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/46949992476..html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/603/cec1QdXtoHcRk.jpg",
      "goodname": "华硕PRIME X470-PRO",
      "price": "1499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7038904.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/94_120x90/134/ce8cq3uu0JjgI.jpg",
      "goodname": "华硕M5A78L-M LX3 PLUS",
      "price": "399",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18.8cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/717531.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/603/cecaolxZs02kg.jpg",
      "goodname": "华硕ROG STRIX B450-I GAMING",
      "price": "1099",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8515227.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/188_120x90/728/ceaM0hmV9KhwQ.jpg",
      "goodname": "华硕PRIME A320M-K",
      "price": "409",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×22.1cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4345677.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/191_120x90/675/cepQQdah5jnA2.jpg",
      "goodname": "华硕PRIME B450M-A",
      "price": "639",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8535875.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/258/ce1fwdBA8eU.jpg",
      "goodname": "技嘉B360M D2V",
      "price": "629",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28416322922.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/967/cesKIPwyipcfY.jpg",
      "goodname": "华硕PRIME Z390-P",
      "price": "1599",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000542143.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/990/cehvkKpBIykCI.jpg",
      "goodname": "华硕PRIME B360M-K",
      "price": "699",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6969977.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/962/cekiuW6iFkACA.jpg",
      "goodname": "技嘉B360M POWER",
      "price": "720",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34874455021.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/821/cee0pgl7C8xgI.jpg",
      "goodname": "华硕TUF Z370-PLUS GAMING II",
      "price": "1699",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000561866.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/188_120x90/218/ceaqRyxVqVBVs.jpg",
      "goodname": "技嘉A320M-S2H",
      "price": "439",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×19.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000449979.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/993/cePkRVhuudq4Q.jpg",
      "goodname": "华硕ROG STRIX Z390-E GAMING",
      "price": "2599",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000561582.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/225/ceOzZ1xFSjsEI.jpg",
      "goodname": "技嘉B360M D3V",
      "price": "799",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26575123907.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/88/cenygGGgNIUUk.jpg",
      "goodname": "技嘉Z390 AORUS XTREME",
      "price": "7999",
      "maxmemory": "64GB",
      "kind": "E-ATX板型",
      "size": "30.5×27.1cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002106852.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/170_120x90/954/ceNYMPt4xYY.jpg",
      "goodname": "华硕H110M-K",
      "price": "459",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.3cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7226529.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/211/ceCH78nsyMej.jpg",
      "goodname": "华硕PRIME Z370-P II",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×23.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47271174310.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/946/ceENQiv9zcYFY.jpg",
      "goodname": "华硕TUF Z370-PLUS GAMING",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5233731.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/411/cekFCSJi0U3LE.jpg",
      "goodname": "技嘉B360M DS3H",
      "price": "749",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "22.6×20.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26855070539.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/135_120x90/299/ce29eSCZGvnk.jpg",
      "goodname": "华硕H81M-K",
      "price": "439",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1231462.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/368/ce6uu8IsdWmp6.jpg",
      "goodname": "华硕PRIME H310M-K R2.0",
      "price": "549",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002069494.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/494/ceANkCSi9VeYs.jpg",
      "goodname": "微星X470 GAMING PRO CARBON",
      "price": "1729",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7052280.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/416/ceonMhRO0V.jpg",
      "goodname": "华硕ROG STRIX B360-H GAMING",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6756752.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/87/ceI19flyGkgDI.jpg",
      "goodname": "技嘉B250-HD3",
      "price": "439",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25149436026.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/881/ceqDDC8i7IeE.jpg",
      "goodname": "华硕ROG MAXIMUS XI HERO (WI-FI)",
      "price": "3499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000542035.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/441/cefopegYGmv2.jpg",
      "goodname": "华硕PRIME B250M-A",
      "price": "619",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×22.1cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8413079.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/301/ceqzUs5sGtywE.jpg",
      "goodname": "技嘉B250M-D2V",
      "price": "489",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13498212371.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/364/ce8wgIA5RzhI2.jpg",
      "goodname": "技嘉B360M HD3",
      "price": "729",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26851225853.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/166_120x90/671/ceCQ6GsRqIgBw.jpg",
      "goodname": "华硕H110M-K D3",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.3cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47692784786.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/446/ceDsr5uko5hQ.jpg",
      "goodname": "华硕H110M-F",
      "price": "449",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.8cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25213708150.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/165_120x90/879/ceSX9mydri02Q.jpg",
      "goodname": "技嘉H110M-DS2",
      "price": "549",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3126249.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/490/ceDcYi3xd7Ca2.jpg",
      "goodname": "华硕ROG STRIX B360-F GAMING",
      "price": "1199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6744758.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/150_120x90/786/ceQv0RU0VEROU.jpg",
      "goodname": "华硕A68HM-K",
      "price": "349",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10058459151.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/191_120x90/412/ceqLzPQF2BIo.jpg",
      "goodname": "七彩虹Battle Axe C.B360M-HD DELUXE V20",
      "price": "469",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.5×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7008913.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/651/ceIpUoyqvHpyY.jpg",
      "goodname": "技嘉X470 AORUS ULTRA GAMING",
      "price": "1499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7283429.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/637/ceQTXkAawGyFM.jpg",
      "goodname": "华硕PRIME B365-PLUS",
      "price": "1049",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44879238025.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/66/cedHWxjSMWz2M.jpg",
      "goodname": "华硕PRIME Z390M-PLUS",
      "price": "1399",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000542139.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/195_120x90/706/ceTD1GYr9iDI.jpg",
      "goodname": "华硕ROG RAMPAGE VI EXTREME OMEGA",
      "price": "10001",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×27.7cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002877876.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/483/ceexueVu36t8U.jpg",
      "goodname": "华硕ROG STRIX B360-G GAMING",
      "price": "899",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6756748.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/118_120x90/128/cenTzxhKCMfI.jpg",
      "goodname": "技嘉H81M-S1",
      "price": "399",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25512679906.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/186_120x90/706/cefRAEYXvmG2w.jpg",
      "goodname": "华擎Z370 Pro4",
      "price": "849",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6454926.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/566/ceWAtgRbWMRBQ.jpg",
      "goodname": "华硕ROG STRIX Z390-F GAMING",
      "price": "2399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34183594088.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/199/cetxcBo2dxGxs.jpg",
      "goodname": "华擎Z390 Pro4",
      "price": "899",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000376244.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/272/ceKQlFttgaQqw.jpg",
      "goodname": "华硕ROG STRIX X470-F GAMING",
      "price": "1799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7252367.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/182/cedfcQ1K0JSwo.jpg",
      "goodname": "技嘉H310M S2",
      "price": "649",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14815797573.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/62/ceUv1U2fNjoDQ.jpg",
      "goodname": "技嘉B450 AORUS M",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8472359.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/726/ceqGSRTOljHJ.jpg",
      "goodname": "七彩虹战斧B450M-HD 魔音版 V14",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "20.3×23.5mm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001573883.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/934/ceHXR5OB2YH0s.jpg",
      "goodname": "华硕PRIME B360M-A",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×20.6cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26811143343.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/857/ceBGvMo43X4tM.jpg",
      "goodname": "技嘉H310M DS2",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6833348.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/835/ceGDar0ydxxNA.jpg",
      "goodname": "技嘉H310M DS2V",
      "price": "599",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7047241.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/542/cegG5MwuIUITQ.jpg",
      "goodname": "技嘉B365M AORUS ELITE",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003406477.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/937/cey5G9KBcoE0Q.png",
      "goodname": "微星Z390-A PRO",
      "price": "1199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "暂无数据",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000634445.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/295/ceJYpakhAnzo.jpg",
      "goodname": "技嘉Z390 AORUS ELITE",
      "price": "1698",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "31.5×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000612307.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/162/ceHqzfovtDSKQ.jpg",
      "goodname": "技嘉B360 HD3",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26854413396.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/905/ce6VyZWdvBQAQ.jpg",
      "goodname": "技嘉B250M-D3V",
      "price": "679",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×17.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13498212368.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/184_120x90/432/ce5gIS7jPutTY.jpg",
      "goodname": "技嘉H110M-S2(rev.1.0)",
      "price": "429",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13498212369.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/718/ceffUIVdfASkg.jpg",
      "goodname": "技嘉Z370 AORUS Gaming 7",
      "price": "2999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8752944.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/182_120x90/425/ceJOSi5D1vuM.jpg",
      "goodname": "华硕PRIME Z270-P",
      "price": "1359",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/42188974463.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/112_120x90/919/cepSFXfin3Dk.jpg",
      "goodname": "技嘉970A-DS3P(rev.1.0)",
      "price": "699",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "30.5×21.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5483811.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/885/cec0QadZ9ljDs.jpg",
      "goodname": "技嘉B450 I AORUS PRO WIFI",
      "price": "999",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31775260193.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/837/ceBC2ppMfHJ4k.jpg",
      "goodname": "华硕ROG STRIX B450-E GAMING",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4m",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001749063.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/270/ceZ0Fmc9TY1mQ.jpg",
      "goodname": "微星Z370-A PRO",
      "price": "1399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11248234853.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/444/cenuuqlYqe38M.jpg",
      "goodname": "华硕ROG STRIX B360-I GAMING",
      "price": "1099",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6957641.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/575/ceB4IrxXsrsLE.jpg",
      "goodname": "微星B450M BAZOOKA PLUS",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18377154719.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/613/cetOOMFVPw9U.jpg",
      "goodname": "微星X470 GAMING PRO",
      "price": "1399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7265805.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/932/cei6lqoMMpumk.jpg",
      "goodname": "华硕PRIME B350M-A",
      "price": "749",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4470752.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/210/cedyOevmYk1KM.jpg",
      "goodname": "技嘉Z390 I AORUS PRO WIFI",
      "price": "1498",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000668170.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/184_120x90/22/ceINShLlPcLA.jpg",
      "goodname": "华擎AB350M-HDV",
      "price": "389",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.1×20.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4791978.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/191_120x90/490/ceguUm4ZsLhq6.jpg",
      "goodname": "华硕TUF B450-PLUS GAMING",
      "price": "849",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8515181.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/749/ceiwUVzD5n0k.jpg",
      "goodname": "华硕PRIME H310-PLUS",
      "price": "799",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "30.5×19.1cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6793824.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/191_120x90/889/ceZIFC18QbWo.jpg",
      "goodname": "华硕PRIME B450-PLUS",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×23.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8323540.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/180_120x90/949/cehGy3RcnngeA.jpg",
      "goodname": "华硕PRIME B350-PLUS",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×23.7cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14552453337.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/579/cet5k3BQS5p2g.jpg",
      "goodname": "华硕ROG Maximus XI Formula",
      "price": "3999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/35674858233.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/186_120x90/228/cex9st58V2FUU.jpg",
      "goodname": "微星Z370 GAMING PLUS",
      "price": "1499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18315045424.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/228/ceNANBW9V6Rx6.jpg",
      "goodname": "华硕ROG Rampage VI Extreme",
      "price": "6999",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×27.7cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4903143.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/186_120x90/754/censhQnYbNp.jpg",
      "goodname": "华硕ROG STRIX Z370-H GAMING",
      "price": "1899",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25104322135.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/373/cefDqlIH0DnpI.jpg",
      "goodname": "华硕ROG MAXIMUS XI EXTREME",
      "price": "6799",
      "maxmemory": "64GB",
      "kind": "暂无数据",
      "size": "暂无数据",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000542253.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/147_120x90/400/ceLKpWDRhk1wg.jpg",
      "goodname": "技嘉F2A68HM-DS2(rev.1.0)",
      "price": "349",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1291600.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/301/ceG99qmImiEuo.jpg",
      "goodname": "七彩虹断剑C.H310M-K PRO V20",
      "price": "379",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "21.5×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7652323.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/183_120x90/123/ceDdsceEkpuTk.jpg",
      "goodname": "华硕ROG STRIX B350-F GAMING",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14552453339.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/186_120x90/175/ce07LtViEm2FE.jpg",
      "goodname": "华硕ROG STRIX Z370-F GAMING",
      "price": "2099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10348166107.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/267/ceHpNLjziehY.jpg",
      "goodname": "技嘉B360M D3H",
      "price": "669",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×23.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6680344.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/833/ceD6jwzQwyy1M.jpg",
      "goodname": "微星A320M PRO-VD",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.6×18.7cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/34365636867.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/37/cekz27nTFtOb.jpg",
      "goodname": "微星B450 TOMAHAWK",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8259908.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/241/ce1WzJV94scdw.jpg",
      "goodname": "技嘉B450 AORUS PRO WIFI",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8472361.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/426/ceBWBJ1QsVc2I.jpg",
      "goodname": "技嘉Z370P D3",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10535269892.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/191/ceHVItGPRzOo.jpg",
      "goodname": "技嘉X470 AORUS GAMING 7 WIFI",
      "price": "2999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7070044.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/16/celSNqE1V3gvc.jpg",
      "goodname": "微星B450 GAMING PRO CARBON AC",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8330488.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/318/ceCZLvuLLXp6.jpg",
      "goodname": "华硕PRIME Z270-A",
      "price": "1499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26854200193.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/628/ceCZsWWfxFcrw.jpg",
      "goodname": "微星H310M PRO-VD",
      "price": "459",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×20.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000701290.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/540/ceuZw9WDE398U.jpg",
      "goodname": "华硕PRIME B250M-K",
      "price": "749",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1795372082.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/479/ce6Pp7RPn3d5g.jpg",
      "goodname": "华硕PRIME B360M-D",
      "price": "749",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18.7cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555461.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/195_120x90/858/ce3lDYrQHzid.jpg",
      "goodname": "华硕ROG MAXIMUS XI APEX",
      "price": "3999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002877860.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/181_120x90/828/ceJPRw8bjJ2E.jpg",
      "goodname": "微星B350M GAMING PRO",
      "price": "799",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×21.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41479759855.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/939/ceJh7lxcEjq1k.jpg",
      "goodname": "华硕TUF Z390-PLUS GAMING",
      "price": "1799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41674204236.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/181/celZDCJZnhPpI.jpg",
      "goodname": "华硕ROG STRIX X299-E Gaming",
      "price": "3999",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4378689.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/136/cehoYlzphikEQ.jpg",
      "goodname": "华硕PRIME Z370M-PLUS II",
      "price": "1199",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/33311705286.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/195_120x90/782/cehqClCM5WaO2.jpg",
      "goodname": "华硕ROG Zenith Extreme Alpha",
      "price": "7999",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×27.7cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43064770724.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/67/ceFnJ53ZnV2.jpg",
      "goodname": "微星X370 GAMING PLUS",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14250466545.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/126/ceW2gMu88BAI.jpg",
      "goodname": "技嘉B250M-D3H",
      "price": "550",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4257400.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/170_120x90/207/ceUBocQeSjxw.jpg",
      "goodname": "七彩虹C.H110M-K全固态版 V20",
      "price": "339",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11619616336.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/171_120x90/883/cehLkY3hr6GWY.jpg",
      "goodname": "华硕H61M-K",
      "price": "499",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1519320964.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/76/ceiO8tsXRaQEQ.jpg",
      "goodname": "微星B360 GAMING ARCTIC",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7172615.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/871/ceNRIsgUwrTo.jpg",
      "goodname": "华硕TUF X470-PLUS GAMING",
      "price": "1399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7341712.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/399/ceUG2mIwVPHx2.jpg",
      "goodname": "华硕TUF B450M-PRO GAMING",
      "price": "899",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001749041.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/195_120x90/360/cemOotdlqmmQ.jpg",
      "goodname": "技嘉SY-B85-BTC",
      "price": "499",
      "maxmemory": "16GB",
      "kind": "ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000334596.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/169_120x90/826/cemGugAGzXQEk.jpg",
      "goodname": "技嘉H110M-DS2V(rev.1.0)",
      "price": "409",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2748993.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/798/cejmVzFvfy6IA.png",
      "goodname": "华硕TUF Z390M-PRO GAMING (WI-FI)",
      "price": "1799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000561722.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/389/ceAm1DQpZxomA.jpg",
      "goodname": "华硕TUF B365M-PLUS GAMING",
      "price": "829",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005694456.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/196_120x90/133/ceJY3EDtfKkU6.jpg",
      "goodname": "微星A320M PRO-M2",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×20.6cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002401109.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/257/ceVfjuEZJY8U.jpg",
      "goodname": "华擎B360M-HDV",
      "price": "459",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.8cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6893075.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/968/ce1wGoBhKC3Uc.jpg",
      "goodname": "微星Z370M MORTAR",
      "price": "899",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.3×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/24592307779.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/836/ce4EL07Ok7Kc.jpg",
      "goodname": "微星B365M PRO-VH",
      "price": "799",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002531675.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/195_120x90/312/ce35t2O8qJY1I.jpg",
      "goodname": "华擎B365M-ITX/ac",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Mini-ITX板型",
      "size": "17×17cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002131021.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/167_120x90/999/ceecUbosfHjc.jpg",
      "goodname": "华硕B150 PRO GAMING",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10164950613.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/110/ceaTBoqWQMdVI.jpg",
      "goodname": "微星B360M BAZOOKA PLUS",
      "price": "739",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.3×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27867407349.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/194_120x90/112/cel6VakVCrWqo.jpg",
      "goodname": "微星MAG Z390M MORTAR",
      "price": "1059",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13786867814.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/278/cexUsEMRfaGMY.jpg",
      "goodname": "微星B360M FIRE",
      "price": "649",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43545078040.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/376/ceVtWPvqFxBI.jpg",
      "goodname": "华硕PRIME H310M-A",
      "price": "599",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7007813.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/186_120x90/392/ceunDSnfS1pjM.jpg",
      "goodname": "华硕ROG STRIX X399-E GAMING",
      "price": "4699",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×26.9cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5056173.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/935/ceet1l5AcD.jpg",
      "goodname": "技嘉B450 AORUS ELITE",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×23.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/32971482208.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/927/ce0qsz1K6Ih3M.jpg",
      "goodname": "微星B350M BAZOOKA",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12499693620.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/756/ceYYH7Ogx9iU.jpg",
      "goodname": "七彩虹战斧H310M-M.2 魔音版 V20",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.5×17.5cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44473997586.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/72/ceeQBmDt76IQw.jpg",
      "goodname": "微星MPG Z390I GAMING EDGE AC",
      "price": "1599",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "暂无数据",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/21874771457.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/181_120x90/154/ceg2uIL6ouaOo.jpg",
      "goodname": "华硕ROG STRIX B250F GAMING",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4257096.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/521/ceexExLx4HRQM.jpg",
      "goodname": "华硕PRIME H310M-D",
      "price": "569",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6793820.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/516/ceK2o5Viz4Kxw.jpg",
      "goodname": "技嘉B360N AORUS GAMING WIFI",
      "price": "1299",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8259890.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/100/ce4S6EKRgYgmI.jpg",
      "goodname": "微星B360M GAMING PLUS",
      "price": "729",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.3×20.6cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7047297.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/187_120x90/251/ceLVrBriZYUA.jpg",
      "goodname": "微星Z370 GAMING M5",
      "price": "2199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/17565914401.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/182_120x90/119/cer58zpHcBOUE.jpg",
      "goodname": "技嘉Z270-HD3",
      "price": "1149",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13498212370.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/584/ceVWlgquJLwkc.jpg",
      "goodname": "华硕PRIME H310M-E",
      "price": "569",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30706606817.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/269/ceN6al9kVmEKs.jpg",
      "goodname": "微星B450M GAMING PLUS",
      "price": "899",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×21.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/44138885303.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/193_120x90/233/ceAQ8b3lUxdW2.jpg",
      "goodname": "技嘉Z390 M GAMING",
      "price": "1399",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000668148.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/213/ceo40EjBp8p.jpg",
      "goodname": "技嘉AB350M-Gaming 3",
      "price": "899",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8940695.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/43/ceyFgoTnENEO2.jpg",
      "goodname": "技嘉B360 AORUS GAMING 3",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26878557463.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/218/cemncDmVy84ME.jpg",
      "goodname": "微星Z370 OC GAMING",
      "price": "949",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/49129914655.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/186_120x90/349/ceujshavVHIXk.jpg",
      "goodname": "华硕ROG MAXIMUS X HERO",
      "price": "3499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11990900755.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/541/ce8V7Ib39hO2.jpg",
      "goodname": "微星MPG Z390 GAMING PRO CARBON AC",
      "price": "2099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "24.3×30.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000638165.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/631/ceBRnkXwecf.jpg",
      "goodname": "华擎B450M-HDV",
      "price": "549",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.1×20.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8347705.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/799/ce4YAqNNYgBqM.jpg",
      "goodname": "华硕ROG CROSSHAIR VII HERO (WI-FI)",
      "price": "3399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7252351.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/228/cehMU2tHlPZaE.jpg",
      "goodname": "微星Z390M-S01",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005412382.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/112_120x90/183/cef7rm8hEcd6.jpg",
      "goodname": "技嘉H61M-S2PH(rev.1.0)",
      "price": "699",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "24.4×20.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/28383377361.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/938/cekY4FERXrZMQ.jpg",
      "goodname": "华擎A320M-ITX",
      "price": "659",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8790449.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/920/cehWWJ3j4lG1g.jpg",
      "goodname": "华硕ROG STRIX X470-I GAMING",
      "price": "1999",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555475.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/181_120x90/481/ceJ63p5NjdohI.jpg",
      "goodname": "技嘉Z270P-D3",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×19.9cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12458915593.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/170_120x90/280/ceez0h4OIiCq.jpg",
      "goodname": "七彩虹战斧C.A970X X5魔音版 V14",
      "price": "339",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "20.5×29.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2299352.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/373/ceoxtfbffXvw.jpg",
      "goodname": "华硕TUF B365M-PLUS GAMING(WI-FI)",
      "price": "849",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003440827.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/262/cekTsjB8Nsq0U.jpg",
      "goodname": "华擎Z390M Pro4",
      "price": "879",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000376200.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/432/cehEJMYiPYjo.jpg",
      "goodname": "华硕ROG STRIX B365-G GAMING",
      "price": "899",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005694452.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/184_120x90/300/ceRe58JvPouf6.jpg",
      "goodname": "映泰H110MD PRO",
      "price": "309",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47925976590.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/188_120x90/501/ceqHQapSsfE.jpg",
      "goodname": "华硕ROG MAXIMUS X FORMULA",
      "price": "3999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11237814718.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/29/ceTOkGx4y3Eac.jpg",
      "goodname": "华硕ROG STRIX H370-F GAMING",
      "price": "1399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27869295562.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/563/cesnJ3HmdIobQ.jpg",
      "goodname": "华硕TUF B360-PRO GAMING",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43106143518.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/67/ceJMq0WAIRGQ.jpg",
      "goodname": "华硕TUF B360-PRO GAMING (WI-FI)",
      "price": "1199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6957823.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/421/ceDQyfY1dpkCU.jpg",
      "goodname": "微星B360M PRO-VDH",
      "price": "749",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27746911069.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/912/ce29TZHfr9wI.jpg",
      "goodname": "七彩虹断剑C.A320M-K PRO V14",
      "price": "359",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "21.5×18.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8697503.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/187_120x90/52/ceuejZKCgQdM.jpg",
      "goodname": "华擎Z370M Pro4",
      "price": "879",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5361697.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/526/ce3uuw2U7FF8Q.jpg",
      "goodname": "技嘉Z390 AORUS ULTRA",
      "price": "2399",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000668136.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/221/cetxsBs2E156.jpg",
      "goodname": "华擎B360M Pro4",
      "price": "629",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7918135.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/32/cesp9XDcFJcbY.jpg",
      "goodname": "七彩虹战斧B450M-G DELUXE V14",
      "price": "599",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.5×24.5mm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001870719.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/826/cenEIIJQAgxg6.jpg",
      "goodname": "影驰B360 GAMER",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31802106500.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/848/ceq0Zhah3YeR6.jpg",
      "goodname": "华硕PRIME H310M-F R2.0",
      "price": "569",
      "maxmemory": "32GB",
      "kind": "uATX板型（属于Micro ATX板型）",
      "size": "21.34×17.78cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45186501827.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/538/ceniMGmmMCUQY.jpg",
      "goodname": "华硕TUF Z370-PRO GAMING",
      "price": "1699",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1590439032.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/882/cegZE8FIjJ6Y.jpg",
      "goodname": "华擎X370M-HDV",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.1×20.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8249420.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/158/ceW8xpDhsfsI.jpg",
      "goodname": "华硕TUF X299 Mark 2",
      "price": "2999",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4378671.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/214/cer5GiZQ61d.jpg",
      "goodname": "技嘉B360 HD3P",
      "price": "969",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6680346.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/77/cewZLafpvQkUo.jpg",
      "goodname": "华擎X370 Pro4",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6651293.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/170/ceQaopiUBAGPA.jpg",
      "goodname": "技嘉AX370M-DS3H",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×21.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004742530.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/495/ceNVvP78pix.jpg",
      "goodname": "华擎X470 Master SLI",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7252377.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/953/ce3zefcrmXKtg.jpg",
      "goodname": "华擎B450M-HDV R4.0",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.1×20.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002657038.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/11/ceUjYbBLyC5w.jpg",
      "goodname": "华擎Z390 Extreme4",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000544894.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/188_120x90/537/ceOAvpSPc0I.jpg",
      "goodname": "华硕PRIME X399-A",
      "price": "3499",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×26.9cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4620627.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/318/ceSpwqP3gYuxc.jpg",
      "goodname": "华擎H310M-HDV",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "19.1×18.8cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6665598.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/186_120x90/399/ce4SfnBS3uFk.jpg",
      "goodname": "技嘉Z370 AORUS Gaming 5",
      "price": "2299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7801423.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/183_120x90/928/ceNBfHRHPFG4.jpg",
      "goodname": "华硕PRIME B350M-K",
      "price": "679",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×22.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15468676763.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/251/cedWoKKFzgI.jpg",
      "goodname": "技嘉B360M AORUS GAMING 3",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×23.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26876865754.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/342/ce7duVAsKS4v.jpg",
      "goodname": "微星H110M PRO-A",
      "price": "649",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "22.6×17.3cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12499056315.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/186_120x90/152/ceufjq5vGcgw.jpg",
      "goodname": "技嘉Z370M D3H",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5407479.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/127/ceYkwRM4O2eFY.jpg",
      "goodname": "技嘉H310M HD2",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7337835.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/559/cezM6971qU1vE.jpg",
      "goodname": "微星H310M GAMING PLUS",
      "price": "649",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.0×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6833388.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/182_120x90/500/ceB1jYvZMtkBc.jpg",
      "goodname": "微星Z270 GAMING PRO CARBON",
      "price": "1999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14889905389.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/188_120x90/251/cer3LAY7UuJKc.jpg",
      "goodname": "华硕ROG CROSSHAIR VI EXTREME",
      "price": "4699",
      "maxmemory": "64GB",
      "kind": "E-ATX板型",
      "size": "30.5×26.9cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4708583.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/817/ceWk8lG2SSeVY.jpg",
      "goodname": "昂达A320V全固版",
      "price": "359",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "19×22cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5084720.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/946/ce9xqFiH8IqY.jpg",
      "goodname": "华硕ROG STRIX B250G GAMING",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×21.8cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/12423132296.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/148_120x90/442/ceuYIFNxFVH.jpg",
      "goodname": "七彩虹C.H81M 全固态版 V24",
      "price": "299",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "17.0×21.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7266460.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/787/cew52H5zCpzjk.jpg",
      "goodname": "技嘉H310M S2P",
      "price": "599",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26497362022.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/183_120x90/498/ceV8QGQE59oZY.jpg",
      "goodname": "华硕ROG ZENITH EXTREME",
      "price": "7199",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×27.7cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10007659744.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/186_120x90/430/cejBPocnlQTg.jpg",
      "goodname": "技嘉Z370 AORUS Ultra Gaming",
      "price": "1799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1795403275.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/792/ceysMzBZ1piZg.jpg",
      "goodname": "华硕PRIME H310M-D R2.0",
      "price": "459",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002069508.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/989/ceVNgBwxnO2E.jpg",
      "goodname": "微星H310M FIRE",
      "price": "489",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6833378.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/198_120x90/753/cehf1Uv5Ye6v2.jpg",
      "goodname": "华擎A320TM-ITX",
      "price": "599",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005323248.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/404/ceMaCv14QRHL6.jpg",
      "goodname": "微星A320M PRO-E",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.6×18.7cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004358222.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/185_120x90/228/ceReFQ7gWulw.jpg",
      "goodname": "华硕PRIME A320M-E",
      "price": "649",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×22.1cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7640421.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/197_120x90/315/ceSGwzim3PhE.jpg",
      "goodname": "微星B360M BAZOOKA",
      "price": "749",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002597577.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/343/ce3m6ec6acR66.jpg",
      "goodname": "华硕PRIME H310M-E R2.0",
      "price": "569",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001548729.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/193_120x90/116/cehElmivgJ1PI.jpg",
      "goodname": "微星MPG Z390 GAMING EDGE AC",
      "price": "1599",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "暂无数据",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000616042.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/178_120x90/922/ceU5O1dA9ZwmY.jpg",
      "goodname": "七彩虹C.Q1900M全固态版 V20",
      "price": "379",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "21.5×18cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3266724.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/494/ceANkCSi9VeYs.jpg",
      "goodname": "微星X470 GAMING M7 AC",
      "price": "2499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7052278.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/169_120x90/471/cefPGKFzZEqxM.jpg",
      "goodname": "技嘉H110M-S2PH(rev.1.0)",
      "price": "699",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.4×18cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2822922.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/45/ce7kyQ0cwyA6.jpg",
      "goodname": "微星B360 GAMING PRO CARBON",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7047293.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/193_120x90/533/ceQfRKrXrC77k.jpg",
      "goodname": "昂达H310C-SD3全固版",
      "price": "369",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "21.78×17cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8773513.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/194_120x90/81/ceJpCsX2xlCqI.png",
      "goodname": "华硕PRIME X299-DELUXE II",
      "price": "4899",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针电源接口",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/43150163312.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/186_120x90/317/ceru8LyT911wM.jpg",
      "goodname": "技嘉Z370 HD3P",
      "price": "1499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5281667.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/730/ce92TQSNiAQ.jpg",
      "goodname": "华硕ROG MAXIMUS XI GENE",
      "price": "3699",
      "maxmemory": "64GB",
      "kind": "MATX板型",
      "size": "24.4×22.6cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/47005957731.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/186_120x90/434/ceQomY04mafg.jpg",
      "goodname": "微星Z370 GAMING PRO CARBON",
      "price": "1899",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18251867669.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/209/ceP4lnjW2exj6.jpg",
      "goodname": "微星B360I GAMING PRO AC",
      "price": "1099",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30459335590.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/190_120x90/943/ce3t1sjpfWiQ.jpg",
      "goodname": "技嘉X470 AORUS GAMING 5 WIFI",
      "price": "2299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7283403.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/934/ceHZIwcAJpCzY.jpg",
      "goodname": "技嘉H110-D3A",
      "price": "799",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "30.5×19.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/18365482105.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/801/cefCIztPLts0E.jpg",
      "goodname": "铭瑄 MS-H110M全固版",
      "price": "298",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4369979.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/193/ce1depYF0WJH6.jpg",
      "goodname": "七彩虹C.A68HM-E全固态版 V18",
      "price": "269",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "17×21.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7480485.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/189_120x90/848/ce459bclZptGI.jpg",
      "goodname": "七彩虹iGame Z370 Vulcan X",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5375251.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/566/ceOwCpF6MJOTg.jpg",
      "goodname": "微星H310M PRO-VL",
      "price": "549",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.6×20.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6833374.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/186_120x90/175/ceO8akEWlfDn6.jpg",
      "goodname": "华硕ROG STRIX Z370-G GAMING (WI-FI AC)",
      "price": "1999",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10375703910.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/190_120x90/399/ce1T9dPNkA04I.jpg",
      "goodname": "华擎X470 Gaming-ITX/ac",
      "price": "1199",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7652351.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/734/cegWGr0ssSAlg.jpg",
      "goodname": "华擎B360M-ITX/ac",
      "price": "799",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30101815057.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/144_120x90/744/ceiCUcgNYaRA.jpg",
      "goodname": "七彩虹C.B85K 全固态版 V23",
      "price": "319",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "17×21.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7176958.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/196_120x90/8/cet5muWbvUD6g.jpg",
      "goodname": "七彩虹战斧Z390AK GAMING V20",
      "price": "1169",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003026120.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/293/ceBCBmafcpjig.jpg",
      "goodname": "华擎Z390M-ITX/ac",
      "price": "1199",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000419321.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/84/cefaLbEXVU5Ek.jpg",
      "goodname": "技嘉Z390 DESIGNARE",
      "price": "2999",
      "maxmemory": "64GB",
      "kind": "暂无数据",
      "size": "暂无数据",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002089842.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/185_120x90/258/ceYb9QnxJprhg.jpg",
      "goodname": "华硕PRIME A320M-A",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7685469.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/910/ceRZOiNFdGrBM.jpg",
      "goodname": "华硕PRIME H310I-PLUS",
      "price": "1099",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10067550468.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/517/cehvfYMMfPjeg.jpg",
      "goodname": "昂达H110C全固版",
      "price": "299",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22×17.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3100593.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/188_120x90/9/cec5n2dLLopk.jpg",
      "goodname": "七彩虹战斧C.AB350M-HD魔音版V14A",
      "price": "439",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.5×19.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6874483.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/240/ce8MQ9f9PxkfE.jpg",
      "goodname": "七彩虹战斧C.H310M-PT 魔音版 V20",
      "price": "359",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "21.5×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8699570.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/198_120x90/197/ceaQ7ytkkfyTQ.jpg",
      "goodname": "微星H310M-D",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005412384.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/626/ceQDEz84uLbc.jpg",
      "goodname": "华硕TUF B450-PRO GAMING",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002554640.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/86/ceVNwdKvsxG2.jpg",
      "goodname": "技嘉H370 AORUS Gaming 3 WiFi",
      "price": "1599",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29707012703.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/525/cexozxRne7dM.jpg",
      "goodname": "铭瑄 MS-终结者B360W",
      "price": "689",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.5×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8656419.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/822/ceHYkcdTIbjE.jpg",
      "goodname": "华擎H310M-ITX/ac",
      "price": "699",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6972980.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/234/cekyMVxoWexD6.jpg",
      "goodname": "华擎B450 Pro4",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8259904.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/454/ce2llMYKNQ8HI.jpg",
      "goodname": "七彩虹战斧B365M-HD PRO V21",
      "price": "599",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "22.5×18.5cm",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003227317.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/98/ceFQ7dCv7Gcvw.jpg",
      "goodname": "昂达H61M全固版",
      "price": "399",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22×17cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000246097.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/409/cexiXPfMLEpZ2.jpg",
      "goodname": "微星Z270 XPOWER GAMING TITANIUM",
      "price": "4199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14890536522.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/182_120x90/466/ceb5XcYvIgLks.jpg",
      "goodname": "微星Z270 KRAIT GAMING",
      "price": "1499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13818345828.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/645/cekJsPQcqTqRk.jpg",
      "goodname": "技嘉AORUS AX370-Gaming 5",
      "price": "1999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25780431817.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/195_120x90/827/ceLMcj4ecI94c.jpg",
      "goodname": "七彩虹C.H110M-VH D3全固态版 V20",
      "price": "339",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22×17.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8135240.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/577/ceKdVp87ANVTQ.jpg",
      "goodname": "华擎Fatal1ty B450 GAMING-ITX/AC",
      "price": "999",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8249380.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/170_120x90/207/ceUBocQeSjxw.jpg",
      "goodname": "七彩虹断剑C.H110M-K D3 EVO V20",
      "price": "479",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.5×17cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000419341.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/183_120x90/688/cet7xgyuOd6c.jpg",
      "goodname": "技嘉X299 AORUS Gaming 7",
      "price": "3499",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13449542123.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/191_120x90/91/censD4a48M8jI.jpg",
      "goodname": "昂达H310S全固版",
      "price": "349",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "16.8×19.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7755721.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/948/ceTORUd9f7eCM.jpg",
      "goodname": "微星H310M PRO-VDH",
      "price": "579",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26919653704.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/197_120x90/514/ce5tmKhM7GfqA.jpg",
      "goodname": "七彩虹C.A68M-E 全固态版 V15",
      "price": "289",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "17×21.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7195562.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/183_120x90/610/cepSGACqEIGQ.jpg",
      "goodname": "华擎X370 Taichi",
      "price": "1699",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005921836.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/186_120x90/402/ceLQDLVJrIPM.jpg",
      "goodname": "华擎Z370M-ITX/ac",
      "price": "1099",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5361693.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/153_120x90/314/cebHXPenDya.jpg",
      "goodname": "昂达H81M",
      "price": "309",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "21.5×17cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1205789.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/181_120x90/846/cepLChshZHZDA.jpg",
      "goodname": "微星Z270 GAMING PLUS",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14954605954.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/184_120x90/386/cep4KYsQDceIE.jpg",
      "goodname": "华硕ROG STRIX X370-F Gaming",
      "price": "1999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4345693.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/196_120x90/309/ceSK1SXJd0d6.jpg",
      "goodname": "华擎J3455-ITX",
      "price": "619",
      "maxmemory": "暂无数据",
      "kind": "暂无数据",
      "size": "暂无数据",
      "interface": "暂无数据",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/41245999636.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/187_120x90/487/ceiTVkoiqiAJc.jpg",
      "goodname": "技嘉Z370N WIFI",
      "price": "1599",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17×17cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26599538381.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/192_120x90/954/ceUte0djin6.jpg",
      "goodname": "七彩虹战斧C.B360AK 魔音版 V20A",
      "price": "749",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8461511.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/195_120x90/672/ceKvFzCBUyFI6.jpg",
      "goodname": "华擎H310CM-DVS",
      "price": "389",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "19.1×18.8cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8752930.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/185_120x90/53/cejdAJYgc9Uk2.jpg",
      "goodname": "微星X399 GAMING PRO CARBON AC",
      "price": "3899",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4640849.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/206/ce0YONY1mIP.jpg",
      "goodname": "华硕ROG STRIX H370-I GAMING",
      "price": "1399",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26836010949.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/242/ceTWWqCAQ975E.jpg",
      "goodname": "华擎B365M Phantom Gaming 4",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.2cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004470552.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/250/cemQVFiBpJEM.jpg",
      "goodname": "华擎Z390 Phantom Gaming-ITX/ac",
      "price": "1599",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000544940.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/180_120x90/511/ceOZIvPjrPNw.jpg",
      "goodname": "微星B250M NANO",
      "price": "749",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11244272252.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/744/ceJC6NtKkel2.jpg",
      "goodname": "技嘉H370 HD3",
      "price": "1199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6647070.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/146/cejxMtV5wzCrY.jpg",
      "goodname": "华硕ROG STRIX B250I GAMING",
      "price": "999",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14550952822.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/744/ceFViE25b5stw.jpg",
      "goodname": "技嘉AB350N-Gaming WIFI",
      "price": "1099",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14453346621.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/181_120x90/463/ceuNgNAVFFJ2.jpg",
      "goodname": "微星X370 KRAIT GAMING",
      "price": "1599",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14250466546.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/190_120x90/482/ceYcVaUw6OMJ2.jpg",
      "goodname": "华硕PRIME H370M-PLUS",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31481827380.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/180_120x90/571/ceqrxRdQWzno.jpg",
      "goodname": "微星B250M BAZOOKA",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×22.8cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11244272253.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/192_120x90/493/cefvrSI61ciEg.jpg",
      "goodname": "华擎X370M Pro4",
      "price": "599",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8790447.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/188_120x90/41/ceFS7lP5yWTGE.jpg",
      "goodname": "微星A320M PRO-VH PLUS",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.6×18.7cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6148441.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/189_120x90/71/cedh4ZsCq1IXg.jpg",
      "goodname": "华硕WS X299 SAGE",
      "price": "5699",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×26.7cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31182893047.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/198_120x90/828/ceCnA8ArbQuVo.jpg",
      "goodname": "微星H310M PRO-M2 PLUS",
      "price": "459",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.0×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005921834.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/183_120x90/885/ceNqMm68Wevds.jpg",
      "goodname": "华硕PRIME X299-A",
      "price": "3599",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4378691.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/180_120x90/446/ce6FSLl1YOD2.jpg",
      "goodname": "微星X370 GAMING PRO CARBON",
      "price": "1799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14250466544.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/178_120x90/941/cemM4jv57Soto.jpg",
      "goodname": "华硕H110I-PLUS",
      "price": "629",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14550952824.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/182_120x90/433/cecbqYFl03KrY.jpg",
      "goodname": "微星B250M PRO-VDH",
      "price": "699",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×22.8cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11244272251.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/183_120x90/787/ceBcBVWa7jojg.jpg",
      "goodname": "华硕TUF X299 Mark 1",
      "price": "3099",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7762142.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/252/cedUhOhPiYuZA.jpg",
      "goodname": "铭瑄 MS-挑战者A320M-VH M.2",
      "price": "369",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001939880.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/200/ceuoPXJVFbaK.jpg",
      "goodname": "七彩虹C.H81-DS全固态版 V20",
      "price": "319",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "19.0×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004182662.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/186_120x90/843/cev9ojgFbQdE.jpg",
      "goodname": "微星Z370 GODLIKE GAMING",
      "price": "5199",
      "maxmemory": "64GB",
      "kind": "E-ATX板型",
      "size": "30.5×27.2cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/17564545940.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/182_120x90/454/ceTXTpSWGyw.jpg",
      "goodname": "微星B250 PC MATE",
      "price": "1049",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.4×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11245167362.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/274/ce1nDZWuipeYM.jpg",
      "goodname": "映泰B450MHC",
      "price": "419",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8654313.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/636/ce9HQlUzhXR9s.jpg",
      "goodname": "华硕TUF H310M-PLUS GAMING",
      "price": "599",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×20.8cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6744142.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/179/cePr69r9lCkeg.jpg",
      "goodname": "华擎Z390 Phantom Gaming 4",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000542237.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/907/ceGnEMKi2I1NE.jpg",
      "goodname": "技嘉X399 AORUS XTREME",
      "price": "5999",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×26.9cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8945583.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/658/ceKNtd4b22qng.jpg",
      "goodname": "铭瑄 MS-终结者 Z390W Gaming",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.5×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000667490.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/6/ce2V8FtRAEh6.jpg",
      "goodname": "微星B250M PRO-VD",
      "price": "749",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11244272254.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/193_120x90/979/ceBEAwHPVo7Q.jpg",
      "goodname": "昂达H310C+",
      "price": "369",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001421806.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/167_120x90/185/ceS5rfyQITfdA.jpg",
      "goodname": "技嘉X150-PLUS WS(rev.1.0)",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×20.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10047443971.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/166_120x90/45/cedtjgLjkvHFM.jpg",
      "goodname": "技嘉H110M-DS2V DDR3(rev.1.0)",
      "price": "599",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×17.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10037372432.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/191_120x90/511/ceIkwuySMl7Q.jpg",
      "goodname": "影驰H310M-A",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.5×17cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/31554397759.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/185_120x90/958/cen9xN6uQ85I.jpg",
      "goodname": "华擎X399 Taichi",
      "price": "3099",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6693379.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/675/ce18uKqxpOw.jpg",
      "goodname": "技嘉H370 AORUS Gaming 3",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6841151.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/186_120x90/938/ceyVQoCzaIIc.jpg",
      "goodname": "华擎Z370 KILLER SLI/AC",
      "price": "999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5220655.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/191_120x90/733/celAHaLddLG0o.jpg",
      "goodname": "华擎B250M-HDV",
      "price": "449",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.3cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4188994.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/709/ceLBCIv5b7zlA.jpg",
      "goodname": "映泰X470GT8",
      "price": "1388",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7216638.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/150_120x90/818/ceMm0GZi2pnbw.jpg",
      "goodname": "七彩虹C.B85K 全固态版 V24",
      "price": "349",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "17.0×21.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1506092638.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/196_120x90/490/ceziECzGoq1c.jpg",
      "goodname": "华擎B365 Phantom Gaming 4",
      "price": "879",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.2cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002471953.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/191_120x90/902/ceNgYS1DKmKY.jpg",
      "goodname": "华擎玩家至尊 X470 Gaming K4",
      "price": "1299",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7038916.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/811/ceOVlWOrADNhg.jpg",
      "goodname": "华擎B360 Pro4",
      "price": "759",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6679026.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/197_120x90/194/cea2Yixwljf4E.jpg",
      "goodname": "七彩虹战斧H310M-M.2魔音版 V21",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.5×17.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002751133.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/662/cez0RJR6M6Og.jpg",
      "goodname": "微星X399 SLI PLUS",
      "price": "3399",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.3cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6069028.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/178_120x90/254/ceAyDdi4IKTXs.jpg",
      "goodname": "华擎H110M-DVS R3.0",
      "price": "329",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "23.1×18.8cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6846597.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/193_120x90/68/cerocJaXalA.jpg",
      "goodname": "技嘉X299-WU8",
      "price": "4999",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001121024.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/182_120x90/417/cexzLotIaD1LI.jpg",
      "goodname": "微星B250M GAMING PRO",
      "price": "789",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.3×20.6cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11244272250.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/195_120x90/205/ce8Ey2VbFP1Ro.jpg",
      "goodname": "铭瑄 MS-挑战者 H310CM-V3H",
      "price": "339",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "22.5×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003439738.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/189_120x90/872/ceQJcM95FJKM.jpg",
      "goodname": "技嘉Z370 AORUS ULTRA GAMING 2.0",
      "price": "1899",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6490488.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/182/ceu7zD2whJhA.jpg",
      "goodname": "映泰B360MHD PRO2",
      "price": "449",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.8×17.7cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/45227847883.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/935/ceVafzzKWrYno.jpg",
      "goodname": "映泰TB250-BTC PRO",
      "price": "599",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "29.5×21.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5252536.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/187_120x90/369/ceaLtVuDLhb5I.jpg",
      "goodname": "技嘉X299 UD4 Pro",
      "price": "3299",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29638536278.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/192_120x90/479/ceCvDL7AuYMw.jpg",
      "goodname": "七彩虹战斧C.B360M-J魔音版 V20",
      "price": "549",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×19.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7714221.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/179_120x90/454/ce8I3lAAZCgLg.png",
      "goodname": "技嘉H81M-DS2-C",
      "price": "499",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "22.6×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25512679907.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/190_120x90/406/ceZg8abvZ5cwQ.jpg",
      "goodname": "华硕PRIME H370-PLUS",
      "price": "1099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/27869295560.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/190_120x90/789/ce50NkumoQZUY.jpg",
      "goodname": "技嘉H370N WIFI",
      "price": "1499",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6680348.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/367/cejMFqBaanFMw.jpg",
      "goodname": "七彩虹战斧C.B360AK 魔音版 V20",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/30149512330.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/562/ceJDrvyK18BL.jpg",
      "goodname": "华擎Z390 Phantom Gaming X",
      "price": "2969",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100006089562.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/195_120x90/419/ceoizW1PqwYY.jpg",
      "goodname": "梅捷SY-A68M 全固版 V2.0",
      "price": "239",
      "maxmemory": "暂无数据",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3138527.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/188_120x90/976/cejD7l33fgQaY.jpg",
      "goodname": "技嘉X299 DESIGNARE EX",
      "price": "5999",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6274718.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/313/ceAN6VO1Zb2mI.jpg",
      "goodname": "微星X299 SLI PLUS",
      "price": "2999",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5236796.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/927/ceLBB2x7QTuJk.jpg",
      "goodname": "华擎玩家至尊 B360 Gaming K4",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6794906.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/168_120x90/883/ceFeQw5qbiDYo.jpg",
      "goodname": "华硕X99-E WS/USB 3.1",
      "price": "4499",
      "maxmemory": "128GB",
      "kind": "E-ATX板型",
      "size": "30.5×26.7cm",
      "interface": "一个6针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10375709700.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/23/cel6FpQFJuOhA.jpg",
      "goodname": "梅捷SY-狂龙 A320M-VH M.2",
      "price": "329",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001939922.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/184_120x90/232/cet3tVfatrJko.jpg",
      "goodname": "昂达H110M全固版",
      "price": "339",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "17×19cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5438053.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/165_120x90/903/ceW68fBbvQSa.jpg",
      "goodname": "华擎B150M Pro4S",
      "price": "429",
      "maxmemory": "64GB",
      "kind": "Micro ATX板型",
      "size": "24.4×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1891602.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/648/cedt7M7KSbDU.jpg",
      "goodname": "华擎Z390 Taichi Ultimate",
      "price": "2199",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000544896.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/853/ceXKkEwxtjLXc.jpg",
      "goodname": "七彩虹战斧C.Z370AK PLUS V20",
      "price": "899",
      "maxmemory": "暂无数据",
      "kind": "ATX板型",
      "size": "24.5×30.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000060034.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/196_120x90/708/ceicwkU9xr1AU.jpg",
      "goodname": "华擎Z390 太极 Ultimate",
      "price": "2099",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000544896.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/275/cej5qG9cnwSWU.jpg",
      "goodname": "昂达H310CD3",
      "price": "339",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "16.8×19.6cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100002089840.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/194_120x90/460/ceoFwxqMpHx3U.jpg",
      "goodname": "昂达H310SD3-ITX全固版",
      "price": "499",
      "maxmemory": "32GB",
      "kind": "Micro ITX板型",
      "size": "17×17cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100001670605.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/540/ceKIOFqJ7ULjk.jpg",
      "goodname": "华硕CSM PRO-E3",
      "price": "1199",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/8813441.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/182_120x90/836/ceKwAge7bAKTQ.jpg",
      "goodname": "华硕X99-E-10G WS",
      "price": "6499",
      "maxmemory": "暂无数据",
      "kind": "E-ATX板型",
      "size": "30.5×26.7cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11573635410.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/185_120x90/358/ceYF6JwwwxnO2.jpg",
      "goodname": "微星X299 RAIDER",
      "price": "3199",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.3cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4437463.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/186_120x90/470/ceLnKpCnY5oX.jpg",
      "goodname": "技嘉Z370 AORUS Gaming WIFI",
      "price": "1999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/11250721061.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/195_120x90/997/ceAViX5kzlKKc.jpg",
      "goodname": "梅捷SY-H110N 全固版",
      "price": "299",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "暂无数据",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/3274822.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/180_120x90/266/ce4D82ZMisvLg.jpg",
      "goodname": "铭瑄 MS-B250MD4 Turbo",
      "price": "498",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "24.5×19.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/15907647790.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/181_120x90/599/cefJxDYw11IDw.jpg",
      "goodname": "微星B250 KRAIT GAMING",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13818647860.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/187_120x90/454/cetxzwyn6FKk.jpg",
      "goodname": "技嘉X399 DESIGNARE EX",
      "price": "5599",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5676620.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/188_120x90/165/cePt4gVl7vRkU.jpg",
      "goodname": "华硕B250 MINING EXPERT",
      "price": "1299",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "30.5×23.1cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6002239.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/180_120x90/329/celzqafZUS8Fw.jpg",
      "goodname": "微星B250I GAMING PRO AC",
      "price": "1099",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17.0×17.0cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13838016338.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/485/ceUuD1Oxud1X6.jpg",
      "goodname": "微星Z270 GAMING M5",
      "price": "1999",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14889045673.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/171_120x90/400/cevTk9TGUD5Qk.jpg",
      "goodname": "华硕E3M-ET V5",
      "price": "799",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.6×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/17935038125.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/184_120x90/521/ceNthT1CwSfZc.jpg",
      "goodname": "华擎玩家至尊 Z270 Gaming-ITX/ac",
      "price": "1499",
      "maxmemory": "32GB",
      "kind": "Mini-ITX板型",
      "size": "17×17cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1808562268.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/192_120x90/230/ceDUuf4vRIl0A.jpg",
      "goodname": "华擎B250 Pro4",
      "price": "599",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4203196.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/198_120x90/526/ceJhaQFWzyvHo.jpg",
      "goodname": "华擎Z390 Phantom Gaming 7",
      "price": "1999",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005686528.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/191_120x90/640/ce04FkshYDreI.jpg",
      "goodname": "昂达B360S全固版",
      "price": "429",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "19×17cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7555473.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/191_120x90/820/ceqWFYMBLEP5g.jpg",
      "goodname": "华擎H370 Pro4",
      "price": "799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×22.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6632850.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/185_120x90/254/ce7K3KL5uBxyU.jpg",
      "goodname": "影驰H110-M.2 PLUS",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "ATX板型",
      "size": "暂无数据",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/25377085170.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/194_120x90/453/ceecxesxNprs.jpg",
      "goodname": "昂达H110CD3",
      "price": "339",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "19.6×16.8cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/7404010.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/192_120x90/457/ceny3zd2O8G.jpg",
      "goodname": "昂达H110SD3全固版",
      "price": "349",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "22×18.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6148531.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/181_120x90/707/ceIgcHCUmrs.jpg",
      "goodname": "七彩虹iGame Z270烈焰战神X",
      "price": "1499",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/14824349999.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/189_120x90/128/ceqjfkEc6qL26.jpg",
      "goodname": "华硕WS X299 PRO",
      "price": "3999",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "两个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/29663627440.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/433/cexCR0IRp1C2.jpg",
      "goodname": "技嘉X299 UD4",
      "price": "3299",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13674965781.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/182_120x90/891/cetbeSHJIqTKo.jpg",
      "goodname": "昂达B250S全固版",
      "price": "399",
      "maxmemory": "32GB",
      "kind": "Micro ATX板型",
      "size": "22.0×17.5cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4008311.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/183_120x90/760/ceifb8UyJefvY.jpg",
      "goodname": "华擎X299 Taichi",
      "price": "2199",
      "maxmemory": "128GB",
      "kind": "ATX板型",
      "size": "30.5×24.4cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5257454.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/193_120x90/622/ceVKZS8uLQoiw.jpg",
      "goodname": "铭瑄 MS-iCraft Z390 Gaming",
      "price": "1799",
      "maxmemory": "64GB",
      "kind": "ATX板型",
      "size": "30.5×24.5cm",
      "interface": "一个8针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000611881.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/187_120x90/256/cedpwNrp6X8k6.jpg",
      "goodname": "昂达A320S全固版",
      "price": "379",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "19×22cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5464838.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/183_120x90/691/ceBhRfhzz33Z2.jpg",
      "goodname": "昂达B250C全固版",
      "price": "459",
      "maxmemory": "16GB",
      "kind": "Micro ATX板型",
      "size": "19.6×16.8cm",
      "interface": "一个4针",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4211289.html"
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
  handle: function (e) {
    var $data = e.currentTarget.dataset;
    //console.log($data.bean)
    //console.log($data.bean.name)
    //$data.bean.selectnum +=1;
    wx.setStorage({
      key: "boarddata",
      data: $data.bean
    })
    // console.log($data.bean)
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    });


  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})