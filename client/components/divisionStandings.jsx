import React from 'react';

export default class DivisionStandings extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <table className={this.props.league + '-table'}>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Win%</th>
                        <th>AL Rank</th>
                        <th>MLB Rank</th>
                        <th>Streak</th>
                        <th>Last 10</th>
                        <th>Run Diff.</th>
                        
                    </tr>
                        {this.props.divison.map(team => (     
                            <tr>
                                <td onClick={this.props.activeTeam}>{team.Tm}</td>
                                <td>{team.W}</td>
                                <td>{team.L}</td>
                                <td>{team["W-L%"]}</td>
                                <td>{team["W-L% League Rank"]}</td>
                                <td>{team["W-L% MLB Rank"]}</td>
                                <td>{team.Strk}</td>
                                <td>{team.last10}</td>
                                <td>{team.Rdiff}</td>

                            </tr>

                        ))}
                     </table>
                </div>
        )
    }
}