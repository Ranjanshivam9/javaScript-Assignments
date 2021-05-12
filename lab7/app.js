// Global
var f1 = document.getElementById('input1');
var f2 = document.getElementById('input2');
var f3 = document.getElementById('input3');
var f4 = document.getElementById('input4');

//

// Price

var f1Price = 100;
var f2Price = 40;
var f3Price = 30;
var f4Price = 20;

var f1Name = 'Doll';
var f2Name = 'Milk';
var f3Name = 'Coke';
var f4Name = 'Water';

function order () {
	if (
		(f1.value == null || f1.value == '') &&
		(f2.value == null || f2.value == '') &&
		(f3.value == null || f3.value == '') &&
		(f4.value == null || f4.value == '')
	) {
		alert('no items selected');
	}
	else {
		invoice();
	}
}

function invoice () {
	var newWindow = window.open('', '', 'width=600,height=400,top=400');
	var newTable = newWindow.document.createElement('table');
	newTable.id = 'table';
	newTable.border = 1;
	newWindow.document.body.appendChild(newTable);

	var tableResult = newWindow.document.getElementById('table');
	tableResult.innerHTML =
		'<thead><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th></thead><tbody><tr id="row1"><tr id="row2"><tr id="row3"><tr id="row4"></tr></tbody>';

	if (f1.value !== '') {
		var data =
			'<td>' +
			f1Name +
			'</td>' +
			'<td>' +
			f1.value +
			'</td>' +
			'<td>' +
			f1Price +
			'</td>' +
			'<td>' +
			f1.value * f1Price +
			'</td>';
		var td = newWindow.document.getElementById('row1');
		td.innerHTML = data;
	}
	if (f2.value !== '') {
		var data =
			'<td>' +
			f2Name +
			'</td>' +
			'<td>' +
			f2.value +
			'</td>' +
			'<td>' +
			f2Price +
			'</td>' +
			'<td>' +
			f2.value * f2Price +
			'</td>';
		var td = newWindow.document.getElementById('row2');
		td.innerHTML = data;
	}
	if (f3.value !== '') {
		var data =
			'<td>' +
			f3Name +
			'</td>' +
			'<td>' +
			f3.value +
			'</td>' +
			'<td>' +
			f3Price +
			'</td>' +
			'<td>' +
			f3.value * f3Price +
			'</td>';
		var td = newWindow.document.getElementById('row3');
		td.innerHTML = data;
	}
	if (f4.value !== '') {
		var data =
			'<td>' +
			f4Name +
			'</td>' +
			'<td>' +
			f4.value +
			'</td>' +
			'<td>' +
			f4Price +
			'</td>' +
			'<td>' +
			f4.value * f4Price +
			'</td>';
		var td = newWindow.document.getElementById('row4');
		td.innerHTML = data;
	}
}
