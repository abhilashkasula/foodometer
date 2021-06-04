import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import Authorize from './components/Authorize';
import Home from './components/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Authorize isLogin />
      </Route>
      <Route path="/join">
        <Authorize />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
