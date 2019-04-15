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
