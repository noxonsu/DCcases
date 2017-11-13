Абстрактный пример для понимания работы в системе. В этом примере
1. библиотека из фронтенда подключается к бэкэнду, при этом сравнивает хеш логики, что бы не подделали.
2. отправляет запрос roll при этом передавая сид, из которого банкролер сделает рандом (подписав своим приватным ключем, см. signidice алгоритм)
3. в зависимости от результата игры (1 выиграл, 0 проиграл) начисляет ставку в баланс на канале
4. игрок может закрыть канал выполнив функцию disconnect()

подробнее как запустить примеры см. https://github.com/noxonsu/DCcases
```
//DApp LOGIC for use it in frontend and bankroller side
DCLib.defineDAppLogic('game_monetka', function(){
  return {
	roll:function(randomHash){
		var betGame = 1; //1 BET
		var rnd = DCLib.numFromHash(randomHash, 0, 1);
		if (rnd==1) {
		  this.payChannel.addTX( betGame )
		  return "You win";
		} else {
		  this.payChannel.addTX( betGame*-1 )
		  return "You lose";
		}
    }
  }
});

//FRONTEND index.html
window.App = new DCLib.DApp({
	code  : "game_monetka", // unique DApp code
	logic : GameLogic, // inject logic constructor in your DApp (from logic.js)
})
App.connect({bankroller : "auto", paymentchannel:{deposit:100}}, function(connected){
	if (connected) {
		var randomHash = DCLib.Utils.makeSeed();
		App.call('roll', ['confirm('+randomHash+')'], console.log);
	}
});

function disconnect() {
	App.disconnect();
}
```
