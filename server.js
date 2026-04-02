process.env.GLOBAL_AGENT_HTTP_PROXY = 'http://mkthoproxy.ds.indianoil.in:8080';
const { bootstrap } = require('global-agent');
const routes = require('./src/routes/route');
bootstrap();

const app= require('./app');

const {invokeai} = require('./src/services/GenAi');
invokeai();
app.use('/',routes);
const db = require('./src/db/db');

(async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email TEXT,
                password TEXT
            );
        `);
        console.log("Table created ✅");
    } catch (err) {
        console.log(err);
    }
})();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});