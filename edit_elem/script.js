let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.addEventListener('input', function() {
	elem.textContent = this.value;
});

