/*
загрузите этот скрипт в банкрол
*/
const myGameLogic = function(){
	let balance = 0
	let used = [] //массив использованных;
	let clients = [] //массив использованных;
	this.requestInvoiсe = function(amount) {
		let fiat2ercPrice = 1; //за 1 рубль 1 токен
		let uniqueAmount = amount*fiat2ercPrice
    		clients[uniqueAmount] = msg.sender; //отправитель
		return { 
      			fiatAmount : uniqueAmount,
      			requesits: "Сбербанк +799944499944",
			balance : balance
		}
	}
  
  this.checkInvoce = function(uniqueAmount) {
  
    if (usedStop[uniqueAmount]) return;
	  if (usedStop[uniqueAmount] != msg.sender) return; //чужой инвойс
    
    //проверяем входящие смс, если приходит от банка с нужной суммой, то переводим токены
    httpGetAsync("http://sms2email.com/api/rrTrrt-333",function(result){
      if (responseText.match(uniqueAmount)) {
        balance += uniqueAmount
        usedStop[uniqueAmount] = true
      }
    });
    
    return { 
      fiatAmount : uniqueAmount,
			balance : balance
		}
  }
  
	this.balance = balance
	
	return this
}


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


