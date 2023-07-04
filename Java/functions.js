//Functions allow you to print the same function multiple times by allocating a specific task for it, such as printing a word, a number, performing a calculation etc.

function print () {
    console.log("Hello World")
}

print ()
print ()
print ()

function print_name(name) {
    console.log(`Hello, ${name}`)
}

print_name("Kasia") // Hello, Kasia
print_name("Mike") // Hello, Mike

function square_number(n) {
    return n * n
}

let squared = square_number(4)
console.log(squared) // 16

console.log(square_number(square_number(3))) //81
print_name(square_number(3)) // Hello, 9

let array = [2,4,6,8]
array = array.map(square_number)
console.log(array) // 4,16,36,64 - squared once

let array2 = [2,4,6,8]
array2 = array2.map(square_number)
array2 = array2.map(square_number)
console.log(array2) // 16,256,1296,4096 - squared twice

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multi(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
let output = add(5,9)
let output2 = sub(output, 2)
let output3 = sub(div(multi(output2, output), 3), 1)
console.log(output3) //55

///TASK

// Create a function that says Hi, [your name]
// Try them out

function print_hiName(value) {
    console.log(`Hi, ${value}`)
}
print_hiName ("Kasia")
print_hiName ("Mike")
print_hiName ("Mariusz")

function print_cuteName(value) {
    console.log(`Hi cute ${value}`)
}
print_cuteName("bunny")

// Create the math functions -- return
// Try them out

function multiply (c,d){
    return c*d
}
let example1 = multiply(2,2)
console.log(example1) //4

function divide (c,d){
    return c/d
}
let example2 = divide(10,2)
console.log(example2) //5 

function addition (c,d){
    return c+d
}
let example3 = addition(5,5)
console.log(example3) //10

function subtraction (c,d){
    return c-d
}
let example4 = subtraction (10,2)
console.log(example4) //8

let example5 = ((divide(10,5), subtraction(10,5), multiply (10,5))) //50
console.log(example5)

// Create a function that takes 3 variables.
// 2 numbers, string that is the operation
// calc(3,4,"div") // 0.75
// Try them out

//Function with 3 variables
function print_car(make, model, year) {
    console.log(`The car is ${make} ${model} ${year}`)
}
print_car ("toyta", "aygo", "2015")

//String with numbers and use of maths function operation
let array3 = [2,3,4]
array3 = array3.map(divide)
console.log(array3)

//Calculator using maths fucntions
function calculator(sum){
    console.log(`The sum is ${sum}`)
}
calculator(divide(10,2))
calculator(multiply(2,2))
calculator(subtraction(10,2))
calculator(addition(1,1)) 

//Andrew's solution

function calculator2(numberOne, numberTwo, operation){
    if(operation == "+"){
        return add(numberOne, numberTwo)
        //return numberOne + numberTwo
    }
}
console.log(calculator2(1,2,"+"))

//OR use switch with a predictable outcome (saves space)

function calculator2(numberOne, numberTwo, operation){

    switch (operation) {
        case "Addition":
        case "+":
            return add (numberOne, numberTwo)
            break;

        case "Subtraction":
            case "-":
            return sub (numberOne, numberTwo)
            break;

        default:
            return "invalid operation"
    }
    console.log(`${numberOne} ${operation} ${numberTwo} equals ${output}`)
}

calculator2(1,2,"-")