var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userinfo = 'v7_6_6/userinfo';
const pageinfo = 'page/info'
const vkeys = 'platform/vkeys';
const uservipstatus = 'v7_6_6/uservipstatus';
const selectSwitch = 'user/selectSwitch';
const ReadTime = 'v7_6_6/getWeekReadTime';
const bookShelf = 'sign/welfare/bookShelf';
const monthpage = 'common/monthpage';
const init = 'new_welfare/init';
const taskInit = 'activity/new_welfare/taskInitV2';
const queryAwardList = 'activity/new_welfare/queryAwardList';
const listenTime = 'activity/new_welfare/taskInitListenTime';
const adv = 'common/adV3';
const AcctInfo = 'nativepage/getAcctInfo';
const index = 'bookCity/index';
const personal = 'nativepage/personal';
const dress= 'dress/getVipDressList';
const thanksCard = 'v7_6_6/thanksCard';
const usingDress = 'dress/usingDress';
const theme = 'theme/list';
const autoPay = 'account/h5/queryAutoOpenRecord'
const querySwitchFlag = 'welfare/querySwitchFlag';
const olimit = 'v7_6_6/querycolumnnolimit';



if (url.indexOf(userinfo) != -1) {
   obj ["usid"] = "";
   obj ["isPhoneValidate"] = "1";
   obj ["code"] = "0";
   obj ["isVip"] = "1";
   obj ["channel"] = "1000";
  obj ["isLogin"] = "true"; 
 obj ["prefer"] = 1;
 obj ["endTime"] = 4099973033;//2099年12月3日 17:23:53
  obj ["vipType"] = 2;
 obj ["sid"] = 17006684491035484;
 obj ["is_week"] = 1;
  obj ["is_vip"] = 1;
  obj ["vipStatus"] = 1;
  obj ["guestcheckcode"] = "-1";
  obj ["uin"] = 738807045;
  obj ["phoneNum"] = 1;
  obj ["isPhoneBind"] = 1;
 obj ["msg"] = "success";
   
      body = JSON.stringify(obj);
   }
   
   
if (url.indexOf(pageinfo) != -1) {
   obj ["info"]["expVip"] = "true";
   obj ["info"]["point"] = 46788;
   obj ["info"]["maxScore"] = 42299;
   obj ["info"]["awardTime"] = "2099-12-3";
   obj ["info"]["scoreGap"] = 0;
   obj ["info"]["effectiveTime"] = "2099-12-03";
   obj ["info"]["minScore"] = 16800;
   obj ["info"]["vip"] = 1;
   obj ["taskList"][4]["buttonStatus"] = "false";
   obj ["taskList"][4]["button"] = "已开通VIP";
   obj ["taskList"][4]["point"] = 6;
   
   
      body = JSON.stringify(obj);
   }
   
   
   

if (url.indexOf(vkeys) != -1) {   
   obj ["isVip"] = "true";

      
      body = JSON.stringify(obj);
   }  
   
   
   
   
if (url.indexOf(uservipstatus) != -1) {   
   obj ["isVip"] = "true";
   obj ["vipType"] = 1;
   obj ["costMonthUser"] = 1;
 
      
      body = JSON.stringify(obj);
   }  
   
   

if (url.indexOf(selectSwitch) != -1) {   
   obj ["isVip"] = "true";
   
 
      body = JSON.stringify(obj);
   }  
   
   
   
   
if (url.indexOf(ReadTime) != -1) {   
   obj ["isVip"] = "1";
   
 
      body = JSON.stringify(obj);
   }  
   
   
   
   
if (url.indexOf(bookShelf) != -1) {   
   obj ["vip"] = "true";
   obj ["isVip"] = "true";
   
   
      body = JSON.stringify(obj);
   }  
   
   
   
   
if (url.indexOf(monthpage) != -1) {   
   obj ["userMonthInfo"]["endtimeFree"] = 4099973033000;
   obj ["userMonthInfo"]["endtime"] = 4099973033000;
   obj ["userMonthInfo"]["cardNo"] = "NO.2023 1203 9346 20";
   obj ["userMonthInfo"]["type"] = 2;
   obj ["userMonthInfo"]["gfrom"] = 101;
   obj ["userMonthInfo"]["status"] = 1;
   obj ["vipOpenCard"]["freeVipCard"]["title"] = "体验会员，已帮你节省99999元"
   obj ["vipOpenCard"]["freeVipCard"]["endTimeTxt"] = "2099-12-03到期，体验会员为平台赠送福利，管理续费"
   obj ["vipOpenCard"]["showType"] = 3;
   obj ["isVip"] = "true";
   obj ["paidMonthStatus"] = 1;
   
   
   
    
      body = JSON.stringify(obj);
   }  
   
   
   

if (url.indexOf(init) != -1) {   
   obj ["data"]["expVip"] = "true";
   obj ["data"]["vip"] = 1;//付费会员的验证
   
   
   
      body = JSON.stringify(obj);
   }  
   
   
   
   
   
if (url.indexOf(taskInit) != -1) {   
   obj ["data"]["vip"] = "true";//付费会员验证
   
 
      body = JSON.stringify(obj);
   }  
    
    
    
    
    
if (url.indexOf(queryAwardList) != -1) {   
   obj ["data"]["expVip"] = "true";
   obj ["data"]["signChance"] = 0;
   obj["data"]["vipChance"] = 1; 
   obj ["data"]["vip"] = "true";//付费会员的验证
   
   
   
      body = JSON.stringify(obj);
   }        
   
   
   
   
if (url.indexOf(listenTime) != -1) {   
   obj ["data"]["vip"] = "true";//付费会员验证
   
 
      body = JSON.stringify(obj);
   }   
   
   
   
   
if (url.indexOf(adv) != -1) {   
   obj ["isVip"] = "true";//付费会员
   
      
      body = JSON.stringify(obj);
   }  
   
   
   
   
   
if (url.indexOf(AcctInfo) != -1) {   
   obj ["vipButton"] = 1;
   obj ["isVip"] = "true";
   obj ["icon"] = "https:\/\/shp.qpic.cn\/qqreader_f\/7\/72828456958842421\/136";
   obj ["vipEndTime"] = "2099-12-03";
   obj ["vipType"] = 2;
   obj ["vipStatus"] = 1;
   obj ["isMVip"] = "true";
   obj ["vipComment"] = "2099-12-03到期";
   
      body = JSON.stringify(obj);
   }  
   
   
   
   
   
if (url.indexOf(index) != -1) {   
   obj ["paidVipStatus"] = 1;
   obj ["vipType"] = 2;
   obj ["endTime"] = 4099973033000;
   obj ["showText"] = "2099-12-03";
   obj ["endtimePrepay"] = 2;
   obj ["dataList"][0]["data"]["content"]= "2099-12-03体验会员到期";
   obj ["dataList"][0]["data"]["paidType"]= 1;
   obj ["dataList"][0]["data"]["status"]= 1;
   obj ["dataList"][0]["data"]["did"]= "renew";
   //obj ["dataList"][0]["style"]= "120-1";
   obj ["dataList"][0]["expireTime"]= 4099973033;
   obj ["isVip"] = "true";
   obj ["monthStatus"] = 1;
   obj ["endtimeFree"] = 4099973033000;
   obj ["userLable"]["rcmd"] = 1;
   obj ["userLable"]["freeStatus"] = 2;
   obj ["userLable"]["payStatus"] = 1;
   obj ["userLable"]["platform"] = 1;
   obj ["userLable"]["userLable"] = 4;
   obj ["userLable"]["vipAdInfo"] = "{"openButtonAd":{}}";
   obj ["userLable"]["vipInfo"] = "{"monthStatus":1,"getGiftDeadline":4099973033000,"isFirst":0,"endtimeYearVip":0,"getGiftStatus":0,"paidVipStatus":1,"showText":"2099-12-09到期","endtimeFree":4099973033000,"endtimePrepay":1701593516000,"vipType":2,"endTime":4099973033000,"d_orderTime":1701593516}"
   
   
      body = JSON.stringify(obj);
   }  
        
        
        
        
        
if (url.indexOf(personal) != -1) {
  obj ["isVip"] = "true";
   obj ["personal"]["monthUser"]["paidVipStatus"] = 1;
obj ["personal"]["monthUser"]["title"] = "体验会员";
  obj ["personal"]["monthUser"]["smsVip"] = 1;
obj ["personal"]["monthUser"]["endTime"] = "2099-12-03到期";

obj ["personal"]["monthUser"]["mVipType"] = 2;
obj ["personal"]["accountInfo"]["balance"] = 3565;
obj ["personal"]["monthUser"]["monthStatus"] = 1;
obj ["personal"]["monthUser"]["isHaveAd"] = 1;


  
  body = JSON.stringify(obj);
   }
   
   
   
   
if (url.indexOf(dress) != -1) {   
   obj ["vipEndTime"] = "2099-12-03";
   obj ["isVip"] = "true";
   obj ["vipEndTimeStamp"] = 4099973033000;
   obj ["vipTips"] = "会员尊享，海量装扮免费使用";
   obj ["isMonthVip"] = "true";
   obj ["vipType"] = 1;

   
      body = JSON.stringify(obj);
   }  
   
   
   
   
   
if (url.indexOf(thanksCard) != -1) {   
   obj ["isVip"] = "true";
 
      
      body = JSON.stringify(obj);
   }     
   
   
   
   
   
if (url.indexOf(usingDress) != -1) {   
   obj ["vipEndTimeStamp"] = 4099973033000;
   obj ["vipType"] = 1;
   obj ["isMonthVip"] = "true";
   obj ["vipEndTime"] = "2099-12-03";
   obj ["isVip"] = "true";
 
      
      body = JSON.stringify(obj);
   }  
   
   
   
   
if (url.indexOf(theme) != -1) {   
   obj ["isVip"] = 1;

 
      
      body = JSON.stringify(obj);
   }      
   
   
   
   
   
   
if (url.indexOf(autoPay) != -1) {   
   obj ["records"][0]["channel"] = 1;
   obj ["records"][0]["subTitle"] = "2099-12-03到期";
   obj ["records"][0]["payDetail"][0]["desc"] = "已开启自动续费";
   obj ["records"][0]["payDetail"][0]["payWay"] = 1;
   
   
      body = JSON.stringify(obj);
   }      
   
   
   
   
   
if (url.indexOf(querySwitchFlag) != -1) {   
   obj ["isVip"] = "true";

      
      body = JSON.stringify(obj);
   }  
          
          
          
          
          
          
if (url.indexOf(olimit) != -1) {   
   obj ["isVip"] = 1;
   obj ["expireTime"] = 4099973033;
   
   
 
      body = JSON.stringify(obj);
   }    