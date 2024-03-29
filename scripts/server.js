/* eslint-disable */
const proxy = require('http-proxy-middleware')
const Bundler = require('parcel-bundler')
const express = require('express')

const bundler = new Bundler('index.html')
const app = express()

app.use(
  '/api', // 需要代理的根路径
  proxy({
    target: 'http://localhost:8080',
  }),
)

app.use(bundler.middleware())

app.listen(Number(process.env.PORT || 1234))