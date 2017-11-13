# система создания децентрализованных приложений

Приложение пишется на js и состоит минимум из двух файлов:
1) Фронтенд index.html, где подключена библиотека DC.js, которая является интерфейсом через который фронтенд взаимодействует с бекендом.
2) Бэкенд backend.js который загружается в банкрол, одна копия лоджика может быть загружена во множество банкролов, так как логика известна и неизменна, то пользователь (с фронтенда) может обратится к любому из запущеных экземпляров

ниже пример простого приложения описываюший клиент серверную логику. 
```
// backend.js
window.GameDebug = (function(){
// GAME LOGIC
var GameLogic = function(){
	return {
		ping:function(){
			return "pong";
		}
	}
}
	
	return new DCLib.DApp({
		code  : 'twenty_pingpong',
		logic : GameLogic,
	})

})();

//FRONTEND index.html 
DCLib.on('ready', function(){
  window.App = new DCLib.DApp({
     code  : "twenty_pingpong", // unique DApp code
     logic : GameLogic, // inject logic constructor in your DApp (from logic.js)
  })
  App.connect({bankroller : "auto"}, function(connected){
    App.call('ping', [],console.log);
  })
})
```

# Запуск примера
1. Скачайте https://github.com/DaoCasino/BankRollerApp/
2. На вкладке Dev будет показана рабочая папка для работы. Откройте ее
3. Создайте новую папку test и test.manifest внутри 

``` 
{
	"code" : "twenty_pingpong",
	"run" : {
		"client":"backend.js"
	}
}
```

4. Создайте logic.js и определите там логику приложения:

```
var GameLogic = function(){
	return {
		ping:function(){
			return "pong";
		}
	}
}
```
5. Создайте файл backend.js который будет запущен в фоне у банкроллера (бэкэнд).
```
window.GameDebug = (function(){
// GAME LOGIC
var GameLogic = function(){
	return {
		ping:function(){
			return "pong";
		}
	}
}
	
	return new DCLib.DApp({
		code  : 'twenty_pingpong',
		logic : GameLogic,
	})

})();
```

6. Создайте файл index.html который будет фронтендом приложения.

```
<html>
    <head>
	
        <script src="https://platform.dao.casino/api/lib/v2/DC.js"></script>
		<script src="logic.js"></script>
    </head>

    <body>

    <script>
    DCLib.on('ready', function(){
                window.App = new DCLib.DApp({
                    code  : "twenty_pingpong", // unique DApp code
                    logic : GameLogic, // inject logic constructor in your DApp (from logic.js)
                })
                App.connect({bankroller : "auto"}, function(connected){
                        App.call('ping', [],console.log);
                })
            })
    </script>
    </body>
</html>
```
обратите внимание, в переменной GameLogic дублируется код логики приложения из бэкенда (там где "pong") это нужно, для того, что бы банкрол смог найти и связатся именно с нужным банкролером где запущена такая же логика.

7. Запустите банкроллер, на вкладке Dev должно отобразится приложение. 
8. Запустите index.html в браузере, в консоли будет видно, как после загрузки и инициации библиотека DC.js ищет подходящего воркера в сети (по хэшу sha3(logic), чтоб избежать подключения к поддельным). Процесс поиска похож на убер такси, автоматически выбирается наиболее подходящий банкрол, после этого отправляется запрос `App.call('ping'...` с выводом ответа в консоль. В консоле вы получите "pong". 

# Добавление финансовой логики

тут пишем про то как делать логику с каналами
