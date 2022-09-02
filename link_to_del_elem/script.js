let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');
let create = document.querySelector('#create')

remove.addEventListener('click', function(event) {
	elem.remove();
	event.preventDefault(); // отменяем переход по ссылке
});

create.addEventListener('click', function (event) {
    elem.innerText = text;
    event.preventDefault();    
})
