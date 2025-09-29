const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const connectToDataBase = () => {
  console.log('Connecting to database:', process.env.MONGO_HOST)
  mongoose.connect(process.env.MONGO_HOST)
  
  mongoose.connection.on('connected', () => {
    console.log('Database connected successfully')
  })
  
  mongoose.connection.on('error', (err) => {
    console.log('Database connection error:', err)
  })
}

const loadModels = () => {
  const ComicBook = require('./models/comic-book')
  const Publisher = require('./models/publisher')
}
//testing deploy pipeline with jenkins and githooks
const serverFactory = () => {
  connectToDataBase()
  loadModels()
  const server = new Hapi.Server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes: { 
      cors: { 
        origin: ['*'] 
      }
    }
  })

  const routes = require('./routes')

  server.route(routes.comicBook)
  server.route(routes.publisher)

  return server
}

// Start the server
const start = ( server ) => {
  server.start((err) => {
    if ( err ) {
      console.log(err)
      process.exit(1)
    }
    console.log('Server running at:', server.info.uri)
  })
}

module.exports = {
  serverFactory,
  start,
}
