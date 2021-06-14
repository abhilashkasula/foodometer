const express = require('express');
const {Pool} = require('pg');
const {api} = require('./src/apiRouter');
const Database = require('./src/database');

const PORT = process.env.PORT || 9000;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {rejectUnauthorized: false},
});

app.locals.db = new Database(pool);

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.static('build'));

app.use('/api', api);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
