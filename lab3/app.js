// Date Object

document.write('<h1>----Date Object 3.1----</h1>');

var d = new Date();
document.write(d);

//
console.log(d.getHours());

// var time = d.getHours;
var time = d.getHours();

if (time < 12) {
	document.write('<h1>Good Morning</h1>');
}
else if (time >= 12 && time <= 17) {
	document.write('<h1>Good Afternoon</h1>');
}
else {
	document.write('<h1>Good Evening</h1>');
}

// else {
// 	document.write('<h1>Good Evening</h1>');
// }

// var arr = [ 'hello', 'world', 'how', 'are', 'you', 'me', 'fine' ];

// var copy = arr.copyWithin(1, 2, 4);

// document.write(copy);

// String methods //
document.write('<h1>----String Methods 3.2----</h1>');

//
var str = 'Capgemini';
document.write('<h3>The string is-' + str + '</h3>');

var char = 'p';
document.write('<h3>The char to be searched is -' + char + '</h3>');

var result = str.indexOf('p');
document.write('<h3>The char is at position -' + result + '</h3>');

console.log(result);

//

document.write('<h1>----String Methods 3.3----</h1>');

var str = 'University at Capgemini';
document.write('<h3>The string is - ' + str + '</h3>');

//
//  it gives an array
var match = str.match('Capgemini');
//
console.log(match);
//
document.write('<h3>Result of str.match("Capgemini") - ' + match[0] + '</h3>');
//

var result = str.substr(3, 6);
document.write('<h3>Result of str.substr(3,6) - ' + result + '</h3>');

var str2 = 'I love javaScript';

document.write(str2);

document.write('<br>');
document.write('<br>');

document.write(str2.toUpperCase());
