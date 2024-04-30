/*
[rewrite_local]
^https:\/\/(jjbapi\.julanling\.com|market-gateway\.julanling\.com)\/(switch_my/vip_banner_info|member\/api2\/vip\/getFunctionVipStatus)\?/ url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/Anxinji.js




[mitm]
hostname = jjbapi.julanling.com, market-gateway.julanling.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const Vip = '/switch_my/vip_banner_info';

const Vipstatus = 'api2/vip/getFunctionVipStatus';


if (url.indexOf(Vip) != -1) {
   obj ["results"]["vipStatus"] = "IS_VIP";
   obj ["results"]["title"] = "";
   obj ["results"]["btnText"] = "已开通VIP";
   obj ["extraInfo"] = "2099-09-10";
   
   
   body = JSON.stringify(obj);
   }
   
   
if (url.indexOf(Vipstatus) != -1) {
   obj ["results"]["functionVipStatusMap"]["VIP"]["vipStatus"] = 1;
   obj ["results"]["functionVipStatusMap"]["VIP"]["willExpireDays"] = 99999;
   obj ["results"]["functionVipStatusMap"]["VIP"]["expireTimestamp"] = 4081225045000;
   obj ["results"]["functionVipStatusMap"]["VIP"]["expireTime"] = "2099年4月30日";
   
   obj ["results"]["functionVipStatusMap"]["ADVERT_VIP"]["vipStatus"] = 1;
   obj ["results"]["functionVipStatusMap"]["ADVERT_VIP"]["willExpireDays"] = 99999;
   obj ["results"]["functionVipStatusMap"]["ADVERT_VIP"]["expireTimestamp"] = 4081225045000;
   obj ["results"]["functionVipStatusMap"]["ADVERT_VIP"]["expireTime"] = "2099年4月30日";
   
   
   
   body = JSON.stringify(obj);

} 
   

   
$done({body}); 