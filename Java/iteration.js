let a = 100
while (a<=200){
    console.log(a)
    a++
}

let b = 100
while (b<=200){

if (b%2==0){
    console.log("-")
}
else {
    console.log("*")
}
b++
}
//b++ just means add one to the value of the b

for (let c = 1; c <= 10; c++){
    for (let d = 0; d < 10; d++){
    console.log(c)}
}
//this one is an embeded loop 

//condition, question mark, yes or no - if statement to be written quickly (better to use if/else etc.)
// CHECK TTHIS ONE: console.log(age > 18)? ((age < 65)? `${age} is valid`: "Overage")

let animal1 = new Object 
animal1 ["name"] = "dog"
animal1 ["size"] = "small"
animal1 ["breed"] = "pomerenian"
animal1 ["age"] = "2"

let animal2 = {name: "dog", size: "large", breed: "labrador", age: "3"}
let animal3 = {name: "dog", size: "medium", breed: "bulldog", age: "5"}

console.log(animal1, animal2, animal3)

let animals = new Array ()
animals.push(animal1)
animals.push(animal2)
animals.push(animal3)
console.log(animals) 

for (let pet of animals) {
    console.log(pet.name)
}

for (let i=0 ; i <animals.length; i++){
    animals[i].age*=2
}

let i = 0;
while (i < animals.length){
    let currentPet = animals [i];

    console.log(`Name:${currentPet.name} Size: ${currentPet.size} Age:${currentPet.age}`);
    i++;
}
