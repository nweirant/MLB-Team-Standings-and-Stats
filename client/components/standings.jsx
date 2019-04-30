import React from 'react';
import axios from 'axios';
import TeamSummary from './teamSummary.jsx';

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
            activeTeam : 'NYY'
        }

        this.getActiveTeam = this.getActiveTeam.bind(this);
    }

    getData() {
        axios.get('/api/allStandings')
        .then(data => {
            this.setState({allTeams : data.data}, () => {
                this.sortDivisions(data.data);
            });
        })        
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
        });
    }

    componentDidMount() {
        this.getData();
    }
 
    render() {
        return(
            <div>
                <div>
                    <TeamSummary activeTeam={this.state.activeTeam} />
                </div>
                <div>
                    <h4>AL EAST</h4>
                    <table>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>Streak</th>


                    </tr>
                        {this.state.al_east.map(team => (     
                            <tr>
                                <td onClick={this.getActiveTeam}>{team.Tm}</td>
                                <td>{team.W}</td>
                                <td>{team.L}</td>
                                <td>{team["W-L%"]}</td>
                                <td>{team.Strk}</td>

                            </tr>

                        ))}
                     </table>
                </div>

                <div>
                    <h4>AL WEST</h4>
                    <table>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>Streak</th>

                    </tr>
                        {this.state.al_west.map(team => (     
                            <tr>
                                <td onClick={this.getActiveTeam}>{team.Tm}</td>
                                <td>{team.W}</td>
                                <td>{team.L}</td>
                                <td>{team["W-L%"]}</td>
                                <td>{team.Strk}</td>

                            </tr>

                        ))}
                     </table>

                </div>

                <div>
                    <h4>AL CENTRAL</h4>
                    <table>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>Streak</th>

                    </tr>
                        {this.state.al_central.map(team => (     
                            <tr>
                                <td onClick={this.getActiveTeam}>{team.Tm}</td>
                                <td>{team.W}</td>
                                <td>{team.L}</td>
                                <td>{team["W-L%"]}</td>
                                <td>{team.Strk}</td>


                            </tr>

                        ))}
                     </table>
                </div>
                <div>
                    <h4>NL EAST</h4>
                    <table>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>Streak</th>

                    </tr>
                        {this.state.nl_east.map(team => (     
                            <tr>
                                <td onClick={this.getActiveTeam}>{team.Tm}</td>
                                <td>{team.W}</td>
                                <td>{team.L}</td>
                                <td>{team["W-L%"]}</td>
                                <table>{team.Strk}</table>

                            </tr>

                        ))}
                     </table>
                </div>
                <div>
                    <h4>NL WEST</h4>
                    <table>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>Streak</th>

                    </tr>
                        {this.state.nl_west.map(team => (     
                            <tr>
                                <td onClick={this.getActiveTeam}>{team.Tm}</td>
                                <td>{team.W}</td>
                                <td>{team.L}</td>
                                <td>{team["W-L%"]}</td>
                                <td>{team.Strk}</td>


                            </tr>

                        ))}
                     </table>
                </div>
                <div>
                    <h4>NL CENTRAL</h4>
                    <table>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>Streak</th>

                    </tr>
                        {this.state.nl_central.map(team => (     
                            <tr>
                                <td onClick={this.getActiveTeam}>{team.Tm}</td>
                                <td>{team.W}</td>
                                <td>{team.L}</td>
                                <td>{team["W-L%"]}</td>
                                <td>{team.Strk}</td>

                            </tr>

                        ))}
                     </table>
                </div>
            </div>
        )
    }
}