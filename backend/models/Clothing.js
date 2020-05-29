const { Schema, model } = require('mongoose');

const clothingSchema = new Schema(
  {
    type: String,
    color: String,
    userId: Schema.Types.ObjectId,
    collabId: Schema.Types.ObjectId
  }
 
);

module.exports = model('Clothing', clothingSchema);



