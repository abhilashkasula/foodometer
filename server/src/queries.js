const insertUser = (email, password, foodmoji, rupees) =>
  `INSERT INTO users (email, password, foodmoji, rupees) VALUES ('${email}', '${password}', '${foodmoji}', ${rupees})`;

const getUserByEmail = email => `SELECT * FROM users WHERE email = '${email}'`;

const getMeter = id => `SELECT * FROM meter WHERE user_id = ${id}`;

module.exports = {insertUser, getUserByEmail, getMeter};
