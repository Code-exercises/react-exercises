import React, {Component} from "react";

export default class Child extends Component {
  static defaultProps = {
    name: 'Jack'
  }

  render() {
    const {name} = this.props;
    return <div>{name}</div>
  }
}
