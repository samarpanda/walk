var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , _und = require('./libs/underscore-min.js')
  , clients = new Array();

app.listen(1111);

Array.prototype.remove = function(){
	var rest = this.slice((to || from) + 1 || this.length);
  	this.length = from < 0 ? this.length + from : from;
  	return this.push.apply(this, rest);
}

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var PROJECT = {};
PROJECT.getRandom = function(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

io.sockets.on('connection', function (socket) {
	socket.emit("add_prev_players", clients);
	var posX = PROJECT.getRandom(10, 500),
		posY = PROJECT.getRandom(10, 500);
	socket.broadcast.emit("new_player", {id:socket.id, x:posX, y:posY});
	clients.push(socket.id);
	
	socket.on("disconnect", function(){
		socket.broadcast.emit("remove_player", {id:socket.id});
		clients = _und.without(clients, socket.id);
	});
	socket.on("update_player", function(data){
		socket.broadcast.emit("update_player", data);
	});
});
io.sockets.on('disconnect', function(socket){
	//console.log("Disconnected server track >> "+socket);
});
