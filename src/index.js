// 实现如下功能：
// 1. 如果在5秒内，点击 B组件内按钮， 如果计数 > 0, 则 A 的内容展示 "第 N 次点击"，否则 A 的内容展示 "等待点击" 
// 如果超过5秒未发生按钮点击，则计数清零，此时 A 的内容展示 "等待点击" 
// 点击 第一个按钮实现 -1  ; 点击 第二个按钮实现 +1 ；

// 2. 将按钮的样式实现成 https://element.eleme.cn/#/zh-CN/component/button 中 朴素主要按钮 的样式



import React, { Component } from "react";
import ReactDOM from "react-dom";

function A(props) {
  return <div>等待点击</div>;
}

function B(props) {
  return <button>click</button>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <A />
        <B />
        <B />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
