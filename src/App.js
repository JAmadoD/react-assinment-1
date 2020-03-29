import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
 

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
                    name={this.state.name}
                    changed={this.nameHandler}
                >Hello there Obi Wan</UserInput>
                
                
                
            </div>
        )
    }
}


export default App;
