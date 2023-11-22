/*
General℡
QQ阅读去除广告

⚠️脚本仅作为学习，请勿拿去牟利⚠️


^https?:\/\/(us\.l\.qq\.com\/exapp|commontgw\.reader\.qq\.com\/common\/adV3) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/Adblock/qqreader.js



hostname = us.l.qq.com, commontgw.reader.qq.com

*/


//获取相应数据
let obj = JSON.parse($response.body) ;
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/^https?:\/\/(us\.l\.qq\.com\/exapp|commontgw\.reader\.qq\.com\/common\/adV3)/.test(requestUrl))//去除 开屏广告/我的-全部活动页面入口


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
