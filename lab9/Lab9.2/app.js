// var gradValue;
const qual = document.getElementById('qual');
const radio1 = document.getElementById('grad1');
const radio2 = document.getElementById('grad2');
const preview = document.getElementById('preview');

const name = document.getElementById('name');
const date = document.getElementById('date');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

radio1.addEventListener('change', function () {
	if (radio1.checked) {
		var gradValue = radio1.value;
		qual.innerHTML = '<option value="BTech">BTech</option><option value="BCA">BCA</option>';

		// console.log(gradValue);
	}
});

radio2.addEventListener('change', function () {
	if (radio2.checked) {
		qual.innerHTML = '<option value="MTech">MTech</option><option value="MCA">MCA</option>';
		// var gradValue = radio2.value;
		// console.log(gradValue);
	}
});

var dob = null;
preview.addEventListener('click', (e) => {
	e.preventDefault();
	dob = date.value;
	var error = [];

	if (name.value == '' || name.value.length > 10) {
		error.push('err(name)');
	}

	if (date.value == '') {
		error.push('err(dob missing)');
	}
	if (phone.value == '' || phone.value.length != 10) {
		error.push('err(phone missing)');
	}
	if (email.value == '') {
		error.push('err(email missing)');
	}
	if (radio1.value == '' || radio2.value == '') {
		error.push('err(radio missing)');
	}
	if (qual.value == '') {
		error.push('err(qualification)');
	}
	if (error.length > 0) {
		console.log(error.join(','));
	}
	else {
		previewWindow();
		// console.log('else');
		// console.log(radio2.value);
		// console.log(radio1.value);
	}
});

function previewWindow () {
	var newWindow = window.open('', '', 'width=600,height=400,top=400');

	var dateNow = new Date().getFullYear();
	console.log(dateNow);
	dob = dob.split('-');
	console.log(dob);

	dateNow = dateNow - Number(dob[0]);

	newWindow.document.writeln('Name :          ' + name.value + '<br>');
	newWindow.document.writeln('Age :          ' + dateNow + '<br>');
	newWindow.document.writeln('Ph-No :         ' + phone.value + '<br>');
	newWindow.document.writeln('Email :         ' + email.value + '<br>');
	if (radio1.checked) {
		newWindow.document.writeln('Graduation :    ' + radio1.value + '<br>');
	}
	else {
		newWindow.document.writeln('Graduation :    ' + radio2.value + '<br>');
	}

	newWindow.document.writeln('Qualification : ' + qual.value + '<br>');
}
