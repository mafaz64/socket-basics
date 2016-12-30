var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io server!');
});

//Following code listens for custome event 'message' 
//and prints the content of the message object received.
socket.on('message', function(message) {
	console.log('New message');
	console.log (message.text);
});