console.log("I am a tutorial on Loops")
let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 5; i++) {
//     console.log(a + i);
// this is a for-loop
// }

let obj = {
    name: "Tarun",
    role: "Programmer",
    company: "CodewithTarun AI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
    // forin loop
}

// for (const c of "Tarun") {
//     console.log(c);
//     // forof loop
// }


// let i = 5;
// while (i<6) {
//     console.log(i);
//     i++;

// }


// dowhile loop
// let i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i < 6);