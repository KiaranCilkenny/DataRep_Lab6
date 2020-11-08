const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => //Listening for get request from domain
    res.send('Welcome to Data Representation & Querying')) //This is what it sends back


app.get('/hello/:name', (req, res) => { //Changed the url to return that parameter
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

app.get('/api/movies', (req,res) =>{ //Retrieves data from url
    const mymovies = [
        {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.json({movies:mymovies}); //returns json data
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); //Retrieves data from index.html file by using 'path'
    });
    
    app.get('/name', (req, res) => {
        res.send('Hello ' + " " + req.query.fname + " " + req.query.lname);
        })
        
    app.post('/name', (req, res) => {
        res.send('Hello ' + req.body.fname + " " + req.body.lname); //Post Method doesn't alter the url
    })

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`))
