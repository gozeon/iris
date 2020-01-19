const mongoose = require('mongoose')

const templateSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    name: String,
    version: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Template', templateSchema)
