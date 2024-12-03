require('dotenv').config()
const config={
    port:process.env.VITE_PORT,
    mongo_url:process.env.VITE_MONGODB_URI
}

module.exports=config;