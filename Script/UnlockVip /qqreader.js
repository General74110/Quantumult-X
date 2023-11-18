/*
General℡
⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https?:\/\/commontgw\.reader\.qq\.com(\/common\/adV3|\/v7_6_6\/nativepage\/getAcctInfo|v7_6_6\/nativepage\/personal) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js

^https?:\/\/commontgw\.reader\.qq\.com\/v7_6_6\/nativepage\/personal url script-response-header https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js

hostname = commontgw.reader.qq.com





*/

var body = $response.body;
//var headers = $response.headers;
var url = $request.url;
var obj = JSON.parse(body);
//var obg = header.parse(headers);

const vipad = 'common/adV3';//vip去广告信息
const vip = 'nativepage/getAcctInfo';
const vip1 = 'v7_6_6/userinfo';
const vip2 = 'v7_6_6/nativepage/personal';//vip用户信息



if (url.indexOf(vipad) != -1) {
   obj["isVip"] = "true";
   
   body = JSON.stringify(obj);
   }

if (url.indexOf(vip) != -1) {
   obj["norLevel"] = "10";
   obj["isVip"] = "true";
   obj["vipEndTime"] = "2050-09-09";
   obj["vipType"] = "1";
   obj["balance"] = "61800";
   obj["vipStatus"] = "1";
   obj["bookTicketEndtime"] = "2050-09-09";
   obj["isMVip"] = "true";
   obj["vipLevel"] = "10";
   
   
   body = JSON.stringify(obj);
   }

if (url.indexOf(vip1) != -1) {
   obj["isVip"] = "1";
   obj["vipType"] = "1";
   obj["endTime"] = "2546342064000";
   obj["is_vip"] = "1";
   obj["vipStatus"] = "1";
   
   
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(vip2) != -1) {
   obj["isVip"] = "true";
   
   body = JSON.stringify(obj);
   }
   
   
//if (url.indexOf(vip2) != -1) {
   //boj["is_book_vip"] = "true";
   //obj["isVip"] = "1";
   
   //headers = header.stringify(bjg);
   //}

$done({body}); 