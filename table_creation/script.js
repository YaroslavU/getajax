
var submit = document.getElementById('submit');

submit.addEventListener('click', inc);

function inc(){
	var hight = document.getElementById('1').value;
	var width = document.getElementById('2').value;

	let table = document.querySelector('#table');

	for (let i = 0; i < width; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < hight; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
        td.innerHTML = 'x'
	}
	
	table.appendChild(tr);
}
}
