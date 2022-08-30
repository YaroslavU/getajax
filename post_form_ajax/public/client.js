form.addEventListener('submit', function(event) {
	let promise = fetch('/handler/', {
		method: 'POST',
		body: new FormData(this),
	}).then(
		response => {
			return response.text(); // ответ сервера
		}
	).then(
		text => {
			console.log(text);
		}
	);
	
	event.preventDefault();
});