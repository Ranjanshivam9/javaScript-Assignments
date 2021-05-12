// var line = document.createElement('h3');

for (let i = 0; i < 100; i++) {
	var para = document.getElementById('hello1');

	var text = document.createTextNode(i + ' ');

	para.appendChild(text);
}

// Using while loops
var k = 0;
while (k < 100) {
	var para = document.getElementById('hello2');

	var text = document.createTextNode(k + ' ');

	para.appendChild(text);
	k++;
}

// Using do while loop
var x = 0;
do {
	var para = document.getElementById('hello3');

	var text = document.createTextNode(x + ' ');

	para.appendChild(text);

	x++;
} while (x < 100);

//swap the number
// function display () {
// 	var n1 = Number(document.getElementById('n1').value);
// 	var n2 = Number(document.getElementById('n2').value);
// 	console.log(n1);
// 	console.log(n2);
// 	document.getElementById('n1swap').value = n2;
// 	document.getElementById('n2swap').value = n1;
// }

// Comp Interest  //

var p = 1000;
document.getElementById('p').innerText = p + 'rs';

var r = 10;
document.getElementById('r').innerText = r + '%';

var n = 1;
document.getElementById('n').innerText = n + 'yr';

var interest = p * (1 + r / 100) ** n - p;

document.getElementById('result').innerText = interest;
