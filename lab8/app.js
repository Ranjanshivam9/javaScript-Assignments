const amount = document.getElementById('amount');
const rate = document.getElementById('rate');
const year = document.getElementById('year');

// form object
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	var error = [];

	if (amount.value > 1500000) {
		error.push('Amount cant be greater than 15 lakh');
	}

	if (year.value < 7 || year.value > 15) {
		error.push('Period of year can only be between 7 and 15');
	}

	if (error.length > 0) {
		alert(error.join(', '));
	}
	else {
		result();
	}
});

function result () {
	const month = document.getElementById('month');
	const total = document.getElementById('total');
	const totalpay = document.getElementById('totalpay');
	var totalInterest = Number(amount.value) / 100 * Number(rate.value) * Number(year.value);
	var totalPayment = totalInterest + Number(amount.value);
	var monthlyPayment = totalPayment / 12;

	month.value = monthlyPayment;

	total.value = totalPayment;

	totalpay.value = totalInterest;
}
