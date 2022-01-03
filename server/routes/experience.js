const express = require('express')
const router = express.Router()

const Experience = require('../model/experience')

router.get('/', (req, res) => {
    // Search all data
    Experience.find({}, (err, foundData) => {
        if(err) {
            return res.status(422).send({errors : [{title:"Experience found Error", detail:"Not found"}]});
        }
        res.json(foundData);
    })
})

module.exports = router;