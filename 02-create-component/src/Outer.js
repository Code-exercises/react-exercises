import React, {Component} from 'react';
import Inner from './Inner';

class Outer extends Component {
  render() {
    return <>
      <h1>Header</h1>
      <p>Paragraph</p>
      <div>
        {this.props.children}
      </div>
    </>
  }
}

Outer.Inner = Inner;

export default Outer
