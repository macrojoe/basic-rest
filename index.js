const express = require("express");
const got = require('got');
const { pipeline } = require('stream');

const app = express();
app.listen(3000, () => {
 console.log("Server is running at port 3000");
});

app.get('/greet', function (req, res) {
    res.send('Hello World');
});

app.get('/bored', async function (req, res) {
    const boredapi = await got('https://www.boredapi.com/api/activity').json();
    res.send(boredapi.activity);
});