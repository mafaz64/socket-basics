var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	var timestamp = moment().format('x');
	console.log(timestamp + ': User connected via socket.io!')

	socket.on('message', function(message) {
		console.log('Message received:' + message.text);

		//Add the time to the message object. 
		//Called moment as a function to get the current timestamp and then used vauleOf to get
		//the javascript version of time i.e. in milli seconds since Jan 1, 1970
		message.timestamp = moment().valueOf();

		//Now send the received message to all clients attached 
		//to the server excpet the sender. Can use io.emit 
		//if we need to send it to all including the sender.
		//socket.broadcast.emit('message', message);


		//io.emit lets us send the message to every one including the sender.
		io.emit('message', message);
	})

	//Now we will use socket to emit a custom event.
	//socket.emit take two args.
	//first the event name we used custom event name 'message',
	//second the data to send. We used object with property text.
	
	socket.emit('message', {
		name: 'System',
		timestamp: moment().valueOf(),
		text: 'Welcome to the chat application!'
	});
});

http.listen(PORT, function () {
	console.log('Server started!');
});
