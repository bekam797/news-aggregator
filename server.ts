const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(
  '/newsapi',
  createProxyMiddleware({
    target: 'https://newsapi.org/v2/',
    changeOrigin: true,
    pathRewrite: {
      '^/newsapi': ''
    },
    onProxyReq(proxyReq, req, res) {
      if (
        req.method === 'OPTIONS' &&
        Object.prototype.hasOwnProperty.call(req.headers, 'access-control-request-method')
      ) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        res.setHeader('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        res.setHeader('Access-Control-Max-Age', '120');
        res.statusCode = 204;
        res.end();
      }
    }
  })
);

app.use(
  '/gnewsapi',
  createProxyMiddleware({
    target: 'https://gnews.io/api/v4/',
    changeOrigin: true,
    pathRewrite: (path, req) => {
      return (
        path.replace('/gnewsapi', '') + (path.includes('?') ? '&' : '?') + 'token=9bbe15fae4806b389305807ab5f09dcc'
      );
    },
    onProxyReq(proxyReq, req, res) {
      if (
        req.method === 'OPTIONS' &&
        Object.prototype.hasOwnProperty.call(req.headers, 'access-control-request-method')
      ) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        res.setHeader('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        res.setHeader('Access-Control-Max-Age', '120');
        res.statusCode = 204;
        res.end();
      }
    }
  })
);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
