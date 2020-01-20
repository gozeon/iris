require('dotenv').config()

const fastify = require('fastify')({ logger: true })
const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// plugins
fastify.register(require('fastify-boom'))

// Declare a route
const routes = require('./routes')

routes.forEach((route, index) => {
  fastify.route(route)
})

// error handle
// fastify.setErrorHandler(function (error, request, reply) {
//     // Send error response
//     console.log(error)
//     reply.code(200).send(Object.assign(error.))
// })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
