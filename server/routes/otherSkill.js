const express = require('express')
const router = express.Router()

const OtherSkill = require('../model/otherSkills')

router.get('/', (req, res) => {
    // Search all data
    OtherSkill.find({}, (err, foundData) => {
        if(err) {
            return res.status(422).send({errors : [{title:"Other Skill found Error", detail:"Not found"}]});
        }
        res.json(foundData);
    })
})

module.exports = router;