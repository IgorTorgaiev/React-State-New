import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

class Biography extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Igor",
            secondName: "Torgov",
            age: 30,
            interests: "IT, travelling and sports",
            status: "in a relationship"
        };
    }
    changesecondName = () => {
        this.setState({secondName: "Torgaiev"});
    }
    changeAge = () => {
        this.setState({age: 29});
    }
    changeStatus = () => {
        this.setState({status: "single"});
    }
    render() {
        return(
            <div>
                <h1>Brief resume of {this.state.name} <em>{this.state.secondName}</em>.</h1>
                <p>He is already <strong>{this.state.age}</strong> years old.</p>
                <p>He is <strong>{this.state.status}</strong>.</p>
                <p>His interests are: {this.state.interests}.</p>
                <button onClick={this.changesecondName}>Correct his Surname</button>
                
                <button onClick={this.changeAge}>Correct his Age</button>
                
                <button onClick={this.changeStatus}>Correct his Status</button>
            </div>
        );
    }
}
ReactDOM.render(<Biography />, document.getElementById('first'));