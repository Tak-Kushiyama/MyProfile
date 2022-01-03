const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    date: String,
    companyName: String,
    title: String,
    role: String,
    description: String,
    workDetail1: String,
    workDetail2: String,
    workDetail3: String,
    workDetail4: String,
    workDetail5: String,
});

module.exports = mongoose.model('Experience', ExperienceSchema);