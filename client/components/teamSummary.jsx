import React from 'react';
import axios from 'axios';

export default class TeamSummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hitting : {},
            feilding : {},
            pitching : {},
            standing : {}
        }
    }


    getTeamData() {
        axios.get(`/api/${this.props.activeTeam}/hitting`)
        .then(data => {
            this.setState({hitting: data.data});
        })
        axios.get(`/api/${this.props.activeTeam}/pitching`)
        .then(data => {
             this.setState({pitching : data.data})
        })
        axios.get(`/api/${this.props.activeTeam}/feilding`)
        .then(data => {
             this.setState({feilding : data.data})
        })
        axios.get(`/api/${this.props.activeTeam}/standings`)
        .then(data => {
             this.setState({standing : data.data})
        })
    }

    componentDidMount() {
        this.getTeamData();
    }
    componentDidUpdate(prevProps) {
        if(this.props.activeTeam !== prevProps.activeTeam)
        {
            this.getTeamData();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                <h1>{this.state.hitting.Team } ({this.state.standing.W} - {this.state.standing.L}) </h1>
                <table className="summaryTable">
                    <h3>Hitting</h3>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>{this.state.hitting.League + ' rank'}</th>
                        <th>MLB rank</th>
                    </tr>

                    <tr>
                        <th>AVG.</th>
                        <td>{this.state.hitting.AVG}</td>
                        <td>{this.state.hitting["AVG League Rank"]}</td>
                        <td>{this.state.hitting["AVG MLB Rank"]}</td>
                    </tr>

                    <tr>
                        <th>HR</th>
                        <td>{this.state.hitting.HR}</td>
                        <td>{this.state.hitting["HR League Rank"]}</td>
                        <td>{this.state.hitting["HR MLB Rank"]}</td>
                    </tr>
                    <tr>
                        <th>R</th>
                        <td>{this.state.hitting.R}</td>
                        <td>{this.state.hitting["R League Rank"]}</td>
                        <td>{this.state.hitting["R MLB Rank"]}</td>
                    </tr>
                </table>
                </div>

                <div className="col-2">
                <table className="summaryTable">
                    <h3>Pitching</h3>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>{this.state.pitching.League + ' rank'}</th>
                        <th>MLB rank</th>
                    </tr>

                    <tr>
                        <th>ERA</th>
                        <td>{this.state.pitching.ERA}</td>
                        <td>{this.state.pitching["ERA League Rank"]}</td>
                        <td>{this.state.pitching["ERA MLB Rank"]}</td>
                    </tr>

                    <tr>
                        <th>SV</th>
                        <td>{this.state.pitching.SV}</td>
                        <td>{this.state.pitching["SV League Rank"]}</td>
                        <td>{this.state.pitching["SV MLB Rank"]}</td>
                    </tr>
                    <tr>
                        <th>SO</th>
                        <td>{this.state.pitching.SO}</td>
                        <td>{this.state.pitching["SO League Rank"]}</td>
                        <td>{this.state.pitching["SO MLB Rank"]}</td>
                    </tr>
                </table>
                </div>


                <div className="col-2">
                <table className="summaryTable">
                    <h3>Feilding</h3>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>{this.state.feilding.League + ' rank'}</th>
                        <th>MLB rank</th>
                    </tr>

                    <tr>
                        <th>FPCT</th>
                        <td>{this.state.feilding.FPCT}</td>
                        <td>{this.state.feilding["FPCT League Rank"]}</td>
                        <td>{this.state.feilding["FPCT MLB Rank"]}</td>
                    </tr>

                    <tr>
                        <th>E</th>
                        <td>{this.state.feilding.E}</td>
                        <td>{15 - this.state.feilding["E League Rank"]}</td>
                        <td>{30 - this.state.feilding["E MLB Rank"]}</td>
                    </tr>
                
                </table>
                </div>
            </div>
        )
    }
}

    
