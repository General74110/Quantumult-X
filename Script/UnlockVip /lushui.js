/*


^https:\/\/api\.wangmianhua\.cn\/api(\/user/info|\/vod/watch|\/vod/buy) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/lushui.js


hostname = api.wangmianhua.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vod = '/api/vod/watch';
const buy = '/api/vod/buy';
const user = '/api/user/info';


if (url.indexOf(buy) != -1) {
   obj["result"] = "true";
   obj["code"] = "200";
   body = JSON.stringify(obj);
   }
   
    
if (url.indexOf(vod) != -1) {
   obj["data"]["bought"] = "true"
   obj["data"]["availableAmount"] = "9999"
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