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
