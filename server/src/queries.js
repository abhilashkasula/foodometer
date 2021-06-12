const insertUser = (email, password, foodmoji, rupees) =>
  `INSERT INTO users (email, password, foodmoji, rupees) VALUES ('${email}', '${password}', '${foodmoji}', ${rupees})`;

const getUserByEmail = email => `SELECT * FROM users WHERE email = '${email}'`;

const getUserById = id => `SELECT * FROM users WHERE id = '${id}'`;

const getIds = id =>
  `SELECT id FROM meter WHERE user_id = ${id} ORDER BY id DESC`;

const getPerson = (userId, id) =>
  `SELECT * FROM meter WHERE user_id = ${userId} AND id = ${id}`;

const addPerson = (userId, person, count) =>
  `INSERT INTO meter (user_id, person, count) VALUES (${userId}, '${person}', ${count}); SELECT id FROM meter where user_id = ${userId} ORDER BY id DESC LIMIT 1;`;

const incrementCount = (userId, personId) =>
  `UPDATE meter SET count = count + 1 WHERE user_id = ${userId} AND id = ${personId}`;

const decrementCount = (userId, personId) =>
  `UPDATE meter SET count = count - 1 WHERE user_id = ${userId} AND id = ${personId}`;

module.exports = {
  insertUser,
  getUserByEmail,
  getUserById,
  getIds,
  addPerson,
  getPerson,
  incrementCount,
  decrementCount,
};
