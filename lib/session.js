const CONTEXT_SESSION = Symbol('context#contextSession')

module.exports = function (opts, app) {
  extendContext(app.context, opts)

  return async function session (ctx, next) {
    console.log('lib session')
    try {
      await next()
    } catch (err) {
      throw err
    }
  }
}

function extendContext(context, ops) {

}

class ContextSession {
  constructor () {}
}

class Session {
  constructor () {}
}
