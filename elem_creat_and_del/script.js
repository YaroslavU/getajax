let parent = document.querySelector('#parent');

for (let i = 1; i <= 3; i++) {
	let li = document.querySelector('li');
	li.addEventListener('click', function() {
		this.remove();
	});
    parent.appendChild(li);
}

let button = document.getElementById('button');
button.addEventListener('click', function () { 
    let newLi = document.createElement('li');
    newLi.textContent = 'new li';
    newLi.addEventListener('click', function() {
		this.remove();
	});
        parent.appendChild(newLi);
})