const Express = require("express");
const App = Express();
const port = 80;

const MongoDB = require("mongodb");
const MongoClient = require("MongoDB.MongoClient");

const URL = "mongodb+srv://jennifergardner:QULf3PmJOHlpJg4e@cluster0-tc9sb.mongodb.net/"

let collection = null;

MongoClient.connect(URL, (error, connection) => {
    if (error){
        throw error;
    }

    let database = connection.db("DIG4503-78");
    let collection = database.collection("Movies");

});

const cors = require("cors");
App.use(CORS());

App.get("/movies/title/:title", (req, res) => {
    let result = {"error": "Could not find movies"}

    if (collection != null){
        collection.find({"title": `/${req.params.title}/`}) //returns a cursor, a result that we can then do something
        .limit(100)
        .toArray()
        .then((cursorArray) => {
            if (cursorArray.length != 0){
                result = cursorArray;
            }
            
            res.json(result);
        });
    } else {
        res.json(result);
    }
});

App.listen(port, () => {
    console.log("You have just crossed over into The Twilight Zone.");
});