class Person {
     public name: string;
     public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public tellMyName() : void {
        console.log(`I am ${this.name}`);
    }

    public tellMyAge() : void {
        console.log(`I am ${this.age} years old`);
    }
}

function john () {
    let john = new Person("John", 40);
    john.tellMyName();
    john.tellMyAge();
}

function mary () {
    let mary = new Person("Mary", 35);
    mary.tellMyName();
    mary.tellMyAge();
}


john();
mary();

