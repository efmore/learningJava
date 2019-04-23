// 1.- Dado un objeto, sacar la primera parte del CSSSuportsRule

var people_array = [
  {
  'name':'Juan',
  'lName1':'Guzman',
  'lName2':'Linares',
  'bornDate':'2019-2-11',
  'gender':'Male',
  },
  {
  'name':'Juan',
  'lName1':'Guzman',
  'lName2':'Linares',
  'bornDate':'2019-2-11',
  'gender':'Male',
  },
  {
  'name':'Juan',
  'lName1':'Guzman',
  'lName2':'Linares',
  'bornDate':'2019-2-11',
  'gender':'Male',
  },
]

function Person(name,lName1,lName2,bornDate,gender) {
  this.name = name
  this.lName1 = lName1
  this.lName2 = lName2
  this.bornDate = bornDate
  this.gender = gender
  this.getShortName = function(){
    return
      (this.lName1.toUpperCase().slice(0,2) +
      this.lName2.toUpperCase().charAt(0) +
      this.name.toUpperCase().charAt(0))}
  this.getDate = function(){
    return
      (this.bornDate.slice(2,4) +
      this.bornDate.slice(5,7) +
      this.bornDate.slice(8))}
  this.gender = function (){
    return
      this.gender.toUpperCase().charAt(0)}
  this.getCURP = function (){
    return
      (this.getShortName() +
      this.getDate() +
      this.gender())}
}

people_array.forEach(function(obj) {
  var person = new Person(obj.name,obj.lName1,obj.lName2,obj.bornDate,obj.gender)
  console.log(person.getCURP());
})


var divs_array = [
{
  'height':'100px',
  'width':'200px',
  'backgroundColor':'red',
},
{
  'height':'100px',
  'width':'300px',
  'backgroundColor':'green',
},
{
  'height':'100px',
  'width':'400px',
  'backgroundColor':'blue',
},
{
  'height':'100px',
  'width':'500px',
  'backgroundColor':'yellow',
},
{
  'height':'100px',
  'width':'600px',
  'backgroundColor':'black',
},
]

var divsDomExample = document.getElementsByTagName('div')
divs_array.forEach(function(element,index){
  divsDomExample[index].style.height = element.height
  divsDomExample[index].style.width = element.width
  divsDomExample[index].style.backgroundColor = element.backgroundColor
})
