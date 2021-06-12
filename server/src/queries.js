const insertUser = (email, password, foodmoji, rupees) =>
  `INSERT INTO users (email, password, foodmoji, rupees) VALUES ('${email}', '${password}', '${foodmoji}', ${rupees})`;

const getUserByEmail = email => `SELECT * FROM users WHERE email = '${email}'`;

const getUserById = id => `SELECT * FROM users WHERE id = '${id}'`;

const getMeter = id => `SELECT * FROM meter WHERE user_id = ${id}`;

const addPerson = (userId, person, count) =>
  `INSERT INTO meter (user_id, person, count) VALUES (${userId}, '${person}', ${count}); SELECT * FROM meter where user_id = ${userId} ORDER BY id DESC LIMIT 1;`;

module.exports = {insertUser, getUserByEmail, getUserById, getMeter, addPerson};
