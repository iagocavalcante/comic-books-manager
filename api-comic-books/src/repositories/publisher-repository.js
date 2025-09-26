const mongoose = require('mongoose')
const Publisher = mongoose.model('Publisher')

exports.get = async () => {
  const res = await Publisher.find()
  return res
}

exports.getByName = async (name) => {
  const res = await Publisher
    .findOne({
      name: name
    })
  return res
}

exports.getById = async (id) => {
  const res = await Publisher
    .findById(id)
  return res
}

exports.create = async (data) => {
  await Publisher.create(data)
}

exports.update = async (id, data) => {
  await Publisher
    .findByIdAndUpdate(id, {
      $set: {
        name: data.name,
        logo: data.logo,
      }
    })
}

exports.delete = async (id) => {
  await Publisher
    .findOneAndRemove(id)
}