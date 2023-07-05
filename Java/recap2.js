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

for (let bottles = 100; bottles >0; bottles -=1){
    console.log(`There's ${bottles} on the wall, if one falls, there will be ${bottles-1} on the wall`)
}