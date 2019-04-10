import React from 'react';
import AddGame from './addGame.jsx';
// // import axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddGame />
            </div>
        )
    }
}
