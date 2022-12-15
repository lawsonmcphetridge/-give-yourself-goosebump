import './App.css';
import Page from './components/Page/Page';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <div className="app">
        <Switch>
          <Route path="/pages/:id" component={Page} />
          <Route path="/auth/:type" component={Auth} />
          <Route path="/home" component={Landing} />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
