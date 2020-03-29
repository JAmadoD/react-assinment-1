import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
 

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
                <UserOutput
                    name={this.state.name}
                    changed={this.nameHandler}  
                >
                    general Kenobi
                </UserOutput>
                <UserInput
                    name={this.state.name}
                    changed={this.nameHandler}
                >Hello there</UserInput>
                
                
                
            </div>
        )
    }
}


export default App;
