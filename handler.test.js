const hello = require('./handler').hello

describe('First test', () => {
  it('deve funcionar', (done) => {
    const event = {}
    const context = {}
    const callback = (ctx, data) => {
      console.log('Data: ', data)
      done()
    }
    hello(event, context, callback)
  })
})