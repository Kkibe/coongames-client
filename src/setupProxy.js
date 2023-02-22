import { createProxyMiddleware }   from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    'api',
    createProxyMiddleware({
      target: 'https://coongames-api.onrender.com/',
      changeOrigin: true,
    })
  );
};