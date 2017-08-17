import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import getFacts from './facts';

(async () => {
  const facts = await getFacts();
  render(<App facts={facts} />, document.getElementById('root'));
});

