import { Switch,Route } from 'react-router';
import Main from './components/Main'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
