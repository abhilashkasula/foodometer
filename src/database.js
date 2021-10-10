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

  getPeople(id) {
    return new Promise(resolve => {
      this.db.connect((err, client, done) => {
        client.query(queries.getPeople(id)).then(({rows}) => {
          resolve({people: rows.map(row => row.id)});
          done();
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
    return new Promise((resolve, reject) => {
      this.db.connect((err, client, done) => {
        client.query(queries.getUserById(userId)).then(({rows}) => {
          if (!rows.length) {
            done();
            return reject({error: 'No user found'});
          }
          client
            .query(queries.addPerson(userId, person, count))
            .then(([, {rows}]) => resolve(rows[0]) || done());
        });
      });
    });
  }

  deletePerson(userId, personId) {
    return new Promise(resolve => {
      this.db
        .query(queries.deletePerson(userId, personId))
        .then(() => resolve({res: 'Success'}))
        .catch(() => reject({error: 'No person fount'}));
    });
  }

  incrementCount(userId, personId) {
    return new Promise((resolve, reject) => {
      this.db
        .query(queries.incrementCount(userId, personId))
        .then(() => resolve({res: 'Success'}))
        .catch(() => reject({error: 'No user or person found'}));
    });
  }

  decrementCount(userId, personId) {
    return new Promise((resolve, reject) => {
      this.db
        .query(queries.decrementCount(userId, personId))
        .then(() => resolve({res: 'Success'}))
        .catch(err => reject({error: 'No user or person found'}));
    });
  }

  changeFoodmoji(userId, foodmojiId) {
    return new Promise((resolve, reject) => {
      this.db
        .query(queries.getFoodmoji(foodmojiId))
        .then(({rows}) => {
          if (!rows.length) {
            throw 'Foodmoji not found';
          }
          this.db
            .query(queries.updateFoodmoji(userId, foodmojiId))
            .then(() => resolve({res: 'Success'}));
        })
        .catch(() => reject({error: `No foodmoji with ${foodmojiId} found`}));
    });
  }

  getFoodmojis(userId) {
    return new Promise(resolve => {
      this.db.query(queries.getUserById(userId)).then(({rows}) => {
        const {foodmoji} = rows[0];
        this.db.query(queries.getFoodmojis()).then(({rows}) => {
          const selected = rows.find(moji => moji.id === foodmoji);
          selected.isSelected = true;
          resolve(rows);
        });
      });
    });
  }
}

module.exports = Database;
