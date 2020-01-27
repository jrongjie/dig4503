class Person {
    constructor(name, color){
        this.name = name; //this refers to the class itself
        this.color = color;
    }

    getName(){
        return this.name;
    }

    getColor(){
        return this.color;
    }
}

module.exports = Person;