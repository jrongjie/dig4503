const Jenny = require("./Jenny.js");

class Jenny extends Person {
    constructor(name, favoriteColor, status) {
        super(name, favoriteColor);
        this.status = status;
    }
}

module.exports = Jenny;