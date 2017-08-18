import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getFacts from './src/facts';
import * as express from 'express';
import * as fs from 'fs';
import * as functions from 'firebase-functions';

const index = fs.readFileSync(__dirname + '/index.template.html', 'utf8');
const app = express();
app.get('**', async (req, res) => {
  const facts = await getFacts();
  const html = renderToString(<App facts={facts} />);
  const finalHtml = index.replace('<!-- ::APP:: -->', html);
  res.send(finalHtml);
});

export let trigger = functions.https.onRequest(app);

//app.listen(3006, () => { console.log('Listening on 3006.'); });
