/*
General℡
QQ阅读去除广告

⚠️脚本仅作为学习，请勿拿去牟利⚠️


^https?:\/\/commontgw\.reader\.qq\.com\/common\/(adV3|firstOpenApp\/ad?) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreaderAd.js






hostname = commontgw.reader.qq.com

*/


//获取相应数据
let obj = JSON.parse($response.body) ;
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/^https?:\/\/commontgw\.reader\.qq\.com\/common\/adV3/.test(requestUrl))//去除 我的-活动页面

if (/^https?:\/\/commontgw\.reader\.qq\.com\/common\/firstOpenApp\/ad?/.test(requestUrl))

{
//判断是否存在数据
if (obj.hasOwnProperty("data")) 
if (obj.hasOwnProperty("sk"))
{

delete obj.data;//删除指定数据


console.log("活动页面拦截成功！！！");//打印拦截结果

delete obj.sk.pool;
console.log("拦截成功！！！");
}
else{
    console.log("拦截失败！！！");
}
 
}
//重写数据
$done ({ body: JSON.stringify(obj) });