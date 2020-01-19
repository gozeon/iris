const templateController = require('../controllers/template')

const routes = [
  {
    method: 'GET',
    url: '/api/templates',
    handler: templateController.getTemplates,
  },
  {
    method: 'GET',
    url: '/api/templates/:id',
    handler: templateController.getSingelTemplate,
  },
  {
    method: 'POST',
    url: '/api/templates',
    handler: templateController.addTemplate,
  },
  {
    method: 'PUT',
    url: '/api/templates/:id',
    handler: templateController.updateTemplate,
  },
  {
    method: 'DELETE',
    url: '/api/templates/:id',
    handler: templateController.deleteTemplate,
  },
]

module.exports = routes
