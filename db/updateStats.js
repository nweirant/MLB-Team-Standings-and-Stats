const feildingStats = require('../server/teamFeilding').teamFeilding;
const hittingStats = require ('../server/teamHitting').teamHitting;
const pitchingStats = require('../server/teamPitching').teamPitching;
const standingsStats = require('../server/teamRecords').teamRecords;

const Pitching = require('./db').Pitching;
const Hitting = require('./db').Hitting;
const Feilding = require('./db').Feilding;
const Standings = require('./db').Standings;

const divisions = {
    'NYY' : 'ALEAST', 'New York Yankees' : 'ALEAST', 'BOS' : 'ALEAST', 'Boston Red Sox' : 'ALEAST', 'BAL' : 'ALEAST', 'Baltimore Orioles' : 'ALEAST', 'TBR' : 'ALEAST', 'Tampa Bay Rays' : 'ALEAST', 'TOR' : 'ALEAST', 'Toronto Blue Jays' : 'ALEAST',
    'SEA' : 'ALWEST', 'Seattle Mariners' : 'ALWEST',  'HOU' : 'ALWEST', 'Houston Astros' : 'ALWEST', 'LAA' : 'ALWEST', 'Los Angeles Angels' : 'ALWEST', 'OAK' : 'ALWEST', 'Oakland Athletics' : 'ALWEST',  'TEX' : 'ALWEST', 'Texas Rangers' : 'ALWEST',
    'PHI' : 'NLEAST', 'Philadelphia Phillies' : 'NLEAST', 'ATL' : 'NLEAST', 'Atlanta Braves' : 'NLEAST', 'NYM' : 'NLEAST', 'New York Mets' : 'NLEAST',  'WSN' : 'NLEAST', 'Washington Nationals': 'NLEAST', 'MIA' : 'NLEAST','Miami Marlins': 'NLEAST',
    'MIL' : 'NLCENTRAL', 'Milwaukee Brewers' : 'NLCENTRAL',  'STL' : 'NLCENTRAL', 'St. Louis Cardinals': 'NLCENTRAL',  'PIT' : 'NLCENTRAL', 'Pittsburgh Pirates': 'NLCENTRAL',  'CHC' : 'NLCENTRAL', 'Chicago Cubs': 'NLCENTRAL', 'CIN' : 'NLCENTRAL', 'Cincinnati Reds': 'NLCENTRAL',
    'SDP' : 'NLWEST', 'San Diego Padres' : 'NLWEST',  'LAD'  : 'NLWEST', 'Los Angeles Dodgers'  : 'NLWEST', 'ARI'  : 'NLWEST', 'Arizona Diamondbacks'  : 'NLWEST', 'SFG'  : 'NLWEST', 'San Francisco Giants'  : 'NLWEST',  'COL'  : 'NLWEST', 'Colorado Rockies'  : 'NLWEST',
    'MIN' : 'ALCENTRAL', 'Minnesota Twins': 'ALCENTRAL',  'CLE' : 'ALCENTRAL', 'Cleveland Indians': 'ALCENTRAL', 'DET' : 'ALCENTRAL', 'Detroit Tigers': 'ALCENTRAL', 'CHW': 'ALCENTRAL', 'Chicago Whitesox': 'ALCENTRAL', 'KCR' : 'ALCENTRAL','Kansas City Royals' : 'ALCENTRAL'
}

function updatePitching() {
    pitchingStats.forEach(team => {
        Pitching.findOneAndUpdate({ "Team" : team["Team"]}, {
            "Team": team["Team"],
            "League": team["League"],
            "Division" : divisions[team["Team"]],
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
            "Division" : divisions[team["Team"]],
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
            "Division" : divisions[team["Team"]],
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
            "Division" : divisions[team["Tm"]],
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

updateData = async() => {
    await updatePitching();
    await updateHitting();
    await updateFeilding();
    await updateStandings();
    console.log('updated!');
}
module.exports.updateData = updateData;
updateData();
