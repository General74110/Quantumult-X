/*
^https:\/\/(commontgw|iostgw)\.reader\.qq\.com\/(book\/queryBookInfo|v7_6_6\/paraComment\/myBookParaComment|v7_6_6\/balance)\? url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js




hostname=commontgw.reader.qq.com, iostgw.reader.qq.com

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const BookInfo = 'book/queryBookInfo';
const BookPara = 'paraComment/myBookParaComment'
const Balance ='v7_6_6\/balance'


if (url.indexOf(BookInfo) != -1) {

   obj ["buytype"]["txt"] = 1;
	obj ["ticketStatus"] = 1;
	obj ["vipdisc"] = "包月专享";
	obj ["bookbuydiscount"] = 100;
	obj ["chapterBlockSwitch"] = 1;
	obj ["isVip"] = "true";
	obj ["hasOnePrice"] = 0;
	obj ["is20002AdBook"] = "true";
	obj ["downloadType"] = 2;
	obj ["vipStatus"] = 2;
	obj ["newdownloadType"] = 2;
	obj ["isPrecollection"] = "-1";
	obj ["unitprice"] = 5;
	obj ["paraCmtSwitch"] = 1;
	obj ["vipEndTime"] = 4073207338000;
	obj ["needOpenVip"] = "true";
	obj ["bsex"] = 1;

body = JSON.stringify(obj);

   }




if (url.indexOf(BookPara) != -1) {
	obj ["refinedWhole"] = 0;
	obj ["vipEndTime"] = 4073207338000;
	
body = JSON.stringify(obj);
}




if (url.indexOf(Balance) != -1) {
	obj ["vipLevel"] = 5;
	obj ["vipEndTime"] = "2099-02-11";
	obj ["vipType"] = 2;
	obj ["monthUser"]["vipComment"] = "2099-02-11到期";
	obj ["monthUser"]["gfrom"] = 31;
	obj ["monthUser"]["endtime"] = 4074508799;
	obj ["monthUser"]["vipStatus"] = 1;
	obj ["monthUser"]["vipButton"] = 1;
	obj ["coupon"] = 1;
	obj ["isMVip"] = 1;
	
body = JSON.stringify(obj);
}