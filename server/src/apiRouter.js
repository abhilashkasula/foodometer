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

api.get('/isAuthenticated', [
  handlers.allowAuthorized,
  (req, res) => res.json({msg: 'Authenticated'}),
]);
api.get('/meter', [handlers.allowAuthorized, handlers.serveMeter]);

api.post('/logout', [handlers.allowAuthorized, handlers.logout]);

module.exports = {api};
