 /*
作者: General℡
APP: 酷我音乐
应用: 
1️⃣去除开屏广告
2⃣️去除1元开通页面


更新时间: 2024.04.29

⚠️脚本仅作为学习，请勿拿去牟利⚠️


^http:\/\/(rich|wapi)\.kuwo\.cn\/(AdService\/kaiping\/getcache|openapi\/v1\/album\/adBar\/getTsAdConfig)\? url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/Adblock/KuwoAd.js





hostname = rich.kuwo.cn, wapi.kuwo.cn

*/


//获取相应数据
let obj = JSON.parse($response.body) ;
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/^http:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/getcache\?/.test(requestUrl))//去除 开屏广告

if (/^http:\/\/wapi\.kuwo\.cn\/openapi\/v1\/album\/adBar\/getTsAdConfig\?/.test(requestUrl))//去除1元开通会员


{
//判断是否存在数据
if (obj.hasOwnProperty("list")) 


{
delete obj.list;//删除指定数据
delete obj.last_ads;



}
if (obj.hasOwnProperty("data.tmpPlayList"))
{

delete obj.data.tmpPlayList;
delete obj.last_ads;


}

 
}
//重写数据
$done ({ body: JSON.stringify(obj) });