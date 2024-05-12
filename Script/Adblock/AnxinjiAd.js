/*
作者: General℡
APP: 安心记加班
应用: 
1️⃣去除开屏广告


更新时间: 2024.05.12

⚠️脚本仅作为学习，请勿拿去牟利⚠️


^https?:\/\/(jjbapi\.julanling\.com\/advertConfig\/queryCutOverScreenConfig|api-access\.pangolin-sdk-toutiao1\.com\/api\/ad\/union\/sdk\/stats\/batch)\? url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/Adblock/AnxinjiAd.js



hostname = jjbapi.julanling.com, api-access.pangolin-sdk-toutiao1.com

*/


// 打印请求和响应数据
console.log("$request.body:", $request.body);
console.log("$response.body:", $response.body);

// 获取请求和相应数据
let reqobj;
let resobj;

if ($request.body) {
     reqobj = JSON.parse($request.body);
}

if ($response.body) {
     resobj = JSON.parse($response.body);
}

// 获取请求地址
let requestUrl = $request.url;

// 判断是否为匹配项
if (/^https?://(jjbapi.julanling.com/advertConfig/queryCutOverScreenConfig|api-access.pangolin-sdk-toutiao1.com/api/ad/union/sdk/stats/batch)?/.test(requestUrl)) {

    // 在resobj存在的情况下判断是否存在数据
    if (resobj && resobj.hasOwnProperty("results")) {
        delete resobj.results;
    }

    // 在reqobj存在的情况下判断是否存在数据
    if (reqobj && reqobj.hasOwnProperty("message")) {
        delete reqobj.message;
    }
}

// 重写数据
let newReqBody = reqobj ? JSON.stringify(reqobj) : undefined;
let newResBody = resobj ? JSON.stringify(resobj) : undefined;
$done ({ body: newReqBody, response: newResBody });