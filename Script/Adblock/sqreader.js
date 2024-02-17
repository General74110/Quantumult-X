/*
作者: General℡
APP: 书旗小说
应用: 
1️⃣去广告


更新时间: 2024.02.18

⚠️脚本仅作为学习，请勿拿去牟利⚠️


^https:\/\/ocean\.shuqireader\.com\/api(\/ad\/adserver\/v1\/api\/getAdInfo|\/route\/month\/commodityInfo|\/route\/iosReadPage\/adV2) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/Adblock/sqreader.js



hostname = ocean.shuqireader.com

*/


//获取相应数据
let obj = JSON.parse($response.body) ;
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/https:\/\/ocean\.shuqireader\.com\/api(\/ad\/adserver\/v1\/api\/getAdInfo|\/route\/month\/commodityInfo|\/route\/iosReadPage\/adV2)/.test(requestUrl))//去除 开屏广告


{
//判断是否存在数据
if (obj.hasOwnProperty("data")) 

{

delete obj.data;//删除指定数据
delete obj.last_ads;





}
 
}
//重写数据
$done ({ body: JSON.stringify(obj) });
