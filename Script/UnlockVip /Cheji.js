/*
[rewrite_local]

^https:\/\/tsp-operation\.txzing\.com\/api\/w\/wx^https:\/\/tsp-operation\.txzing\.com\/api\/w\/wx\/module(\/traceMp\/traceUserVipOpenId\/vipInfo|\/findCar\/findCarVipInfo\/isVip) url script-response-body Cheji.js


MITM 

hostname = *.txzing.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const VipInfo = '/traceUserVipOpenId/vipInfo';//行驶轨迹
const IsVip = '/findCarVipInfo/isVip';//查找车辆

if (url.indexOf(VipInfo) != -1) {
   obj["data"]["vip"] = "true";
   obj["data"]["day"] = 99999;
   body = JSON.stringify(obj);
   }
  
if (url.indexOf(IsVip) != -1) {
   obj["data"]["vip"] = "true";
   body = JSON.stringify(obj);
   }

$done({body});
