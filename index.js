
import {h} from 'preact';
import { render } from 'preact-render-to-string';
import App from './src/App';
import getFacts from './src/facts';
import express from 'express';
import * as fs from 'fs';
import * as functions from 'firebase-functions';

const index = fs.readFileSync(__dirname + '/index.template.html', 'utf8');
const app = express();
app.get('**', (req, res) => {
  getFacts().then(facts => {
    const html = render(<App facts={facts} />);
    const factsHtml = index.replace('<!-- ::APP:: -->', html);
    const finalHtml = factsHtml.replace('/** ::FACTS:: **/', JSON.stringify(facts));
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(finalHtml);
  });
});

export let ssrapp = functions.https.onRequest(app);
//app.listen(3006, () => { console.log('Listening on 3006.'); });
