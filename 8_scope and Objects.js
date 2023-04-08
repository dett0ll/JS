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
