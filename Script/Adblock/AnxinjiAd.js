/*
作者: General℡
APP: 安心记加班
应用: 
1️⃣去除开屏广告

更新时间: 2024.05.12

⚠️脚本仅作为学习，请勿拿去牟利⚠️


^https:\/\/jjbapi\.julanling\.com\/advertConfig\/queryCutOverScreenConfig\? url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/Adblock/AnxinjiAd.js



hostname = jjbapi.julanling.com

*/


//获取相应数据
let obj = JSON.parse($response.body) ;
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/^https:\/\/jjbapi\.julanling\.com\/advertConfig\/queryCutOverScreenConfig\?/.test(requestUrl))//去除 开屏广告


{
//判断是否存在数据
if (obj.hasOwnProperty("results")) 

{

delete obj.results;//删除指定数据

console.log("安心记加班:", "","开屏广告删除成功);//输出日志"




} else {
    console.log("安心记加班:","开屏广告删除失败","Error occurred: ${error}"
}
 
 
}
//重写数据
$done ({ body: JSON.stringify(obj) });
