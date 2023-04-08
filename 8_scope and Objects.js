//example of global and local scope
let a = 'JavaScript'  //global scope
let b = 10            //global scope
function letsLearnScope() {
  console.log(a, b) 
  if (true) {
    let a = 'Python'   //local scope
    let b = 100        //local scope
    console.log(a, b) 
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b)

Const drivers = {} //empty object

const redbull ={
    //properties
    first_name : 'max', 
    last_name : 'verstappen',
    age : '22',
    nationality : 'dutch',
    championships : ['2021', '2022'],
    //methods
    rival: function(){
        console.log('Hamilton')
    }
    }
console.log(redbull.first_name)
console.log(redbull.age)
console.log(redbull.championships)
console.log(redbull.rival())

//Crearing new properties and methods
redbull.sd = 'Sergio'
redbull.sd_rival = function(){
    console.log('max')
}
console.log(redbull)
console.log(redbull.sd_rival())

//copy and object without modifying the original object
const rcopy = Object.assign({}, redbull)
console.log(rcopy)
//to get keys or properties of an object as an array
const k = Object.keys(redbull)
console.log(k)
//[ 'first_name', 'last_name', 'age', 'nationality', 'championships, 'rival']

//to get object values
const v = Object.values(redbull)
console.log(v)

//to get keys and values together
const t = Object.entries(redbull)
console.log(t)

//to check if a specific key or property exists
console.log(redbull.hasOwnProperty('first_name')) //True
