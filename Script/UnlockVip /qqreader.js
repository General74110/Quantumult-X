/*
^https:\/\/commontgw\.reader\.qq\.com\/book\/queryBookInfo\? url script-response-body https://raw.githubusercontent.com/General74110/Quantumult-X/master/Script/UnlockVip%20/qqreader.js



hostname=commontgw.reader.qq.com, 

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const BookInfo = 'book/queryBookInfo';



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
	'
	
	


body = JSON.stringify(obj);

   }