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

const serveDetails = (req, res) => {
  const {db} = req.app.locals;

  db.getDetails(req.session.id).then(rows => res.json(rows));
};

const servePerson = (req, res) => {
  const {id} = req.params;
  const {db} = req.app.locals;

  db.getPerson(req.session.id, id)
    .then(person => res.json(person))
    .catch(err => res.status(400).json(err));
};

const addPerson = (req, res) => {
  const {person} = req.body;
  const {db} = req.app.locals;

  db.addPerson(req.session.id, person, 0).then(data => res.json({res: data}));
};

const incrementCount = (req, res) => {
  const {personId} = req.body;
  const {id} = req.session;
  const {db} = req.app.locals;

  db.incrementCount(id, personId)
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err));
};

const decrementCount = (req, res) => {
  const {personId} = req.body;
  const {id} = req.session;
  const {db} = req.app.locals;

  db.decrementCount(id, personId)
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err));
};

module.exports = {
  allowAuthorized,
  serveDetails,
  logout,
  addPerson,
  servePerson,
  incrementCount,
  decrementCount,
};
