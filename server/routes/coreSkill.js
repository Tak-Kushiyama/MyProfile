const express = require('express')
const router = express.Router()

const CoreSkill = require('../model/coreSkills')

router.get('/', (req, res) => {
    // Search all data
    CoreSkill.find({}, (err, foundData) => {
        if(err) {
            return res.status(422).send({errors : [{title:"Core Skill found Error", detail:"Not found"}]});
        }
        res.json(foundData);
    })
})

module.exports = router;