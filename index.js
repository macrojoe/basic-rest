const express = require("express");
const got = require('got');
const { pipeline } = require('stream');

const app = express();
app.listen(3000, () => {

});

app.get('/greet', function (req, res) {
    res.send('Hello World');
});

app.get('/bored', async function (req, res) {
    const boredapi = await got('https://www.boredapi.com/api/activity').json();
    if(boredapi.hasOwnProperty('activity')){
        res.send(boredapi.activity);
    }
    else{
        res.status(500).send("Bored API error");
    }
});

module.exports = app;