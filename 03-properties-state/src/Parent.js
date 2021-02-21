import React, {Component} from "react";
import Child from "./Child";

export default class Parent extends Component {
  static DEFAULT_NAME = 'John';

  state = {
    name: Parent.DEFAULT_NAME
  }

  render() {
    return <>
      <Child name={this.state.name}/>
      <button onClick={this.changeName}>Set name to Bob</button>
    </>
  }

  changeName = () => {
    this.setState({name: 'Bob'});
  }
}
