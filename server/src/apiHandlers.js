const allowAuthorized = (req, res, next) => {
  if (req.session && req.session.id) {
    return next();
  }
  res.status(401).json({error: 'Unauthorzied'});
};

const logout = (req, res) => {
  req.session = null;
  res.json({msg: 'Logged out'});
};

const serveMeter = (req, res) => {
  const {db} = req.app.locals;

  db.getMeter(req.session.id).then(rows => res.json(rows));
};

module.exports = {allowAuthorized, serveMeter, logout};
