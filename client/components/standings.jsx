import React from 'react';
import axios from 'axios';

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
            nl_west : []
        }
    }

    getData() {
        axios.get('/api/allStandings')
        .then(data => {
            this.setState({allTeams : data.data}, () => {
                this.sortDivisions(data.data);
            });
        })        
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
                
            </div>
        )
    }
}