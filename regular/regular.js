// регулярные выражения
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' 
// по шаблону: буква 'a', любой символ, буква 'b'.
let str = 'ahb acb aeb aeeb adcb axeb';
console.log(str.replace(/a.b/g,  'a!b'));

// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' 
// по шаблону: буква 'a', 2 любых символа, буква 'a'.
// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/a..a/g,  'a!!a'));

// Напишите регулярку, которая найдет строки 'abba' и 'abea', 
// не захватив 'adca'.
// let str = 'aba aca aea abba adca abea'
// console.log(str.replace(/ab.a/g,  'ab!a'));