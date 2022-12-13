import './App.css';
import Page from './components/Page/Page';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {


  
  return (
    <div className="App">
      <div className="app">
        <Switch>
          <Route path="/pages/:id" component={Page} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
