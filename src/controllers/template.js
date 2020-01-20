const boom = require('boom')
const _ = require('lodash')
const fastify = require('fastify')({ logger: true })

const Template = require('../models/Template')

exports.getTemplates = async (request, reply) => {
  const templates = await Template.find()
  return templates
}

exports.getSingelTemplate = async (request, reply) => {
  const id = request.params.id
  const template = await Template.findById(id)

  if (_.isNull(template)) {
    fastify.log.error(`ID: ${id} not found`)
    throw boom.notFound(`ID: ${id}`)
  }

  return template
}

exports.addTemplate = async (request, reply) => {
  const template = new Template(request.body)
  return template.save()
}

exports.updateTemplate = async (request, reply) => {
  const id = request.params.id
  const template = request.body
  const { ...updateData } = template
  const update = await Template.findByIdAndUpdate(id, updateData)

  if (_.isNull(update)) {
    fastify.log.error(`ID: ${id} not found`)
    throw boom.notFound(`ID: ${id}`)
  }

  return update
}

exports.deleteTemplate = async (request, reply) => {
  const id = request.params.id
  const template = await Template.findByIdAndRemove(id)

  if (_.isNull(template)) {
    fastify.log.error(`ID: ${id} not found`)
    throw boom.notFound(`ID: ${id}`)
  }

  return template
}
