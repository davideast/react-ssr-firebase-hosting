import { h, render } from 'preact';
import App from './App';
import getFacts from './facts';

debugger;
if(window.__facts__) {
  let facts = window.__facts__;
  render(<App facts={facts} />, document.getElementById('root'));  
} else {
  getFacts().then(facts => {
    render(<App facts={facts} />, document.getElementById('root'));  
  });      
}
