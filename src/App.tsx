import * as React from 'react';
import { render } from 'react-dom';

export default function App(props: any) {
  function handleClick(fact: any) {
    return function(e: any) {
      e.preventDefault();
      console.log(fact);
    }
  }
  const items = props.facts.map((fact: any, i: number) => {
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
