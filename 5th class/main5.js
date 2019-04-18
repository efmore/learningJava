
var number_array = [1,2,3,4,5]

var new_number_array = number_array.map(function(element, index, array) {
  return element * 3
})

const new_number_array_pairs = new_number_array.filter(function (element) {
  return element % 2 === 0;
  })

console.log(new_number_array_pairs);


const new_number_array_pairs2 = new_number_array.filter(element => {return element % 2 === 0});
console.log(new_number_array_pairs2);
