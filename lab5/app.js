function openWindow () {
	var width = document.querySelector('#width').value;
	var height = document.querySelector('#height').value;
	var top = document.querySelector('#top').value;
	var left = document.querySelector('#left').value;
	// console.log(width, height, top, left);

	var popup = window.open(
		'',
		'',
		'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left
	);
}
