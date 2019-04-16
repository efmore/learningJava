
console.log('Hellow');

//first array
var cars = [
  'Saab',
  'Volvo',
  'BMW'];
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

//funciones
function sum (a,b) {
  var result = a + b
  return result
}
console.log(sum(2,9));

//controling error
function sum (a,b,c) {
  if (c == undefined){
    var result = a + b
    return result
  } else {
    var result = a + b + c
    return result
  }
}
console.log(sum(2,9));

//sum of a array elements
function sum2 (numbers) {
  var resultado = 0
  for (var i = 0; i <= numbers.length; i++) {
    var number = number [1];
    result += number;
  }
  return resultado;
}

console.log(sum2());


var list = cars.map(function(coche,index) {
  var number = index +1;
  var listEntry = number+' '+coche;
  return listEntry;
})
console.log(list);

// var u = prompt ('Add name')
// var m = prompt ('Add another name')
// var not m = prompt ('Choose...')
// var check = match (u,m) => (
//   return (u+m = 'cool') ? true : false
// )
//
// Do { if(match == true ) {console.log('Awesome, right?');}
//       else {console.log('What should I do?');}}
// While (match = false || m == not m);
