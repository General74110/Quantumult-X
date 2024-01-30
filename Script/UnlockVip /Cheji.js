/*
[rewrite_local]

^https:\/\/tsp-operation\.txzing\.com\/api\/w\/wx\/module\/traceMp\/traceUserVipOpenId\/vipInfo url script-response-body Cheji.js


MITM 

hostname = *.txzing.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const VipInfo = '/traceUserVipOpenId/vipInfo';

if (url.indexOf(VipInfo) != -1) {
   obj["data"]["vip"] = "true";
   obj["data"]["day"] = 99999;
   body = JSON.stringify(obj);
   }
   

$done({body});
