---
title: React/Redux Interview Questions 🚀
slug: /56-react-redux-interview-questions
date: 2021-05-06
desc: React and Redux Interview Questions
cover:
  img: ../../../photos/56-react-redux-interview-questions.png
banner: ../../banners/56-react-redux-interview-questions.png
tags:
    - JS
priority: 1
---

<p><span class='first-letter'>I</span> prepared list of react and redux interview question, Few question I faced in my journey and few of the question I have referred from Google itself 😂</p>

# React Interview Questions 🚀

<a class="ques" href="#1-create-components-in-react">**Q.1. How to create components in React?**</a>
<a class="ques" href="#2-class-vs-functional-comp">**Q.2. What are the difference between a class component and functional component?**</a>
<a class="ques" href="#3-controlled-vs-uncontrolled-comp">**Q.3. What is difference between controlled vs uncontrolled component?**</a>
<a class="ques" href="#4-chidlren">**Q.4. What is children?**</a>
<a class="ques" href="#5-prop-drilling">**Q.5. What is prop drilling and how can you avoid it?**</a>
<a class="ques" href="#6-pure-component">**Q.6. What is Pure Component?**</a>
<a class="ques" href="#7-not-update-state-directly">**Q.7. Why should we not update the state directly?**</a>
<a class="ques" href="#8-cb-func-as-args-of-setstate">**Q.8. What is the purpose of callback function as an argument of setState()?**</a>
<a class="ques" href="#9-sythetic-event">**Q.9. What are synthetic events in React?**</a>
<a class="ques" href="#10-key-prop">**Q.10. What is "key" prop and what is the benefit of using it in arrays elements?**</a>
<a class="ques" href="#11-string-refs-legacy">**Q.11. Why are String Refs legacy? **</a>
<a class="ques" href="#12-createelement-vs-cloneelement">**Q.12. What is the difference between createElement and cloneElement?**</a>
<a class="ques" href="#13-reconciliation">**Q.13. What is reconciliation?**</a>
<a class="ques" href="#14-lazy-function">**Q.14. Is lazy function supports named exports?**</a>
<a class="ques" href="#15-portals">**Q.15. What are portals in React?**</a>
<a class="ques" href="#16-stateless-comp">**Q.16. What are stateless components?**</a>
<a class="ques" href="#17-stateful-comp">**Q.17. What are stateful components?**</a>
<a class="ques" href="#18-impact-of-index-as-keys">**Q.18. What is the impact of indexes as keys?**</a>
<a class="ques" href="#19-memoize-component">**Q.19. How do you memoize a component?**</a>
<a class="ques" href="#20-pass-func-to-setstate">**Q.20. Why we need to pass a function to setState()?**</a>
<a class="ques" href="#21-comp-name-starts-capital-letter">**Q.21. Why should component names start with capital letter?**</a>
<a class="ques" href="#22-rerender-without-calling-setstate">**Q.22. Can you force a component to re-render without calling setState?**</a>
<a class="ques" href="#23-super-vs-super-props">**Q.23. What is the difference between super() and super(props) in React usin ES6 classes?**</a>
<a class="ques" href="#24-constructor">**Q.24. Is it mandatory to define constructor for React component?**</a>
<a class="ques" href="#25-default-props">**Q.25. What are default props?**</a>
<a class="ques" href="#26-validation-on-props">**Q.26. How to apply validation on props in React?**</a>
<a class="ques" href="#27-cant-updated-props">**Q.27. Why you can't update props in React?**</a>
<a class="ques" href="#28-render-props">**Q.28. What are render props?**</a>
<a class="ques" href="#29-suspense">**Q.29. What is Suspense component?**</a>
<a class="ques" href="#30-diffing">**Q.30. What is diffing algorithm?**</a>
<a class="ques" href="#31-rerender-browser-resized">**Q.31. How to re-render the view when the browser is resized?**</a>
<a class="ques" href="#32-react-memo">**Q.32. What is React memo function?**</a>
<a class="ques" href="#33-methods-order-when-comp-rerendered">**Q.33. What is the methods order when component re-rendered?**</a>
<a class="ques" href="#34-loadable-comp">**Q.34. What are loadable components?**</a>
<a class="ques" href="#35-print-json">**Q.35. How to pretty print JSON with React?**</a>
<a class="ques" href="#36-render-hijakcing">**Q.36. What is render hijacking in react?**</a>
<a class="ques" href="#37-use-https-instead-http">**Q.37. How to use https instead of http in create-react-app?**</a>
<a class="ques" href="#38-functional-to-pure-component">**Q.38. How can we convert functional component to pure component?**</a>

<hr></hr>

<p class="ques" id="1-create-components-in-react">**Q.1. How to create components in React?**</p>

**Ans.**  There are two possible ways to create a component.

✅<mark>Functional Components</mark>: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:

```jsx
function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}
```

✅<mark>Class Components</mark>: You can also use ES6 class to define a component. The above function component can be written as:

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}
```

<p class="ques" id="2-class-vs-functional-comp">**Q.2. What are the difference between a class component and functional component?**</p>

**Ans.** 

✅<mark>Class Components</mark>
- Class-based Components uses ES6 class syntax. It can make use of the lifecycle methods.
- Class components extend from React.Component.
- In here you have to use this keyword to access the props and functions that you declare inside the class components.

✅<mark>Functional Components</mark>
- Functional Components are simpler comparing to class-based functions.
- Functional Components mainly focuses on the UI of the application, not on the behavior.
- To be more precise these are basically render function in the class component.
- Functional Components can have state and mimic lifecycle events using Reach Hooks

<p class="ques" id="3-controlled-vs-uncontrolled-comp">**Q.3. What is difference between controlled vs uncontrolled component?**</p>
**Ans.** 

✅<mark>Controlled Components</mark>
In HTML, form elements such as `<input />, <textarea />, and <select />` typically maintain their own state and update it based on user input. When a user submits a form, the values from the elements mentioned above are sent with the form. With React it works differently. The component containing the form will keep track of the value of the input in its state and will re-render the component each time the callback function, e.g., onChange is fired as the state will be updated. An input form element whose value is controlled by React in this way is called a "controlled component". You could also call this a "dumb component".

✅<mark>Uncontrolled Components</mark>
A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

<u>Example</u>

```jsx
// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>
```

<p class="ques" id="4-chidlren">**Q.4. What is children?**</p>

**Ans.** In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed to components automatically as a special prop:

```jsx
props.children
```

There are some methods available in the React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray 👶

```jsx
const MainContainer = React.createClass({
  render: function () {
    return <div>{this.props.children}</div>;
  },
});

ReactDOM.render(
  <MainContainer>
    <span>{'Hello'}</span>
    <span>{'World'}</span>
  </MainContainer>,
  node,
);
```

<p class="ques" id="5-prop-drilling">**Q.5. What is prop drilling and how can you avoid it?**</p>

**Ans.** While passing a prop from each component to the next in the hierarchy from the source component to the deeply nested component. This is called **prop drilling**.

To avoid prop drilling, a common approach is to use React context. This allows a `Provider` component that supplies data to be defined, and allows nested components to consume context data via either a `Consumer` component or a `useContext` hook.

<p class="ques" id="6-pure-component">**Q.6. What is Pure Component?**</p>

**Ans.** `React.PureComponent` is exactly the same as `React.Component` except that it handles the `shouldComponentUpdate()` method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

<p class="ques" id="7-not-update-state-directly">**Q.7. Why should we not update the state directly?**</p>
**Ans.** If you try to update state directly then it won't re-render the component.

```jsx
//Wrong ❌
this.state.message = 'Not Updated';
```

Instead use `setState()` method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

```jsx
//Correct ✅
this.setState({ message: 'Updated' });
```

📝 <mark>Note:</mark> You can directly assign to the state object either in *constructor* or using latest javascript's class field declaration syntax.

<p class="ques" id="8-cb-func-as-args-of-setstate">**Q.8. What is the purpose of callback function as an argument of setState()**</p>

**Ans.** The callback function is invoked when setState finished and the component gets rendered. Since `setState()` is **asynchronous** the callback function is used for any post action.

📝 <mark>Note:</mark> It is recommended to use lifecycle method rather than this callback function.

```jsx
setState({ name: 'Supi' }, () => console.log('The name has updated and component re-rendered'));
```

<p class="ques" id="9-sythetic-event">**Q.9. What are synthetic events in React?**</p>

**Ans.** <mark>Synthetic Event</mark> is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

<p class="ques" id="10-key-prop">**Q.10. What is "key" prop and what is the benefit of using it in arrays of elements 🗝?**</p>

**Ans.** A `key` is a special string attribute you **should** include when creating arrays of elements.*Key* prop helps React identify which items have changed, are added, or are removed.

Most often we use ID from our data as *key*:

```jsx
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

When you don't have stable IDs for rendered items, you may use the item *index* as a *key* as a last resort:

```jsx
const todoItems = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
```

📝 <mark>Note:</mark>

1. Using *indexes* for *keys* is **not recommended** if the order of items may change. This can negatively impact performance and may cause issues with component state.
2. If you extract list item as separate component then apply *keys* on list component instead of `li` tag.
3. There will be a warning message in the console if the `key` prop is not present on list items.

<p class="ques" id="11-string-refs-legacy">**Q.11. Why are String Refs legacy? **</p>

**Ans.** If you worked with React before, you might be familiar with an older API where the `ref` attribute is a string, like `ref={'textInput'}`, and the DOM node is accessed as `this.refs.textInput`. We advise against it because *string refs have below issues*, and are considered legacy. String refs were **removed in React v16**.

1. They *force React to keep track of currently executing component*. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
2. They are *not composable* — if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.
3. They *don't work with static analysis* like Flow. Flow can't guess the magic that framework does to make the string ref appear on `this.refs`, as well as its type (which could be different). Callback refs are friendlier to static analysis.
4. It doesn't work as most people would expect with the "render callback" pattern (e.g. )

```jsx
class MyComponent extends Component {
    renderRow = (index) => {
        // This won't work. Ref will get attached to DataTable rather than MyComponent:
        return <input ref={'input-' + index} />;

        // This would work though! Callback refs are awesome.
        return <input ref={(input) => (this['input-' + index] = input)} />;
    };

   render() {
        return <DataTable data={this.props.data} renderRow={this.renderRow} />;
   }
}
```

<p class="ques" id="12-createelement-vs-cloneelement">**Q.12. What is the difference between createElement and cloneElement?**</p>

**Ans.** JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.


<p class="ques" id="13-reconciliation">**Q.13. What is reconciliation?**</p>

**Ans.** When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.


<p class="ques" id="14-lazy-function">**Q.14. Is lazy function supports named exports?**</p>

**Ans.** No, currently `React.lazy` function supports `default exports` only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components. Let's take a component file which exports multiple named components,

<u>Example:</u>

```jsx
// FewComponents.js
export const SomeComponent = /* ... */;
export const UnusedComponent = /* ... */;
```

and reexport `FewComponents.js` components in an intermediate file `IntermediateComponent.js`

```jsx
// IntermediateComponent.js
export { SomeComponent as default } from './FewComponents.js';
```

Now you can import the module using lazy function as below,

```jsx
import React, { lazy } from 'react';
const SomeComponent = lazy(() => import('./IntermediateComponent.js'));
```


<p class="ques" id="15-portals">**Q.15. What are portals in React?**</p>

**Ans.** <mark>Portal</mark> is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```jsx
ReactDOM.createPortal(child, container);
```

The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.

<p class="ques" id="16-stateless-comp">**Q.16. What are stateless components?**</p>

**Ans.** If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components.

<p class="ques" id="17-stateful-comp">**Q.17. What are stateful components?**</p>

**Ans.** If the behaviour of a component is dependent on the *state* of the component then it can be termed as stateful component. These *stateful components* are always *class components* and have a state that gets initialized in the `constructor`.

```jsx
class App extends Component {
   constructor(props) {
     super(props);
     this.state = { count: 0 };
   }

   render() {
     // ...
   }
}
```

**React 16.8 Update:**

Hooks let you use state and other React features without writing classes.

*The Equivalent Functional Component*

```jsx
import React, {useState} from 'react';

const App = (props) => {
   const [count, setCount] = useState(0);

   return (
     // JSX
   )
}
```

<p class="ques" id="18-impact-of-index-as-keys">**Q.18. What is the impact of indexes as keys?**</p>

**Ans.** Keys should be stable, predictable, and unique so that React can keep track of elements.

In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do.

```jsx
{
    todos.map((todo, index) => <Todo {...todo} key={index} />)
}

```

If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.

```jsx
{
    todos.map((todo) => <Todo {...todo} key={todo.id} />)
}
```

<p class="ques" id="19-memoize-component">**Q.19. How do you memoize a component?**</p>

**Ans.** Since React v16.6.0, we have a `React.memo`. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using `React.memo` before you use it.

```jsx
const MemoComponent = React.memo(function MemoComponent(props) {
    /* render using props */
});

// OR

export default React.memo(MyFunctionComponent);
```

<p class="ques" id="20-pass-func-to-setstate">**Q.20. Why we need to pass a function to setState()?**</p>

**Ans.** The reason behind for this is that `setState()` is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after `setState()` is called. That means you should not rely on the current state when calling `setState()` since you can't be sure what that state will be. The solution is to pass a function to `setState()`, with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of `setState()`.

Let's say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.

```jsx
// assuming this.state.count === 0
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
// this.state.count === 1, not 3

```

If we pass a function to `setState()`, the count gets incremented correctly.

```jsx
this.setState((prevState, props) => ({
count: prevState.count + props.increment,
}));
// this.state.count === 3 as expected
```

<p class="ques" id="21-comp-name-starts-capital-letter">**Q.21. Why should component names start with capital letter?**</p>

**Ans.** If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

```jsx
class OneComponent extends Component {
// ...
}
```

You can define component class which name starts with lowercase letter, but when it's imported it should have capital letter. Here lowercase is fine:

```jsx
class myComponent extends Component {
   render() {
     return <div />;
   }
}

export default myComponent;
```

While when imported in another file it should start with capital letter:

```jsx
import MyComponent from './MyComponent';
```

### What are the exceptions on React component naming?

The component names should start with a uppercase letter but there are few exceptions on this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names.

For example the below tag can be compiled to a valid component,

```jsx
render() {
    return (
        <obj.component /> // `React.createElement(obj.component)`
    )
}
```

<p class="ques" id="22-rerender-without-calling-setstate">**Q.22. Can you force a component to re-render without calling setState?**</p>

**Ans.** By default, when your component's state or props change, your component will re-render. If your `render()` method depends on some other data, you can tell React that the component needs re-rendering by calling `forceUpdate()`.

```jsx
component.forceUpdate(callback);
```

It is recommended to avoid all uses of `forceUpdate()` and only read from `this.props` and `this.state` in `render()`.

<p class="ques" id="23-super-vs-super-props">**Q.23. What is the difference between super() and super(props) in React usin ES6 classes?**</p>

**Ans.** When you want to access `this.props` in `constructor()` then you should pass props to `super()` method.

**Using `super(props)`:**

```jsx
class MyComponent extends React.Component {
   constructor(props) {
     super(props);
     console.log(this.props); // { name: 'Supi', ... }
   }
}
```

**Using `super()`:**

```jsx
class MyComponent extends React.Component {
   constructor(props) {
     super();
     console.log(this.props); // undefined
   }
}
```

Outside `constructor()` both will display same value for `this.props`.

<p class="ques" id="24-constructor">**Q.24. Is it mandatory to define constructor for React component?**</p>

**Ans.** No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

<p class="ques" id="25-default-props">**Q.25. What are default props?**</p>

**Ans.** The defaultProps are defined as a property on the component class to set the default props for the class. This is used for undefined props, but not for null props.

For example, let us create color default prop for the button component,

```jsx
class MyButton extends React.Component {
  // ...
}

MyButton.defaultProps = {
  color: 'blue',
};
```

If props.color is not provided then it will set the default value to 'red'. i.e, Whenever you try to access the color prop it uses default value

```jsx
render() {
  return <MyButton /> ; // props.color will be set to red
}
```

📝 <mark>Note:</mark> If you provide null value then it remains null value.

<p class="ques" id="26-validation-on-props">**Q.26. How to apply validation on props in React?**</p>

**Ans.** When the application is running in *development mode*, React will automatically check all props that we set on components to make sure they have *correct type*. If the type is incorrect, React will generate warning messages in the console. It's disabled in *production mode* due to performance impact. The mandatory props are defined with `isRequired`.

The set of predefined prop types:

1. `PropTypes.number`
2. `PropTypes.string`
3. `PropTypes.array`
4. `PropTypes.object`
5. `PropTypes.func`
6. `PropTypes.node`
7. `PropTypes.element`
8. `PropTypes.bool`
9. `PropTypes.symbol`
10. `PropTypes.any`

We can define `propTypes` for `User` component as below:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    };

    render() {
        return (
          <>
            <h1>{`Welcome, ${this.props.name}`}</h1>
            <h2>{`Age, ${this.props.age}`}</h2>
          </>
        );
    }
}
```

📝 <mark>Note:</mark> In React v15.5 *PropTypes* were moved from `React.PropTypes` to `prop-types` library.

<p class="ques" id="27-cant-updated-props">**Q.27. Why you can't update props in React?**</p>

**Ans.** The React philosophy is that props should be immutable and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props.

<p class="ques" id="28-render-props">**Q.28. What are render props?**</p>

**Ans.** <mark>Render Props</mark> is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

```jsx
<DataProvider render={(data) => <h1>{`Hello ${data.target}`}</h1>} />
```

Libraries such as React Router and DownShift are using this pattern.

<p class="ques" id="29-suspense">**Q.29. What is Suspense component?**</p>

**Ans.** If the module containing the dynamic import is not yet loaded by the time parent component renders, you must show some fallback content while you’re waiting for it to load using a loading indicator. This can be done using <mark>Suspense</mark> component.

<u>Example</u>

```jsx
const OneComponent = React.lazy(() => import('./OneComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OneComponent />
      </Suspense>
    </div>
  );
}
```

As mentioned in the above code, Suspense is wrapped above the lazy component.

<p class="ques" id="30-diffing">**Q.30. What is diffing algorithm?**</p>

**Ans.** React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

In this case, for displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

1. Two elements of different types will produce different trees.
2. The developer can hint at which child elements may be stable across different renders with a key prop.

<p class="ques" id="31-rerender-browser-resized">**Q.31. How to re-render the view when the browser is resized?**</p>

**Ans.** You can listen to the `resize` event in `componentDidMount()` and then update the dimensions (`width` and `height`). You should remove the listener in `componentWillUnmount()` method.

```jsx
class WindowDimensions extends React.Component {
   constructor(props) {
     super(props);
     this.updateDimensions = this.updateDimensions.bind(this);
   }

   componentWillMount() {
     this.updateDimensions();
   }

   componentDidMount() {
     window.addEventListener('resize', this.updateDimensions);
   }

   componentWillUnmount() {
     window.removeEventListener('resize', this.updateDimensions);
   }

   updateDimensions() {
     this.setState({ width: window.innerWidth, height: window.innerHeight });
   }

   render() {
     return (
       <span>
         {this.state.width} x {this.state.height}
       </span>
     );
   }
}
 ```

<p class="ques" id="32-react-memo">**Q.32. What is React memo function?**</p>

**Ans.** Class components can be restricted from rendering when their input props are the same using **PureComponent or shouldComponentUpdate**. Now you can do the same with function components by wrapping them in **React.memo**.

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* only rerenders if props change */
});
```

<p class="ques" id="33-methods-order-when-comp-rerendered">**Q.33. What is the methods order when component re-rendered?**</p>

**Ans.** An update can be caused by changes to props or state. The below methods are called in the following order when a component is being re-rendered.

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

<p class="ques" id="34-loadable-comp">**Q.34. What are loadable components?**</p>

**Ans.** If you want to do code-splitting in a server rendered app, it is recommend to use Loadable Components because `React.lazy` and `Suspense` is not yet available for server-side rendering. `Loadable` lets you render a dynamic import as a regular component.

Lets take an example,

```jsx
import loadable from '@loadable/component';

const OtherComponent = loadable(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
```

Now OtherComponent will be loaded in a separated bundle

<p class="ques" id="35-print-json">**Q.35. How to pretty print JSON with React?**</p>

**Ans.** We can use `<pre>` tag so that the formatting of the `JSON.stringify()` is retained:

```jsx
const data = { name: 'John', age: 42 };

class User extends React.Component {
   render() {
     return <pre>{JSON.stringify(data, null, 2)}</pre>;
   }
}

React.render(<User />, document.getElementById('container'));
```

<p class="ques" id="36-render-hijakcing">**Q.36. What is render hijacking in react?**</p>

**Ans.** The concept of `render hijacking` is the ability to control what a component will output from another component. It actually means that you decorate your component by wrapping it into a Higher-Order component. By wrapping you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enables hijacking, but by using HOC you make your component behave in different way.


<p class="ques" id="37-use-https-instead-http">**Q.37. How to use https instead of http in create-react-app?**</p>

**Ans.** You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:

```json
"scripts": {
    "start": "set HTTPS=true && react-scripts start"
}
```

or just run `set HTTPS=true && npm start`

<p class="ques" id="38-functional-to-pure-component">**Q.38. How can we convert functional component to pure component?**</p>

**Ans.** We can convert functional to pure component using `React.memo`.

# Redux Interview Questions 👩🏻‍💻

<a class="ques" href="#1-reducers">**Q.1. What are reducers in redux?**</a>
<a class="ques" href="#2-state-changed-in-redux">**Q.2. How is state changed in redux?**</a>
<a class="ques" href="#3-initialvalues-updated-from-satte">**Q.3. How Redux Form initialValues get updated from state?**</a>
<a class="ques" href="#4-redux-thunk">**Q.4. What is Redux Thunk?**</a>
<a class="ques" href="#5-mapstatetoprops-vs-mapdispatchtoprops">**Q.5. What is the difference between mapStateToProps() and mapDispatchToProps()?**</a>
<a class="ques" href="#6-mutiple-middleware">**Q.6. How to add multiple middlewares to Redux?**</a>
<a class="ques" href="#7-react-context-vs-redux">**Q.7. What is React context vs React redux?**</a>
<a class="ques" href="#8-redux-thunk">**Q.8. Why React uses className over class attribute?**</a>
<a class="ques" href="#9-relay">**Q.9. What is Relay?**</a>
<a class="ques" href="#10-relay-different-from-redux">**Q.10. How Relay is different from Redux?**</a>
<a class="ques" href="#11-combine-reducer">**Q.11. What is Combine Reducer?**</a>

<hr></hr>

<p class="ques" id="1-reducers">**Q.1. What are reducers in redux?**</p>

**Ans.** The reducer is a pure function that takes the previous state and an action, and returns the next state.

```javascript
(previousState, action) => newState
```

It's very important that the reducer stays *pure*. Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random()

<p class="ques" id="2-state-changed-in-redux">**Q.2. How is state changed in redux?**</p>

**Ans.** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

<p class="ques" id="3-initialvalues-updated-from-satte">**Q.3. How Redux Form initialValues get updated from state?**</p>

**Ans.** You need to add `enableReinitialize : true` setting.

```javascript
const InitializeFromStateForm = reduxForm({
  form: 'initializeFromState',
  enableReinitialize: true,
})(UserEdit);

```

If your `initialValues` prop gets updated, your form will update too.

<p class="ques" id="4-redux-thunk">**Q.4. What is Redux Thunk?**</p>

**Ans.** <mark>Redux Thunk</mark> middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and `getState()` as parameters.

<p class="ques" id="5-mapstatetoprops-vs-mapdispatchtoprops">**Q.5. What is the difference between mapStateToProps() and mapDispatchToProps()?**</p>

**Ans.** 

`mapStateToProps()` is a utility which helps your component get updated state (which is updated by some other components):

```javascript
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

```

`mapDispatchToProps()` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

```javascript
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};
```

Recommend always using the "object shorthand" form for the `mapDispatchToProps`

Redux wrap it in another function that looks like `(…args) => dispatch(onTodoClick(…args))`, and pass that wrapper function as a prop to your component.

```javascript
const mapDispatchToProps = {
  onTodoClick,
};
```

<p class="ques" id="6-mutiple-middleware">**Q.6. How to add multiple middlewares to Redux?**</p>

**Ans.** You can use `applyMiddleware` where you can pass each piece of middleware as a new argument. So you just need to pass each piece of middleware you'd like. For example, you can add Redux Thunk and logger middlewares as an argument as below,

```javascript
import { createStore, applyMiddleware } from 'redux'
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);
```

<p class="ques" id="7-react-context-vs-redux">**Q.7. What is React context vs React redux?**</p>

**Ans.** You can use <mark>Context</mark> in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for. Whereas <mark>Redux</mark> is much more powerful and provides a large number of features that the Context Api doesn't provide.

Also, **React Redux** uses context internally but it doesn’t expose this fact in the public API. So you should feel much safer using Context via React Redux than directly because if it changes, the burden of updating the code will be on React Redux instead developer responsibility.

<p class="ques" id="8-redux-thunk">**Q.8. Why React uses className over class attribute?**</p>

**Ans.** *class* is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses `className` instead of class.

```jsx
render() {
  return <span className="menu navigation-menu">Menu</span>
}
```

<p class="ques" id="9-relay">**Q.9. What is Relay?**</p>

**Ans.** Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.

<p class="ques" id="10-relay-different-from-redux">**Q.10. How Relay is different from Redux?**</p>

**Ans.** Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via GraphQL queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more. 

<p class="ques" id="11-combine-reducer">**Q.11. What is Combine Reducer?**</p>

**Ans.** The `combineReducers` helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore . The resulting reducer calls every child reducer, and gathers their results into a single state object.
