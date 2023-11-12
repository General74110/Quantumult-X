/*
[rewrite_local]

^https:\/\/tsp\.txzing\.com\/api(\/p/operation/common/allowFreeVip|\/p/operation/vipCoupon/popUpCouponInfo|\/p/operation/activity/situation|\/w/wx/module/findCar/findCarVipInfo/isVip|\/w/wx/module/trace/userVip|\/w/wx/module/traceMp/traceUserVipOpenId/vipInfo|\/w\/wx\/module\/smallProgram\/userInfo|\/wx\/module\/smallProgram\/userInfo\/banner) url script-response-body Cheji.js


MITM 

hostname = tsp.txzing.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/common/allowFreeVip';
const dish = '/vipCoupon/popUpCouponInfo';
const sb = '/activity/situation';
const bd = '/findCarVipInfo/isVip';
const gj = '/trace/userVip';
const gg = '/traceUserVipOpenId/vipInfo';
const us = '/smallProgram/userInfo';
const ban = '/userInfo/banner';

if (url.indexOf(vip) != -1) {
   obj["data"] = "true";
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(dish) != -1) {
obj["data"]["show_cou_pon"] = "1";
     body = JSON.stringify(obj);
     }

if (url.indexOf(sb) != -1) {
	obj["data"]["is_can_participate"] = "true";
	body = JSON.stringify(obj);
    }
    
if (url.indexOf(bd) != -1) {
	obj["data"]["pop_up"] = "1";
	obj["data"]["vip"] = "true"
	body = JSON.stringify(obj);
    }
    
if (url.indexOf(gj) != -1) {
	obj["data"]["is_vip"] = "true"
	body = JSON.stringify(obj);
    }

if (url.indexOf(gg) != -1) {
   obj["data"]["vip"] = "true";
   obj["data"]["day"] = "738639";
   obj["data"]["can_use_free_vip"] = "false";
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(us) != -1) {
   obj["data"]["online"] = "true";
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(ban) != -1) {
   obj ['data'][0].id = 4;
   body = JSON.stringify(obj);
   }
$done({body});
