require('dotenv').config()
const password = process.env.PASSWORD

const connect = async () => {
    if (global.connection && global.connection.state != "disconected"){
        return global.connection

    }
    const mysql = require('mysql2/promise');
    const conn = mysql.createConnection(`mysql://root:${password}@localhost:3306/eden`)
    
    console.log("Connection estabilished")
    global.conection = conn
    return conn

}

connect()
module.exports = {}