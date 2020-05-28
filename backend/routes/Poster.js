
const router = require('express').Router();
const Poster = require ('../models/Poster')

router.get('/getPoster', (req, res) => {
    console.log("awesome")
    Poster.find().then(data => {
        res.json(data)
    })

    
});

// router.get('/', (req, res, next) => {
//   res.status(200).json({ msg: 'Working' });
// });

module.exports = router;