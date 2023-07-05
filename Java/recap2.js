//LOOP
//1.While
//2.For
//3.For of/in

const list = [2,3,4,5,6,8,10]
// n interates through the list
// n can be called anything 
// += means whatever the value equals to + value of n

let sum = 0

for (let n of list){
    sum = sum + n 
    console.log(sum)
}
console.log("Sum:", sum)

// 100 bottles on the wall, if one falls there'll be 99 bottles -> use code as there's a pattern where a counter can be used

let bottles = 100
while (bottles >=1){
    console.log(`There's ${bottles} on the wall, if one falls, there will be ${bottles-1} on the wall`)
    bottles = bottles - 1 //bottles -= 1
}

//which is the same as the for loop of:
//       initial        condition   iteration
for (let bottles = 100; bottles >= 0; bottles -=1){
    console.log(`There's ${bottles} on the wall, if one falls, there will be ${bottles-1} on the wall`)
}
// For is best when you want a counter 

//when itemIndex is less than the length of the array, the loop starts at 0 and adds +1
for (let itemIndex = 0; itemIndex < list.length; itemIndex+=1){
    let item = list [itemIndex]
    console.log(item)
}

//Simplest in looks version:
for (let item of list){
    console.log(item)
}

//or use forEach and anonymous function:

list.forEach(item => console.log(item))

//Changes made in the loop stay in the loop, so it won't change the list(array), so if you add item*10, it will only print that one list *10

//When FOR IN is used on an array, it will print the actual index (number of entries in the array)
//it will print 1-12 if there's 12 items on the list

for (let itemIndex in list){
    console.log(itemIndex)
}

//if you do:

for(let itemIndex in list){
    let item = list [itemIndex]
    console.log(item)
}

//this will be doing exactly the same as the loops above

//ARROWED FUNCTION
//Allow us to pass code as a parameter

let avg = 0
//Created an anonymous function i.e. code which adds any item given to the "avg" variable
//forEach will rull this function, inputing each item for the list
list.forEach(item => avg+=(item/list.lenght))
console.log(avg)

//this should return an average of the inputted variable

const multiply_by_10 = (n) => {
    const prime = 10
    return prime * n
}
//this could also be written as:
list.forEach(x => console.log(multiply_by_10(x)))

//Shopping cart example here!!!!!!
//
//
//
//

/// TASK

// priceList Object {"Bread": 0.59, "Eggs":2.99}

const priceList = {"Bread":0.59, "Eggs":2.99, "Chocolate": 1.99, "Milk":1.19, "Flour":0.89}
console.log(priceList)

// Lists Object that is your shopping list
// [{name:"Bread", quanity:2}, {name:"Eggs", quanity:1}]

let shoppingList = [{name:"Bread", quantity:2}, {name:"Eggs", qauntity:1}, {name:"Chocolate", quantity:2}, {name:"Milk", quantity:1}, {name:"Flour", quantity:3}]
console.log(shoppingList)

// Print Every item in the cart with its name X quantity
// loop through and calcuate the total cost

let total = 0
for (let item of shoppingList){
    let price = priceList[item]
    return item * price
    total += price

console.log(item, price, total)
}

// map through and add totalCost to shopping list object

// [{name:"Bread", quanity:2, cost:1.18}, {name:"Eggs", quanity:1, cost:2.99}]

// forEach to calcualte the total cost of the processed shopping list

// print the item, quanity, cost

// after all the items print thte total cost (in a nice format)