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
api.get('/details', [handlers.allowAuthorized, handlers.serveDetails]);
api.get('/person/:id', [handlers.allowAuthorized, handlers.servePerson]);

api.post('/increment', [handlers.allowAuthorized, handlers.incrementCount]);
api.post('/decrement', [handlers.allowAuthorized, handlers.decrementCount]);

api.post('/addPerson', [handlers.allowAuthorized, handlers.addPerson]);
api.post('/deletePerson', [handlers.allowAuthorized, handlers.deletePerson]);

api.post('/logout', [handlers.allowAuthorized, handlers.logout]);

module.exports = {api};
