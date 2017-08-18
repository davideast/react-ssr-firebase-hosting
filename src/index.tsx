import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import getFacts from './facts';

getFacts().then(facts => {
  render(<App facts={facts} />, document.getElementById('root'));  
});  
