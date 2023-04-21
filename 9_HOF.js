//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

const cbf = (n) =>{
    return n**2
}

function cube(cbf,n){
    return cbf(n)*n
}

console.log(cube(cbf,3))

//forEach iterates each element of array
//arr.forEach takes value 1, the element parament of function will have the value 1 then sum will be equal to 1
//arr.forEach will have value 2. the element parameter will have value 2
//then sum will be equal to 1+2
const numbers = [1, 2, 3, 4,5]
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) { 
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
