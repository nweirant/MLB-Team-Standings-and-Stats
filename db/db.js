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

const db = mongoose.connection;

const feildingSchema = new mongoose.Schema({
    "RK": Number,
    "Team": String,
    "Division" : String,
    "League": String,
    "G": Number,
    "GS": Number,
    "INN": Number,
    "TC": Number,
    "PO": Number,
    "A": Number,
    "E": Number,
    "DP": Number,
    "SB": Number,
    "CS": Number,
    "SBPCT": Number,
    "PB": Number,
    "C_WP": Number,
    "FPCT": Number,
    "DER": Number
});


const hittingSchema = new mongoose.Schema({
    "RK": Number,
    "Team": String,
    "Division" : String,
    "League": String,
    "G": Number,
    "AB": Number,
    "R": Number,
    "H": Number,
    "2B": Number,
    "3B": Number,
    "HR": Number,
    "RBI": Number,
    "BB": Number,
    "SO": Number,
    "SB": Number,
    "CS": Number,
    "AVG": Number,
    "OBP": Number,
    "SLG": Number,
    "OPS": Number
});

const pitchingSchema = new mongoose.Schema({
    "RK": Number,
    "Team": String,
    "Division" : String,
    "League": String,
    "W": Number,
    "L": Number,
    "ERA": Number,
    "G": Number,
    "GS": Number,
    "SV": Number,
    "SVO": Number,
    "IP": Number,
    "H": Number,
    "R": Number,
    "ER": Number,
    "HR": Number,
    "BB": Number,
    "SO": Number,
    "AVG": Number,
    "WHIP": Number,
    'ERA League Rank': Number,
    'ERA MLB Rank': Number,
    'SV League Rank': Number,
    'SV MLB Rank': Number,
    'SO League Rank': Number,
    'SO MLB Rank': Number,
    "AVG League Rank": Number,
    "AVG MLB Rank" : Number
});

const standingsSchema = new mongoose.Schema({
    "Rk": Number,
    "Tm": String,
    "Division" : String,
    "Lg": String,
    "G": Number,
    "W": Number,
    "L": Number,
    "Strk": String,
    "W-L%": Number,
    "R": Number,
    "RA": Number,
    "Rdiff": Number,
    "Home": String,
    "Road": String,
    "last10": String,
    "last20": String,
    "last30": String,
    "≥.500": String,
    "<.500": String
});


const Feilding = mongoose.model('Feilding', feildingSchema);
const Pitching = mongoose.model('Pitching', pitchingSchema);
const Hitting = mongoose.model('Hitting', hittingSchema);
const Standings = mongoose.model('Standings', standingsSchema);


module.exports.getAllPitchingStats = function () {
    return Pitching.find({}).exec();
}

module.exports.getAllHittingStats = function () {
    return Hitting.find({}).exec();
}

module.exports.getAllFeildingStats = () => {
    return Feilding.find({}).exec();
}

module.exports.getAllStandings = () => {
    return Standings.find({}).exec();
}

module.exports.getLeagueStats = (leauge, stat) => {
    leauge = leauge.toUpperCase();
    stat = stat.toLowerCase();
    switch(stat) {
        case "hitting" :
            return Hitting.find({"League" : leauge});
        case "feilding" :
            return Feilding.find({"League" : leauge});
        case "pitching" :
            return Pitching.find({"League" : leauge});
        case "standings" : 
            return Standings.find({"Lg" : leauge});
    }
}

module.exports.getDivisionStats = (division, stat) => {
    division = division.toUpperCase();
    stat = stat.toLowerCase();
    switch(stat) {
        case "hitting" :
            return Hitting.find({"Division" : division});
        case "feilding" :
            return Feilding.find({"Division" : division});
        case "pitching" :
            return Pitching.find({"Division" : division});
        case "standings" : 
            return Standings.find({"Division" : division});
    }
};

module.exports.getTeamStat = (team, statType) => {
    const teamAbbr = {
        'NYY' : 'New York Yankees', 'BOS' : 'Boston Red Sox', 'BAL' : 'Baltimore Orioles', 'TBR' : 'Tampa Bay Rays', 'TOR' : 'Toronto Blue Jays',
        'SEA' :'Seattle Mariners',  'HOU' : 'Houston Astros', 'LAA' :'Los Angeles Angels', 'OAK' : 'Oakland Athletics',  'TEX' :'Texas Rangers',
        'PHI' : 'Philadelphia Phillies',  'ATL' : 'Atlanta Braves',  'NYM' : 'New York Mets',  'WSN' : 'Washington Nationals', 'MIA' : 'Miami Marlins',
        'MIL' : 'Milwaukee Brewers',  'STL' : 'St. Louis Cardinals',  'PIT' : 'Pittsburgh Pirates',  'CHC' : 'Chicago Cubs', 'CIN' : 'Cincinnati Reds',
        'SDP' : 'San Diego Padres',  'LAD' : 'Los Angeles Dodgers', 'ARI' : 'Arizona Diamondbacks', 'SFG' : 'San Francisco Giants',  'COL' : 'Colorado Rockies',
        'MIN' : 'Minnesota Twins',  'CLE' : 'Cleveland Indians', 'DET' : 'Detroit Tigers', 'CHW' : 'Chicago Whitesox', 'KCR' :'Kansas City Royals'
    }
    let abbr = team.toUpperCase();
    if (teamAbbr[abbr]) {
        team = teamAbbr[abbr];
    }
    if (statType === "pitching") {
        return Pitching.findOne({"Team" : team}).exec();
    }
    else if (statType === "hitting") {
        return Hitting.findOne({"Team" : team}).exec();
    }
    else if (statType === "fielding") {
        return Feilding.findOne({"Team" : team}).exec();
    }
    else if (statType === "standings") {
        return Standings.findOne({"Tm" : abbr}).exec();
    }   
}

module.exports.Hitting = Hitting;
module.exports.Feilding = Feilding;
module.exports.Pitching = Pitching;
module.exports.Standings = Standings;
