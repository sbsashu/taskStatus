const dotEnv = require('dotenv')
dotEnv.config();

const config = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URI
}

module.exports = {
    config
}