const { Schema, model } = require('mongoose');


const imageSchema = new Schema({
    name: { type: String},
    description: { type: String},
    imageUrl: { type: String, required: true },
  })

  module.exports = model('Image', imageSchema);