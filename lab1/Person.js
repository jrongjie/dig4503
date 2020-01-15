
/* Notes

Objects have two main relationships: 
    is a ( -- Dan is a person);
    as a (has to do with properties, an object can't have another object -- a zoo has a lion);
    or no relationship;

constructor(): allows for quick creation of zombies;

extends: shows the relationship with one and another (+ adds crap to it, like additional info to the specific object that is extended to) can also show inheritance; used in "is a" relationship;

super(): basically tells the parent file to check their own constructor for info instead of having to redeclare stuff in the extend;

-y = shortcut to free reign (the program gets all the yes's)

whenever we extend the properties we need a super and constructor

*/

//OOP example
const chalk = require("chalk");

class Person {
    constructor (name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    //adds a new function to a class
    speak() {
        // figure out why only backticks allow for calling variables with text
        /* WHY DOES CONSOLE.LOG THROUGH AN UNDEFINED!? (remember to look up later)
        console.log(`My name is ${this.name} and my favorite color is ${this.favoriteColor}.`);*/

        //WHY IS IT RETURN?!
        return(chalk.blue(this.name));
    }
}

module.exports = Person;
