// Factory Function to Create Animal Objects
function createAnimal(name, legs) {
    return {
        name: name,
        legs: legs,
        greet: function() {
            console.log(`Hi, I am ${this.name}. I have ${this.legs} legs.`);
        }
    };
}

const animal1 = createAnimal('Elephant', 4);
animal1.greet(); // Output: Hi, I am Elephant. I have 4 legs.


// Constructor Function
function Animal(name, legs) {
    this.name = name;
    this.legs = legs;
}

Animal.prototype.greet = function() {
    console.log(`Hi, I am ${this.name}. I have ${this.legs} legs.`);
};

const animal2 = new Animal('Kangaroo', 2);
animal2.greet(); // Output: Hi, I am Kangaroo. I have 2 legs.


// ES6 Class
class AnimalClass {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }

    greet() {
        console.log(`Hi, I am ${this.name}. I have ${this.legs} legs.`);
    }
}

const animal3 = new AnimalClass('Tiger', 4);
animal3.greet(); // Output: Hi, I am Tiger. I have 4 legs.
