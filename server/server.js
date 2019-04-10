const express = require('express');
const bodyparser = require('body-parser');
const addGame = require('../db/db.js').addGame;
const updateTeam = require('../db/db.js').updateTeam;

const app = express();

app.use(express.static(__dirname + '/../public/'));
app.use(bodyparser.json());


app.post('/uploadGame', (req,res) => {
    let data = req.body;
    console.log(data);
    addGame(data);

    res.sendStatus(201);
})

app.post('/uploadTeam', (req,res) => {
    let name = req.body.abbr;
    console.log('home', req.body);
    updateTeam(name, req.body);

    res.send('uploaded stats');
})

app.listen(3000, () => {
    console.log('listining to port 3000');
})
