let obj = {
    a: 1,
    b: "Tarun"
}

console.log(obj)

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("Kha raha hoon")
    }
    jumps() {
        console.log("Kood rha hoon")
    }
}


class Lion extends Animal {
    constructor(name) {
        super(name)
        this.name = name
        console.log("Object is created and he is lion...")
    }

    eats() {
        console.log("Kha rha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)


let l = new Lion("shera")
console.log(l)

