function teamStats(abbr,runs,hits, errors, so, abs, bbs,hrs) {
 return {
    abbr, 
    runs,  
    hits,
    errors,  
    so, 
    abs, 
    bbs, 
    hrs, 
    }
}   

function newGame(home, away, inningsPlayed) {
    let winner;
    if (home.runs > away.runs) {
        winner = home.abbr;
    }
    else {
        winner = away.abbr;
    }
    return {homeTeam: home, awayTeam : away, inningsPlayed: inningsPlayed, winner : winner};
}

//abbr,runs,hits, errors, so, abs, bbs,hrs

module.exports.newGame = newGame;
module.exports.teamStats = teamStats;