'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const publisher = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  logo: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('Publisher', publisher, 'publisher')