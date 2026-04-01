const conn = require('mysql2');

const conection = conn.createConnection({
    host: 'localhost',
    user:'root',
    password:'Soniji@1235',
    database:'AiStudy'
})
console.log('Database connected successfully');

module.exports = conection;