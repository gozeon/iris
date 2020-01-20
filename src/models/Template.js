const mongoose = require('mongoose')

const templateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    name: { type: String, required: true, trim: true },
    version: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Template', templateSchema)
