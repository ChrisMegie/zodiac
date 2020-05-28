const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const CollabSchema = new Schema(
  {
    userId: Schema.Types.ObjectId,
    Artist: String,
    Bio: String,
    Design: String,
    Imageurl: String,
    Info: String,
    Insta: String,
    Twitter: String,
    Youtube: String,
    Live: {type:Boolean, default:false}

  },
  {
    timestamps: true,
    versionKey: false
  }
);



module.exports = model('Collab', CollabSchema);
