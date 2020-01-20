const templateRoutes = require('./template')
const projectRoutes = require('./project')

const routes = [...templateRoutes.routers, ...projectRoutes.routers]

module.exports = routes
