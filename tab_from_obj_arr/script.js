let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let table = document.getElementById('table');

for (let employer of employees) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = employer.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
    td2.textContent = employer.age;
    td2.id = "age"
    td2.setAttribute("onclick","plusAge(this)");
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
    td3.textContent = employer.salary;
    td3.setAttribute("onclick","plusSalary(this)");
	tr.appendChild(td3);
	
	table.appendChild(tr);
}
function plusAge(obj) {
    document.getElementsByTagName('td');
    obj.innerText = Number(obj.innerText) + 1;
}
function plusSalary(obj) {
    document.getElementsByTagName('td');
    var percent = 10;
    var sal = Number(obj.innerText)
    obj.innerText = sal + sal / 100 * percent;
}