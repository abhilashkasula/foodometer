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

  getDetails(id) {
    return new Promise(resolve => {
      this.db.connect((err, client, done) => {
        client.query(queries.getUserById(id)).then(({rows}) => {
          const {rupees, foodmoji} = rows[0];
          client.query(queries.getIds(id)).then(({rows}) => {
            resolve({rupees, foodmoji, people: rows.map(row => row.id)});
            done();
          });
        });
      });
    });
  }

  getPerson(userId, id) {
    return new Promise((resolve, reject) => {
      this.db.query(queries.getPerson(userId, id)).then(({rows}) => {
        if (!rows.length) {
          return reject({error: 'No person found'});
        }
        resolve(rows[0]);
      });
    });
  }

  addPerson(userId, person, count) {
    return new Promise(resolve => {
      this.db.connect((err, client, done) => {
        client
          .query(queries.addPerson(userId, person, count))
          .then(([, {rows}]) => resolve(rows[0]));
      });
    });
  }
}

module.exports = Database;