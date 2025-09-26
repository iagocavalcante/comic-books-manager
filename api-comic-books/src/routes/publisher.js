const PublisherHandler = require('../handlers/publisher-handler')

module.exports = [
  {
    method: 'GET',
    path: '/api/publisher',
    handler: PublisherHandler.get
  },
  {
    method: 'GET',
    path: '/api/publisher/{id}',
    handler: PublisherHandler.getById
  },
  {
    method: 'GET',
    path: '/api/publisher/name/{name}',
    handler: PublisherHandler.getByName
  },
  {
    method: 'POST',
    path: '/api/publisher',
    handler: PublisherHandler.post
  },
  {
    method: 'PUT',
    path: '/api/publisher/{id}',
    handler: PublisherHandler.put
  },
  {
    method: 'DELETE',
    path: '/api/publisher/{id}',
    handler: PublisherHandler.remove
  }
]
