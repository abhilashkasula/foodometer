const allowAuthorized = (req, res, next) => {
  if (req.session && req.session.id) {
    return next();
  }
  res.status(401).json({error: 'Unauthorized'});
};

const logout = (req, res) => {
  req.session = null;
  res.json({msg: 'Logged out'});
};

const servePeople = (req, res) => {
  const {db} = req.app.locals;

  db.getPeople(req.session.id).then(rows => res.json(rows));
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
  const name = person.trim();

  if (!name) {
    return res.json({error: 'Give a valid name'});
  }

  db.addPerson(req.session.id, name, 0)
    .then(data => res.json({res: data}))
    .catch(err => res.status(400).json(err));
};

const deletePerson = (req, res) => {
  const {person} = req.body;
  const {db} = req.app.locals;

  db.deletePerson(req.session.id, person)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
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

const changeFoodmoji = (req, res) => {
  const {id: foodmojiId} = req.body;
  const {id} = req.session;
  const {db} = req.app.locals;

  db.changeFoodmoji(id, foodmojiId)
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err));
};

const serveFoodmojis = (req, res) => {
  const {id} = req.session;
  const {db} = req.app.locals;

  db.getFoodmojis(id).then(response => res.json(response));
};

module.exports = {
  allowAuthorized,
  servePeople,
  logout,
  addPerson,
  deletePerson,
  servePerson,
  incrementCount,
  decrementCount,
  changeFoodmoji,
  serveFoodmojis,
};
