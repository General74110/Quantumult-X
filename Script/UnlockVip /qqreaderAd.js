/*
General℡
⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https?:\/\/commontgw\.reader\.qq\.com\/common\/adV3 url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreaderAd.js


hostname = commontgw.reader.qq.com

*/


//获取相应数据
let obj = JSON.parse($response.body) ;
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/^https?:\/\/commontgw\.reader\.qq\.com\/common\/adV3/.test(requestUrl)){
//判断是否存在数据
if (obj.hasOwnProperty("data")) {

delete obj.data;//删除指定数据


console.log("拦截成功！！！");//打印拦截结果
}
else{
    console.log("拦截失败！！！");
}
}
//重写数据
$done ({ body: JSON.stringify(obj) });