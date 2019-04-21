
// método .filter
var number_array = [1,2,3,4,5]

var new_number_array = number_array.map(function(element, index, array) {
  return element * 3
})
console.log(new_number_array);

const new_number_array_pairs = new_number_array.filter(function (element) {
  return element % 2 === 0;
  })

console.log(new_number_array_pairs);


const new_number_array_pairs2 = new_number_array.filter(element => {return element % 2 === 0});
console.log(new_number_array_pairs2);

// los objetos contienen elementos a los cuales se pueden acceder después
var koders_obj = {
  'cero': 'Diana',
  'one': 'Carlos',
  'two': 'Emma',
}

//ejemplos de console
console.log(koders_obj.one);
koders_obj.one
// console.table(koders_obj)
// Object.values(koders_obj)

//ejemplos de objeto -> Persona
// var persona = {
//    'name' = 'Emanuel'
//    'height' = 1.645
//    'nacionality' = 'Mexican'
//    'skin color' = 'Brown'
//    'eyes form' = 'rounded'
//    'complexion' = 'Normal'
//    'gender' = 'Male'
//    'BMI' = 26.5
//    'weight' = 74
//    'alive' = true
//    'bornDate' = 1994-09-06
// }

// ejercicio con arrays con objects
var koders_array = [
  {
    'nombre': 'David',
    'edad': 22,
    'genero': 'M',
    'hobbies': [
      'Fotografia',
      'Viajar'
    ]
  },
  {
    'nombre': 'Jorge',
    'edad': 23,
    'genero': 'M',
    'hobbies': [
      'Videojuegos',
      'Lectura',
      'Dibujar'
    ]
  },
  {
    'nombre': 'Erick',
    'edad': 25,
    'genero': 'M',
    'hobbies': [
      'Caligrafia',
      'Videojuegos'
    ]
  },
  {
    'nombre': 'Diana',
    'edad': 27,
    'genero': 'F',
    'hobbies': [
      'Hardware',
      'Videojuegos'
    ]
  },
  {
    'nombre': 'Rodo',
    'edad': 32,
    'genero': 'M',
    'hobbies': [
      'Musica',
      'Programacion'
    ]
  }
]

// 1.- Imprimir todos los nombres de los coders
// 2.- También imprimir todos sus hobbies
// 3.- Filtrar a los koders que les gusten los Videojuegos

// var koder_nombre = koders_array[0];
// console.log(koder_nombre['nombre']);

console.log('1')
koders_array.forEach(function(element) {
  console.log(element.nombre);
})

console.log('2')
koders_array.forEach(function(element){
  console.log(element.nombre)
  element.hobbies.forEach(function(element){
    console.log(element)
})})

console.log('2.1');
koders_array.forEach(function(element){
  console.log("Hola, soy "+element.nombre+" y mis hobbies son "+element.hobbies.forEach(function(element){
    console.log(element)
}))})

console.log('3');

// intento 1 -> fail
// const videogames_koders = koders_array.filter(function(element){
//   return element.hobbies
//   element.hobbies.forEach(function(element){
//     element == 'Videojuegos'
//   })
//   return element.name
// })
// console.log(videogames_koders);

// intento 2 -> suma de indexOf()
const videogames_koders = koders_array.forEach(function(element){
  return element.hobbies
  element.hobbies.forEach(function(element){

  })
  return element.nombre
})
console.log(videogames_koders);
