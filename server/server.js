// Require express - gives us a function
const express = require('express');
// Require body-parser to parse through data
const bodyParser = require('body-parser');

// create an instance of express by calling the function
// returned above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

const quotesData = require('./modules/quotes.js')

app.get('/quotes', (req, res) => {
    console.log('Hi from get request')
    res.send(quotesData.list);
});


app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandomInt(quotesData.list.length);
    res.send(quotesData.list[randomNumber]);
});
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.post('/quotes', (req, res) => {
    console.log('Hello from post', req.body);
    quotesData.list.push(req.body);
    console.log(quotesData);
});

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});


