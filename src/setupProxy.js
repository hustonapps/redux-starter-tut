const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
  const backend = createProxyMiddleware({
    target: 'http://localhost:4000/',
    cookieDomainRewrite: {
      'localhost:4000': 'localhost:3000',
    },
  });
  app.use('/api/**', backend);
};
