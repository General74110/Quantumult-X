/*
General℡
⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https:\/\/commontgw\.reader\.qq\.com\/book\/queryBookInfo\? url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js



hostname = commontgw.reader.qq.com





*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const viprd = 'book/queryBookInfo';


if (url.indexOf(viprd) != -1) {
   obj["isVip"] = "true";
   obj["gyBook"] = "1";
   obj["is29903PirateBook"] = "true";
   obj["payinfo"] = "true";
   obj["bookMonthlyEndTime"] = "2056-04-26 12:16:24";
   obj["vipBookLeadType"] = "1";
   obj["isAdBook"] = "true";
   obj["is20002AdBook"] = "true";
   obj["chapterpayinfo"] = "true";
   obj["vipStatus"] = "1";
   obj["isPrecollection"] = "1";
   obj["allowMonthlyPay"] = "1";
   obj["limitfreechapterstime"] = "2014-02-12#2056-03-01";
   obj["islimitfreebook"] ="true";
   obj["needOpenVip"] = "false";
   
   
   body = JSON.stringify(obj);
   }



$done({body}); 