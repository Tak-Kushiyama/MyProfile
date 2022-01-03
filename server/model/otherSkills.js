const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OtherSkillSchema = new Schema({
    skillName: String,
});

module.exports = mongoose.model('OtherSkill', OtherSkillSchema);