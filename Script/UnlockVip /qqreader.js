/*
General℡
⚠️脚本仅作为学习，请勿拿去牟利⚠️
^https?:\/\/commontgw\.reader\.qq\.com\/(v7\_6\_6\/readonline\/new\/adInfo|book\/queryBookInfo|v7_6_6\/userinfo|common\/adV3|v7_6_6\/querycolumnnolimit|bookmark\/mutualSync|v7_6_6\/getnotice|v7_6_6\/fandomTask\/signCount|common\/remind\/popup|common\/monthpage|v7_6_6\/uservipstatus|v7_6_6\/lawAgreementRedDot|v7_6_6\/getWeekReadTime|v7_6_6\/sign\/welfare\/bookShelf|v7_6_6\/config\/platform\/vkeys|v7_6_6\/common\/newUser\/giftList) url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js



hostname = commontgw.reader.qq.com





*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const AdInfo = 'new/adInfo';

const AdV = 'common/adV3';

const BookInfo = 'book/queryBookInfo';
const userInfo = 'v7_6_6/userinfo';
const mit = 'v7_6_6/querycolumnnolimit';
const ync = 'bookmark/mutualSync';

const ice = 'v7_6_6/getnotice';
const unt = 'fandomTask/signCount';
const pup = 'remind/popup";
const tus = 'v7_6_6/uservipstatus';

const dot = 'v7_6_6/lawAgreementRedDot';
const ime = 'v7_6_6/getWeekReadTime';
const age = 'common/monthpage';
const elf = 'sign/welfare/bookShelf';

const eys = 'platform/vkeys';
const ist = 'newUser/giftList';


if (url.indexOf(AdInfo) != -1) {
   obj["isVip"] = "true";
   obj["buytype"] = "0";
   obj["paid"] = "1";
  
   
    body = JSON.stringify(obj);
   }
   
if (url.indexOf(BookInfo) != -1) {
   obj["isVip"] = "true";
   obj["vipStatus"] = "1";
   obj["gyBook"] = "1";   
   obj["is29903PirateBook"] = "true";
   obj["is20002AdBook"] = "true";
   obj["isAdBook"] = "true";
   obj["vipBookLeadType"] = "1";
   obj["banTTS"] = "true";
   obj["payinfo"] = "true";
   obj["chapterpayinfo"] = "true";
  obj["allowMonthlyPay"] = "1";
  obj["monthlyEndTime"] = "4098830267";
  obj["needOpenVip"] = "false";
  
   
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(userInfo) != -1) {
   obj["guin"] = "1";
   obj["isVip"] = "1";
   obj["endTime"] = "4098830267";
  obj["vipType"] = "1";
  obj["is_vip"] = "1";
  obj["vipStatus"] = "1";
  
  
    body = JSON.stringify(obj);
   }
  
if (url.indexOf(AdV) != -1) {
   obj["isVip"] = "true";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(mit) != -1) {
   obj["isVip"] = "true";
  obj["guin"] = "1";
  
  
  body = JSON.stringify(obj);
   } 
   
if (url.indexOf(ync) != -1) {
   obj["isVip"] = "true";
  
  body = JSON.stringify(obj);
   }
  
  
if (url.indexOf(ice) != -1) {
   obj["isVip"] = "true";
  obj["guin"] = "1";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(unt) != -1) {
   obj["isVip"] = "true";
  obj["guin"] = "1";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(pup) != -1) {
   obj["isVip"] = "true";
  obj["windowMsg"] = "";
  
  body = JSON.stringify(obj);
   }
  
  
if (url.indexOf(age) != -1) {
   obj["userMonthInfo"]["endtimeYearVip"] = "2099";
   obj["userMonthInfo"]["endtime"] = "4098830267";
   obj["userMonthInfo"]["userType"] = "1";
  obj["userMonthInfo"]["cardNo"] = "YES.";
  obj["userMonthInfo"]["type"] = "1";
  obj["userMonthInfo"]["gfrom"] = "1";
  obj["userMonthInfo"]["status"] = "1";
  obj["vipOpenCard"]["openCard"] = "";
  obj["isVip"] = "true";
  
  
    body = JSON.stringify(obj);
   }
  
if (url.indexOf(tus) != -1) {
  obj["monthUser"] = "1";
   obj["isVip"] = "true";
  obj["vipType"] = "1";
  obj["costMonthUser"] = "1";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(dot) != -1) {
   obj["isVip"] = "true";
  obj["guin"] = "1";
  
  
  body = JSON.stringify(obj);
   } 
  
  
if (url.indexOf(ime) != -1) {
   obj["isVip"] = "1";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(elf) != -1) {
   obj["vip"] = "true";
  obj["isVip"] = "true";
  
  body = JSON.stringify(obj);
   }
  
  if (url.indexOf(eys) != -1) {
   obj["isVip"] = "true";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(ist) != -1) {
  obj["vipStatus"] = "1";
  
  
    body = JSON.stringify(obj);
   }
  
$done({body}); 