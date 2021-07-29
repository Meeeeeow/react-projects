import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LifeCycle} from './Lifecycle/lifecycle.component';
class  App extends React.Component {
  constructor(){
    super();

    this.state ={
      showChild : true,
      text: "",
      string : 'Hello andrei'
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick = {()=>this.setState({showChild:!this.state.showChild})}>Change</button>
          {console.log(this.state)}
          <button onClick = {()=> <LifeCycle text = {this.setState({text : "_Hello" + this.state.text})} />}>Change Text</button>
        </header>
        
      </div>
    );
  }
 
}

export default App;
