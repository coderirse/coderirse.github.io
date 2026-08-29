// Ensure UTF-8 charset in Content-Type to prevent garbled text on Windows.
// Only touch HTML responses that don't specify a charset yet — never
// override the MIME type of static assets (css/js/images).
hexo.extend.filter.register('server_middleware', function (app) {
  app.use(function (req, res, next) {
    var type = res.getHeader('Content-Type');
    if (!type) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    } else if (String(type).indexOf('text/html') === 0 && String(type).indexOf('charset') === -1) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    }
    next();
  });
});
