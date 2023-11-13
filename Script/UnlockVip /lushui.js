/*
作者:General℡
APP:露水视频
解锁功能:解锁会员和付费视频
下载地址:/
观看地址:llmhuu.com

⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https^https:\/\/api\.wangmianhua\.cn\/api(\/user/info|\/vod/watch|\/vod/buy|\/user/recharge) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/lushui.js
hostname = api.wangmianhua.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vod = '/api/vod/watch';
const buy = '/api/vod/buy';
const user = '/api/user/info';
const userr = '/api/user/recharge';

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
   obj["data"]["recharged"] = "ture"

	body = JSON.stringify(obj);
    }
   
if (url.indexOf(userr) != -1) {
	obj data["userInfo"]['3'].vipType = "isvip"
	obj data["userInfo"]['3'].vipEndDate = "2099"
	obj data["userInfo"]['3'].vipEndYear = "2099"
	obj data ["userInfo"]['3'].vipEndMonth = "9"
	obj data["userInfo"]['3'].vipEndDay = "9"
	obj data["userInfo"]['3'].vipEndHour = "9"
	obj data["userInfo"]['3'].avaliableAmount = "9999"
   obj data["userInfo"]['3'].recharged = "ture"

body = JSON.stringify(obj);
}
$done({body}); 