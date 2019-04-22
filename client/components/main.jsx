import React from 'react';
import Standings from './standings.jsx';
// import axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Main
                <Standings />
            </div>
        )
    }
}
