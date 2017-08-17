import * as React from 'react';
import { render } from 'react-dom';

export default function App(props: any) {
  const items = props.facts.map((fact: any, i: number) => {
    return <li key={i}>{fact.text}</li>
  });
  return (
    <ul> {items} </ul>
  );
}
