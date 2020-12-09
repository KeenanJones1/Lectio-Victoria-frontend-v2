import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Layout from './components/layout'

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
      <Layout>
        <Switch>
          <Route />
          <Route />
          <Route />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
