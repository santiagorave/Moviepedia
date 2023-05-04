const filePath = "../data/movies.json";
const fileManager = require('fs');

let movieList = JSON.parse(fileManager.readFileSync(filePath,"utf8"));

const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/movies-api",function(req,res){
    res.json(movieList);
});

app.listen(5000,function(){
    console.log("Server running into port 5000");
});