import React, { Component } from 'react';
import './App.css';

class TestButton extends Component{

    constructor(props){
        super(props);

        this.state = {
            buttonDown: 'button',
            greetings: ['ハロー']
        };
        this.handleClick = this.handleClick(this);
    }

    handleClick(e){
        if(e.keyCode === 13){
            this.setState({name: e.target.value});
            this.setState({greetings: [...this.state.greetings, 'Hello ' + e.target.value]})
        }
    }

    render(){
        return(
            <div className="App">
                <h1>{this.props.greet} {this.state.buttonDown}</h1>
                <button>ポチッとな</button>
                {this.state.greetings.map((g,i) => {
                    return <p key={i}>{g}</p>
                })}
            </div>
        );
    }
}

export default TestButton;
