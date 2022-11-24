import './App.css';
import React from "react"
import { users } from "./data.js"
import TableR from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Child1 from './components/Child1';


function App() {
  // console.log(users);

  const handleAlert = (name) => {
    alert(`hello ${name}`)
  }

  const handleDelete=(idDelete)=>{
console.log(idDelete)

  }
  return (
    <div className="app">
      <TableR handleDelete={handleDelete} users={users} />
    </div >
  );
}

export default App;


/*
class App extends Component {


  render() { 
    return (<div>
<h1>hello class component</h1>
    </div>);
  }
}
 
export default App;
*/
/*
import React, { Component } from "react";
import Counter from "./components/Counter";


class App extends Component {
  constructor() {
    super()
    console.log("constructor app")
    this.state = { timerApp: 0, show: false ,time:new Date()}
  }

  componentDidMount() {
    console.log("component App mounted")
    setInterval(() => {
      this.setState({ timerApp: this.state.timerApp + 1 });
      this.setState({ time: new Date()});

    }, 1000);
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    console.log("first render")
    return (
      <div>
        <button onClick={this.toggle}>{this.state.show ? "hide" : "show"}</button>
        {this.state.show ? <Counter /> : null}
        <h1>TimerApp:{this.state.timerApp}</h1>
        <h1>Timer:{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;

*/
