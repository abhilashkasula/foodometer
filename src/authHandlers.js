const signup = (req, res) => {
  const {email, password, confirm} = req.body;
  const {db} = req.app.locals;
  const foodmoji = 'https://img.icons8.com/doodle/48/000000/french-fries.png';
  const rupees = 100;

  if (!email.match(/^[a-z]{2,}@[a-z]{2,}\.[a-z]{2,}$/)) {
    return res.status(400).json({error: 'Enter a valid email'});
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({error: 'Password should be at least 8 characters'});
  }

  if (password !== confirm) {
    return res.status(400).json({error: "Password didn't match"});
  }

  db.registerUser(email, password, foodmoji, rupees)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};

const login = (req, res) => {
  const {email, password} = req.body;
  const {db} = req.app.locals;

  db.getUserByEmail(email)
    .then(({user}) => {
      if (password === user.password) {
        req.session.id = user.id;
        return res.json({msg: 'Logged in'});
      }

      res.status(400).json({error: 'Email or password is incorrect'});
    })
    .catch(() =>
      res.status(400).json({error: 'Email or password is incorrect'})
    );
};

const allowUnauthorized = (req, res, next) => {
  if (req.session && req.session.id) {
    return res.status(400).json({error: 'Bad Request'});
  }
  next();
};

module.exports = {signup, login, allowUnauthorized};
