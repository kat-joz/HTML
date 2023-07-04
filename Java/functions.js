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
console.log(squared)

console.log(square_number(square_number(3)))
print_name(square_number(3))