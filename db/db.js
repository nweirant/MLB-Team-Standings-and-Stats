const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mlb', (err) => {
    if (err) {
        console.log('error');
        console.log(err);
    }
    else {
        console.log('success connecting to mongo');
    }
});

const db = mongoose.connection();

const gameSchema = new mongoose.Schema({
    homeTeam : {
      abbr : String,
      runs : Number,
      hits : Number,
      errors : Number,
      so: Number,
      abs: Number,
      bbs: Number,
      hrs: Number
    },
    awayTeam : {
        abbr: String,
        runs : Number,
        hits : Number,
        errors : Number,
        so: Number,
        abs: Number,
        bbs: Number,
        hrs: Number
      },
    winner: String,
    score : String,
    inningsPlayed : Number
});


const teamSchema = new mongoose.Schema({
    abbr: String,
    runs : Number,
    hits : Number,
    errors : Number,
    so: Number,
    abs: Number,
    bbs: Number,
    hrs: Number,
    games : Array,
    gamesPlayed : Number,
    wins : Number,
    losses : Number,
    homeWins : Number,
    homeLosses : Number,
    awayWins : Number,
    awayLossts : Number,
    divisionWins : Number,
    divisionLosses : Number
});

const Game = mongoose.model('Game', gameSchema);
const Team = mongoose.model('Team', teamSchema);

const addGame = function(game) {
    console.log('inserting game...');
    Game.findByIdAndUpdate(
        {}, {
        homeTeam : {
            abbr : game.homeTeam.abbr,
            runs : game.homeTeam.runs,
            hits : game.homeTeam.hits,
            errors : game.homeTeam.errors,
            so: game.homeTeam.so,
            abs: game.homeTeam.abs,
            bbs: game.homeTeam.bbs,
            hrs: game.homeTeam.hrs
          },
          awayTeam : {
            abbr : game.awayTeam.abbr,
            runs : game.awayTeam.runs,
            hits : game.awayTeam.hits,
            errors : game.awayTeam.errors,
            so: game.awayTeam.so,
            abs: game.awayTeam.abs,
            bbs: game.awayTeam.bbs,
            hrs: game.awayTeam.hrs
            },
          winner: game.winner,
          inningsPlayed : game.inningsPlayed
    },
    {upsert : true}
    ).exec();
};

const updateTeam = function(name, stats) {
    Team.findOneAndUpdate(
        {abbr : name}, 
        {
        runs : stats.runs,
        hits : stats.hits,
        errors : stats.errors,
        so: stats.so,
        abs: stats.abs,
        bbs: stats.bbs,
        hrs: stats.hrs,
        games : stats.games,
        gamesPlayed : stats.gamesPlayed,
        wins : stats.wins,
        losses : stats.losses,
        homeWins : stats.homeWins,
        homeLosses : stats.homeLosses,
        awayWins : stats.awayWins,
        awayLosses : stats.awayLosses,
        divisionWins : stats.divisionWins,
        divisionLosses : stats.divisionLosses
        },
        {upsert: true}
        ).exec();
}


module.exports.updateTeam = updateTeam;
module.exports.addGame = addGame;