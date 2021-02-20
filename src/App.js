import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Landing from './pages/landing'
import Modal from './components/Modal'
import ReadingList from './pages/readingList'
import Lists from './pages/Lists'


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


  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" render={() => localStorage.token ? <Home setOpen={this.setOpen} setLists={this.setLists}/> : <Landing />} />

            <Route exact path="/home" render={(props) => <Home setOpen={this.setOpen} setLists={this.setLists} routerProps={props}/>} />

            <Route exact path="/list/:id" render={(props) => <ReadingList routerProps={props}/>} />

            <Route exact path="/lists" render={(props) => <Lists routerProps={props}/>} />

          </Switch>
          { this.state.modalOpen ? <Modal book={this.state.modalBook} open={this.state.modalOpen} setOpen={this.setOpen}  readingLists={this.state.readingLists}/> : null}
      </Router>
    );
  }
}

export default App;
