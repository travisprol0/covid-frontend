import './CSS/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home  from './containers/Home'
import StateList from './containers/StateList'
import State from './containers/State'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/states' component={StateList}/>
        <Route path = '/states/:id' component={State}/>
      </Switch>
    </Router>
  );
}

export default App;