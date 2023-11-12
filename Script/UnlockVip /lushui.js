/*
[rewrite_local]



^https:\/\/api\.wangmianhua\.cn\/api/(user/info|vod/watch|vod/buy) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/lushui.js

MITM = api.wangmianhua.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const buy = 'api/vod/buy';
const code = 'api/vod/buy';
const data = 'api/vod/buy';
const vod = '/api/vod/watch';
const gj = '/api/vod/watch';
const user = '/api/user/info';


if (url.indexOf(buy) != -1) {
   obj["result"] = "true";
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(code) != -1) {
obj["code"] = "200";
     body = JSON.stringify(obj);
     }

if (url.indexOf(data) != -1) {
	obj["data"] = 
    "vodId": 70068,
    "vodName": "小姨子太性感，我忍不住强奸了她",
    "vodPointsPlay": 1000,
    "vodPic": "https://feimian.slsltutu.com/upload/vod/20230707-1/6c68e61ede15210bdd6fcf9530a9cd9a.jpg",
    "vodPlayUrl": "https://vip3.slbfsl.com/20230707/KZElSFR2/index.m3u8",
    "typeId": 1,
    "typeName": "每日推荐",
    "availableAmount": 0,
    "bought": false,
    "canTryWatch": true,
    "guessLikeList": [{
      "vodId": 67460,
      "vodName": "有男朋友就喷出高潮的巨乳",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230620-1/ea3301bcb2127b4eb34d74b1c6c1f9b7.jpg",
      "vodPlayUrl": "在线播放$https://vip2.slbfsl.com/20230620/6fa8RIJm/index.m3u8"
    }, {
      "vodId": 67469,
      "vodName": "町野玲香 27 岁",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230620-1/77f7eddd99790d349308844098bcefb0.jpg",
      "vodPlayUrl": "在线播放$https://vip2.slbfsl.com/20230620/0VYnExIk/index.m3u8"
    }, {
      "vodId": 67619,
      "vodName": "MIDV-163 性慾超強的巨乳姐姐 雙親去旅行不在家 射了10次也不讓我睡覺 明日見未來",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230623-1/95a76b0adf5844c859a0478ae07863e2.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230623/whebHdrv/index.m3u8"
    }, {
      "vodId": 67624,
      "vodName": "与女儿的丈夫性交",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230623-1/bb9e01924bb3d8c4fd625a8a9221948d.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230623/qGZbBSap/index.m3u8"
    }, {
      "vodId": 67680,
      "vodName": "与超型巨乳岳母在洗澡时做爱",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230622-1/c0870efa2b8edd853a0fbd450939829f.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230621/9UA8p22s/index.m3u8"
    }, {
      "vodId": 67729,
      "vodName": "与隔壁性欲旺盛的姐姐发生关系",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230622-1/0077d41a8f968bcbbd303168b10dc098.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230621/mbJ6SQ0d/index.m3u8"
    }, {
      "vodId": 67739,
      "vodName": "诱惑姐姐的老公和阴道射精",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230622-1/60ca6d2456cc9f4b904360f37d30f983.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230621/knaSeLIE/index.m3u8"
    }, {
      "vodId": 67756,
      "vodName": "与发情的小妹乱伦",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230622-1/eebadb0f12431edaec58f5533c3f6227.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230621/bcQsnpwF/index.m3u8"
    }, {
      "vodId": 67760,
      "vodName": "与公公通奸",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230622-1/d5cf29f27c4194532be65956349bbc62.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230621/TsGL3RZ6/index.m3u8"
    }, {
      "vodId": 67763,
      "vodName": "与公公发生关系的同时对丈夫心存愧疚",
      "vodPointsPlay": 10,
      "vodPic": "https://feimian.slsltutu.com/upload/vod/20230622-1/cb240794a296870328f9b02f12c3187a.jpg",
      "vodPlayUrl": "在线播放$https://vip3.slbfsl.com/20230621/FTY7Is6A/index.m3u8";
	body = JSON.stringify(obj);
    }
    
if (url.indexOf(vod) != -1) {
	
	obj["vodId"] = "70068"
	body = JSON.stringify(obj);
    }
    
if (url.indexOf(gj) != -1) {
	obj["bought"] = "true"
	body = JSON.stringify(obj);
    }

 if (url.indexOf(user) != -1) {
	obj["data"]["vipType"] = "isvip"
	obj["data"]["vipEndDate"] = "2099"
	obj["data"]["vipEndYear"] = "2099"
	obj["data"]["vipEndMonth"] = "9"
	obj["data"]["vipEndDay"] = "9"
	obj["data"]["vipEndHour"] = "9"
	obj["data"]["avaliableAmount"] = "9999"
	
	body = JSON.stringify(obj);
    }


$done({body});