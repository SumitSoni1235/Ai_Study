const express = require('express');
const { loginAuth } = require('../Auth/LoginAuth');
const route = express.Router();

route.post('/login', loginAuth);

route.get('/test-ai', async (req, res) => {
    const { invokeai } = require('../services/GenAi');

    try {
        const result = await invokeai();
        res.send(result); // ✅ send response to browser
    } catch (err) {
        console.log(err);
        res.status(500).send("Error calling AI");
    }
});
module.exports = route;