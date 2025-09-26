const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comicBook = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'O slug é obrigatório'],
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  read: {
    type: Boolean,
    required: true,
    default: true
  },
  saga: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  publisher_id: {
    type: Schema.Types.ObjectId,
    ref:'Publisher'
  },
  published_date: {
    type: String,
    trim: true,
    required: [true, 'A data de publicação é obrigatória']
  }
})

module.exports = mongoose.model('ComicBook', comicBook, 'comic-books')