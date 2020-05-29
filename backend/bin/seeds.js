

require('dotenv').config();
const Clothing = require('../models/Clothing')
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ironplate'
console.log('Connecting DB to ', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

  const leads = [{
      type: 'shirt',
      color: 'blue'
  },

{
    type: 'shirt',
    color: 'red'   
},

{
    type: 'shirt',
    color: 'green'
}
]
Clothing.insertMany(leads).then(res => { 
    console.log(res)
    mongoose.disconnect()

})

