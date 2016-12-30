var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('User connected via socket.io!')

	socket.on('message', function(message) {
		console.log('Message received:' + message.text);

		//Now send the received message to all clients attached 
		//to the server excpet the sender. Can use io.emit 
		//if we need to send it to all including the sender.
		socket.broadcast.emit('message', message);
	})

	//Now we will use socket to emit a custom event.
	//socket.emit take two args.
	//first the event name we used custom event name 'message',
	//second the data to send. We used object with property text.
	
	socket.emit('message', {
		text: 'Welcome to the chat application!'
	});
});

http.listen(PORT, function () {
	console.log('Server started!');
});
