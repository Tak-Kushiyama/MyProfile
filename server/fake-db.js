const Experience = require('./model/experience')
const CoreSkill = require('./model/coreSkills')
const OtherSkill = require('./model/otherSkills')

class FakeDb {

    constructor() {
        this.experiences = [
            {
                date: '2007 - 2010',
                companyName: 'JRCS Co.Ltd.',
                title: 'New System Development',
                role: 'Software engineer',
                description: 'I have developed an alarm monitoring system for vessel.',
                workDetail1: 'System architect',
                workDetail2: 'Development of embedded software for HMI and hardware (Renesas H8)',
                workDetail3: 'RS422/485 serial communication',
                workDetail4: 'EMC test (IEC 61000-4-2,3,4,5,6 & CISPR 16-2-1,3)',
                workDetail5: 'Application for approval to each ship classification'
            },
            {
                date: '2011 - 2016',
                companyName: 'JRCS Co.Ltd.',
                title: 'New System Development',
                role: 'Software engineer',
                description: 'I have developed next generation alarm monitoring system for vessel.',
                workDetail1: 'Development of embedded software for HMI and hardware (Renesas SH-A & H8)',
                workDetail2: 'RS422/485 serial communication (HDLC / Modbus / NMEA protocol)',
                workDetail3: 'TCP/UDP communication',
                workDetail4: 'EMC test (IEC 61000-4-2,3,4,5,6 & CISPR 16-2-1,3)',
                workDetail5: 'Application for approval to each ship classification'
            },
            {
                date: '2017 - 2020',
                companyName: 'JRCS Co.Ltd.',
                title: 'System update',
                role: 'Software engineer',
                description: "I have customized the system to meet the customer's requirements.",
                workDetail1: "Auto heel control system",
                workDetail2: "PID control",
                workDetail3: "Auto ballast water control system",
                workDetail4: 'Vessel total control system',
                workDetail5: 'Fuel gas control system',
            },
            {
                date: '2021 - ',
                companyName: 'JRCS Co.Ltd.',
                title: 'New Digital Service Development',
                role: 'Software engineer',
                description: "I'm developing the next generation of integration services for vessel",
                workDetail1: "Edge computing",
                workDetail2: "Cloud service",
                workDetail3: 'Integrated alarm monitoring system',
                workDetail4: '',
                workDetail5: '',
            },
        ]

        this.coreSkills = [
            {
                skillName: 'C'
            },
            {
                skillName: 'C#'
            },
            {
                skillName: 'javascript'
            },
            {
                skillName: 'Database / SQL'
            },
            {
                skillName: 'HTML / CSS'
            },
            {
                skillName: 'Angular'
            },
            {
                skillName: 'Node.js'
            },
            {
                skillName: 'ASP.NET CORE'
            },
            {
                skillName: 'xUnit'
            },
            {
                skillName: 'Git'
            },
            {
                skillName: 'Docker'
            },
            {
                skillName: 'TCP / UDP'
            },
            {
                skillName: 'HTTP'
            },
            {
                skillName: 'Modbus RTU/TCP'
            },
            {
                skillName: 'Microsoft Azure'
            },
            {
                skillName: 'PID'
            },
        ]

        this.otherSkills = [
            {
                skillName: 'Windows Embedded'
            },
            {
                skillName: 'Linux'
            },
            {
                skillName: 'ITron'
            },
            {
                skillName: 'Hardware'
            },
            {
                skillName: 'Renesas SH-A & H8'
            },
            {
                skillName: 'EMC(Electromagnetic compatibility)'
            },
            {
                skillName: 'Agile(Scrum)'
            },
        ]
    }

    async initDb() {
        // All clear data in database
        await this.cleanDb()
        // Insert fake data to database
        this.pushProductToDb()
    }

    async cleanDb() {
        await Experience.deleteMany({})
        await CoreSkill.deleteMany({})
        await OtherSkill.deleteMany({})
    }

    pushProductToDb() {
        this.experiences.forEach(
            (experience) => {
                const newExperience = new Experience(experience)
                newExperience.save()
            }
        )
        this.coreSkills.forEach(
            (coreSkill) => {
                const newCoreSkill = new CoreSkill(coreSkill)
                newCoreSkill.save()
            }
        )
        this.otherSkills.forEach(
            (otherSkill) => {
                const newOtherSkill = new OtherSkill(otherSkill)
                newOtherSkill.save()
            }
        )
    }
}

module.exports = FakeDb