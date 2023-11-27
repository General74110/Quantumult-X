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
const pup = 'remind/popup';
const dot = 'v7_6_6/lawAgreementRedDot';
const ime = 'v7_6_6/getWeekReadTime';
const age = 'common/monthpage';
const elf = 'sign/welfare/bookShelf';

const eys = 'platform/vkeys';
const ist = 'newUser/giftList';
const tus = 'v7_6_6/uservipstatus';
const hpd = 'ChapBatAuthWithPD';
const vad = 'readonline/vipAdInfo';
const ver = 'v7_6_6/chapterOver';
const pop = 'common/popMonthPage';
const nit = 'new_welfare/init';

const acc = 'h5/account';
const list = 'nativepage/rechargeList';
const log = 'common/log';
const play = 'audio/audioPlayInfo';
const tts = 'v7_6_6/ttsSpeakerList';
const task = 'new_welfare/taskInitListenTime';
const query = 'new_welfare/queryAwardList';

const taskV2 = 'new_welfare/taskInitV2';
const theme = 'theme/list';
const page = 'page/info';
const Record = 'h5/queryAutoOpenRecord';

if (url.indexOf(AdInfo) != -1) {
   obj["isVip"] = "true";
   obj["buytype"] = "1";
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
   obj["guin"] = "738807045";
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
   obj["isVip"] = "1";
  obj["guin"] = "738807045";
  
  
  body = JSON.stringify(obj);
   } 
   
if (url.indexOf(ync) != -1) {
   obj["isVip"] = "true";
  
  body = JSON.stringify(obj);
   }
  
  
if (url.indexOf(ice) != -1) {
   obj["isVip"] = "true";
  obj["guin"] = "738807045";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(unt) != -1) {
   obj["isVip"] = "true";
  obj["guin"] = "738807045";
  
  body = JSON.stringify(obj);
   }
  
if (url.indexOf(pup) != -1) {
   obj["isVip"] = "true";
  obj["windowMsg"] = "";
  
  body = JSON.stringify(obj);
   }
  
  
if (url.indexOf(age) != -1) {
   obj["userMonthInfo"]["endtimeYearVip"] = "2099";
   obj["userMonthInfo"]["endtimeFree"] = "4098830267000";
   obj["userMonthInfo"]["endtime"] = "4098830267000";
   obj["userMonthInfo"]["userType"] = "1";
  obj["userMonthInfo"]["cardNo"] = "YES.";
  obj["userMonthInfo"]["type"] = "1";
  obj["userMonthInfo"]["gfrom"] = "1";
  obj["userMonthInfo"]["status"] = "1";
  obj["vipOpenCard"]["openCard"] = "";
  obj["isVip"] = "true";
  obj["vipOpenCard"]["freeVipCard"]["endTimeTxt"] = "2099-11-20到期，体验会员为平台赠送福利，管理续费";
  obj["pf"] = "by066";
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
  obj["guin"] = "738807045";
  
  
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
  

if (url.indexOf(hpd) != -1) {
   obj["isSuperBag"] = "1";
  obj["isVip"] = "1";
obj["paycheckmode"] = "1";

  
  body = JSON.stringify(obj);
   }
   
if (url.indexOf(vad) != -1) {
  obj["vip"]["haveAct"] = "true";
   obj["vip"]["vipDesc"] = "已开通VIP";
  obj["guin"] = "738807045";
  obj["isVip"] = "true";
  
  body = JSON.stringify(obj);
   }
   

if (url.indexOf(ver) != -1) {
   obj["isVip"] = "1";
  
  
  body = JSON.stringify(obj);
   }
   
if (url.indexOf(pop) != -1) {
   obj["guin"] = "738807045";
  obj["isVip"] = "true";
obj["isBan"] = "1";

  
  body = JSON.stringify(obj);
   }   
   
   if (url.indexOf(nit) != -1) {
   obj["data"]["vip"] = "1";
  
  body = JSON.stringify(obj);
   }
   
if (url.indexOf(acc) != -1) {
   obj["bookTicket"] = "468476";//书券(赠币)
   obj["leftTicket"] = "100";//推荐票
   obj["leftMTicketEndtime"] = "2056-12-30";//赠币到期时间   
   obj["vip_type"] = "1";
   obj["vipComment"] = "已开通";
   obj["vipStatus"] = "1";
   obj["vipButton"] = "1";
   
   
   body = JSON.stringify(obj);
   }
   
   if (url.indexOf(list) != -1) {
   obj["guin"] = "738807045";
   obj["isVip"] = "true";
   obj["balance"] = "3565";
  obj["bookTicket"] = "5777";
  obj["voucher"] = "100";
  
    body = JSON.stringify(obj);
   }
   
   if (url.indexOf(log) != -1) {
   obj["isVip"] = "1";
  obj["guin"] = "738807045";
  
  
  body = JSON.stringify(obj);
   } 
   
   if (url.indexOf(play) != -1) {
   obj["guin"] = "738807045";
  obj["isVip"] = "true";
obj["book"]["tips"] = "";
obj["book"]["bookDetail"] = "";

  
  body = JSON.stringify(obj);
   }
   
   if (url.indexOf(tts) != -1) { 
  obj["guin"] = "738807045";
  obj["isVip"] = "1";
  obj["inputBookSwitch"] = "1";


  body = JSON.stringify(obj);
   }
   
   if (url.indexOf(task) != -1) {
   obj["data"]["vip"] = "true";
   
   
    body = JSON.stringify(obj);
   }
   
   if (url.indexOf(query) != -1) {
   obj["data"]["vipChance"] = "1";
   obj["data"]["vip"] = "true";
   
   
    body = JSON.stringify(obj);
   }
   
   if (url.indexOf(taskV2) != -1) {
   obj["data"]["vip"] = "true";
   
   
    body = JSON.stringify(obj);
   }
   
   if (url.indexOf(theme) != -1) {
   obj["isVip"] = "1";
   
   
    body = JSON.stringify(obj);
   }
   
if (url.indexOf(page) != -1) {
   obj["info"]["expVip"] = "true";
   obj["info"]["dayIncr"] = "88888888";
   obj["vip"] = "1";
   
   
    body = JSON.stringify(obj);
   } 
   
   if (url.indexOf(Record) != -1) {
   obj["records"][0]["title"] = "QQ阅读会员";
   obj ["records"][0]["channel"] = "1";
   obj ["records"][0]["subTitle"] = "2099-11-20到期";
   obj ["records"][0]["payDetail"][0]["code"] = "QQYFSC";
   obj ["records"][0]["payDetail"][0]["state"] = "1";
   obj ["records"][0]["payDetail"][0]["desc"] = "已开启自动续费";
    obj ["records"][0]["payDetail"][0]["payWay"] = "1";
  
   
   body = JSON.stringify(obj);
   }
   
   
$done({body}); 