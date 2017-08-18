import React from 'react';
import { render } from 'react-dom';

export default function App(props) {
  function handleClick(fact) {
    return function(e) {
      e.preventDefault();
      console.log(fact);
    }
  }
  const items = props.facts.map((fact, i) => {
    return (
      <li key={i}>
        <a href="#" onClick={handleClick(fact)}>
          {fact.text}
        </a>
      </li>
    )
  });
  return (
    <ul> {items} </ul>
  );
}
