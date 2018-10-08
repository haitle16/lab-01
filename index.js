'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
const faker = require('faker');
var firstNum = faker.random.number(100);
var secondNum = faker.random.number(100);

console.log(math.add(firstNum,secondNum)); // 4
console.log(math.subtract(firstNum,secondNum)); // -2
console.log(math.multiply(firstNum,secondNum)); // 4
console.log(math.divide(firstNum,secondNum)); // -2



let numArr = [1,2,3,4,5,6,7,8,9,10]
console.log(greet('JOHN'));
console.log(greet());
console.log(math.add(1,3)); // 4
console.log(math.add(1,3,4,5,6,7)); // 4
console.log(math.subtract(1,3)); // -2
console.log(math.add([1,3,5,7,9,11])); // 4
console.log(math.multiply(...numArr)); // 4
console.log(math.divide(...numArr)); // 4
