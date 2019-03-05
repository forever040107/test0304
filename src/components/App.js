import React, { Component } from 'react';
import Bar from './Bar/Bar'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        R: 10,
        G: 20,
        B: 30
    }
    this.bar = ["R","G","B"].map((item,index) => {
      return <Bar key={index} v={this.state[item]} color={item} setColor={this.setColor.bind(this)} />
    })
  }
  setColor(color,value) {
    //console.log(color,value)
    this.setState({[color] : value})
    console.log(this.state)

    // <Bar color="r" setColor={this.setColor.bind(this)} v={this.state.r}/>
    // <Bar color="g" setColor={this.setColor.bind(this)} v={this.state.g}/>
    // <Bar color="b" setColor={this.setColor.bind(this)} v={this.state.b}/>
  }

  render() {
    return (
      <div className="App">
        <h1>調色盤</h1>
        <div className="box" style={{"backgroundColor" : `rgba(${this.state.R},${this.state.G},${this.state.B}`}}></div>
        {this.bar}
      </div>
    );
  }
}

export default App;
