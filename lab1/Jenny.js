const Person = require("./Person.js");

class Jenny extends Person {
    constructor(name, favoriteColor, age) {
        super(name, favoriteColor);
        this.age = age;
    }
}

module.exports = Jenny;