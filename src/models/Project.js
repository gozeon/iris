const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true, default: '' },
    template: { type: Schema.Types.ObjectId, ref: 'Template' },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Project', projectSchema)
