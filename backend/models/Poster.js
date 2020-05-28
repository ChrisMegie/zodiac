const { Schema, model } = require('mongoose');

const PosterSchema = new Schema(
  {
    type: String,
    Size: String,
    userId: Schema.Types.ObjectId,
    collabId: Schema.Types.ObjectId
  }
 
);

module.exports = model('Poster', PosterSchema);