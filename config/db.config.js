module.exports = {
    HOST:process.env.HOST||'localhost',
    USER:process.env.USER||'root',
    PASSWORD:process.env.PASSWORD||'talin',
    DB:process.env.DB||'newdb',
    dialect:process.env.dialect||'mysql',
    max:process.env.MAX,
    min:process.env.MIN,
    acquire:process.env.ACQUIRE,
    idle: process.env.IDLE,
    SECRET:process.env.SECRET
}