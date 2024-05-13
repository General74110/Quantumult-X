/*
作者: General℡
APP: 安心记加班
应用: 
1️⃣去除开屏广告


更新时间: 2024.05.12

⚠️脚本仅作为学习，请勿拿去牟利⚠️


^https?:\/\/jjbapi\.julanling\.com\/(advertConfig\/queryCutOverScreenConfig|splash_screen\/jjb_splash_screen_v3)\? url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/Adblock/AnxinjiAd.js



hostname = jjbapi.julanling.com

*/


//获取相应数据
let obj = JSON.parse($response.body);
// 获取请求地址
let requestUrl = $request.url;
// 判断是否为匹配项
if (/^https?:\/\/jjbapi\.julanling\.com\/advertConfig\/queryCutOverScreenConfig\?/.test(requestUrl)) {
    //判断是否存在数据
    
     if (obj.hasOwnProperty("results"))  {
        delete obj.results.onePicConfigResp;//删掉onePicConfigResp

console.log(obj);

    }
    
} else if (/^https?:\/\/jjbapi\.julanling\.com\/splash_screen\/jjb_splash_screen_v3\?/.test(requestUrl)) {
    if (obj.hasOwnProperty("results")) {
    
        delete obj.results['list'][0].statistics;//删掉statistics
        
        delete obj.results['list'][0].id;//删掉id
        
        delete obj.results['list'][0].target_type;//删掉target_type
        
        delete obj.results['list'][0].position_id;//删掉position_id
        
        delete obj.results['list'][0].request_timeout;//删掉request_timeout
        
        delete obj.results['list'][0].splash_group_id;//删掉splash_group_id
    
        

console.log(obj)
    }
}


//重写数据
$done ({body: JSON.stringify(obj)});