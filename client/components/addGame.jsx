import React from 'react'
import axios from 'axios';

export default class AddGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeTeam : {
                abbr : '', 
                runs : 0,  
                hits : 0,
                errors : 0,  
                so : 0, 
                abs : 0, 
                bbs  : 0, 
                hrs  : 0, 
            },
            awayTeam : {
                abbr : '', 
                runs : 0,  
                hits : 0,
                errors : 0,  
                so : 0, 
                abs : 0, 
                bbs  : 0, 
                hrs  : 0, 
            },
            inningsPlayed : 0,
            winner : '',
        }

        this.handleChangeHome = this.handleChangeHome.bind(this);
        this.handleChangeAway = this.handleChangeAway.bind(this);
        this.uploadData = this.uploadData.bind(this);
    }

    handleChangeHome(e) {
        let value = e.target.name;
        let homeTeamUpdated = this.state.homeTeam;
        homeTeamUpdated[value] = (e.target.value).toUpperCase();
        this.setState({homeTeam: homeTeamUpdated});
    }
    handleChangeAway(e) {
        let value = e.target.name;
        let awayTeamUpdated = this.state.awayTeam;
        awayTeamUpdated[value] = (e.target.value).toUpperCase();
        this.setState({awayTeam: awayTeamUpdated});
    }

    uploadData() {
        // let whoWon;
        // if (this.state.homeTeam.runs > this.state.awayTeam.runs) {
        //     whoWon = this.state.homeTeam.abbr;
        // }
        // else if (this.state.homeTeam.runs < this.state.awayTeam.runs){
        //     whoWon = this.state.awayTeam.abbr;
        // }

        // let ip = prompt('Enter innings played');
        // this.setState({winner: whoWon, inningsPlayed: ip}, () => {
        //     axios.post('/uploadGame', this.state)
        //     .then(() => console.log('uploaded'));
        // })

        axios.post('/uploadTeam', this.state.homeTeam)
        .then(() => console.log('uploaded team data'));

    }

    render() {
        return (
            <div>
                HOME TEAM 
                <form>
                    <label>Team abbr
                        <input type="text" name="abbr" maxLength="3" onChange={this.handleChangeHome}/>
                    </label> <br></br>
                    <label>Runs
                        <input type="number" name="runs" onChange={this.handleChangeHome}/>
                    </label> <br></br>
                    <label>Hits
                        <input type="number" name="hits" onChange={this.handleChangeHome}/>
                    </label> <br></br>
                    <label>Errors
                        <input type="number" name="errors" onChange={this.handleChangeHome}/>
                    </label> <br></br>
                    <label>Hitting Strikeouts
                        <input type="number" name="so" onChange={this.handleChangeHome}/>
                    </label> <br></br>
                    <label>At Bats
                        <input type="number" name="abs" onChange={this.handleChangeHome}/>
                    </label> <br></br>
                    <label>Walks
                        <input type="number" name="bbs" onChange={this.handleChangeHome}/>
                    </label> <br></br>
                    <label>Home Runs
                        <input type="text" name="hrs" maxLength="3" onChange={this.handleChangeHome}/>
                    </label>
                </form>
                <br></br><br></br>
                Away TEAM 
                <form>
                    <label>Team abbr
                        <input type="text" name="abbr" maxLength="3" onChange={this.handleChangeAway}/>
                    </label> <br></br>
                    <label>Runs
                        <input type="number" name="runs" onChange={this.handleChangeAway}/>
                    </label> <br></br>
                    <label>Hits
                        <input type="number" name="hits" onChange={this.handleChangeAway}/>
                    </label> <br></br>
                    <label>Errors
                        <input type="number" name="errors" onChange={this.handleChangeAway}/>
                    </label> <br></br>
                    <label>Hitting Strikeouts
                        <input type="number" name="so" onChange={this.handleChangeAway}/>
                    </label> <br></br>
                    <label>At Bats
                        <input type="number" name="abs" onChange={this.handleChangeAway}/>
                    </label> <br></br>
                    <label>Walks
                        <input type="number" name="bbs" onChange={this.handleChangeAway}/>
                    </label> <br></br>
                    <label>Home Runs
                        <input type="text" name="hrs" maxLength="3" onChange={this.handleChangeAway}/>
                    </label>
                </form>

                <button type="button" onClick={this.uploadData}> SUBMIT </button>
            </div>
        )
    }
}