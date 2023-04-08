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
