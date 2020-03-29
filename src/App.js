import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/userInput';

class App extends Component {


    state = { name: "Joshua" };

    nameHandler = (e) => {
        const newName = e.target.value;
        this.setState({ name: newName })
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
                    changed={this.nameHandler.name}
                >Hello there</UserInput>
                
                
            </div>
        )
    }
}


export default App;
