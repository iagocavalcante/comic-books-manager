const ValidationContract = require('./../validators/fluent-validator')
const repository = require('./../repositories/publisher-repository')
// const guid = require('guid')

const get = async (req, h) => {
  try {
    let data = await repository.get()
    return h.response(data).code(200)
  } catch (e) {
    return h.response({
      message: 'Falha ao processar sua requisição'
    }).code(500)
  }
}

const getByName = async (req, reply) => {
  try {
    let data = await repository.getBySlug(req.params.name)
    return reply.response(data).code(200)
  } catch (e) {
    return reply.response({
      message: 'Falha ao processar sua requisição'
    }).code(500)
  }
}

const getById = async (req, reply) => {
  try {
    let data = await repository.getById(req.params.id)
    return reply.response(data).code(200)
  } catch (e) {
    return reply.response({
      message: 'Falha ao processar sua requisição'
    }).code(500)
  }
}

const post = async (req, reply) => {
  let contract = new ValidationContract()
  contract.hasMinLen(req.payload.name, 5, 'O nome da editora deve conter pelo menos 5 caracteres')
  // Se os dados forem inválidos
  if (!contract.isValid()) {
    return reply.response(contract.errors()).code(400)
  }

  try {
    // Cria o Blob Service
    // const blobSvc = azure.createBlobService(config.containerConnectionString)

    // let filename = guid.raw().toString() + '.jpg'
    // let rawdata = req.payload.image
    // let matches = rawdata.match(/^data:([A-Za-z-+\/]+)base64,(.+)$/)
    // let type = matches[1]
    // let buffer = new Buffer(matches[2], 'base64')

    // // Salva a imagem
    // await blobSvc.createBlockBlobFromText('comic-book-image', filename, buffer, {
    //   contentType: type
    // }, function (error, result, response) {
    //   if (error) {
    //     filename = 'default-comic-book.png'
    //   }
    // })

    await repository.create({
      name: req.payload.name,
      logo: req.payload.logo //'https://nodestr.blob.core.windows.net/product-images/' + filename
    })
    return reply.response({
      message: 'Editora cadastrada com sucesso!'
    }).code(201)
  } catch (e) {
    console.log(e)
    return reply.response({
      message: 'Falha ao processar sua requisição'
    }).code(500)
  }
}

const put = async (req, reply) => {
  try {
    await repository.update(req.params.id, req.payload)
    return reply.response({
      message: 'Editora atualizada com sucesso!'
    }).code(200)
  } catch (e) {
    return reply.response({
      message: 'Falha ao processar sua requisição'
    }).code(500)
  }
}

const remove = async (req, reply) => {
  try {
    await repository.delete(req.payload.id)
    return reply.response({
      message: 'Editora removida com sucesso!'
    }).code(200)
  } catch (e) {
    return reply.response({
      message: 'Falha ao processar sua requisição'
    }).code(500)
  }
}

module.exports = {
  get,
  getById,
  getByName,
  post,
  put,
  remove
}