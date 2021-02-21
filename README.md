# React exercises

[comment]: <> (1)
<details>
<summary>Create React application</summary>

**Task:** create application.

**Directory:** `01-create-react-application`

[comment]: <> (1.1)
<details>
<summary>Solution</summary>

[comment]: <> (1.1.1)
<details>
<summary>Create application with <code>create-react-app</code></summary>

```bash
npx create-react-app app
```
</details> 

[comment]: <> (1.1.2)
<details>
<summary>Import <code>React</code> class to process <code>JSX</code></summary>

```javascript
import React from 'react'
```
</details>

[comment]: <> (1.1.3)
<details>
<summary>Import <code>render</code> function to render JSX</summary>

```javascript
import {render} from 'react-dom'
```
</details>

[comment]: <> (1.1.4)
<details>
<summary>Render content to HTML element with <code>root</code> id</summary>

```javascript
render(<h1>Hello</h1>, document.getElementById('root'))
```
</details> 

</details>
<hr>
</details>

[comment]: <> (2)
<details>
<summary>Create component</summary>

**Task:**
- create `Outer` component
  - add header
  - add content
  - use `Fragment`  
- create `Inner` component in the namespace of `Outer` component
- use `Inner` component inside `Outer` component
  ```jsx
  <Outer>
    <Outer.Inner></Outer.Inner>
  </Outer>
  ```

**Directory:** `02-create-component`

[comment]: <> (2.1)
<details>
<summary>Solution</summary>

[comment]: <> (2.1.1)
<details>
<summary>Create <code>Inner</code> class and extend it from <code>Component</code></summary>

```jsx
import React, {Component} from 'react';

class Inner extends Component {
  render() {
    return <div>Inner component</div>
  }
}
```
</details>

[component]: <> (2.1.2)
<details>
<summary>Create <code>Outer</code> class, use children props for nesting, use field for namespacing</summary>

```jsx
import React, {Component} from 'react';
import Inner from './Inner';

class Outer extends Component {
  render() {
    return <>
      <h1>Outer</h1>
      <p>Text</p>
      <div>{this.props.children}</div>
    </>
  }
}

Outer.Inner = Inner

export default Outer;
```
</details>

</details>
<hr>
</details>

[comment]: <> (3)
<details>
<summary>Use properties and state</summary>

**Task:**
- create parent component that will contain user name in state (`John`)
- create child component that will display user name from parent component  
- add button in parent component that will change user name to custom value (`Bob`)

**Directory:** `03-properties-state`

[comment]: <> (3.1)
<details>
<summary>Solution</summary>

[comment]: <> (3.1.1)
<details>
<summary>Create child component with property binding</summary>

```jsx
export default class Child extends Component {
  static defaultProps = {
    name: 'Jack'
  }

  render() {
    const {name} = this.props;
    return <div>{name}</div>
  }
}
```
</details>

[comment]: <> (3.1.2)
<details>
<summary>Create parent component with state and event handler</summary>

```jsx
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
```
</details>

</details>

</details>
