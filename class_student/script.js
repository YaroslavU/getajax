class User {
    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

var user = new User;
user.name = 'John';
user.surname = 'Wick';


class Worker {
    getFullName() {
        return this.name + ' ' + this.surname;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
var worker = new Worker;
worker.name = 'John';
worker.surname = 'Wick';
worker.rate = 10;
worker.days = 30;

console.log(worker.getFullName());
console.log(worker.getSalary());