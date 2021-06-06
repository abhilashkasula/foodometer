const queries = require('./queries');

class Database {
  constructor(db) {
    this.db = db;
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      this.db.query(queries.getUserByEmail(email)).then(({rows}) => {
        if (rows.length) {
          return resolve({user: rows[0]});
        }
        reject({error: 'No user found'});
      });
    });
  }

  registerUser(email, password, foodmoji, rupees) {
    return new Promise((resolve, reject) => {
      this.db.connect((err, client, done) => {
        client.query(queries.getUserByEmail(email)).then(({rows}) => {
          if (rows.length) {
            done();
            return reject({error: 'This email is already registered'});
          }
          client
            .query(queries.insertUser(email, password, foodmoji, rupees))
            .then(() => resolve({msg: 'Registered'}) || done());
        });
      });
    });
  }

  getMeter(id) {
    return new Promise(resolve => {
      this.db.query(queries.getMeter(id)).then(({rows}) => resolve(rows));
    });
  }
}

module.exports = Database;
