const ROUTES = {
  IS_AUTHENTICATED: '/api/isAuthenticated',
  LOGIN: '/api/auth/login',
  SIGNUP: '/api/auth/signup',
  LOGOUT: '/api/logout',
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
const signup = (email, password, confirm) =>
  post(ROUTES.SIGNUP, {email, password, confirm});
const logout = () => post(ROUTES.LOGOUT);

const Api = {isAuth, login, signup, getMeter, logout};

export default Api;
