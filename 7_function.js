//declaring a function
function copy (){
    
}
//calling the function
copy()

//function without parameter and return
function sum(){
    a=2
    b=2
    s=a+b
    console.log(s)
}
sum()

//function with return

function rsum(){
    a=2
    b=2
    s=a+b
    return s
}
console.log(rsum())

//function with one param. this param needs to be passed a value when calling function
function area(r){
    pi = 22/7
    a = pi*r*r
    return a
}
console.log(area(2))

//function with two param

function rarea(l,b){
    a = l*b
    return a
}
console.log(rarea(2,3))

//function with many parameters
function soa(n){
    let sum = 0;
    for (let i=0; i<=n.length; i++){
        sum +=i
    }
    return sum
}


const n = [1,2,3,4,5]
console.log(soa(n))
// if we use arrow function, arguments is not used. instead ...args is used
// it is for function which has unlimited arguments

const soa = (...args) => {
    let sum= 0
    for (const element of args){
        sum += element
    }
    return sum
}
console.log(soa(1,2,3,4,5))

// a function without name is anonymous function
//in this case we are calling the variable to which we assigned the anonymous function to. so it can be called expression function as well
const a = function (){
    console.log('this i anonymous function')
}
a()
//Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(n) {
  console.log(n * n)
})(2)

//but instead of just printing if we want to return and store the data, we do as shown below
let squaredNum = (function(n) {
  return n * n
})(10)
console.log(squaredNum)
