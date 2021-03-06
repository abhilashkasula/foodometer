const express = require('express');
const cookieSession = require('cookie-session');
const {authentication} = require('./authenticationRouter');
const handlers = require('./apiHandlers');

const SECRET_NAME = process.env.SECRET_NAME;
const SECRET_KEY = process.env.SECRET_KEY;

const api = express.Router();

api.use(express.json());

api.use(cookieSession({name: SECRET_NAME, keys: [SECRET_KEY]}));

api.use('/auth', authentication);

api.get('/isAuthenticated', [
  handlers.allowAuthorized,
  (req, res) => res.json({msg: 'Authenticated'}),
]);
api.get('/people', [handlers.allowAuthorized, handlers.servePeople]);
api.get('/person/:id', [handlers.allowAuthorized, handlers.servePerson]);

api.post('/increment', [handlers.allowAuthorized, handlers.incrementCount]);
api.post('/decrement', [handlers.allowAuthorized, handlers.decrementCount]);

api.post('/addPerson', [handlers.allowAuthorized, handlers.addPerson]);
api.post('/deletePerson', [handlers.allowAuthorized, handlers.deletePerson]);

api.post('/changeFoodmoji', [handlers.allowAuthorized, handlers.changeFoodmoji]);
api.get('/foodmojis', [handlers.allowAuthorized, handlers.serveFoodmojis]);

api.post('/logout', [handlers.allowAuthorized, handlers.logout]);

module.exports = {api};
