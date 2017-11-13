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
