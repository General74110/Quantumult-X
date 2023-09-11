/*
[rewrite_local]

^https:\/\/tsp\.txzing\.com\/api(\/p/operation/common/allowFreeVip|\/p/operation/vipCoupon/popUpCouponInfo|\/p/operation/activity/situation|\/w/wx/module/findCar/findCarVipInfo/isVip|\/w/wx/module/trace/userVip) url script-response-body Cheji.js


MITM = tsp.txzing.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/common/allowFreeVip';
const dish = '/vipCoupon/popUpCouponInfo';
const sb = '/activity/situation';
const bd = '/findCarVipInfo/isVip';
const gj = '/trace/userVip';

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

$done({body});
