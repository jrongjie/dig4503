const Express = require("express");
const App = Express();
const port = 80;

//colors for coolness
const chalk = require("chalk");
//pokemon to catch
const pokemons = require("json-pokemon");
const pokemon = pokemons[0];

//be specific
App.get("/", (req, res) => {
    res.send("To search for Pokemon, please add  name or id and then the name or number of the pokemon to search for in the address bar!");
});

//route: "/id/:id"
App.get("/id/:id", (req, res) => {
    //est id
    let pokeId = req.params.id;
    pokemons.forEach((value) => {
        
        if(value.id == pokeId){
            //valid route
            console.log(chalk.green(value));
            console.log(chalk.green(req.path));
        } else {
            //invalid route
                //return error object
            console.log(chalk.red(`Invalid ID number: ${pokeId})`));
            console.log(chalk.red(res.send(req.path)));
        }
    }); 
});

//route: "/name/:name"
App.get("/name/:name", (req, res) => {
    //est name
    let pokeName = req.params.name;

    pokemons.forEach((value) => {
        if(value.name.toLowerCase() == pokeName){
            //valid route
            console.log(chalk.green(value));
            console.log(chalk.green(req.path));
        } else {
            //invalid route
                //return error object
            console.log(chalk.red(`Invalid name: ${pokeName}`));
            console.log(chalk.red(res.send(req.path)));
        }
    });
});

App.listen(port, () => {
    console.log ("Server running");
});