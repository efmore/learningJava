
console.log('Hellow');

let fecha = new Date('2014');

console.log('Date :'.window);

//first array
var cars = ['Saab','Volvo','BMW'];
console.log(cars[1]);

//array learning
var math = [
  ['uno','dos','tres'],
  [1,2,3]
]
console.log(math[1][2]);

cars.push('Honda')
console.log(cars);

//insert a element in n position. solution1
cars.splice(1,0,'Mazda')
console.log(cars );

//insert a element in n position. solution2
cars.unshift('Subaru')
console.log(cars);
