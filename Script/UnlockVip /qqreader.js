/*
General℡
⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https?:\/\/commontgw\.reader\.qq\.com\/(v7\_6\_6\/readonline\/new\/adInfo|book\/queryBookInfo) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js



hostname = commontgw.reader.qq.com





*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const Info = 'new/adInfo';
const bookinfo = 'book/queryBookInfo';

if (url.indexOf(Info) != -1) {
   obj["isVip"] = "true";
   obj["buytype"] = "0";
   obj["paid"] = "1";
   
if (url.indexOf(bookinfo) != -1) {
   obj["isVip"] = "true";
   obj["vipStatus"] = "1";
   obj["gyBook"] = "1";   
   obj["is29903PirateBook"] = "true";
   obj["is20002AdBook"] = "true";
   obj["isAdBook"] = "true";
   obj["vipBookLeadType"] = "1";
   obj["banTTS"] = "true";
   obj["payinfo"] = "true";
   obj["chapterpayinfo"] = "true";
      
   
   body = JSON.stringify(obj);
   }
   
   
   
$done({body}); 