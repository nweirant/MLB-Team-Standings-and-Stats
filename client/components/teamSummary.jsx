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
        // .then(axios.get(`/api/${this.props/activeTeam}/pitching`)
        // .then(data => {
        //     this.setState({pitching : data})
        // }))
    }

    componentDidMount() {
        this.getTeamData();
    }

    render() {
        return (
            <div>
                SUMMARY
            </div>
        )
    }
}