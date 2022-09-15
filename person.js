var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
function john() {
    var john = new Person("John", 40);
    john.tellMyName();
    john.tellMyAge();
}
function mary() {
    var mary = new Person("Mary", 35);
    mary.tellMyName();
    mary.tellMyAge();
}
john();
mary();
