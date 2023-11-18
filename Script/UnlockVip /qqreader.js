/*
General℡
⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https:\/\/commontgw\.reader\.qq\.com\/v7_6_6\/ttsSpeakerList url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js



hostname = commontgw.reader.qq.com





*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const tt = 'v7_6_6\/ttsSpeakerList';



if (url.indexOf(tt) != -1) {
   obj["isVip"] = "1";
   
   body = JSON.stringify(obj);
   }
   
$done({body}); 