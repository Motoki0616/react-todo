var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
//  January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log(now.unix());

var timestamp = 1481075731;
var curretnMoment = moment.unix(timestamp);
console.log('current moment', curretnMoment.format('MMM D, YY @ h:mm a'));
