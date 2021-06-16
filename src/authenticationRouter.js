const express = require('express');
const {signup, login, allowUnauthorized} = require('./authHandlers');

const authentication = express.Router();

authentication.post('/signup', [allowUnauthorized, signup]);
authentication.post('/login', [allowUnauthorized, login]);

module.exports = {authentication};
