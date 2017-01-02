var moment = require('moment');
var now = moment();

console.log(now.format());

console.log(now.format('X')); //Dispalys the seconds passed since Jan 1, 1970
console.log(now.format('x')); //Dispalys the milli seconds passed since Jan 1, 1970


var timestamp = 1483196724177; //Use milli seconds elapsed since Jan 1, 1970

var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.format());

//Following prints the UTC time. It does not take into account the timezome offset
console.log(timestampMoment.format('h:mm a'));

//Following prints the local time.
console.log(timestampMoment.local().format('h:mm a'));


// console.log(now.format('h:mma'));

// console.log(now.format('MMM Do YYYY, h:mm a')); //Dec 31st 2016, 8:28 am



// //NOTE: You can subtract any unit of time from the now object.
// //This following subtracts 1 year
// now.subtract(1, 'year');
// console.log(now.format());

// //This following subtracts 1 year
// now.subtract(1, 'day');
// console.log(now.format());
