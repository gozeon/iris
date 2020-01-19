const boom = require('boom')
const fastify = require('fastify')({ logger: true })

const Template = require('../models/Template')

exports.getTemplates = async (request, reply) => {
  try {
    const templates = await Template.find()
    return templates
  } catch (err) {
    fastify.log.error(err)
    throw boom.boomify(err)
  }
}

exports.getSingelTemplate = async (request, reply) => {
  try {
    const id = request.params.id
    const template = await Template.findById(id)
    return template
  } catch (err) {
    fastify.log.error(err)
    throw boom.boomify(err)
  }
}

exports.addTemplate = async (request, reply) => {
  try {
    const template = new Template(request.body)
    return template.save()
  } catch (err) {
    fastify.log.error(err)
    throw boom.boomify(err)
  }
}

exports.updateTemplate = async (request, reply) => {
  try {
    const id = request.params.id
    const template = request.body
    const { ...updateData } = template
    const update = await Template.findByIdAndUpdate(id, updateData)
    return update
  } catch (err) {
    fastify.log.error(err)
    throw boom.boomify(err)
  }
}

exports.deleteTemplate = async (request, reply) => {
  try {
    const id = request.params.id
    const template = await Template.findByIdAndRemove(id)
    return template
  } catch (err) {
    fastify.log.error(err)
    throw boom.boomify(err)
  }
}
