let obj = {
    a: 1,
    b: "harry"
}

console.log(obj);


//example of prototype inheritence
// document.write(obj)


// let animal ={
//     eats:true
// }

// let rabbit ={
//     jumps:true,
//     runs:false
// }

// rabbit.__proto__= animal; //  sets rabit.[[Prototype]] to point at Animal object.
// console.log(rabbit)

class animal {
    constructor(name) {
        this.name = name
        console.log('object is created...');
    }

    eats() {
        console.log('kha rha hai');

    }
    jumps() {
        console.log('ucchal rha hai');

    }
    runs() {
        return false
    }
}

class lion extends animal {
    constructor(name) {
        // this.name = name;
        super(name); //helps to iherit the previous perent class in js
        console.log('object is lion and his name is shera....');

        //method overwriting 

    }
    eats() {
        super.eats() // helps to print both the output of sub class and su[er class 

        // sub class is present class]
        console.log('kha rha hai or roar bhi kr rhA hai');
    }

}
let object = new animal("bunny");
console.log(object);

let l = new lion("shera");
console.log(l);


class user {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;

    }

    set name(value) {
        if (value.length < 4) {
            console.log('"the name is too short');
            return;
        }
        this._name = value;
    }

}
let user = new user("jhon");
console.log(user.name);

// user.name("aditya")
// console.log(user);