## React快速上手
#### 快速创建React项目 
`cnpm install -g create-react-app`
#### 入门例子

    import React from 'react'
    import ReactDom from 'react-dom'

    ReactDom.render(
      <h1>Hello React</h1>
    );
## JSX
`JSX是一种JavaScript的语法扩展，完全是在JavaScript内部实现的。通常浏览器无法直接解析，需要使用babel编译后才能被正确解析`

#### 属性

    const element = <div tabIndex="0"><//div>
    // 使用引号来定义以字符串为值的属性

    const element = <img src={user.avatarUrl}></img>
    // 使用大括号来定义以js表达式为值的属性

#### 命名规范
`JSX的特性更接近js，所以使用小驼峰命名来定义属性的名称`
#### JSX防注入
`内部已对用户输入进行了转义，渲染之前全部转为字符串，有效防止了XSS，可以放心使用用户输入的内容`
    
    const title = response.xxx;
    // 直接使用是安全的
    const element = <h1>{title}</h1>;

#### JSX代表Objects
`Babel转义器会把JSX转换为一个名为React.createElement() 的方法调用`

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

## 元素渲染
`元素是构成React应用的最小单位`

    const element = <h1>Hi</h1> 
    元素用来描述在屏幕上显示的内容
#### 将元素渲染到DOM中

首先在HTML中添加一个`id="root"`的`<div>`:

    <div id="root"></div>
在此div中的所有内容都交由React DOM来管理，所以通常将该节点成为"根"DOM节点。要将React元素渲染到根DOM节点中，我们通过把他们传递给ReactDOM.render()方法来将其渲染到页面上

    cosnt element = <h1>hi</h1>
    ReactDOM.render(element, doument.getElementById("root"));

