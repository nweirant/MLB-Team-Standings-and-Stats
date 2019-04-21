const feildingStats = require('../server/teamFeilding').teamFeilding;
const hittingStats = require ('../server/teamHitting').teamHitting;
const pitchingStats = require('../server/teamPitching').teamPitching;
const standingsStats = require('../server/teamRecords').teamRecords;

const Pitching = require('./db').Pitching;
const Hitting = require('./db').Hitting;
const Feilding = require('./db').Feilding;
const Standings = require('./db').Standings;


function updatePitching() {
    pitchingStats.forEach(team => {
        Pitching.findOneAndUpdate({ "Team" : team["Team"]}, {
            "Team": team["Team"],
            "League": team["League"],
            "W": team["W"],
            "L": team["L"],
            "ERA": team["ERA"],
            "G": team["G"],
            "GS": team["GS"],
            "SV": team["SV"],
            "SVO": team["SVO"],
            "IP": team["IP"],
            "H": team["H"],
            "R": team["R"],
            "ER": team["ER"],
            "HR": team["HR"],
            "BB": team["BB"],
            "SO": team["SO"],
            "AVG": team["AVG"],
            "WHIP": team["WHIP"]
        }, {upsert : true}).exec()
    })
}

function updateHitting() {
    hittingStats.forEach(team => {
        Hitting.findOneAndUpdate({"Team" : team["Team"]}, {
            "Team": team["Team"],
            "League": team["League"],
            "G": team["G"],
            "AB": team["AB"],
            "R": team["R"],
            "H": team["H"],
            "2B": team["2B"],
            "3B": team["3B"],
            "HR": team["HR"],
            "RBI": team["RBI"],
            "BB": team["BB"],
            "SO": team["SO"],
            "SB": team["SB"],
            "CS": team["CS"],
            "AVG": team["AVG"],
            "OBP": team["OBP"],
            "SLG": team["SLG"],
            "OPS": team["OPS"]
        }, {upsert: true}).exec()
    });
}

function updateFeilding() {
    feildingStats.forEach(team => {
        Feilding.findOneAndUpdate({"Team" : team["Team"]}, {
            "Team": team["Team"],
            "League": team["League"],
            "G": team["G"],
            "GS": team["GS"],
            "INN": team["INN"],
            "TC": team["TC"],
            "PO": team["PO"],
            "A": team["A"],
            "E": team["E"],
            "DP": team["DP"],
            "SB": team["SB"],
            "CS": team["CS"],
            "SBPCT": team["SBPCT"],
            "PB": team["PB"],
            "C_WP": team["C_WP"],
            "FPCT": team["FPCT"],
            "DER": team["DER"]
        }, {upsert : true}).exec()
    })
}


function updateStandings() {
    standingsStats.forEach(team => {
        Standings.findOneAndUpdate({"Tm" : team["Tm"]}, {
            "Tm": team["Tm"],
            "Lg": team["Lg"],
            "G": team["G"],
            "W": team["W"],
            "L": team["L"],
            "Strk": team["Strk"],
            "W-L%": team["W-L%"],
            "R": team["R"],
            "RA": team["RA"],
            "Rdiff": team["Rdiff"],
            "Home": team["Home"],
            "Road": team["Road"],
            "last10": team["last10"],
            "last20": team["last20"],
            "last30": team["last30"]
        }, {upsert : true}).exec();
    })
}


//updatePitching();
updateHitting();
//updateFeilding();
//updateStandings();
