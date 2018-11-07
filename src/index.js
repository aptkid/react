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
/*
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
*/

// State & 生命周期

/*
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
*/

// 事件处理

/*
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

ReactDOM.render(<Toggle />, document.getElementById("root"))*/

// 条件渲染

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