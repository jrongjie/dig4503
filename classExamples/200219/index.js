const Express = require("express");
const App = Express();
const port = 80;
const fs = require("fs");

let contends = fs.readFilesSync("database.json");
let database = JSON.parse(contents);

const cors = require("cors");
App.use(cors()); //allows the server and the development server to run at the same time

App.get("/shows/name/:name", (req, res) => {
    let result = {"error": "Could not find name!"};

    res.json(result);
});

App.get("/shows/score/:score", (req, res) => {
    let result = {"error": "Could not find score!"};

    res.json(result);
});

App.get("/shows/episode/:episode", (req, res) => {
    let result = {"error": "Could not find episode count!"};

    res.json(result);
});

App.listen(port, () => {

});