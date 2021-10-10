const insertUser = (email, password, foodmoji, rupees) =>
  `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`;

const getUserByEmail = email => `SELECT * FROM users WHERE email = '${email}'`;

const getUserById = id => `SELECT * FROM users WHERE id = '${id}'`;

const getPeople = id =>
  `SELECT id FROM meter WHERE user_id = ${id} ORDER BY id DESC`;

const getPerson = (userId, id) =>
  `SELECT * FROM meter WHERE user_id = ${userId} AND id = ${id}`;

const addPerson = (userId, person, count) =>
  `INSERT INTO meter (user_id, person, count) VALUES (${userId}, '${person}', ${count}); SELECT id FROM meter where user_id = ${userId} ORDER BY id DESC LIMIT 1;`;

const deletePerson = (userId, personId) =>
  `DELETE FROM meter WHERE user_id = ${userId} AND id = ${personId}`;

const incrementCount = (userId, personId) =>
  `UPDATE meter SET count = count + 1 WHERE user_id = ${userId} AND id = ${personId}`;

const decrementCount = (userId, personId) =>
  `UPDATE meter SET count = count - 1 WHERE user_id = ${userId} AND id = ${personId}`;

const getFoodmojis = () => 'SELECT * FROM foodmojis;';

const getFoodmoji = id => `SELECT * FROM foodmojis WHERE id = ${id}`;

const updateFoodmoji = (userId, foodmojiId) =>
  `UPDATE users SET foodmoji = ${foodmojiId} WHERE id = ${userId}`;

module.exports = {
  insertUser,
  getUserByEmail,
  getUserById,
  getPeople,
  addPerson,
  getPerson,
  incrementCount,
  decrementCount,
  deletePerson,
  getFoodmojis,
  getFoodmoji,
  updateFoodmoji,
};
