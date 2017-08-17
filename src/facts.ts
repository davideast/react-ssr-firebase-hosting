import * as fetch_ from 'isomorphic-fetch';

// This is needed for rollup
let fetch = fetch_;

export default async function getFacts() {
  const res = await fetch("https://non-ssr-react.firebaseio.com/facts.json");
  return res.json();
}
