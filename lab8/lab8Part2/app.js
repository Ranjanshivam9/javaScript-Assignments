const cat = document.getElementById('cat');
const product = document.getElementById('product');
const quant = document.getElementById('quant');
const totalPrice = document.getElementById('totalprice');

cat.addEventListener('change', change);
function change () {
	if (cat.value == 'none') {
		product.innerHTML = '<option value="none">-----</option>';
	}
	if (cat.value == 'electronics') {
		product.innerHTML =
			'<option value="tv">Television</option><option value="phone">Phone</option>';
	}
	if (cat.value == 'grocery') {
		product.innerHTML =
			'<option value="soap">Soap</option><option value="Powder">Powder</option>';
	}
}

const form2 = document.getElementById('form2');
form2.addEventListener('submit', function (e) {
	e.preventDefault();
	var error = [];

	if (cat.value == 'none' || product.value == 'none' || quant.value == '') {
		error.push('Please Fill the details');
	}

	if (error.length > 0) {
		alert(error.join(', '));
	}
	else {
		result();
	}
});

function result () {
	var newWindow = window.open('', '', 'width=600,height=400,top=400');
	var newTable = newWindow.document.createElement('table');
	newTable.id = 'table';
	newTable.border = 1;
	newWindow.document.body.appendChild(newTable);

	var tableResult = newWindow.document.getElementById('table');
	tableResult.innerHTML =
		'<thead><th>Category</th><th>Product</th><th>Price per item</th></thead><tbody><tr id="row1"></tr></tbody>';
	var row = newWindow.document.getElementById('row1');
	console.log(row);

	if (cat.value == 'electronics') {
		if (product.value == 'tv') {
			row.innerHTML = '<td>Electronics</td><td>Television</td><td>20000</td>';
			totalPrice.value = quant.value * 20000;
		}
		else {
			row.innerHTML = '<td>Electronics</td><td>Phone</td><td>10000</td>';
			totalPrice.value = quant.value * 10000;
		}
	}
	else {
		if (product.value == 'soap') {
			row.innerHTML = '<td>Grocery</td><td>Soap</td><td>40</td>';
			totalPrice.value = quant.value * 40;
		}
		else {
			row.innerHTML = '<td>Grocery</td><td>Powder</td><td>90</td>';
			totalPrice.value = quant.value * 90;
		}
	}
}

function resetForm () {
	product.innerHTML = '<option value="none">-----</option>';
	console.log('hello');
}
