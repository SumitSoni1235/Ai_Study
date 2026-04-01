const express = require('express');
const { loginAuth } = require('../Auth/LoginAuth');
const route = express.Router();

route.post('/login', loginAuth);

module.exports = route;