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
