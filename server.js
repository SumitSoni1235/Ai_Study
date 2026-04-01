process.env.GLOBAL_AGENT_HTTP_PROXY = 'http://mkthoproxy.ds.indianoil.in:8080';
const { bootstrap } = require('global-agent');
bootstrap();

const app= require('./app');
require('./src/db/db');
const {invokeai} = require('./src/services/GenAi');
invokeai();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});