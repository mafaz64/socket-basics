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

//Following handles the submiting of new message.
//NOTE: The $ sign in from of variable form denotes that it saves a JQury instance of an element.
//The $form will have access to all the methods which can be used on a jQuery element

//We passed a selector as argument ('#message-form') to jQuery. # has to be used if want to select an id
//If we want to select title of input we do not need to use # in frot of it.
//It is a way to pick an element out of HTML
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	//NOTE: Calling preventDefault() on the submit event prevents the submit if the form is refreshed.
	event.preventDefault();

	//Find 'input' element with name attribute of message and stores it in $message variable
	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		//text: $form.find('input[name=message]').val()  //Find 'input' element with name attribute of message
		text: $message.val()
	});

	//Clear the contents of the message input filed after submit and set the focus back to it.
	$message.val('');
	$message.focus();
});