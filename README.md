<div>
  <h1 align="center">React Server Side Rendering on Firebase Hosting</h1>
  <p align="center">A small sample</p>
</div>

### 10000ft view
- Webpack to bundle the client
- Babel to CommonJS for the server

### Run it
```
# local build
git clone https://github.com/davideast/react-ssr-firebase-hosting.git
yarn
yarn build:dev
yarn serve

# deploying
# pick your project
firebase use --add
yarn deploy:ssr
```
