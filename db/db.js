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
    "WHIP": Number
});

const standingsSchema = new mongoose.Schema({
    "Rk": Number,
    "Tm": String,
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

// module.exports.getTeamPitchingStats = (team) => {
//     return Pitching.findOne({"Team" : team}).exec();
// }


module.exports.getTeamStat = (team, statType) => {
    const teamAbbr = {
        'New York Yankees' : 'NYY', 'Boston Red Sox' : 'BOS', 'Baltimore Orioles' : 'BAL', 'Tampa Bay Rays' : 'TBR', 'Toronto Blue Jays' : 'TOR',
        'Seattle Mariners' : 'SEA', 'Houston Astros' : 'HOU', 'Los Angeles Angels' : 'LAA', 'Oakland Athletics' : 'OAK', 'Texas Rangers' : 'TEX',
        'Philadelphia Phillies' : 'PHI', 'Atlanta Braves' : 'ATL', 'New York Mets' : 'NYM', 'Washington Nationals' : 'WSN', 'Miami Marlins' : 'MIA',
        'Milwaukee Brewers' : 'MIL', 'St. Louis Cardinals' : 'STL', 'Pittsburgh Pirates' : 'PIT', 'Chicago Cubs' : 'CHC', 'Cinncinati Reds' : 'CIN',
        'San Diego Padres' : 'SDP', 'Los Angeles Dodgers' : 'LAD', 'Arizona Diamondbacks' : 'ARI', 'San Francisco Giants' : 'SFG', 'Colorado Rockies' : 'COL',
        'Minnesota Twins' : 'MIN', 'Cleveland Indians' : 'CLE', 'Detroit Tigers' : 'DET', 'Chicago Whitesox' : 'CHW', 'Kansas City Royals' : 'KCR'
    }

    if (teamAbbr[team]) {
        team = teamAbbr[team];
    }

    console.log(team, statType, 'in func');

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
        return Standings.findOne({"Tm" : team}).exec();
    }   
}

module.exports.Hitting = Hitting;
module.exports.Feilding = Feilding;
module.exports.Pitching = Pitching;
module.exports.Standings = Standings;
