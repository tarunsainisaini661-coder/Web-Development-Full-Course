let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


console.log(random)

if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${ a } ${ c } ${ b }`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)         
    
    // eval ko hume apni production site mai kabhi nhi dalna chaiye, karna to hai bss hume pta hona chaiye ki use kha par hoga

}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${ a } ${ c } ${ b }`)}`) 
}
