var arr = [ 'red', 'blue', 'green', 'yellow', 'white' ];

// var ol = document.createElement('ol');
// ol.setAttribute('id', 'list');

for (var i = 0; i < arr.length; i++) {
	var add = document.getElementById('list');
	console.log(arr[i]);
	var li = document.createElement('li');
	add.appendChild(li);
	li.innerText = arr[i];
}
