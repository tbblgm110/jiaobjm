//Thu Jan 09 2025 07:54:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let userCookie = process.env.xmlyjsbck;
const $ = new Env("喜马拉雅极速版");
let envSplitor = ["@", "\n"],
  httpResult,
  httpReq,
  httpResp;
const CryptoJS = require("crypto-js");
let userList = [],
  userIdx = 0,
  userCount = 0;
var key = CryptoJS.enc.Utf8.parse("ce3e7c8d567106cd");
const NodeRSA = require("node-rsa");
var myDate = new Date(),
  myYear = myDate.getFullYear(),
  myMonth = myDate.getMonth() + 1,
  myToday = myDate.getDate(),
  myDay = myDate.getDay(),
  myHour = myDate.getHours(),
  myMinute = myDate.getMinutes(),
  cshtime = new Date().getTime();
myMonth >= 10 ? myMonth = myMonth : myMonth = "0" + myMonth;
myToday >= 10 ? myToday = myToday : myToday = "0" + myToday;
myHour >= 10 ? myHour = myHour : myHour = "0" + myHour;
myMinute >= 10 ? myMinute = myMinute : myMinute = "0" + myMinute;
class UserInfo {
  constructor(_0x50518e) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = false;
    this.cFlag = true;
    try {
      this.ck = _0x50518e;
      this.uid = this.ck.split("&")[4].split("=")[1];
    } catch (_0x3ac98b) {}
  }
  async ["sh"]() {
    try {
      {
        if (myHour == 7) {
          this.tjid = 1;
          await this.ydhs();
        }
        myHour == 9 && (this.tjid = 2, await this.ydhs());
        if (myHour == 11) {
          this.tjid = 3;
          await this.ydhs();
        }
        myHour == 13 && (this.tjid = 4, await this.ydhs());
        if (myHour == 15) {
          this.tjid = 5;
          await this.ydhs();
        }
        myHour == 17 && (this.tjid = 6, await this.ydhs());
        myHour == 19 && (this.tjid = 7, await this.ydhs());
        myHour == 21 && (this.tjid = 8, await this.ydhs());
        for (let _0xaf38e7 = 11; _0xaf38e7 < 19; _0xaf38e7++) {
          this.tjid = _0xaf38e7;
          await $.wait(1000);
          await this.ydlq();
        }
        for (let _0x4e878e = 1; _0x4e878e < 11; _0x4e878e++) {
          this.tjid = _0x4e878e;
          await $.wait(1000);
          await this.ydxx();
        }
        await this.yddttl();
        await this.yddt();
        await this.appinit();
        await this.qd();
        await this.ydqd();
      }
    } catch (_0x1484b9) {
      console.log(_0x1484b9);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydxx"]() {
    let _0x544517 = String(Date.parse(new Date())),
      _0x1da5c8 = rsaencrypt("stageId=" + this.tjid + "&receiveType=1&timestamp=" + _0x544517 + "&uid=" + this.uid);
    try {
      let _0x41c9e8 = "http://m.ximalaya.com/speed/web-earn/redPacket/receive/v2",
        _0x310db1 = "{\"receiveType\":1,\"signature\":\"" + _0x1da5c8 + "\",\"stageId\":" + this.tjid + ",\"timestamp\":" + _0x544517 + "}";
      this.populateUrlObject(_0x41c9e8, _0x310db1);
      await httpRequest("post", this.urlObject);
      let _0x2ca6ea = httpResult;
      if (_0x2ca6ea.code == 0) console.log("账号[" + this.index + "]:喜马拉雅极速版开宝箱获得：" + _0x2ca6ea.data.score), await this.ydxxsp();else {
        _0x2ca6ea.msg == "设备异常，请更换设备后重试" && (await this.ydxx());
        this.cFlag = false;
      }
    } catch (_0xc9fef0) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydxxsp"]() {
    let _0x3a82fa = String(Date.parse(new Date())),
      _0x3789fb = rsaencrypt("stageId=" + this.tjid + "&receiveType=2&timestamp=" + _0x3a82fa + "&uid=" + this.uid);
    try {
      {
        let _0x4cdd89 = "http://m.ximalaya.com/speed/web-earn/redPacket/receive/v2",
          _0x46ce82 = "{\"receiveType\":2,\"signature\":\"" + _0x3789fb + "\",\"stageId\":" + this.tjid + ",\"timestamp\":" + _0x3a82fa + "}";
        this.populateUrlObject(_0x4cdd89, _0x46ce82);
        await httpRequest("post", this.urlObject);
        let _0x3a5fc5 = httpResult;
        if (_0x3a5fc5.code == 0) console.log("账号[" + this.index + "]:喜马拉雅极速版开宝箱视频获得：" + _0x3a5fc5.data.score);else {
          _0x3a5fc5.msg == "设备异常，请更换设备后重试" && (await this.ydxxsp());
          this.cFlag = false;
        }
      }
    } catch (_0x12e27b) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["yddttl"]() {
    let _0x206fd4 = String(Date.parse(new Date())),
      _0x55decb = rsaencrypt("stageIds=[" + this.tjid + "]&receiveType=1&currentDayReadTime=35907&timestamp=" + _0x206fd4);
    try {
      {
        let _0x11ae15 = "http://m.ximalaya.com/speed/web-earn/topic/user";
        this.populateUrlObject(_0x11ae15);
        await httpRequest("get", this.urlObject);
        let _0x534159 = httpResult;
        _0x534159.code == 0 ? console.log("账号[" + this.index + "]:喜马拉雅极速版答题体力：" + _0x534159.data.stamina) : (_0x534159.msg == "设备异常，请更换设备后重试" && (await this.yddttl()), this.cFlag = false);
      }
    } catch (_0x41929a) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["yddt"]() {
    try {
      let _0x1d284f = "http://m.ximalaya.com/speed/web-earn/topic/start";
      this.populateUrlObject(_0x1d284f);
      await httpRequest("get", this.urlObject);
      let _0x5b8946 = httpResult;
      if (_0x5b8946.code == 0) {
        console.log("账号[" + this.index + "]:喜马拉雅极速版答题ID获取：成功");
        await $.wait(1000);
        this.pid = _0x5b8946.data.paperId;
        await this.yddtlq();
      } else _0x5b8946.msg == "设备异常，请更换设备后重试" && (await this.yddt()), this.cFlag = false;
    } catch (_0x37783c) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["yddtlq"]() {
    let _0x10df49 = String(Date.parse(new Date())),
      _0x1e9ddf = rsaencrypt("lastTopicId=717&numOfAnswers=3&receiveType=1&timestamp=" + _0x10df49 + "&uid=" + this.uid);
    try {
      {
        let _0x39fbe6 = "http://m.ximalaya.com/speed/web-earn/topic/reward/v2",
          _0x299c1e = "{\"paperId\":\"" + this.pid + "\",\"checkData\":\"" + _0x1e9ddf + "\",\"timestamp\":\"" + _0x10df49 + "\",\"lastTopicId\":717,\"numOfAnswers\":3,\"receiveType\":1}";
        this.populateUrlObject(_0x39fbe6, _0x299c1e);
        await httpRequest("post", this.urlObject);
        let _0x708c59 = httpResult;
        if (_0x708c59.code == 0) {
          console.log("账号[" + this.index + "]:喜马拉雅极速版答题领取" + _0x708c59.data.reward + "金币成功，开始翻倍");
          await $.wait(1000);
          await this.yddtlqfb();
        } else _0x708c59.msg == "设备异常，请更换设备后重试" && (await this.yddtlq()), this.cFlag = false;
      }
    } catch (_0xe0109e) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["yddtlqfb"]() {
    let _0x4c0b1b = String(Date.parse(new Date())),
      _0x4bd0d5 = rsaencrypt("lastTopicId=763&numOfAnswers=3&receiveType=2");
    try {
      {
        let _0x1f3e94 = "http://m.ximalaya.com/speed/web-earn/topic/reward",
          _0x3be01f = "{\"paperId\":\"" + this.pid + "\",\"checkData\":\"" + _0x4bd0d5 + "\",\"lastTopicId\":763,\"numOfAnswers\":3,\"receiveType\":2}";
        this.populateUrlObject(_0x1f3e94, _0x3be01f);
        await httpRequest("post", this.urlObject);
        let _0x2739cd = httpResult;
        _0x2739cd.code == 0 ? (console.log("账号[" + this.index + "]:喜马拉雅极速版答题翻倍领取" + _0x2739cd.data.reward + "金币成功"), await this.yddt()) : (_0x2739cd.msg == "设备异常，请更换设备后重试" && (await this.yddtlqfb()), this.cFlag = false);
      }
    } catch (_0xed7fad) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydqd"]() {
    try {
      {
        let _0x37159e = "https://m.ximalaya.com/speed/web-earn/account/getOmnibusAccountInfo";
        this.populateUrlObject(_0x37159e);
        await httpRequest("get", this.urlObject);
        let _0x336659 = httpResult;
        if (_0x336659.code == 0) console.log("账号[" + this.index + "]:喜马拉雅极速版金币余额：" + _0x336659.data.creditAmount + " 现金余额：" + _0x336659.data.accountAmount + " 总收益：" + _0x336659.data.totalIncome + "元");else {
          {
            console.log("账号[" + this.index + "]:喜马拉雅极速版信息：" + _0x336659.msg);
            if (_0x336659.msg == "设备异常，请更换设备后重试") {
              await this.ydqd();
            }
            this.cFlag = false;
          }
        }
      }
    } catch (_0xd3777) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["qd"]() {
    let _0x43b823 = rsaencrypt("date=" + myYear + myMonth + myToday + "&uid=" + this.uid);
    try {
      let _0x3f9e52 = "https://m.ximalaya.com/speed/web-earn/check-in/check",
        _0x105ec4 = "{\"checkData\":\"" + _0x43b823 + "\",\"makeUp\":false}";
      this.populateUrlObject(_0x3f9e52, _0x105ec4);
      await httpRequest("post", this.urlObject);
      let _0x1aaaf1 = httpResult;
      _0x1aaaf1.code == 0 ? console.log("账号[" + this.index + "]:喜马拉雅极速版签到成功 ") : (console.log("账号[" + this.index + "]:喜马拉雅极速版信息：" + JSON.stringify(_0x1aaaf1)), _0x1aaaf1.msg == "设备异常，请更换设备后重试" && (await this.ydqd()), this.cFlag = false);
    } catch (_0x57c615) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["appinit"]() {
    this.imei = UUID();
    let _0x4c629a = encodeURI("screenWidth=1440&csha=B6:55:D9:7A:41:8E:A6:E8:90:27:DD:3A:BF:E8:E6:CD:6E:08:43:3E&mid_extra=8cTdjDhSVmoEB8G5r4qSG8zWHLQrSjcPboG%2BI%2BtPyKNLBRe00mRxplquHFS5twWzoqgSGu6E8HIF%0A4aSq4hRJPf2XBF%2By87vAigTU3k2nnlH%2B%2BYWOIcbgtlBMID3YBIhIyUHcWVQpayTE2xJOBGeg8Sp1%0ATD0EyuHnsDhq4L0lE6g%3D%0A&bright=0&deviceName=23013RK75C,SDK: 33,VERSION: 13&connectionType=-1&mac=02:00:00:00:00:00&serialno=unknown&tbsSdkVersion=44085&appids=530&havesim=1&extra={\"bright\":\"0\",\"connectionType\":-1,\"operatorType\":0,\"screenWidth\":\"1440\",\"screenHeight\":\"3024\",\"density\":\"3.5\",\"userAgent\":\"Mozilla/5.0 (Linux; Android 13; 23013RK75C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36\",\"vendor\":\"Redmi\",\"model\":\"23013RK75C\",\"osVersion\":\"13\",\"power\":\"41\"}&sip=&packageName=com.ximalaya.ting.lite&power=41&so=1&oaid=" + this.imei + "&wifi=<unknown ssid>&cuid=" + this.uid + "&package=com.ximalaya.ting.lite&density=3.5&vmid=14D073AF8CEA1D720A2FD6BECB2714B1E9116843&ip=&screenHeight=3024&os_version=V140&userAgent=Mozilla/5.0 (Linux; Android 13; 23013RK75C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36&cmid=" + this.imei + "&operatorTypeStr=中国电信&version=3.3.2.16&androdid=1e482f9d5324d1fc&imei=" + this.imei + "&os_name=MIUI&wifiMac=02:00:00:00:00:00&isroot=0&cpackage=com.ximalaya.ting.lite&cextra=&x5Version=46137&time=" + Date.now() + "&operatorType=0"),
      _0x4e13d7 = AES_Encrypt(_0x4c629a),
      _0x1d01a1 = "https://ad.midongtech.com/api/ads/appinit?m=" + encodeURIComponent(_0x4e13d7);
    this.populateUrlObject1(_0x1d01a1);
    await httpRequest("post", this.urlObject);
    let _0x18768b = httpResult;
    _0x18768b?.["data"]?.["imei"] ? (console.log("账号[" + this.index + "]:喜马拉雅极速版新闻：生成 IMEI 成功 " + _0x18768b?.["data"]?.["imei"]), this.device = _0x18768b?.["data"]?.["imei"], await this.ydxwlb()) : console.log("账号[" + this.index + "]:喜马拉雅极速版新闻：生成 IMEI 失败", JSON.stringify(_0x18768b));
  }
  async ["ydxwlb"]() {
    let _0x2f9f8f = AES_Encrypt("isX5Success=0&sdkversion=3.3.2.16&cuid=" + this.uid + "&imei=" + this.imei + "&oaid=" + this.imei + "&cid=530");
    try {
      {
        let _0x480033 = "https://ad.midongtech.com/api/cps/outsidetasks?m=" + encodeURIComponent(_0x2f9f8f);
        this.populateUrlObject1(_0x480033);
        await httpRequest("get", this.urlObject);
        let _0x4cbc27 = httpResult;
        if (_0x4cbc27.code == 1) {
          {
            for (let _0x11e9aa = 0; _0x11e9aa < _0x4cbc27.data.list.length; _0x11e9aa++) {
              this.iiid = _0x4cbc27.data.list[_0x11e9aa].taskId;
              console.log("账号[" + this.index + "]:喜马拉雅极速版新闻获取ID成功：" + this.iiid + "," + _0x4cbc27.data.list[_0x11e9aa].name);
              await this.ydxw();
            }
            for (let _0xf4ec4a = 1; _0xf4ec4a < 4; _0xf4ec4a++) {
              this.iiid = _0xf4ec4a;
              await this.ydxw2();
            }
          }
        } else this.cFlag = false;
      }
    } catch (_0x1bfe67) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydxw"]() {
    let _0x178e36 = encodeURI("isX5Success=0&sdkversion=3.3.2.16&cuid=" + this.uid + "&imei=" + this.imei + "&oaid=" + this.imei + "&taskId=" + this.iiid + "&cid=530"),
      _0x2cf67a = AES_Encrypt(_0x178e36);
    try {
      {
        let _0x31d0da = "https://ad.midongtech.com/api/cps/outsidetask?m=" + encodeURIComponent(_0x2cf67a);
        this.populateUrlObject1(_0x31d0da);
        await httpRequest("post", this.urlObject);
        let _0x418b9f = httpResult;
        _0x418b9f.code == 1 ? await this.ydxw1() : this.cFlag = false;
      }
    } catch (_0x119939) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydxw1"]() {
    let _0x5c5407 = String(Date.parse(new Date())),
      _0x1935e8 = AES_Encrypt("isX5Success=0&sdkversion=3.3.2.16&cuid=" + this.uid + "&imei=" + this.imei + "&oaid=" + this.imei + "&taskId=" + this.iiid + "&cid=530");
    try {
      {
        let _0x33b38d = "http://ad.midongtech.com/api/cps/outsidetaskok",
          _0x3ab155 = "m=" + encodeURIComponent(_0x1935e8);
        this.populateUrlObject1(_0x33b38d, _0x3ab155);
        await httpRequest("post", this.urlObject);
        let _0x2197b9 = httpResult;
        _0x2197b9.code == 1 && _0x2197b9.msg == "ok" ? console.log("账号[" + this.index + "]:喜马拉雅极速版新闻奖励领取成功：" + this.iiid) : (console.log("账号[" + this.index + "]:喜马拉雅极速版新闻奖励领取：" + _0x2197b9.msg), this.cFlag = false);
      }
    } catch (_0x16985e) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydxw2"]() {
    let _0x39bb07 = String(Date.parse(new Date())),
      _0x48fcf0 = AES_Encrypt("cid=530&cuid=" + this.uid + "&sdkversion=3.3.2.16&imei=" + this.imei + "&adid=29&box_id=" + this.iiid + "&pos_code=yyz&h5_version=3.1.0");
    try {
      let _0x50de67 = "https://ad.midongtech.com/api/limitbox/orderok?m=" + encodeURIComponent(_0x48fcf0);
      this.populateUrlObject1(_0x50de67);
      await httpRequest("get", this.urlObject);
      let _0x1caeaf = httpResult;
      if (_0x1caeaf.code == 1 && _0x1caeaf.msg == "ok") {
        console.log("账号[" + this.index + "]:喜马拉雅极速版新闻新闻宝箱" + this.iiid + "领取金币：" + _0x1caeaf.data.points);
      } else {
        console.log("账号[" + this.index + "]:喜马拉雅极速版新闻新闻宝箱" + this.iiid + "领取金币：" + _0x1caeaf.msg);
        this.cFlag = false;
      }
    } catch (_0x36085d) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydlq"]() {
    let _0x5d838e = String(Date.parse(new Date())),
      _0x74d998 = rsaencrypt("priodId=10&stageId=" + this.tjid + "&listenTime=35907&coinSceneId=0&positionId=208&positionName=sub_listentime_double_video&timestamp=" + _0x5d838e + "&randomDouble=1");
    try {
      let _0x5bd121 = "http://m.ximalaya.com/speed/web-earn/listen/b/award",
        _0x256eab = "{\"positionName\":\"sub_listentime_double_video\",\"listenTime\":\"35907\",\"positionId\":\"208\",\"coinSceneId\":\"0\",\"signature\":\"" + _0x74d998 + "\",\"randomDouble\":\"1\",\"priodId\":\"10\",\"timestamp\":\"" + _0x5d838e + "\",\"stageId\":\"" + this.tjid + "\"}";
      this.populateUrlObject(_0x5bd121, _0x256eab);
      await httpRequest("post", this.urlObject);
      let _0x52e2a2 = httpResult;
      _0x52e2a2.code == 0 ? (console.log("账号[" + this.index + "]:喜马拉雅极速版听书领金币：成功"), await $.wait(1000), await this.ydlqsp()) : (_0x52e2a2.msg == "设备异常，请更换设备后重试" && (await this.ydlq()), this.cFlag = false);
    } catch (_0x4bdb67) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydlqsp"]() {
    let _0x5e2097 = String(Date.parse(new Date())),
      _0x3c8eed = rsaencrypt("priodId=10&stageId=" + this.tjid + "&listenTime=35907&coinSceneId=0&positionId=208&positionName=sub_listentime_double_video&timestamp=" + _0x5e2097 + "&randomDouble=2");
    try {
      let _0x1af5ab = "http://m.ximalaya.com/speed/web-earn/listen/b/award",
        _0x32f737 = "{\"positionName\":\"sub_listentime_double_video\",\"listenTime\":\"35907\",\"positionId\":\"208\",\"coinSceneId\":\"0\",\"signature\":\"" + _0x3c8eed + "\",\"randomDouble\":\"2\",\"priodId\":\"10\",\"timestamp\":\"" + _0x5e2097 + "\",\"stageId\":\"" + this.tjid + "\"}";
      this.populateUrlObject(_0x1af5ab, _0x32f737);
      await httpRequest("post", this.urlObject);
      let _0x2b9da7 = httpResult;
      _0x2b9da7.code == 0 ? console.log("账号[" + this.index + "]:喜马拉雅听书翻倍视频：成功") : (_0x2b9da7.msg == "设备异常，请更换设备后重试" && (await this.ydlqsp()), this.cFlag = false);
    } catch (_0x5afbf8) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydhs"]() {
    let _0x44a8dd = String(Date.parse(new Date())),
      _0x6505d = rsaencrypt("stageId=" + this.tjid + "&isDouble=1&timestamp=" + _0x44a8dd + "&uid=" + this.uid);
    try {
      {
        let _0x5587d9 = "http://m.ximalaya.com/speed/web-earn/drink/receive/v2",
          _0x5f1678 = "{\"isDouble\":1,\"signature\":\"" + _0x6505d + "\",\"stageId\":" + this.tjid + ",\"timestamp\":" + _0x44a8dd + "}";
        this.populateUrlObject(_0x5587d9, _0x5f1678);
        await httpRequest("post", this.urlObject);
        let _0x6051dd = httpResult;
        _0x6051dd.code == 0 ? (console.log("账号[" + this.index + "]:喜马拉雅极速版喝水" + this.tjid + "获得：" + _0x6051dd.data.score), await this.ydxxsp()) : (_0x6051dd.msg == "设备异常，请更换设备后重试" && (await this.ydhs()), this.cFlag = false);
      }
    } catch (_0x38fbdf) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ydhssp"]() {
    let _0x2f6282 = String(Date.parse(new Date())),
      _0x5a49bf = rsaencrypt("stageId=" + this.tjid + "&isDouble=2&timestamp=" + _0x2f6282);
    try {
      {
        let _0x56257a = "http://m.ximalaya.com/speed/web-earn/drink/receive",
          _0x20ef05 = "{\"isDouble\":2,\"signature\":\"" + _0x5a49bf + "\",\"stageId\":" + this.tjid + ",\"timestamp\":" + _0x2f6282 + "}";
        this.populateUrlObject(_0x56257a, _0x20ef05);
        await httpRequest("post", this.urlObject);
        let _0x125f74 = httpResult;
        if (_0x125f74.code == 0) {
          console.log("账号[" + this.index + "]:喜马拉雅极速版喝水视频" + this.tjid + "获得：" + _0x125f74.data.score);
        } else _0x125f74.msg == "设备异常，请更换设备后重试" && (await this.ydhssp()), console.log("账号[" + this.index + "]:喜马拉雅极速版喝水视频" + this.tjid + "：" + _0x125f74.msg), this.cFlag = false;
      }
    } catch (_0x42fb5e) {
      console.log("账号[" + this.index + "]", JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["populateUrlObject"](_0x287641, _0x2c76a5 = "") {
    let _0x2e9e18 = _0x287641.replace("//", "/").split("/")[1],
      _0x2c695c = {
        "url": _0x287641,
        "headers": {
          "Host": _0x2e9e18,
          "Content-Type": "application/json;charset=utf-8",
          "Cookie": this.ck,
          "User-Agent": "iting(main)/2.3.6/android_1 ;xmly(lite)/2.3.6.3/android_1 ting_2.3.6(16s+Pro,Android29)",
          "cookie2": "$version=1",
          "x-requested-with": "XMLHttpRequest"
        },
        "timeout": 5000
      };
    _0x2c76a5 && (_0x2c695c.body = _0x2c76a5);
    this.urlObject = _0x2c695c;
  }
  async ["populateUrlObject1"](_0x548e9c, _0x2b32c5 = "") {
    let _0x1817c0 = _0x548e9c.replace("//", "/").split("/")[1],
      _0x154038 = {
        "url": _0x548e9c,
        "headers": {
          "Host": _0x1817c0,
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; 16s Pro Build/QKQ1.191222.002)"
        },
        "timeout": 5000
      };
    if (_0x2b32c5) {
      _0x154038.body = _0x2b32c5;
    }
    this.urlObject = _0x154038;
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    {
      if (!(await checkEnv())) return;
      if (userList.length > 0) {
        taskall = [];
        for (let _0x13969b of userList) {
          if (_0x13969b.cFlag) taskall.push(_0x13969b.sh());
          taskall.length > 50 && (await Promise.all(taskall), taskall = []);
        }
        if (taskall.length > 0) await Promise.all(taskall);
      }
      await $.showmsg();
    }
  }
})().catch(_0x127dea => console.log(_0x127dea)).finally(() => $.done());
async function GetRewrite() {
  $request.url.indexOf("api.ibreader.com/api/user/userInfo") > -1 && (ck = "" + $request.headers.Cookie, userCookie ? -1 == userCookie.indexOf(ck) && (userCookie = userCookie + "@" + ck, $.setdata(userCookie, "bkcookie"), ckList = userCookie.split("@"), $.msg("获取第" + ckList.length + "个ck成功: " + ck)) : ($.setdata(ck, "bkcookie"), $.msg("获取第1个ck成功: " + ck)));
}
async function checkEnv() {
  if (userCookie) {
    {
      let _0xa521f6 = envSplitor[0];
      for (let _0x2be908 of envSplitor) if (userCookie.indexOf(_0x2be908) > -1) {
        _0xa521f6 = _0x2be908;
        break;
      }
      for (let _0x5f29fc of userCookie.split(_0xa521f6)) _0x5f29fc && userList.push(new UserInfo(_0x5f29fc));
      userCount = userList.length;
    }
  } else {
    {
      console.log("未找到CK");
      return;
    }
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
function randomString(_0x20d27a = 12) {
  let _0x4e2c91 = "abcdef0123456789",
    _0x2bf06a = _0x4e2c91.length,
    _0x425668 = "";
  for (i = 0; i < _0x20d27a; i++) {
    _0x425668 += _0x4e2c91.charAt(Math.floor(Math.random() * _0x2bf06a));
  }
  return _0x425668;
}
function UUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x5f27cc) {
    {
      const _0x54425f = Math.random() * 16 | 0,
        _0x169bf4 = _0x5f27cc === "x" ? _0x54425f : _0x54425f & 3 | 8;
      return _0x169bf4.toString(16);
    }
  });
}
function populateUrlObject(_0x52092c, _0xba17e7, _0x1c73a4 = "") {
  let _0xb61917 = _0x52092c.replace("//", "/").split("/")[1],
    _0x351064 = {
      "url": _0x52092c,
      "headers": {
        "Host": _0xb61917,
        "Cookie": this.ck
      },
      "timeout": 5000
    };
  _0x1c73a4 && (_0x351064.body = _0x1c73a4);
  return _0x351064;
}
async function httpRequest(_0x23ba52, _0x17bb3f) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x1d39c8 => {
    $.send(_0x23ba52, _0x17bb3f, async (_0x11c106, _0x589ebf, _0x11c5f2) => {
      try {
        if (httpReq = _0x589ebf, httpResp = _0x11c5f2, _0x11c106) {} else {
          if (_0x11c5f2.body) {
            if ("object" == typeof _0x11c5f2.body) httpResult = _0x11c5f2.body;else try {
              httpResult = JSON.parse(_0x11c5f2.body);
            } catch (_0x37cd8a) {
              httpResult = _0x11c5f2.body;
            }
          }
        }
      } catch (_0x1bc37d) {
        console.log(_0x1bc37d);
      } finally {
        _0x1d39c8();
      }
    });
  });
}
function rsaencrypt(_0x4ab712) {
  const _0xc146c2 = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCii08L3DUTt+5D+TVn/q9WtPSPjp3MfIZ+NDE/\n    U6SxMCf4rROgHuEb154XuEZJMIEa61oyHGAB1QyuBwjnhO48YRsSbe5LAuLFElZVLATJudAmbTYz\n    XQaZyVMeplngwuIuduVa85rLXMnJpmb4cAvQZesKPeEtIHF98r48yKiIfwIDAQAB-----END PUBLIC KEY-----",
    _0x53b655 = new NodeRSA(_0xc146c2);
  _0x53b655.setOptions({
    "encryptionScheme": "pkcs1"
  });
  const _0xf8f273 = _0x53b655.encrypt(_0x4ab712, "base64");
  return _0xf8f273;
}
function AES_Encrypt(_0x2ad7af) {
  var _0x365281 = CryptoJS.enc.Utf8.parse(_0x2ad7af),
    _0x49db4c = CryptoJS.AES.encrypt(_0x365281, key, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x49db4c.toString();
}
function AES_Decrypt(_0x536acf) {
  var _0x36d0b1 = _0x536acf,
    _0x411fff = CryptoJS.AES.decrypt(_0x36d0b1, key, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x411fff.toString(CryptoJS.enc.Utf8);
}
function random(_0xcb48d8 = 12) {
  let _0x5ddf5b = "0123456789",
    _0x5342d0 = _0x5ddf5b.length,
    _0x2cdfe1 = "";
  for (i = 0; i < _0xcb48d8; i++) {
    _0x2cdfe1 += _0x5ddf5b.charAt(Math.floor(Math.random() * _0x5342d0));
  }
  return _0x2cdfe1;
}
function MD5Encrypt(_0x116e24) {
  function _0x3774a9(_0x33ad7c, _0x50da77) {
    return _0x33ad7c << _0x50da77 | _0x33ad7c >>> 32 - _0x50da77;
  }
  function _0xb19ed9(_0x4c7ffc, _0x94da22) {
    {
      var _0x25744c, _0x4c421e, _0x42839c, _0x557d54, _0x3c058e;
      _0x42839c = 2147483648 & _0x4c7ffc;
      _0x557d54 = 2147483648 & _0x94da22;
      _0x25744c = 1073741824 & _0x4c7ffc;
      _0x4c421e = 1073741824 & _0x94da22;
      _0x3c058e = (1073741823 & _0x4c7ffc) + (1073741823 & _0x94da22);
      return _0x25744c & _0x4c421e ? 2147483648 ^ _0x3c058e ^ _0x42839c ^ _0x557d54 : _0x25744c | _0x4c421e ? 1073741824 & _0x3c058e ? 3221225472 ^ _0x3c058e ^ _0x42839c ^ _0x557d54 : 1073741824 ^ _0x3c058e ^ _0x42839c ^ _0x557d54 : _0x3c058e ^ _0x42839c ^ _0x557d54;
    }
  }
  function _0x39b92c(_0x4eb1bd, _0xa7acc4, _0x25f75f) {
    return _0x4eb1bd & _0xa7acc4 | ~_0x4eb1bd & _0x25f75f;
  }
  function _0x5939c9(_0x132946, _0x3ab33d, _0x3882d0) {
    return _0x132946 & _0x3882d0 | _0x3ab33d & ~_0x3882d0;
  }
  function _0x3dcc32(_0x5f0ad5, _0x556adb, _0x3573c6) {
    return _0x5f0ad5 ^ _0x556adb ^ _0x3573c6;
  }
  function _0x32ffd4(_0x20646c, _0x3c291b, _0x407072) {
    return _0x3c291b ^ (_0x20646c | ~_0x407072);
  }
  function _0x2589ab(_0x22eafa, _0x4d3c00, _0x276345, _0x3bb01e, _0x118a93, _0xd0472b, _0x5acd1f) {
    _0x22eafa = _0xb19ed9(_0x22eafa, _0xb19ed9(_0xb19ed9(_0x39b92c(_0x4d3c00, _0x276345, _0x3bb01e), _0x118a93), _0x5acd1f));
    return _0xb19ed9(_0x3774a9(_0x22eafa, _0xd0472b), _0x4d3c00);
  }
  function _0x92b2f4(_0x2b12d6, _0x2a7b93, _0x4db11c, _0x2d8713, _0xa69262, _0x70a7da, _0x30e46c) {
    _0x2b12d6 = _0xb19ed9(_0x2b12d6, _0xb19ed9(_0xb19ed9(_0x5939c9(_0x2a7b93, _0x4db11c, _0x2d8713), _0xa69262), _0x30e46c));
    return _0xb19ed9(_0x3774a9(_0x2b12d6, _0x70a7da), _0x2a7b93);
  }
  function _0x5ddb46(_0x320cfe, _0x16bd98, _0x26f0d8, _0x302022, _0x7a673f, _0x2ecbf3, _0x2f4eeb) {
    _0x320cfe = _0xb19ed9(_0x320cfe, _0xb19ed9(_0xb19ed9(_0x3dcc32(_0x16bd98, _0x26f0d8, _0x302022), _0x7a673f), _0x2f4eeb));
    return _0xb19ed9(_0x3774a9(_0x320cfe, _0x2ecbf3), _0x16bd98);
  }
  function _0x17aa38(_0x756ba4, _0x112cac, _0x17e7da, _0x3f2805, _0x188807, _0x58e135, _0x2d9b72) {
    _0x756ba4 = _0xb19ed9(_0x756ba4, _0xb19ed9(_0xb19ed9(_0x32ffd4(_0x112cac, _0x17e7da, _0x3f2805), _0x188807), _0x2d9b72));
    return _0xb19ed9(_0x3774a9(_0x756ba4, _0x58e135), _0x112cac);
  }
  function _0x414225(_0x56481c) {
    {
      for (var _0x4ae6c2, _0x3ae86a = _0x56481c.length, _0x467540 = _0x3ae86a + 8, _0x52b8dd = (_0x467540 - _0x467540 % 64) / 64, _0x4988c7 = 16 * (_0x52b8dd + 1), _0x327e9c = new Array(_0x4988c7 - 1), _0x197124 = 0, _0x30f9da = 0; _0x3ae86a > _0x30f9da;) _0x4ae6c2 = (_0x30f9da - _0x30f9da % 4) / 4, _0x197124 = _0x30f9da % 4 * 8, _0x327e9c[_0x4ae6c2] = _0x327e9c[_0x4ae6c2] | _0x56481c.charCodeAt(_0x30f9da) << _0x197124, _0x30f9da++;
      _0x4ae6c2 = (_0x30f9da - _0x30f9da % 4) / 4;
      _0x197124 = _0x30f9da % 4 * 8;
      _0x327e9c[_0x4ae6c2] = _0x327e9c[_0x4ae6c2] | 128 << _0x197124;
      _0x327e9c[_0x4988c7 - 2] = _0x3ae86a << 3;
      _0x327e9c[_0x4988c7 - 1] = _0x3ae86a >>> 29;
      return _0x327e9c;
    }
  }
  function _0x784c37(_0x54b59a) {
    var _0x399809,
      _0x4a890b,
      _0x185dcf = "",
      _0x11e535 = "";
    for (_0x4a890b = 0; 3 >= _0x4a890b; _0x4a890b++) _0x399809 = _0x54b59a >>> 8 * _0x4a890b & 255, _0x11e535 = "0" + _0x399809.toString(16), _0x185dcf += _0x11e535.substr(_0x11e535.length - 2, 2);
    return _0x185dcf;
  }
  function _0x135e1b(_0x161d6d) {
    {
      _0x161d6d = _0x161d6d.replace(/\r\n/g, "\n");
      for (var _0x14a4ee = "", _0x2f04aa = 0; _0x2f04aa < _0x161d6d.length; _0x2f04aa++) {
        {
          var _0x21afef = _0x161d6d.charCodeAt(_0x2f04aa);
          128 > _0x21afef ? _0x14a4ee += String.fromCharCode(_0x21afef) : _0x21afef > 127 && 2048 > _0x21afef ? (_0x14a4ee += String.fromCharCode(_0x21afef >> 6 | 192), _0x14a4ee += String.fromCharCode(63 & _0x21afef | 128)) : (_0x14a4ee += String.fromCharCode(_0x21afef >> 12 | 224), _0x14a4ee += String.fromCharCode(_0x21afef >> 6 & 63 | 128), _0x14a4ee += String.fromCharCode(63 & _0x21afef | 128));
        }
      }
      return _0x14a4ee;
    }
  }
  var _0x522e08,
    _0x2609a6,
    _0x5787dc,
    _0x190da8,
    _0x19a499,
    _0x57c7bf,
    _0x227293,
    _0x46d2f8,
    _0x1623f1,
    _0x40cfcd = [],
    _0x5b1603 = 7,
    _0x175e1f = 12,
    _0xefe98a = 17,
    _0x42c2c3 = 22,
    _0x14872c = 5,
    _0x5dd48c = 9,
    _0x3e172c = 14,
    _0x2893d6 = 20,
    _0x54ce53 = 4,
    _0x35a7b5 = 11,
    _0x258ec8 = 16,
    _0x1eb0c1 = 23,
    _0xfabe2e = 6,
    _0x5d76ec = 10,
    _0x23eb63 = 15,
    _0x4b1f00 = 21;
  for (_0x116e24 = _0x135e1b(_0x116e24), _0x40cfcd = _0x414225(_0x116e24), _0x57c7bf = 1732584193, _0x227293 = 4023233417, _0x46d2f8 = 2562383102, _0x1623f1 = 271733878, _0x522e08 = 0; _0x522e08 < _0x40cfcd.length; _0x522e08 += 16) _0x2609a6 = _0x57c7bf, _0x5787dc = _0x227293, _0x190da8 = _0x46d2f8, _0x19a499 = _0x1623f1, _0x57c7bf = _0x2589ab(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 0], _0x5b1603, 3614090360), _0x1623f1 = _0x2589ab(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 1], _0x175e1f, 3905402710), _0x46d2f8 = _0x2589ab(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 2], _0xefe98a, 606105819), _0x227293 = _0x2589ab(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 3], _0x42c2c3, 3250441966), _0x57c7bf = _0x2589ab(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 4], _0x5b1603, 4118548399), _0x1623f1 = _0x2589ab(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 5], _0x175e1f, 1200080426), _0x46d2f8 = _0x2589ab(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 6], _0xefe98a, 2821735955), _0x227293 = _0x2589ab(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 7], _0x42c2c3, 4249261313), _0x57c7bf = _0x2589ab(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 8], _0x5b1603, 1770035416), _0x1623f1 = _0x2589ab(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 9], _0x175e1f, 2336552879), _0x46d2f8 = _0x2589ab(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 10], _0xefe98a, 4294925233), _0x227293 = _0x2589ab(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 11], _0x42c2c3, 2304563134), _0x57c7bf = _0x2589ab(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 12], _0x5b1603, 1804603682), _0x1623f1 = _0x2589ab(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 13], _0x175e1f, 4254626195), _0x46d2f8 = _0x2589ab(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 14], _0xefe98a, 2792965006), _0x227293 = _0x2589ab(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 15], _0x42c2c3, 1236535329), _0x57c7bf = _0x92b2f4(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 1], _0x14872c, 4129170786), _0x1623f1 = _0x92b2f4(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 6], _0x5dd48c, 3225465664), _0x46d2f8 = _0x92b2f4(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 11], _0x3e172c, 643717713), _0x227293 = _0x92b2f4(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 0], _0x2893d6, 3921069994), _0x57c7bf = _0x92b2f4(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 5], _0x14872c, 3593408605), _0x1623f1 = _0x92b2f4(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 10], _0x5dd48c, 38016083), _0x46d2f8 = _0x92b2f4(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 15], _0x3e172c, 3634488961), _0x227293 = _0x92b2f4(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 4], _0x2893d6, 3889429448), _0x57c7bf = _0x92b2f4(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 9], _0x14872c, 568446438), _0x1623f1 = _0x92b2f4(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 14], _0x5dd48c, 3275163606), _0x46d2f8 = _0x92b2f4(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 3], _0x3e172c, 4107603335), _0x227293 = _0x92b2f4(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 8], _0x2893d6, 1163531501), _0x57c7bf = _0x92b2f4(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 13], _0x14872c, 2850285829), _0x1623f1 = _0x92b2f4(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 2], _0x5dd48c, 4243563512), _0x46d2f8 = _0x92b2f4(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 7], _0x3e172c, 1735328473), _0x227293 = _0x92b2f4(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 12], _0x2893d6, 2368359562), _0x57c7bf = _0x5ddb46(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 5], _0x54ce53, 4294588738), _0x1623f1 = _0x5ddb46(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 8], _0x35a7b5, 2272392833), _0x46d2f8 = _0x5ddb46(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 11], _0x258ec8, 1839030562), _0x227293 = _0x5ddb46(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 14], _0x1eb0c1, 4259657740), _0x57c7bf = _0x5ddb46(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 1], _0x54ce53, 2763975236), _0x1623f1 = _0x5ddb46(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 4], _0x35a7b5, 1272893353), _0x46d2f8 = _0x5ddb46(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 7], _0x258ec8, 4139469664), _0x227293 = _0x5ddb46(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 10], _0x1eb0c1, 3200236656), _0x57c7bf = _0x5ddb46(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 13], _0x54ce53, 681279174), _0x1623f1 = _0x5ddb46(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 0], _0x35a7b5, 3936430074), _0x46d2f8 = _0x5ddb46(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 3], _0x258ec8, 3572445317), _0x227293 = _0x5ddb46(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 6], _0x1eb0c1, 76029189), _0x57c7bf = _0x5ddb46(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 9], _0x54ce53, 3654602809), _0x1623f1 = _0x5ddb46(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 12], _0x35a7b5, 3873151461), _0x46d2f8 = _0x5ddb46(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 15], _0x258ec8, 530742520), _0x227293 = _0x5ddb46(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 2], _0x1eb0c1, 3299628645), _0x57c7bf = _0x17aa38(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 0], _0xfabe2e, 4096336452), _0x1623f1 = _0x17aa38(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 7], _0x5d76ec, 1126891415), _0x46d2f8 = _0x17aa38(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 14], _0x23eb63, 2878612391), _0x227293 = _0x17aa38(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 5], _0x4b1f00, 4237533241), _0x57c7bf = _0x17aa38(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 12], _0xfabe2e, 1700485571), _0x1623f1 = _0x17aa38(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 3], _0x5d76ec, 2399980690), _0x46d2f8 = _0x17aa38(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 10], _0x23eb63, 4293915773), _0x227293 = _0x17aa38(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 1], _0x4b1f00, 2240044497), _0x57c7bf = _0x17aa38(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 8], _0xfabe2e, 1873313359), _0x1623f1 = _0x17aa38(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 15], _0x5d76ec, 4264355552), _0x46d2f8 = _0x17aa38(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 6], _0x23eb63, 2734768916), _0x227293 = _0x17aa38(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 13], _0x4b1f00, 1309151649), _0x57c7bf = _0x17aa38(_0x57c7bf, _0x227293, _0x46d2f8, _0x1623f1, _0x40cfcd[_0x522e08 + 4], _0xfabe2e, 4149444226), _0x1623f1 = _0x17aa38(_0x1623f1, _0x57c7bf, _0x227293, _0x46d2f8, _0x40cfcd[_0x522e08 + 11], _0x5d76ec, 3174756917), _0x46d2f8 = _0x17aa38(_0x46d2f8, _0x1623f1, _0x57c7bf, _0x227293, _0x40cfcd[_0x522e08 + 2], _0x23eb63, 718787259), _0x227293 = _0x17aa38(_0x227293, _0x46d2f8, _0x1623f1, _0x57c7bf, _0x40cfcd[_0x522e08 + 9], _0x4b1f00, 3951481745), _0x57c7bf = _0xb19ed9(_0x57c7bf, _0x2609a6), _0x227293 = _0xb19ed9(_0x227293, _0x5787dc), _0x46d2f8 = _0xb19ed9(_0x46d2f8, _0x190da8), _0x1623f1 = _0xb19ed9(_0x1623f1, _0x19a499);
  var _0x401a0d = _0x784c37(_0x57c7bf) + _0x784c37(_0x227293) + _0x784c37(_0x46d2f8) + _0x784c37(_0x1623f1);
  return _0x401a0d.toLowerCase();
}
function Env(_0x2a2a4a, _0x19dab2) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x186c02, _0x470933) {
      this.name = _0x186c02;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x470933);
      console.log(this.name + " 开始运行：\n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x353f6f) {
      let _0x44ee6b = this.getval(_0x353f6f);
      if (/^@/.test(_0x353f6f)) {
        {
          const [, _0x1ef035, _0x4bbd3e] = /^@(.*?)\.(.*?)$/.exec(_0x353f6f),
            _0x7afc46 = _0x1ef035 ? this.getval(_0x1ef035) : "";
          if (_0x7afc46) try {
            const _0x5a845b = JSON.parse(_0x7afc46);
            _0x44ee6b = _0x5a845b ? this.lodash_get(_0x5a845b, _0x4bbd3e, "") : _0x44ee6b;
          } catch (_0x587e9c) {
            _0x44ee6b = "";
          }
        }
      }
      return _0x44ee6b;
    }
    ["setdata"](_0xc5279, _0x1c5e3e) {
      let _0x4edbcf = false;
      if (/^@/.test(_0x1c5e3e)) {
        {
          const [, _0x112808, _0x43bfdd] = /^@(.*?)\.(.*?)$/.exec(_0x1c5e3e),
            _0x46fa2c = this.getval(_0x112808),
            _0x4055d0 = _0x112808 ? "null" === _0x46fa2c ? null : _0x46fa2c || "{}" : "{}";
          try {
            const _0x4a4159 = JSON.parse(_0x4055d0);
            this.lodash_set(_0x4a4159, _0x43bfdd, _0xc5279);
            _0x4edbcf = this.setval(JSON.stringify(_0x4a4159), _0x112808);
          } catch (_0x2f798f) {
            const _0x177d77 = {};
            this.lodash_set(_0x177d77, _0x43bfdd, _0xc5279);
            _0x4edbcf = this.setval(JSON.stringify(_0x177d77), _0x112808);
          }
        }
      } else _0x4edbcf = this.setval(_0xc5279, _0x1c5e3e);
      return _0x4edbcf;
    }
    ["getval"](_0x1bb894) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1bb894) : this.isQuanX() ? $prefs.valueForKey(_0x1bb894) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1bb894]) : this.data && this.data[_0x1bb894] || null;
    }
    ["setval"](_0x32c094, _0x1de4bf) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x32c094, _0x1de4bf) : this.isQuanX() ? $prefs.setValueForKey(_0x32c094, _0x1de4bf) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1de4bf] = _0x32c094, this.writedata(), true) : this.data && this.data[_0x1de4bf] || null;
    }
    ["send"](_0x4565ed, _0x450132, _0x2131c9 = () => {}) {
      if (_0x4565ed != "get" && _0x4565ed != "post" && _0x4565ed != "put" && _0x4565ed != "delete") {
        {
          console.log("无效的http方法：" + _0x4565ed);
          return;
        }
      }
      if (_0x4565ed == "get" && _0x450132.headers) delete _0x450132.headers["Content-Type"], delete _0x450132.headers["Content-Length"];else {
        if (_0x450132.body && _0x450132.headers) {
          if (!_0x450132.headers["Content-Type"]) _0x450132.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x450132.headers = _0x450132.headers || {}, Object.assign(_0x450132.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        let _0x588327 = {
          "method": _0x4565ed,
          "url": _0x450132.url,
          "headers": _0x450132.headers,
          "timeout": _0x450132.timeout,
          "data": _0x450132.body
        };
        if (_0x4565ed == "get") delete _0x588327.data;
        $axios(_0x588327).then(_0x3b778d => {
          {
            const {
              status: _0x3d5df7,
              request: _0x3d7065,
              headers: _0x2bd0f1,
              data: _0x41b802
            } = _0x3b778d;
            _0x2131c9(null, _0x3d7065, {
              "statusCode": _0x3d5df7,
              "headers": _0x2bd0f1,
              "body": _0x41b802
            });
          }
        }).catch(_0xd7c39e => console.log(_0xd7c39e));
      } else {
        if (this.isQuanX()) _0x450132.method = _0x4565ed.toUpperCase(), this.isNeedRewrite && (_0x450132.opts = _0x450132.opts || {}, Object.assign(_0x450132.opts, {
          "hints": false
        })), $task.fetch(_0x450132).then(_0x5745cb => {
          {
            const {
              statusCode: _0x6ca340,
              request: _0x5a6e38,
              headers: _0x45e2fa,
              body: _0xb165cc
            } = _0x5745cb;
            _0x2131c9(null, _0x5a6e38, {
              "statusCode": _0x6ca340,
              "headers": _0x45e2fa,
              "body": _0xb165cc
            });
          }
        }, _0xa1feb6 => _0x2131c9(_0xa1feb6));else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: _0x301e24,
              ..._0x44f2e0
            } = _0x450132;
            this.instance = this.got.extend({
              "followRedirect": false
            });
            this.instance[_0x4565ed](_0x301e24, _0x44f2e0).then(_0x80ee31 => {
              const {
                statusCode: _0x1d2e18,
                request: _0x456529,
                headers: _0x12171b,
                body: _0x46ce7b
              } = _0x80ee31;
              _0x2131c9(null, _0x456529, {
                "statusCode": _0x1d2e18,
                "headers": _0x12171b,
                "body": _0x46ce7b
              });
            }, _0x121a20 => {
              const {
                message: _0x4c574d,
                response: _0x427e1c
              } = _0x121a20;
              _0x2131c9(_0x4c574d, _0x427e1c, _0x427e1c && _0x427e1c.body);
            });
          }
        }
      }
    }
    ["time"](_0x31bb3d) {
      let _0x5d4be5 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        "S": new Date().getMilliseconds()
      };
      /(y+)/.test(_0x31bb3d) && (_0x31bb3d = _0x31bb3d.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x36784e in _0x5d4be5) new RegExp("(" + _0x36784e + ")").test(_0x31bb3d) && (_0x31bb3d = _0x31bb3d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5d4be5[_0x36784e] : ("00" + _0x5d4be5[_0x36784e]).substr(("" + _0x5d4be5[_0x36784e]).length)));
      return _0x31bb3d;
    }
    async ["showmsg"]() {
      {
        if (!this.notifyStr) return;
        let _0xa4dff9 = this.name + " 运行通知\n\n" + this.notifyStr;
        if ($.isNode()) {} else this.msg(_0xa4dff9);
      }
    }
    ["logAndNotify"](_0x2fbf08) {
      console.log(_0x2fbf08);
      this.notifyStr += _0x2fbf08;
      this.notifyStr += "\n";
    }
    ["msg"](_0xc269df = t, _0x16425b = "", _0x590a28 = "", _0x51cc15) {
      {
        const _0x4915ff = _0x230434 => {
          if (!_0x230434) return _0x230434;
          if ("string" == typeof _0x230434) return this.isLoon() ? _0x230434 : this.isQuanX() ? {
            "open-url": _0x230434
          } : this.isSurge() ? {
            "url": _0x230434
          } : undefined;
          if ("object" == typeof _0x230434) {
            if (this.isLoon()) {
              let _0x18d56c = _0x230434.openUrl || _0x230434.url || _0x230434["open-url"],
                _0x860d0f = _0x230434.mediaUrl || _0x230434["media-url"];
              return {
                "openUrl": _0x18d56c,
                "mediaUrl": _0x860d0f
              };
            }
            if (this.isQuanX()) {
              {
                let _0x29d7f3 = _0x230434["open-url"] || _0x230434.url || _0x230434.openUrl,
                  _0xa0c820 = _0x230434["media-url"] || _0x230434.mediaUrl;
                return {
                  "open-url": _0x29d7f3,
                  "media-url": _0xa0c820
                };
              }
            }
            if (this.isSurge()) {
              let _0x1e27de = _0x230434.url || _0x230434.openUrl || _0x230434["open-url"];
              return {
                "url": _0x1e27de
              };
            }
          }
        };
        this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xc269df, _0x16425b, _0x590a28, _0x4915ff(_0x51cc15)) : this.isQuanX() && $notify(_0xc269df, _0x16425b, _0x590a28, _0x4915ff(_0x51cc15)));
        let _0x3973be = ["", "============== 系统通知 =============="];
        _0x3973be.push(_0xc269df);
        _0x16425b && _0x3973be.push(_0x16425b);
        _0x590a28 && _0x3973be.push(_0x590a28);
        console.log(_0x3973be.join("\n"));
      }
    }
    ["getMin"](_0x57c399, _0x52ea8c) {
      return _0x57c399 < _0x52ea8c ? _0x57c399 : _0x52ea8c;
    }
    ["getMax"](_0x28c1ae, _0x46c3bc) {
      return _0x28c1ae < _0x46c3bc ? _0x46c3bc : _0x28c1ae;
    }
    ["padStr"](_0x517b25, _0x2fb1b1, _0x5e8907 = "0") {
      {
        let _0x2e54ea = String(_0x517b25),
          _0x175a47 = _0x2fb1b1 > _0x2e54ea.length ? _0x2fb1b1 - _0x2e54ea.length : 0,
          _0xd70ef8 = "";
        for (let _0x59aa62 = 0; _0x59aa62 < _0x175a47; _0x59aa62++) {
          _0xd70ef8 += _0x5e8907;
        }
        _0xd70ef8 += _0x2e54ea;
        return _0xd70ef8;
      }
    }
    ["json2str"](_0xf00c2f = {}) {
      let _0x23f6cc = [],
        _0x503988 = _0xf00c2f.obj,
        _0x121771 = _0xf00c2f.connector || "",
        _0x54f395 = Object.keys(_0x503988);
      if (_0xf00c2f.isSort) _0x54f395 = _0x54f395.sort();
      for (let _0x3d573d of _0x54f395) {
        let _0x3b9e91 = _0x503988[_0x3d573d];
        if (_0x3b9e91 && typeof _0x3b9e91 === "object") _0x3b9e91 = JSON.stringify(_0x3b9e91);
        if (_0x3b9e91 && _0xf00c2f.encodeUrl) _0x3b9e91 = encodeURIComponent(_0x3b9e91);
        _0x23f6cc.push(_0x3d573d + "=" + _0x3b9e91);
      }
      return _0x23f6cc.join(_0x121771);
    }
    ["str2json"](_0x42823e, _0x1b195c = false) {
      let _0x59d933 = {};
      for (let _0x582b37 of _0x42823e.split("&")) {
        {
          if (!_0x582b37) continue;
          let _0x139e1e = _0x582b37.indexOf("=");
          if (_0x139e1e == -1) continue;
          let _0x5b64ed = _0x582b37.substr(0, _0x139e1e),
            _0x40cd7c = _0x582b37.substr(_0x139e1e + 1);
          if (_0x1b195c) _0x40cd7c = decodeURIComponent(_0x40cd7c);
          _0x59d933[_0x5b64ed] = _0x40cd7c;
        }
      }
      return _0x59d933;
    }
    ["randomString"](_0x154e98, _0x148b6f = "abcdef0123456789") {
      let _0x1a7175 = "";
      for (let _0x568a17 = 0; _0x568a17 < _0x154e98; _0x568a17++) {
        _0x1a7175 += _0x148b6f.charAt(Math.floor(Math.random() * _0x148b6f.length));
      }
      return _0x1a7175;
    }
    ["randomList"](_0x148d50) {
      let _0x4d83e2 = Math.floor(Math.random() * _0x148d50.length);
      return _0x148d50[_0x4d83e2];
    }
    ["wait"](_0x266c39) {
      return new Promise(_0x13f0bc => setTimeout(_0x13f0bc, _0x266c39));
    }
    ["done"](_0x2b1e71 = {}) {
      const _0x7d591 = new Date().getTime(),
        _0x2162b0 = (_0x7d591 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x2162b0 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(_0x2b1e71);
      process.exit(0);
    }
    ["parseParam"](_0x335c92, _0x2e3662 = "") {
      return _0x335c92 === undefined ? _0x2e3662 : _0x335c92;
    }
    ["randomPattern"](_0x54ba77, _0x326370 = "abcdef0123456789") {
      let _0x114ae5 = "";
      for (let _0x187b81 of _0x54ba77) {
        if (_0x187b81 == "x") {
          _0x114ae5 += _0x326370.charAt(Math.floor(Math.random() * _0x326370.length));
        } else {
          if (_0x187b81 == "X") _0x114ae5 += _0x326370.charAt(Math.floor(Math.random() * _0x326370.length)).toUpperCase();else {
            _0x114ae5 += _0x187b81;
          }
        }
      }
      return _0x114ae5;
    }
    ["param2str"](_0x3ab377, _0x1bbd45 = true) {
      {
        let _0x51b734 = [];
        for (let _0x568060 in _0x3ab377) {
          {
            if (typeof _0x3ab377[_0x568060] === "object") _0x3ab377[_0x568060] = JSON.stringify(_0x3ab377[_0x568060]);
            let _0x428907 = _0x3ab377[_0x568060];
            if (_0x1bbd45) _0x428907 = escape(_0x428907);
            let _0x34b933 = _0x568060 + "=" + _0x428907;
            _0x51b734.push(_0x34b933);
          }
        }
        return _0x51b734.join("&");
      }
    }
    ["randomWait"](_0x20ae73, _0x44879e) {
      if (_0x20ae73 == 0) return;
      let _0x3a5a33 = Math.floor(Math.random() * _0x44879e) + _0x20ae73;
      return this.wait(_0x3a5a33);
    }
  }(_0x2a2a4a, _0x19dab2);
}