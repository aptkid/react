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
      <button>开始计时</button>
      <button>暂停计时</button>
    </div>
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"));