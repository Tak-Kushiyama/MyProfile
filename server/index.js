const express = require('express');
const mongoose = require('mongoose')

const experienceRouter = require('./routes/experience');
const coreSkillRouter = require('./routes/coreSkill');
const otherSkillRouter = require('./routes/otherSkill');

const config = require('./config/index')
const FakeDb = require('./fake-db')

// Connection MongoDB and insert fake data
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        if(process.env.NODE_ENV !== "production") {
            const fakeDb = new FakeDb();
            fakeDb.initDb();
        }
    }
)

const app = express()

app.use('/api/v1/experience', experienceRouter);
app.use('/api/v1/core-skill', coreSkillRouter);
app.use('/api/v1/other-skill', otherSkillRouter);

const PORT = process.env.PORT || '3001'

app.get('', (req, res) => {
    res.json({'success': true});
})

if(process.env.NODE_ENV === "production") {
    const appPath = path.join(__dirname, '..', 'dist', 'MyProfile');
    app.use(express.static(appPath))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(appPath, "index.html"));
    })
}

app.listen(PORT, () => {
    console.log('Running')
})