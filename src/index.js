import React from 'react'
import ReactDOM from 'react-dom'

// 元素

/*
ReactDom.render(
  <div>
    <p>Hello React</p>
  </div>,
  document.getElementById("root")
);*/

// 组件

function Avatar(props) {
  return <div>
    <img src={props.imgUrl}></img>
  </div>
}

function UserInfo (props) {
  return <div>
    <p>用户名：{props.name}</p>
    <Avatar imgUrl="http://t.cn/EwHD66H"/>
  </div>
}

function App(props) {
  return <UserInfo name="admin"/>
}

ReactDOM.render(<App/>, document.getElementById("root"));