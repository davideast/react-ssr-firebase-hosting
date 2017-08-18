import fetch from 'isomorphic-fetch';

export default function getFacts() {
  return fetch("https://non-ssr-react.firebaseio.com/facts.json").then(res => res.json());
}
