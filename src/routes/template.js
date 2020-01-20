const templateController = require('../controllers/template')

exports.routers = [
  {
    method: 'GET',
    url: '/api/templates',
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
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
        },
      },
    },
    handler: templateController.getTemplates,
  },
  {
    method: 'GET',
    url: '/api/templates/:id',
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
            title: { type: 'string' },
            description: { type: 'string' },
            name: { type: 'string' },
            version: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
    handler: templateController.getSingelTemplate,
  },
  {
    method: 'POST',
    url: '/api/templates',
    schema: {
      body: {
        type: 'object',
        required: ['title', 'name', 'version'],
        properties: {
          title: { type: 'string' },
          description: { type: 'string' },
          name: { type: 'string' },
          version: { type: 'string' },
        },
      },
      response: {
        200: {
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
      },
    },
    handler: templateController.addTemplate,
  },
  {
    method: 'PUT',
    url: '/api/templates/:id',
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
            title: { type: 'string' },
            description: { type: 'string' },
            name: { type: 'string' },
            version: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
    handler: templateController.updateTemplate,
  },
  {
    method: 'DELETE',
    url: '/api/templates/:id',
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
            title: { type: 'string' },
            description: { type: 'string' },
            name: { type: 'string' },
            version: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
          },
        },
      },
    },
    handler: templateController.deleteTemplate,
  },
]
