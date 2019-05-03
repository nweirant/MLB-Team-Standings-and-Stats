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
            <div>
                <h1>{this.state.hitting.Team } ({this.state.standing.W} - {this.state.standing.L}) </h1>
            </div>
        )
    }
}