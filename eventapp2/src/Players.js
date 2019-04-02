import React, { Component } from 'react';
import './App.css';

class Players extends Component {
    state = {count: 0, count2: 0, count3:0};

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClickOne = this.handleClickOne.bind(this);
    }


    render() {
        return (
            <div>
                <label>{this.props.name}
                    <p>Score: {this.state.count} </p>
                    <p>
                        <button onClick={this.handleClickOne}>
                            1pt
                        </button>
                    </p>
                </label>
            </div>
        );
    }

    handleClickOne(e) {
        if(this.handleClick){
            this.setState({count: ++this.state.count,count2: ++this.state.count2,count3: ++this.state.count3});
        }
        else if(this.handleClick2){
            this.setState({count: this.state.count+=5,count2: this.state.count2+=5,count3: this.state.count3+=5});
        }
        else if(this.handleClick3){
            this.setState({count: this.state.count+=10,count2: this.state.count2+=10,count3: this.state.count3+=10});
        }
    }
    
    handleClick(e) {
        this.setState({count: ++this.state.count})

    }
    handleClick2(e) {
        this.setState({count: this.state.count+=5})

    }
    handleClick3(e) {
        this.setState({count: this.state.count+=10})

    }

}

export default Players;
