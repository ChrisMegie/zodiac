
const router = require('express').Router();
const Clothing = require ('../models/Clothing')

router.get('/getClothing', (req, res) => {
    console.log("awesome")
    Clothing.find().then(data => {
        res.json(data)
    })
});
// router.get('/', (req, res, next) => {
//   res.status(200).json({ msg: 'Working' });
// });

module.exports = router;
