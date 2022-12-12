import './App.css';
import Book from './components/Book/Book';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {


  
  return (
    <div className="App">
      <div className="app">
        <Switch>
          <Route path="/books" component={Book} />
    
        
        </Switch>
      </div>
    </div>
  );
}

export default App;
