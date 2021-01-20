import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import Landing from './pages/landing'
import Modal from './components/Modal'
import ReadingList from './pages/readingList'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      modalOpen: false,
      modalBook: {}, 
      readingLists: []
    }
  }

   setOpen = (book) => {
    this.setState(prevState => {
    return{
      modalOpen: !prevState.modalOpen,
      modalBook: book
    }
    })
  }

  setLists = (lists) => {
    this.setState({
      readingLists: lists
    })
  }
  // 'http://localhost:3000/reading_list'
  // 'http://localhost:3000/user/1'

   fetchthis = () => {
    fetch('http://localhost:3000/user/1')
    .then( resp => resp.json())
    .then( data => console.log(data) )
  }
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/home" render={() => <Home setOpen={this.setOpen} setLists={this.setLists}/>} />
            <Route exact path="/list/:id" render={(props) => <ReadingList routerProps={props}/>} />
            {/* route to show list */}
            {/* route to show book */}
            {/* <Route exact path=""/> */}
          </Switch>
          { this.state.modalOpen ? <Modal book={this.state.modalBook} open={this.state.modalOpen} setOpen={this.setOpen}  readingLists={this.state.readingLists}/> : null}
      </Router>
    );
  }
}

export default App;
