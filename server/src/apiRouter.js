const express = require('express');
const cookieSession = require('cookie-session');
const {authentication} = require('./authenticationRouter');
const handlers = require('./apiHandlers');

const api = express.Router();

api.use(express.json());

api.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);

api.use('/auth', authentication);

api.use(handlers.allowAuthorized);

api.get('/isAuthenticated', (req, res) => res.json({msg: 'Authenticated'}));
api.get('/meter', handlers.serveMeter);

api.post('/logout', handlers.logout);

module.exports = {api};
