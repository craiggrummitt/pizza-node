var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Pizza = require('./model');

console.log(Pizza);
/*app.get('/', function(req, res){
  res.sendfile('/public/index.html');
});*/



io.on('connection', function(socket){
  console.log('a user connected');

  //create array of pizzas
  var pizzaArray = createPizzas(20);
  //emitting their location
  emitPizzas(pizzaArray);

  var interval = setInterval(function() {
  	//moving pizzas
  	movePizzas(pizzaArray);
  	//emitting their location
  	emitPizzas(pizzaArray);
  		
  }, 2000);

  socket.on('disconnect', function(){
    console.log('user disconnected');
    clearInterval(interval);
  });
});

function emitPizzas(pizzaArray) {
	io.emit('PizzaBroadcast', pizzaArray);
}

function createPizzas(num) {
	var pizzaArray = [];
	for (var i=0;i<num;i++) {
		pizzaArray.push(new Pizza());
	}
	return(pizzaArray);
}
function movePizzas(pizzaArray) {
	pizzaArray.forEach(function(pizza) {
		pizza.move();
	}
	);
}


/*app.get('/test', function(req, res, next) {
	res.status(200).send("Hello World");
})*/

//app.use(express.static(__dirname + '/tracker.html'));
app.use(express.static(__dirname  + '/public'));

/*app.get('/*', function(req, res, next) {
	res.status(200).send("Hello World");
})*/
//app.listen(1337);
http.listen(1337, function(){
  console.log('listening on *:1337');
});