const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,


        pool: {
            max: dbConfig.max,
            min: dbConfig.min,
            acquire: dbConfig.acquire,
            idle: dbConfig.idle

        }
    }
)


sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('./user.model')(sequelize, DataTypes)
db.products = require('./product.model')(sequelize, DataTypes)
db.reports = require('./log-report.model')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
}).catch((err)=>{
    console.log('some thing wrong',err)
})

module.exports = db