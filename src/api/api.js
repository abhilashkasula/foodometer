const ROUTES = {
  IS_AUTHENTICATED: '/api/isAuthenticated',
  LOGIN: '/api/auth/login',
  SIGNUP: '/api/auth/signup',
  LOGOUT: '/api/logout',
  ADD_PERSON: '/api/addPerson',
  METER: '/api/meter',
};

const get = route => fetch(route).then(res => res.json());

const post = (route, body) =>
  fetch(route, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json());

const isAuth = () => get(ROUTES.IS_AUTHENTICATED);
const getMeter = () => get(ROUTES.METER);

const login = (email, password) => post(ROUTES.LOGIN, {email, password});
const logout = () => post(ROUTES.LOGOUT);
const signup = (email, password, confirm) =>
  post(ROUTES.SIGNUP, {email, password, confirm});

const addPerson = person => post(ROUTES.ADD_PERSON, {person});

const Api = {isAuth, login, signup, getMeter, logout, addPerson};

export default Api;
