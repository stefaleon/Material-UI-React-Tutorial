import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBox from '@material-ui/core/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label='Testing Checkbox' />
  );
}

function CheckBoxExample2() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          icon={<SaveIcon style={{ 'color': "yellow" }} />}
          checkedIcon={<DeleteIcon />}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label='Testing Checkbox 2' />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample />
        <CheckBoxExample2 />
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            size='large'
            variant='contained' color='primary'>Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size='large'
            variant='contained' color='secondary'>Discard
          </Button>
        </ButtonGroup>
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
