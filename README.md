# React快速上手
## 快速创建React项目 
`cnpm install -g create-react-app`

## 入门例子

```js
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  <h1>Hello React</h1>
);
```
## JSX
`JSX是一种JavaScript的语法扩展，完全是在JavaScript内部实现的。通常浏览器无法直接解析，需要使用babel编译后才能被正确解析`

#### 属性
```jsx
  const element = <div tabIndex="0"></div>
  // 使用引号来定义以字符串为值的属性
  
  const element = <img src={user.avatarUrl}></img>
  // 使用大括号来定义以js表达式为值的属性
```
#### 命名规范
`JSX的特性更接近js，所以使用小驼峰命名来定义属性的名称`
#### JSX防注入
`内部已对用户输入进行了转义，渲染之前全部转为字符串，有效防止了XSS，可以放心使用用户输入的内容`
​    
```js
const title = response.xxx;
// 直接使用是安全的
const element = <h1>{title}</h1>;
```

#### JSX代表Objects
`Babel转义器会把JSX转换为一个名为React.createElement() 的方法调用`

```js
const element = (
  <h1 className="greeting">
    Hello React
  </h1>
);

const element = React.createElement(
  'h1',
  {className: "greeting"},
  'Hello React'
);
```

## 元素渲染
`元素是构成React应用的最小单位`

```js
const element = <h1>Hi</h1> 
元素用来描述在屏幕上显示的内容
```
#### 将元素渲染到DOM中

首先在HTML中添加一个`id="root"`的`<div>`:

```html
<div id="root"></div>
```
在此div中的所有内容都交由React DOM来管理，所以通常将该节点成为"根"DOM节点。要将React元素渲染到根DOM节点中，我们通过把他们传递给ReactDOM.render()方法来将其渲染到页面上

```jsx
cosnt element = <h1>hi</h1>
ReactDOM.render(element, doument.getElementById("root"));
```

## 组件 & Props
`组件可以把UI切割成一些独立的、可复用的部件，这样就可以专注于构建每一个单独的部件`

#### 函数定义/类定义组件
定义一个函数最简单的方法是使用JS函数
```js
function Welcome(props) {
  return <h1>Hi, {props.name}</h1>;
}
```
该函数是一个有效的react组件，它接收一个单一的`Props`对象并返回一个React元素。之所以把这种类型的组件称之为函数定义组件，是因为它就是一个JS函数

#### 可以使用ES6中的class来定义组件
```js
class Welcome extends React.component {
  render() {
    return <h1>Hi {this.props.name}</h1>;
  }
}
```
#### 组件渲染
前面所遇到的React元素都是DOM标签：
```jsx
const element = <h1>Hello</h1>;
```
其实，React元素也可以是用户自定义的组件：
```jsx 
const element = <Welcome name="admin" />;
```
当React遇到的元素是用户自定义的组件，它会将jsx的属性作为单个对象传递给该组件，这个对象称之为`Props`

#### 组合组件
组件可以嵌套使用，这样就可以在同一组件中抽象出任意层次的细节。在React应用中，按钮、表单、对话框、整个屏幕的内容，通常都被表示为组件。

例如，我们可以创建一个`APP`组件，用来多次渲染`Welcome`组件：
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="张三" />
      <Welcome name="李四" />
      <Welcome name="王五" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

一般情况下，一个React应用的顶部都是一个`App`组件。组件的返回值只能有一个根元素，这就是需要用一个`<div>`来包裹所有`<Welcome />`组件的原因。

#### Props的只读性
`无论是使用函数或者类来定义一个组件，它决不能自己修改自己的props。所有的React组件都必须像使用纯函数那样使用自己的props`

纯函数例子：
```js
function sum(a, b) {
  return a + b;
}
```
## State & 生命周期

#### 将函数转换为类
1、继承React.Component的类

2、创建一个render()的空方法

3、将函数体移动到render()方法中

4、在render()方法中，使用this.props替换props

5、删除剩余的空函数声明
```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React</h1>
        <h2>It is {this.props.date.toLocalTimeString()}.</h2>
      </div>
    );
  }
}
```
`使用类就允许我们使用其他特性，例如局部状态、生命周期钩子`

#### 为一个类添加局部状态
通过三个步骤将date从属性移动到状态中：
1、在render()方法中使用`this.state.date`代替`this.props.date`
```js
class Clock extends React.Component {
  render() {
    return()
      <div>
        <h1>Hello, React!</h1>
        <h2>It is {this.state.date.toLocalTimeString()}</h2>
      </div>
    );
  }
}
```
2、添加一个类构造函数来初始化状态`this.state`
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, React</h1>
        <h2>It is {this.state.date.toLocalTimeString()}</h2>
      </div>
    );
  }
}
```
```类组件应该始终使用props调用基础构造函数```

3、从<Clock />元素移除date属性：
```js
ReactDOM.render(<Clock />, document.getElementById("root"));
```

结果如下：
```js
class Olock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, React</h1>
        <h2>It is {this.state.date.toLocalTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
```

#### 将生命周期方法添加到类中
`组件在销毁时释放所占用的资源非常重要`

当组件挂载后调用componentDidMount()方法，当组件卸载后调用componentWillUnMount()
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    this.counter = 0;
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return <div>
      {console.log('调用render' + (this.counter += 1))}
      <p>现在时间：{this.state.date.toLocaleTimeString()}</p>
    </div>
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"));
```

#### 正确的使用状态

`关于setState()有三个注意点`

##### 不要直接更新状态，应该使用`setState()`
```js
// wrong
this.state.comment = 'Hello';
// correct
this.state.setState({comment: 'Hello'});
```
构造函数是唯一能够初始化`this.state`的地方


##### 状态更新可能是异步的
`React的this.props和this.state可能是异步更新的，不能用于实时计算`
```js
// 可能无法更新计数器
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
应该让`setState()`来接收一个函数而不是对象。该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props作为第二个参数：
```js
this.setState((prevState, props) => {
  counter: prevState.counter + props.increment,
});
```
##### 状态更新合并
当调用`setState()`时，React将你提供的对象合并到当前的状态

```js
constructor(props) {
  super(props);
  this.state = {
    user: [],
    comment: []
  };
}

// 可以调用setState()独立的更新他们
componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      user: response.user
    })
  });
  fetchPosts().then(response => {
    this.setState({
      comment: response.comment
    })
  })
}

```
这种方法称之为`浅合并`，也就是说`this.setState({comment})`完整的保留了`this.state.user`，只完全替换了`this.state.comment`

#### 数据自顶向下（单项）流动
React 组件之间是相互独立的，父组件可以将自身的状态`this.state.object`传给子组件`this.props.object`使用。任何状态始终是由特定的组件所有，并且从该组件导出的数据或UI只能影响下面的组件。可以想象组件树为属性的瀑布，每个组件的状态都作为一个额外的水源，可以连接在任意节点，但是都会流下来。在 React 应用程序中，组件是有状态还是无状态被认为是可能随时间而变化的组件的实现细节。 可以在有状态组件中使用无状态组件，反之亦然。


## 事件处理
`React 元素的事件处理和DOM元素的事件处理很类似，只是有一些语法上的不同：`

- React事件绑定属性的名称采用驼峰式写法，而不是小写
- 如果采用JSX的语法需要传入一个函数作为事件处理函数而不是一个字符串（DOM写法）

传统的HTML：
```html
<button onclick="Login()">登录</button>
```
React：
```html
<button onClick={Login}>登录</button>
```

React中不能使用返回`false`的方式阻止默认行为。必须明确的使用`preventDefault` ，例如传统的HTML中阻止打开新页面：
```html
<a href="#" onclick="return false;">点我</a>
```
在React中应该这么写：
```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('已经点击过该链接');
  }

  return (
    <a href="#" onClick={handleClick}>点我</a>
  )
}
```

`e` 是一个合成事件，不用担心浏览器兼容问题。

在React中不需要使用`addEventListener`为已创建的DOM元素添加监听器。只需要在元素初始渲染的时候提供一个监听器


事件处理器会成为类的一个方法：
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 类默认不会绑定thiis, 需要手动绑定
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '开': '关'}
      </button>
    )
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"))
```

#### 向事件处理函数传递参数
有时候需要向事件处理函数传递参数，例如删除当前选中的行：
```html
<button onClick={(e) => this.deleteRowP(id, e)}>删除该行</button>
<button onClick={this.deleteRow.bind(this, id)}>删除该行</button>
```

## 条件渲染
`在React中可以根据应用的状态只渲染组件的一部分，`
```jsx
function UserGreeting(props) {
  return <h1>Welcome back</h1>
}

function GuestGreeting(props) {
  return <h1>Please login</h1>
}

function Greeting(props) {

  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById("root"));
```
#### 元素变量
`可以使用变量来存储元素`

