import * as fetch from 'isomorphic-fetch';

export default async function getFacts() {
  const res = await fetch("https://non-ssr-react.firebaseio.com/facts.json");
  return res.json();
}
