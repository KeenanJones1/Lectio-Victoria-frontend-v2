import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Landing from './pages/landing'

function App() {

  // 'http://localhost:3000/reading_list'
  // 'http://localhost:3000/user/1'

  const fetchthis = () => {
    fetch('http://localhost:3000/user/1')
    .then( resp => resp.json())
    .then( data => console.log(data) )
  }

  return (
    <Router>
        <Switch>
          <Route exact path="/landing" component={Landing}/>
          <Route exact path="/home" component={Home}/>
          {/* <Route exact path=""/> */}
        </Switch>
    </Router>
  );
}

export default App;
