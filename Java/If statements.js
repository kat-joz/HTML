//If statements in conditionals

let a = 0
let b = 45
let c = 101

if (a==b){
console.log(`${a} is ${b}`)
}else{
    console.log(`${c} is larger than ${b}`)
}if (c > b && b > a){
    console.log(`${c} is larger than ${b}`)
}else if (c > b){
    console.log(`${c} is larger than ${b}`)
}else {
    console.log(`${a}, ${b}, ${c}`)
}
// && - and this condition is true
// || - or this condition is true
// ! - is not e.g. != is not equal; can flip the entire condition by putting ! before the condition in a bracket

if (!(1==2)){
    console.log("true because it's flipped")
}

// `${value}` - prints the value, not just plain text 
// == -> equal numbers 
// === -> equal value data types
// !== -> checks value and type
// < works on numbers and letters, meaning a is checked as 1 and z = 26, meaning a < z, however, cannot compare numbers to letters

if ("a"<"z"){
    console.log("true")
}

/// TASK
// While loop that counts to 1000
// create 3 varaibles that have numbers
// in the while loop does 4 checks using the variables/counter var printing if true

// a,b,c
// counter
// while loop - counting to 1000
// console.log(counter)

d=1
e=100
f=500
counter=0

while (counter <= 1000){{
    console.log(counter)
    counter +=1;
}if (counter>d && counter<e){
    console.log("hello")
}else if (counter>e && counter<f){
    console.log("world")
}else{
    console.log("!")
}
}

//Andrew's solution
//continue skips to the next interation

let g = 100
let h = 500
let j = 1000

let i = 0

while (i < 1000){

    if (i==j){
        break //exits the loop
    }
    if(i<h){
        console.log(`${i} is less than ${h}`)
    }else if (i < g){
        console.log(`${i} is less than ${g}`)
    }else{
        console.log(i)
    }
    i++
}