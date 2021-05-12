var reg = document.getElementById('reg');
var str = document.getElementById('str');
var show = document.getElementById('show');
var showFlag = false;

function myFunction () {
	var arr = reg.value;
	var strValue = str.value;
	arr = arr.replaceAll('/', '');

	var regexp = new RegExp(arr, 'gm');

	console.log(regexp);

	var result = regexp.test(strValue);
	console.log(result);
	if (result === true) {
		alert('Successful Match');
		showFlag = true;
	}
	else {
		alert('No Match');
		showFlag = false;
	}
	// var resultIndex = strValue.search(regexp);
}

function myFunctionShow () {
	if (showFlag === true) {
		var arr = reg.value;
		var strValue = str.value;
		arr = arr.replaceAll('/', '');

		var regexp = new RegExp(arr, 'gm');

		console.log(regexp);

		var result = regexp.test(strValue);
		var resultIndex = strValue.search(regexp);
		alert('Match at' + resultIndex);
	}
	else {
		alert('Please test Match first');
	}
}
