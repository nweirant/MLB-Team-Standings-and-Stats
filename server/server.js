const express = require('express');
const bodyparser = require('body-parser');
const getAllHitting = require('../db/db').getAllHittingStats;
const getAllFielding = require('../db/db').getAllFeildingStats;
const getAllPitching = require('../db/db').getAllPitchingStats;
const getAllStandings = require('../db/db').getAllStandings;
const getTeamStat = require('../db/db').getTeamStat;
const app = express();

app.use(express.static(__dirname + '/../public/'));
app.use(bodyparser.json());


app.get('/api/allHitting', (req,res) => {
    getAllHitting()
    .then(data => {
        res.send(data);
    })
});
app.get('/api/allPitching', (req,res) => {
    getAllPitching()
    .then(data => {
        res.send(data);
    })
})
app.get('/api/allFeilding', (req,res) => {
    getAllFielding()
    .then(data => {
        res.send(data);
    })
})
app.get('/api/allStandings', (req,res) => {
    getAllStandings()
    .then(data => {
        res.send(data);
    })
})

app.get('/api/:team/:stat', (req,res) => {
    let stat = req.params.stat;
    let team = req.params.team

    getTeamStat(team,stat)
    .then(data => {
        console.log(data);
        res.send(data);
    })
})


app.listen(3000, () => {
    console.log('listining to port 3000');
})
