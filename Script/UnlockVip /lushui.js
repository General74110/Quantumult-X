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