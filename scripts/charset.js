// Ensure UTF-8 charset in Content-Type to prevent garbled text on Windows
hexo.extend.filter.register('server_middleware', function (app) {
  app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    next()
  })
})
