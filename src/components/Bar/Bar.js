import React, { Component } from 'react';
//import {PropTypes} from 'props-types'
import  './Bar.css'

class Bar extends Component {
    constructor(props) {
        super()
        this.state = {
            v : props.v //??
        }
        this.change = this.change.bind(this)
        this.setColor = props.setColor //??
    }
    change(e) {
        this.setState({v : parseInt(e.target.value)})
        //console.log(e.target.value)
        this.setColor(this.props.color, this.state.v) //??
    }

  render() {
    return (
      <div className="Bar">
        {this.props.color}：
        <input min="0" max="255" type="number" value={this.state.v} onChange={this.change}></input>
        <input min="0" max="255" type="range" value={this.state.v} onChange={this.change}></input>
      </div>
    );
  }
}

// Bar.propTypes = {
//    v : PropTypes.number.isRequired,
//    color : PropTypes.string.isRequired,
//    setColor : PropTypes.func.isRequired
// }

export default Bar;
