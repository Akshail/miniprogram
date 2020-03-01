// pages/disk/index.js
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
    "diskdata": [{
      "imageurl": "https://2f.zol-img.com.cn/product/179_120x90/315/cehtFC1qwwkE.jpg",
      "capacity": "1000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "299",
      "goodname": "西部数据1TB 7200转 64MB SATA3 蓝盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/675971.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/58_120x90/667/ceaCtpuUXk3SU.jpg",
      "capacity": "500GB",
      "cache": "16MB",
      "size": "3.5英寸",
      "price": "270",
      "goodname": "西部数据500GB 7200转 16MB SATA3 蓝盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/39753682804.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/112_120x90/895/ceCvMIElc30o.jpg",
      "capacity": "1000GB",
      "cache": "32MB",
      "size": "2.5英寸",
      "price": "449",
      "goodname": "HGST 7K1000 1TB 7200转 32MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/857721.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/108_120x90/96/ceE5L2Dt7zrNE.jpg",
      "capacity": "1000GB",
      "cache": "32MB",
      "size": "3.5英寸",
      "price": "269",
      "goodname": "东芝1TB 7200转 32MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/817803.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/724/ceROp8u8Zsx8.jpg",
      "capacity": "3000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "485",
      "goodname": "希捷Barracuda 3TB 7200转 64MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1479418486.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/190_120x90/514/ceOuHWfvQr06.jpg",
      "capacity": "2000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "389",
      "goodname": "希捷BarraCuda 2TB 7200转 256MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/6856662.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/177_120x90/177/ceOPknRolHTE.jpg",
      "capacity": "6000GB",
      "cache": "128MB",
      "size": "3.5英寸",
      "price": "295",
      "goodname": "希捷Desktop HHD 6TB 7200转 128MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10359555268.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/166_120x90/702/ceQ8XNSqcp82.jpg",
      "capacity": "4000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "669",
      "goodname": "西部数据蓝盘4TB SATA6Gb/s 64M",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2031266.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/77_120x90/81/ceBPOOZAVMAKo.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "378",
      "goodname": "希捷Barracuda 2TB 7200转 64MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1608898114.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/177_120x90/531/ceFBGIpcpqSGM.jpg",
      "capacity": "1000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "279",
      "goodname": "希捷Barracuda 1TB 7200转 64MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/17055491991.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/166_120x90/463/cedIUw8GFHIbg.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "399",
      "goodname": "西部数据蓝盘2TB SATA6Gb/s 64M",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2054175.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/184_120x90/513/cep7xnGhTzdJg.jpg",
      "capacity": "1000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "329",
      "goodname": "西部数据1TB 5400转 128MB SATA3 蓝盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/5237926.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/169_120x90/243/ceRe8ax7POdYk.jpg",
      "capacity": "4000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "665",
      "goodname": "西部数据紫盘4TB 64MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13535760193.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/166_120x90/758/ceVul3bD9yOrU.jpg",
      "capacity": "6000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "3099",
      "goodname": "西部数据蓝盘6TB SATA6Gb/s 64M",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/10070473692.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/179_120x90/700/celMR39oAPoI.jpg",
      "capacity": "1000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "299",
      "goodname": "希捷Barracuda 1TB 5400转 128MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/10469010825.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/143_120x90/712/ceWaIk576quuA.jpg",
      "capacity": "1000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "649",
      "goodname": "西部数据1TB 7200转 64MB SATA3 黑盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1018295.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/184_120x90/185/ceV7V17uk7dTE.jpg",
      "capacity": "4000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "679",
      "goodname": "希捷BarraCuda 4TB 5900转 256MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/4220257.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/74_120x90/431/ceEPVfEaabYs.jpg",
      "capacity": "3000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "485",
      "goodname": "希捷Barracuda 3TB 7200转 64MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1608874784.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/194_120x90/330/ce6EBmB7ERl72.jpg",
      "capacity": "2000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "369",
      "goodname": "希捷Barracuda 2TB 5400转 256MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100000458135.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/115_120x90/621/ceSChv7DR0cx2.jpg",
      "capacity": "500GB",
      "cache": "8MB",
      "size": "2.5英寸",
      "price": "258",
      "goodname": "西部数据500GB 5400转 8M SATA3 蓝盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1581497121.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/154_120x90/355/ceBLijMk1j3g.jpg",
      "capacity": "500GB",
      "cache": "32MB",
      "size": "2.5英寸",
      "price": "349",
      "goodname": "西部数据500GB 7200转 32MB SATA3 黑盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1321632.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/143_120x90/784/ceFMlT7rMeVOI.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "1149",
      "goodname": "西部数据2TB 7200转 64MB 黑盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1018791.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/114_120x90/550/cezw08sHdJQ.jpg",
      "capacity": "500GB",
      "cache": "8MB",
      "size": "2.5英寸",
      "price": "289",
      "goodname": "东芝500GB 5400转 8MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/972998.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/121_120x90/236/ceZ5ZzHUnUOs.jpg",
      "capacity": "1000GB",
      "cache": "8MB",
      "size": "2.5英寸",
      "price": "278",
      "goodname": "西部数据1TB 5400转 8MB SATA3 蓝盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1581503163.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/143_120x90/281/ceTA2anSqM33M.jpg",
      "capacity": "4000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "669",
      "goodname": "西部数据4TB 64MB SATA3 绿盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1540251218.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/179_120x90/776/ceQ5Zscnbi3is.jpg",
      "capacity": "2000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "539",
      "goodname": "希捷BarraCuda 2TB 5400转 128MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13437241044.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/166_120x90/374/ce7iPQvB6p2O2.jpg",
      "capacity": "500GB",
      "cache": "16MB",
      "size": "2.5英寸",
      "price": "299",
      "goodname": "西部数据500GB 5400转16MB SATA3 蓝盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2008946.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/166_120x90/334/ceoWOfJxYUo6.jpg",
      "capacity": "3000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "485",
      "goodname": "西部数据蓝盘3TB SATA6Gb/s 64M",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13059348617.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/179_120x90/79/cekT5qCgWiZhw.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "769",
      "goodname": "希捷FireCuda 2TB 7200转",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13033299275.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/179_120x90/906/ce5fDnxhGJhA.jpg",
      "capacity": "6000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "1199",
      "goodname": "希捷BarraCuda Pro 6TB 7200转 256MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12293740664.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/107_120x90/4/ce8AUQpr3PHI.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "399",
      "goodname": "东芝2TB 7200转 64MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/746690.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/143_120x90/752/ceRimq6Q2oFQg.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "349",
      "goodname": "西部数据2TB 5400转 64MB SATA3 绿盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1677322162.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/177_120x90/257/ceHOWwp9ZfR16.jpg",
      "capacity": "10000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "3099",
      "goodname": "希捷BarraCuda Pro 10TB 7200转 256MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12294060539.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/144_120x90/765/cealM4AMul8I.jpg",
      "capacity": "6000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "1165",
      "goodname": "西部数据6TB 64MB SATA3 紫盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1584936704.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/177_120x90/574/cel8izT2wqk.jpg",
      "capacity": "4000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "1249",
      "goodname": "希捷Barracuda 4TB 5400转 128MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13285254142.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/169_120x90/923/ce0kuLXa8Yo.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "399",
      "goodname": "东芝P300系列 2TB 7200转64M",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2073068.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/109_120x90/742/celu5LhOjZFD.jpg",
      "capacity": "4000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "655",
      "goodname": "希捷Desktop HDD 4TB 5900转 64MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1733801963.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/96_120x90/528/ce7ECXvHD6dp.jpg",
      "capacity": "3000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "485",
      "goodname": "西部数据3TB 7200转 64MB SATA3 绿盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1540245296.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/139_120x90/481/ce1bmcy6vCKNs.jpg",
      "capacity": "500GB",
      "cache": "8MB",
      "size": "2.5英寸",
      "price": "255",
      "goodname": "HGST Z5K500 500GB 5400转 8MB SATA3",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1581494261.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/179_120x90/806/ceiHn2K2Gx1FE.jpg",
      "capacity": "8000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "2499",
      "goodname": "希捷BarraCuda Pro 8TB 7200转 256MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/12293955337.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/192_120x90/392/ceUtWfG70jhA.jpg",
      "capacity": "4000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "636",
      "goodname": "西部数据4TB 5400转 64MB SATA3 蓝盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/26624402022.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/169_120x90/949/ceBujfre0T2oQ.jpg",
      "capacity": "3000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "629",
      "goodname": "东芝P300系列 3TB 7200转64M",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/2066790.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/179_120x90/819/ceze4I3NWWn0w.jpg",
      "capacity": "1000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "539",
      "goodname": "希捷FireCuda 1TB 5400转",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13033393725.html"
    },
    {
      "imageurl": "https://2a.zol-img.com.cn/product/198_120x90/656/ceCX11KLUcP6.jpg",
      "capacity": "2000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "2899",
      "goodname": "希捷Exos 7E2000 2TB 7200转 128MB SAS",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1461527745.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/96_120x90/476/cePmA59Y6gt6.jpg",
      "capacity": "2000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "599",
      "goodname": "西部数据2TB 5400转 64MB SATA3 红盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/694106.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/180_120x90/274/celgNo7P7gBds.jpg",
      "capacity": "500GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "269",
      "goodname": "希捷Barracuda 500GB 5400转 128MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13437148140.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/177_120x90/311/ceHAErNMnKBn.jpg",
      "capacity": "4000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "669",
      "goodname": "希捷BarraCuda 4TB 5900转 64MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/1631512645.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/180_120x90/312/ceSIWnecWrUhY.jpg",
      "capacity": "2000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "899",
      "goodname": "希捷FireCuda 2TB 5400转",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13033418454.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/95/ceyxG5im0dtZU.jpg",
      "capacity": "6000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "1599",
      "goodname": "西部数据6TB 5400转 256M SATA3 红盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100004198714.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/197_120x90/77/ce3AvvDmsOwI.jpg",
      "capacity": "2000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "699",
      "goodname": "西部数据2TB 5400转 256M SATA3 红盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100003236363.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/139_120x90/329/ceJAbxcMEQ.jpg",
      "capacity": "6000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "1469",
      "goodname": "西部数据6TB 64MB SATA3 红盘 ",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/1185840.html"
    },
    {
      "imageurl": "https://2f.zol-img.com.cn/product/118_120x90/787/ceULGy8rHHvIA.jpg",
      "capacity": "3000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "509",
      "goodname": "东芝3TB 7200转 64MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/746691.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/177_120x90/327/ceuGTnHOW8yB2.jpg",
      "capacity": "5000GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "1588",
      "goodname": "希捷Barracuda 5TB 5400转 128MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13285212511.html"
    },
    {
      "imageurl": "https://2b.zol-img.com.cn/product/198_120x90/877/ceeQR1UK41CnM.jpg",
      "capacity": "12000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "3899",
      "goodname": "东芝12TB 7200转 256MB",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005744556.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/95_120x90/304/cernQo0ReX4Yo.jpg",
      "capacity": "3000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "749",
      "goodname": "西部数据3TB 5400转 64MB SATA3 红盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/694107.html"
    },
    {
      "imageurl": "https://2e.zol-img.com.cn/product/199_120x90/976/ce9rnyC5gNAWI.jpg",
      "capacity": "12000GB",
      "cache": "256MB",
      "size": "3.5英寸",
      "price": "4699",
      "goodname": "希捷Exos X12 12TB 7200转 256MB SAS",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/100005744554.html"
    },
    {
      "imageurl": "https://2d.zol-img.com.cn/product/179_120x90/823/cetcYvOJDo5pI.jpg",
      "capacity": "500GB",
      "cache": "128MB",
      "size": "2.5英寸",
      "price": "379",
      "goodname": "希捷FireCuda 500GB 5400转",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20170818001&to=http://item.jd.com/13033362117.html"
    },
    {
      "imageurl": "https://2c.zol-img.com.cn/product/95_120x90/996/cen4udbEzRzM.jpg",
      "capacity": "1000GB",
      "cache": "64MB",
      "size": "3.5英寸",
      "price": "499",
      "goodname": "西部数据1TB 5400转 64MB SATA3 红盘",
      "jdurl": "https://union-click.jd.com/sem.php?unionId=281&siteid=20120307006&to=http://item.jd.com/694105.html"
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
      key: "diskdata",
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