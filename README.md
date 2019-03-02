# Perfect template for start your nodejs backend server

#### Last Update 2019.02
webpack -  4.29.6

express - 4.16.4

@babel/core - 7.3.4

@babel/preset-env - 7.3.4

### How to use? 

- clone this repo
- change any source in app.js or ./src
- ???
- npm start for dev
- npm run build for production build
- for docker production build run this
  - docker build -t myloveapp . 
  - docker push myloveapp:latest


### This repo include
- Nodejs 10+
- Webpack 4
  - Webpack liveReload config for dev (include source map)
  - Webpack production ready config
- Docker for build and production
- Debug enabled in vscode (connect to process)
- npm-shrinkwrap and yarn.lock for dep
- simple and lightweight (8 dep only)

### TODO
- Docs add postman and swagger
- Eslint
- Metrics to graphite
- Logs to Elasticsearch
- wrap to cli
