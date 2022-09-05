// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

function squ(a) {
    var b = a * a;
    return b;
}

console.log(squ(10));

// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

function squP(a, b) {
    var square = a * b;
    var perimiter = Math.pow(a, 2) + Math.pow(b, 2);
    return 'square is ' + square + ' ' + 'perimiter is ' + perimiter;
}
console.log(squP(10, 20));

// Сделайте калькулятор, который будет находить площадь круга и длину окружности.
function circleSqu(r) {
    var s = 3.14 * Math.pow(r, 2);
    var l = 3.14 * 2 * r;
    return 'square is ' + s + ' ' + 'length is ' + l;
}

console.log(circleSqu(10));