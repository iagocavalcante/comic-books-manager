const ComicBookHandler = require('../handlers/comic-book-handler')

module.exports = [
  {
    method: 'GET',
    path: '/api/comic-book',
    handler: ComicBookHandler.get
  },
  {
    method: 'GET',
    path: '/api/comic-book:/{id}',
    handler: ComicBookHandler.getById
  },
  {
    method: 'GET',
    path: '/api/comic-book/saga/{saga}',
    handler: ComicBookHandler.getBySaga
  },
  {
    method: 'GET',
    path: '/api/comic-book/slug/{slug}',
    handler: ComicBookHandler.getBySlug
  },
  {
    method: 'POST',
    path: '/api/comic-book',
    handler: ComicBookHandler.post
  },
  {
    method: 'PUT',
    path: '/api/comic-book/{id}',
    handler: ComicBookHandler.put
  },
  {
    method: 'DELETE',
    path: '/api/comic-book/{id}',
    handler: ComicBookHandler.remove
  }
]
