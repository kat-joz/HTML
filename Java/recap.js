//Put thext into console in html
console.log("Hello World")
//Variable -> Var or Let [Name] = [Value]
var Name = 9
//or
let variableName = 10 //use LET as it is more consistent; var is more of a legacy command

//Once defined it can be changed to something else
variableName = 90
console.log(variableName) //now it will print 90

//Const - does not change like a variable but performs the same function as "let"; good for referncing things or expressing values in physics or maths (stuff that won't need to change like gravity value)
const constVariable = 2

//Scope - if you put a variable in the curly brackets, it will only exist there
let Example1 = 0 //exists everywhere in the code

{
    let Example1 = 0
}//exists only in these brackets

// "var" will exists everywhere, brackets or not, making it more prone to bugs

//Arrays - create with squere brackets or with a constructor -> Array ()
let list = [1,2,3] // brackets, use 99% of the time
let list2 = ["text1", "text2"] // string with words need speech marks - numbers do not
let list3 = new Array (1,2,3) // OR you can make an empty Arrays with just one number in them meaning Array (9) it's empty x 9

// To print your list:
console.log(list) //whole list prints
console.log(list[0]) //only 1 will print

//To change items on the list:
list[1] = "Middle Name"
console.log(list) //will now print 1,Middle Name,3
console.log(list[1]) // will now print Middle Name instead of 2 as per the original list 

//To add an extra item to the end of the list:
list.push("added item")
console.log(list) //will now print 1,Middle Name,3,added item - but, you can just amend the original list if you want to

list.pop() // Deletes the last item, meaning "added item" would be deleted in this case

console.log(list.length) //shows how many items in the list you have

/// Task
// Make a sentence out of a list
// Each word is a string in a list
// e.g ['The','quick','brown','fox','jumped','over','the','fence']
// Check it's length at the end (and/or while you're making the sentence)
// Change the last word
// Swap 3 words
/// Extension See What .Reverse does

let sentence = ["The", "quick", "brown", "fox", "jumped", "over", "the", "fence."]
console.log(sentence)

console.log(sentence.length)

sentence.pop()
console.log(sentence)

sentence.push("wall.")
console.log(sentence)

sentence[1]="cute"
sentence[2]="red"
sentence[3]="cat"
console.log(sentence)

//OR to swap existing words around

let temporary = sentence[7]
sentence[7]=sentence[3]
sentence[3]=temporary
console.log(sentence)

//reverse array's items
console.log(sentence.reverse())

//remove first element of an array
sentence.shift()
console.log(sentence)

//add a new element at the beginning of an array
sentence.unshift("new word")
console.log(sentence)

//add a value or a string inside of an exisiting array
console.log(sentence.join(sentence))
console.log(sentence.join("-"))

//Arrays and objects can be const. and they can be updated as const wile in array -> const[Name of the Array] = [array]
const NameOfTheArray = []

//Objects

const myObject = {}
const myObject_advanced = new Object()

console.log(myObject)
console.log(myObject_advanced)

myObject.key = "value"
console.log(myObject) // {key = 'value'}

console.log(myObject.key) // value
myObject.key = 12
console.log(myObject.key) // 12

const kasiaObject = {name:"Kasia", Surname:"Jozwiak"}
console.log(kasiaObject) // prints all above
console.log(kasiaObject [0]) //undefined as no index is assigned to each value = key assigned was not used -> "name" is the key in this instance
console.log(kasiaObject ["name"]) // prints Kasia, as I used the key assigned to value Kasia

kasiaObject[0] = "first item"
console.log(kasiaObject[0]) // now it will print 'first item' as a new key was assigned to a value 0
console.log(kasiaObject) // now it will print: first item, kasia, jozwiak

const Example = JSON.parse('{"name":"kasia"}')
console.log(Example) //{name:'Kasia'}
console.log(Example.name) // Kasia

console.log(JSON.stringify(Example)) // {"name:kasia"}

// [array]
// {object}
// (method)

//For Object remember:
let NewObject = {}
//OR
const NewObject1 = {}

NewObject.keyExample = "value" // NewObject is the name of the object, while keyExample is the name of the key by which I classify it
console.log(NewObject ["keyExample"]) 

//You can add more data in the value and organise them together:
const classObject2 = {student:["AB", "CD"], teacher: "Name", cost:123}
const classObject3 = {student:["EF", "GH"], techaer: "Name2", cost:234}
const classAll =[classObject2, classObject3]
console.log(classAll)

/// Task

// Make an array of 4 cars - name, model, brand, reg

// print the a property of each object

// change the properties

// add a property

// print the whole objects

// print specific keys

const car1 = {make:"Toyota", model: "Aygo", year: 2016}
const car2 = {make:"Ford", model: "Fiesta", year: 2009}
const car3 = {make:"Fiat", model: "Panda", year: 2012}
const car4 = {make:"Renault", model: "Clio", year: 2015}

const cars= [car1, car2, car3, car4]
console.log(cars)

//or 
// const cars = [car1] 
// cars.push(car2)
// etc.

car1.make = "Mercedes"
car2.model = "Zet"
car3.year = 2010

console.log(cars[0].make) // prints the car1 make
console.log(cars[1].make)
console.log(cars[2].make)
console.log(cars[3].make)


car1.reg = "ABCD"
console.log(car1) // array added another proprty of the reg number

car2.reg = "EFGH"
car3.reg = "IJKL"
car4.reg = "MNOP"
//or
cars[0].reg = "ABCD"

console.log(cars[0]["reg"])
console.log(cars[3].year)
console.log(cars[0].model) //this will come up with Aygo (the index in an Array is numbered, so it works)
console.log(car1.model) //and this will come up with Aygo (the index in Object is specified by model etc., so numbers won't work)

console.log(car1.model, car2.model) // returns models of car1 and car2

//Pass-By-Referece
let list11 = ["jozwiak"]
let list12 = list11

//Pass-By-Value
let surname = "jozwiak"
let surname10 = surname

// at this point, both PBR and PBV will print the same thing - jozwiak

//PBR changes:
list11.push("add")
list12.push ("word")

console.log(list11) // jozwiak add word
console.log(list12) // jozwiak add word

//Whilst PBV changes:

surname = "add"
surname10 = "word"

console.log(surname) // add
console.log(surname10) // word

// WHILE - have to create new variables, as the counter will be resused (only prints the last loop using counter) 

let counter = 0
while (counter > 10){
    console.log(counter)
    counter +=1;
}
//Counter starts at 0, if it's less than 10, it will add 1 and print again through the consol.log function until it reaches 10

while (false){
    console.log("never print") //this will never print as while won't be false; true will cause an infinite loop, as while is always true (unles there's other conditions)   
}

do{
    console.log("once") // prints just once
}while (false)


counter=0
do{
    console.log(counter)
    counter +=1
}while (counter < 10) // same as the while loop above but wil print just once, and while will only activate after 'do' loops is done with printing

// FOR - "index" is not resused, so all will be printed

for (let index = 0; index <10; index++){
console.log(index)
}
//index++ = index+1

for (let index = 10; index > 0; index--){
    console.log(index)
}
//index-- = -1
//or this can be done as:
index=10
while(index > 0){
    console.log(index)
    index--
}

//THEREFORE, WHILE is a longer version, FOR is a modern and quicker version

for (let index = 0; index <10; index ++){
    console.log(index*2)
} //prints the loop to 10 times 2

// list in a loop
let list123 = [1,2,3,5]
console.log(list123) // prints the list of 1234

for (let number of list123){
    number*=2
    console.log(number)
}
//each number from the list will be counted as times 2

// while
// for (let var = start; condition; intcrement)
// for of  - cycles through a list
// for in  - cycles through a list's index


/// Task

// While Loops Count to 1000

let number = 0
while (number <= 1000){
    console.log(number)
    number +=1;
}

// While loop inside a different while loop to print 1-10 10 times for each number

let x = 0
while (x < 10){
    x++;

    let y = 1
        while (y <= 10){
            console.log(x)
            y++;
        }
    }

// Change with for loop

for (let number2 = 1; number2 <= 10; number2++){
    for (let number3 = 0; number3 < 10; number3++){
    console.log(number2)}
}

// try for of and for in on a list

// for (variable of iterable) 
// statement

const listLoop = [1,2,3,4]
for (const element of listLoop){
    console.log(element);
}

for (let value of listLoop){
    value += 1;
    console.log(value)
}

// for (variable in object)
// statement

const objectLoop = {a:1, b:2, c:3}
for (const element in objectLoop){
    console.log(`${element}: ${objectLoop[element]}`)
}

// 7%3 - 7 modular of 3 is 1, as 3 goes into 7 twice and = 6, meaning there's 1 left
// FIZZ BUZZ
//if the number is a multiple of:
// 3 - Fizz
// 5 - Buzz
// 15 - FizzBuzz

for (let i=0; i<1000; i++){
    console.log(i)

let output = ""
if (i % 3 == 0){
    output += "Fizz"
}

if (i % 5 == 0){
    output += "Buzz"
}
if (output == ""){
    console.log(i)
}
else {
    console.log(output)
}
}

// ! means not, so !false means true or != does not equal

///TASK
//Create a IF statement that satisfies the following:
//Declare a variable age
//if age is less than 18, print underage
//if age is over 18 AND under 65 print happy
//if age  is over 65 print overage

let age = 40
if (age <= 18){
    console.log("underage");
}
else if (age >= 65){
    console.log("overage");
}
else{
    console.log("happy")}