let feildingStats = require('../server/teamFeilding').teamFeilding;
let hittingStats = require ('../server/teamHitting').teamHitting;
let pitchingStats = require('../server/teamPitching').teamPitching;
let standingsStats = require('../server/teamRecords').teamRecords;

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

pitchingStats = getRankings(pitchingStats, ["ERA", "SV", "SO", "AVG"]);
standingsStats = getRankings(standingsStats, ["W", "W-L%", "R", "RA", "Rdiff"]);
hittingStats = getRankings(hittingStats, ["R","AVG", "HR", "SO", "OBP", "SB", "SLG", "OPS"]);
feildingStats = getRankings(feildingStats, ["E", "FPCT"]);


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
            "WHIP": team["WHIP"],
            "ERA League Rank" : team["ERA League Rank"],
            "ERA MLB Rank" : team["ERA MLB Rank"],
            "SV League Rank" : team["SV League Rank"],
            "SV MLB Rank" : team["SV MLB Rank"],
            "SO League Rank": team["SO League Rank"],
            "SO MLB Rank" : team["SO MLB Rank"],
            "AVG League Rank" : team["AVG League Rank"],
            "AVG MLB Rank" : team["AVG MLB Rank"]
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
            "OPS": team["OPS"],
            "R League Rank" : team["R League Rank"],
            "R MLB Rank" : team["R MLB Rank"],
            "AVG MLB Rank": team["AVG MLB Rank"],
            "AVG League Rank": team["AVG League Rank"], 
            "HR MLB Rank": team["HR MLB Rank"],
            "HR League Rank": team["HR League Rank"],
            "SO MLB Rank": team["SO MLB Rank"],
            "SO League Rank" : team["SO League Rank"],
            "OBP MLB Rank": team["OBP MLB Rank"],
            "OBP League Rank": team["OBP League Rank"],
            "SB League Rank": team["OBP League Rank"],
            "SB MLB Rank": team["SB MLB Rank"],
            "SLG MLB Rank": team["SLG MLB Rank"],
            "SLG League Rank": team["SLG League Rank"],
            "OPS League Rank": team["OPS League Rank"],
            "OPS MLB Rank": team["OPS MLB Rank"]
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
            "DER": team["DER"],
            "E MLB Rank" : team["E MLB Rank"],
            "E League Rank" : team["E League Rank"],
            "FPCT League Rank" : team["FPCT League Rank"],
            "FPCT MLB Rank" : team["FPCT MLB Rank"]
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
            "last30": team["last30"],
            "W League Rank" : team["W League Rank"],
            "W MLB Rank": team["W MLB Rank"],
            "W-L% MLB Rank": team["W-L% MLB Rank"],
            "W-L% League Rank": team["W-L% League Rank"],
            "R League Rank": team["R League Rank"],
            "R MLB Rank": team["R MLB Rank"],
            "RA MLB Rank": team["RA MLB Rank"],
            "RA League Rank": team["RA League Rank"],
            "Rdiff League Rank": team["Rdiff League Rank"],
            "Rdiff MLB Rank": team["Rdiff MLB Rank"],
        }, {upsert : true}).exec();
    })
}


function getRankings(statCategory, sortableStats) {
    let AL = statCategory.filter(team => team.League === 'AL' || team.Lg === 'AL');
    let NL = statCategory.filter(team => team.League === 'NL' || team.Lg === 'NL');
    
    let ALsortedStats = [];
    let NLsortedStats = [];
    let result = [];

    sortableStats.forEach(stat => {
        let comp = compareStat(stat);
        ALsortedStats = AL.sort(comp);
        NLsortedStats = NL.sort(comp);

        ALsortedStats.forEach( (team, i) => {
            let id = stat + ' League Rank';
                team[id] = i + 1;
        })
        NLsortedStats.forEach( (team, i) => {
            let id = stat + ' League Rank';
                team[id] = i + 1;
        })

        result = ALsortedStats.concat(NLsortedStats);
        result = result.sort(comp);
        result.forEach( (team, i) => {
            let id = stat + ' MLB Rank';
                team[id] = i + 1;
        })
    })
    function compareStat(stat) {
        function compare(a,b) {
            if (a[stat] < b[stat]) {
                return 1;
            }
            if (a[stat] > b[stat]) {
                return -1;
            }
            return 0;
        }
        return compare;
    }
   return result;
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

