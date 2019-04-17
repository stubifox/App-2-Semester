import React, { Component } from 'react';
import rocket from './ressources/Rocket.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={rocket} className="App-logo" alt="logo" />
          <p>
            Create Components and adding them to <code>src/App.js</code> and save to reload.


          </p>
            Please don't create Components inside <code>App.js</code> for clarity purposes!
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Click <code>this</code> Link to learn React with it's States and Props.
          </a>
          If you have questions write them in Trello or per Whatsapp.
        </header>
      </div>
    );
  }
}

export default App;
