/*
General℡
⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https?:\/\/commontgw\.reader\.qq\.com\/v7\_6\_6\/readonline\/new\/adInfo url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js



hostname = commontgw.reader.qq.com





*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const Info = 'new/adInfo';


if (url.indexOf(tt) != -1) {
   obj["isVip"] = "true";
   obj["buytype"] = "0";
   
   
   body = JSON.stringify(obj);
   }
   
   
   
$done({body}); 