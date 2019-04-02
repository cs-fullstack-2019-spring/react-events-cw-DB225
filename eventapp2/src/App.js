import React, { Component } from 'react';
import './App.css';
import Players from'./Players';


class App extends Component {

    render() {
        return (
            <div className="App">
                <p>
                    <button onClick={this.handleClick}>1pt</button>
                    <button onClick={this.handleClick2}>5pts</button>
                    <button onClick={this.handleClick3}>10pts</button>
                </p>
                <header>
                    <Players name='Player1' />
                    <Players name='Player2'/>
                    <Players name='Player3'/>
                </header>
            </div>
        );
    }
}

export default App;
