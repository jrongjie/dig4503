const Express = require("express");
const App = Express();
const port = 80;

App.get("/pages/api/pokemon/id/:id", (req, res) => {

});
App.get("/pages/api/pokemon/name/:name", (req, res) => {

});

App.listen(port, () => {
    console.log ("Got 99 errors but a running server ain\'t one of them!");
});