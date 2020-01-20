const boom = require('boom')
const _ = require('lodash')
const fastify = require('fastify')({ logger: true })

const Project = require('../models/Project')

exports.getProjects = async (request, reply) => {
  const projects = await Project.find().populate('template')
  return projects
}

exports.getSingelProject = async (request, reply) => {
  const id = request.params.id
  const project = await Project.findById(id).populate('template')

  if (_.isNull(project)) {
    fastify.log.error(`ID: ${id} not found`)
    throw boom.notFound(`ID: ${id}`)
  }

  return project
}

exports.addProject = async (request, reply) => {
  const project = new Project(request.body)

  return project.save()
}

exports.updateProject = async (request, reply) => {
  const id = request.params.id
  const project = request.body
  const { ...updateData } = project
  const update = await Project.findByIdAndUpdate(id, updateData).populate(
    'template'
  )

  if (_.isNull(update)) {
    fastify.log.error(`ID: ${id} not found`)
    throw boom.notFound(`ID: ${id}`)
  }

  return update
}

exports.deleteProject = async (request, reply) => {
  const id = request.params.id
  const project = await Project.findByIdAndRemove(id).populate('template')

  if (_.isNull(project)) {
    fastify.log.error(`ID: ${id} not found`)
    throw boom.notFound(`ID: ${id}`)
  }

  return project
}
