let totalMoney = 4000
let text = `The total bill is £${totalMoney} the remaining amount of money to be paid is \n £${4000-2348}`
console.log(text)
// \n is a newline
// \" quotes in quotes

//Conditions
console.log(1 == 1)
console.log(1 === 1)
//triple equal will enforce the check on variable type, not just a visible number - if it's writing and number, that won't be true
console.log(0 === "0") //false
console.log(0 == "0") //true
console.log(1 > 0)
console.log(1 <= 1)
console.log(x>y && y===10) // && is AND
console.log(x>y || y===5) // || is OR
console.log((x>y || y===5) && x===5) // || && is OR AND
// BIDMAS - Brackets, Indicies, Division, Multiplication, Addition, Substraction
// (),**,/,*,+,-

//Statements
if (x ===5){
    console.log("x is equal to five")
}else if (true){
    console.log("print else if")
}else{
    console.log("x is not five")
}
//you can use ELSE IF (use as many as you like), but they will only be checked if the one before is false

//WHILE statement - executed only while the statement is true
while (y = 100){
    console.log("y equals 100")
}
//DO statement - executes once, then checks/loops
do {
    console.log("Hello")
}while (false)