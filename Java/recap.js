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

//revert array's items
sentence.reverse([1][2])
console.log(sentence)

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