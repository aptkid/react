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
  const element = <div tabIndex="0"><//div>
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