// const conn = require('mysql2');

// const conection = conn.createConnection({
//     host: 'dpg-d76fa2p4tr6s738qgp00-a',
//     user:'root',
//     password:'MYWqsCqN2qbxIfUhaIp5L2DSXUKwkoGL',
//     database:'aistudydb',

// })
// console.log('Database connected successfully');

// module.exports = conection;


const db = require('pg');

const pool = new db.Pool({
    host: 'dpg-d76fa2p4tr6s738qgp00-a',
    user:'root',
    password:'MYWqsCqN2qbxIfUhaIp5L2DSXUKwkoGL',
    database:'aistudydb',
    port: 5432,
})

pool.connect().then(()=>{
    console.log('Database connected successfully');
}).catch((err)=>{
    console.error('Error connecting to the database:', err);
})


module.exports = { connectDB };