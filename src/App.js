import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/userInput';

class App extends Component {

    nameHandler = (newName) => {
        this.setState({
            userInputs: [
                {name: newName}]
        }
        )
    }


    userNameSwitch = (event) => {
        this.setState({
            userInputs: [
                {name: event.target.value}
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>This is a Header</h1>
                <div id='userOutput'>
                    <p>This is Paragraph 1</p>
                    <p>This is Paragraph 2</p>      
                    
                </div>
                <UserInput
                    name="joshua"
                    changed={this.userNameSwitch.name}
                >Hello there</UserInput>
                
                
            </div>
        )
    }
}


export default App;
