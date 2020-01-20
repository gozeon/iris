const projectController = require('../controllers/project')

exports.routers = [
  {
    method: 'GET',
    url: '/api/projects',
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              name: { type: 'string' },
              description: { type: 'string' },
              template: {
                type: 'object',
                properties: {
                  _id: { type: 'string' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  name: { type: 'string' },
                  version: { type: 'string' },
                  createdAt: { type: 'string' },
                  updatedAt: { type: 'string' },
                },
                nullable: true,
              },
              createdAt: { type: 'string' },
              updatedAt: { type: 'string' },
            },
          },
        },
      },
    },
    handler: projectController.getProjects,
  },
  {
    method: 'GET',
    url: '/api/projects/:id',
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', maxLength: 24, minLength: 24 },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            template: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                title: { type: 'string' },
                description: { type: 'string' },
                name: { type: 'string' },
                version: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
              },
              nullable: true,
            },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
    handler: projectController.getSingelProject,
  },
  {
    method: 'POST',
    url: '/api/projects',
    schema: {
      body: {
        type: 'object',
        required: ['name', 'template'],
        properties: {
          description: { type: 'string' },
          name: { type: 'string' },
          template: { type: 'string', maxLength: 24, minLength: 24 },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            template: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                title: { type: 'string' },
                description: { type: 'string' },
                name: { type: 'string' },
                version: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
              },
            },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
    handler: projectController.addProject,
  },
  {
    method: 'PUT',
    url: '/api/projects/:id',
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', maxLength: 24, minLength: 24 },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            template: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                title: { type: 'string' },
                description: { type: 'string' },
                name: { type: 'string' },
                version: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
              },
              nullable: true,
            },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
    handler: projectController.updateProject,
  },
  {
    method: 'DELETE',
    url: '/api/projects/:id',
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', maxLength: 24, minLength: 24 },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            template: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                title: { type: 'string' },
                description: { type: 'string' },
                name: { type: 'string' },
                version: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
              },
              nullable: true,
            },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
    handler: projectController.deleteProject,
  },
]
