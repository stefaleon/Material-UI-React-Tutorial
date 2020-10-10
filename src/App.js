import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button href='#' variant='contained' color='secondary'>Hello World</Button>  */}
        <Button onClick={() => alert('Hi!')}
          // disabled
          // style={{ fontSize: 48, color: 'green', background: 'red' }}
          size='large'
          variant='contained' color='secondary'>Hello World</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
