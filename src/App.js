import './CSS/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home  from './containers/Home'
import StateList from './containers/StateList'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/states' component={StateList}/>
      </Switch>
    </Router>
  );
}

export default App;