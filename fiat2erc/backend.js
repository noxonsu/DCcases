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
	      
	erc20abi =[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
	DCLib.Account.signedContractFuncTx("0x847b4fffa7ab941e72d19bbfaa39f65034dba971", erc20abi, 'transfer', ["0x873351e707257C28eC6fAB1ADbc850480f6e0633",1000], console.log);

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


