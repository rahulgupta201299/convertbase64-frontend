import { Switch,Route } from 'react-router';
import Main from './components/Main'
import './App.css'

function App() {
  return (
    <div className="Main">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
