// const conn = require('mysql2');

// const conection = conn.createConnection({
//     host: 'dpg-d76fa2p4tr6s738qgp00-a',
//     user:'root',
//     password:'MYWqsCqN2qbxIfUhaIp5L2DSXUKwkoGL',
//     database:'aistudydb',

// })
// console.log('Database connected successfully');

// module.exports = conection;


const mysql = require('mysql2');

let connection;

function connectDB() {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    connection.connect((err) => {
        if (err) {
            console.log("DB Error:", err);
        } else {
            console.log("Database connected successfully");
        }
    });
}

module.exports = { connectDB };