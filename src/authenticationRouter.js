const express = require('express');
const {signup, login, allowUnauthorized} = require('./authHandlers');

const authentication = express.Router();

authentication.use(allowUnauthorized);

authentication.post('/signup', signup);
authentication.post('/login', login);

module.exports = {authentication};
