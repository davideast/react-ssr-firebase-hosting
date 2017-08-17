import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getFacts from './src/facts';
import * as express_ from 'express';
import * as fs_ from 'fs';
import * as functions_ from 'firebase-functions';
import * as path from 'path'

let express = express_;
let fs = fs_;
let functions = functions_;
console.log(process.cwd());
console.log(__dirname);
//const index = fs.readFileSync(__dirname + '/index.template.html', 'utf8');
const app = express();
app.get('**', async (req, res) => {
  const facts = [{ text: 'hi' }]; //await getFacts();
  const html = renderToString(<App facts={facts} />);
  const finalHtml = ''.replace('<!-- ::APP:: -->', html);
  res.send(finalHtml);
});

export let trigger = functions.https.onRequest(app);

// app.listen(5000, () => { console.log('Listening on 5000.'); });
