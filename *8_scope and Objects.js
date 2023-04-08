//example of global and local scope
let a = 'JavaScript' 
let b = 10 
function letsLearnScope() {
  console.log(a, b) 
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) 
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b)
