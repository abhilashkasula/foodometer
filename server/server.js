const express = require('express');
const {Pool} = require('pg');
const {api} = require('./src/apiRouter');
const Database = require('./src/database');

const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {rejectUnauthorized: false},
});

app.locals.db = new Database(pool);

app.use('/api', api);

app.listen(9000, () => console.log('Listening at 9000...'));
