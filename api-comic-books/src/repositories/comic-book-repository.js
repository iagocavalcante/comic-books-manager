const mongoose = require('mongoose')
const ComicBook = mongoose.model('ComicBook')

const get = async () => {
  return await ComicBook.find({
    active: true
  }).populate('publisher_id')
}

const getBySlug = async (slug) => {
  return await ComicBook.findOne({
    slug: slug,
    active: true
  }).populate('publisher_id')
}

const getById = async (id) => {
  return await ComicBook.findById(id).populate('publisher_id')
}

const getBySaga = async (saga) => {
  return await ComicBook.find({
    saga: saga,
    active: true
  }).populate('publisher_id')
}

const create = async (data) => {
  const comicBook = new ComicBook(data)
  return await comicBook.save()
}

const update = async (id, data) => {
  return await ComicBook.findByIdAndUpdate(id, {
    $set: data
  })
}

const remove = async (id) => {
  return await ComicBook.findByIdAndUpdate(id, {
    $set: {
      active: false
    }
  })
}

module.exports = {
  get,
  getBySlug,
  getById,
  getBySaga,
  create,
  update,
  delete: remove
}