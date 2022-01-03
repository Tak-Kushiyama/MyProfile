const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoreSkillSchema = new Schema({
    skillName: String,
});

module.exports = mongoose.model('CoreSkill', CoreSkillSchema);