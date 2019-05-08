import React from 'react';
import axios from 'axios';
import TeamSummary from './teamSummary.jsx';
import DivisionStandings from './divisionStandings.jsx';

export default class Standings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allTeams : [],
            al_east : [],
            al_west : [],
            al_central : [],
            nl_east : [],
            nl_central : [],
            nl_west : [],
            activeTeam : 'NYY',
            activeLeague: '',
            activeDivison: []
        }

        this.getActiveTeam = this.getActiveTeam.bind(this);
        this.selectDivison = this.selectDivison.bind(this);
        this.selectLeague = this.selectLeague.bind(this);
    }

    getData() {
        axios.get('/api/allStandings')
        .then(data => {
            this.setState({allTeams : data.data}, () => {
                this.sortDivisions(data.data);
            });
        });
                
    }

    getActiveTeam (e) {
        this.setState({activeTeam: e.target.innerHTML});
    }

    sortDivisions(allTeams) {
        let al_East = [];
        let al_West = [];
        let al_Central = [];
        let nl_Central = [];
        let nl_East = [];
        let nl_West = [];

        allTeams.forEach(team => {
            switch (team.Division) {
                case 'ALEAST' :
                    al_East.push(team);
                    break;
                case 'ALCENTRAL' :
                    al_Central.push(team);
                    break;
                case 'ALWEST' :
                    al_West.push(team);
                    break;
                case 'NLEAST' :
                    nl_East.push(team);
                    break;
                case 'NLCENTRAL' :
                    nl_Central.push(team);
                    break;
                case 'NLWEST' :
                    nl_West.push(team);
                    break;
            }
        });

        this.setState({
            al_central : al_Central,
            al_west : al_West,
            al_east : al_East,
            nl_central : nl_Central,
            nl_west : nl_West,
            nl_east : nl_East,
            activeDivison : al_East
        });
    }

    selectLeague(e) {
        this.setState({activeLeague : e.target.value});
    }

    selectDivison(e) {
        let division = this.state[e.target.value].slice();
        this.setState({activeDivison : division});

    }

    componentDidMount() {
        this.getData();
    }
 
    render() {
        return(
            <div>
                <div className="league-buttons">
                    <button type="button" value="AL" onClick={this.selectLeague}>AL</button>
                    <button type="button" value="NL" onClick={this.selectLeague}>NL</button>
                </div>

                <div className="division-buttons">
                    {this.state.activeLeague === 'AL' ? 
                    <div className="al-division-buttons"> 
                        <button type="button" value="al_central" onClick={this.selectDivison} >Central</button>
                        <button type="button" value="al_east" onClick={this.selectDivison}>East</button>
                        <button type="button" value="al_west" onClick={this.selectDivison}>West</button>

                    </div>
                    :
                    <div className="al-division-buttons">
                        <button type="button" value="nl_central" onClick={this.selectDivison}>Central</button>
                        <button type="button" value="nl_east" onClick={this.selectDivison}>East</button>
                        <button type="button" value="nl_west" onClick={this.selectDivison}>West</button>

                    </div>
                    }
                </div>


                    <DivisionStandings division={this.state.activeDivison} activeTeam={this.getActiveTeam} />
                    <TeamSummary activeTeam={this.state.activeTeam} />
                
            </div>
        )
    }
}