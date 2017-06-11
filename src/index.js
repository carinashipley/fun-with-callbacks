import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function callbackFunction(count) {
  alert('button was clicked ' + (count === 1 ? '1 time' : count + ' times'));
}

ReactDOM.render(
  <div>
    <h1>Callbacks Rock!</h1>
    <p>Callbacks are handy for bubbling data up.</p>
    <p>The alert that fires is happening in the callback function.
      The number of times the button was clicked is tracked in the child App and is
      passed to the callback function.</p>
    <App onClick={callbackFunction} />
  </div>,
  document.getElementById('react-app')
);
