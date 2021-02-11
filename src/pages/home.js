import React from 'react'
import Layout from '../components/layout'
import CurrentlyReading from '../components/currentlyReading'
import Books from '../components/Books'
import ReadingLists from '../components/ReadingLists'
import Stats from '../components/Stats/Stats'
import Design from '../components/Design'
import {useHistory} from 'react-router-dom'

class home extends React.Component{
  constructor(){
    super()
    this.state={
    readingLists: [],
    user: {},
    bookList: [],
    stats:[]
    }
  }

  componentDidMount(){
   if(localStorage.token){
    const token = localStorage.getItem('token')
    const reqObj = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    }
    fetch('http://localhost:3000/myuser', reqObj)
    .then(resp => resp.json())
    .then(data => this.updateInfo(data)
      )
    }else{
      this.props.routerProps.history.push("/")
    }
  }

  // "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.Kl0FmyScNcgfYynnRXiI6tBR0dmCn0xXn0HZBnAM31Q"

  getCurr = () => {
    if(this.state.readingLists){
    let curr = this.state.readingLists.find(list => list.name === "Currently Reading")
    return curr
    }
  }

  setBooks = (books) => {
    this.setState({
      bookList: books
    })
  }

  updateInfo = (data) => {
    this.setState({
      readingLists: data.reading_lists,
      stats: data.stats,
      user: {username: data.username, email: data.email}})
      this.props.setLists(data.reading_lists)
  }




  render(){
    return (
     <Layout>
       <header className="container-fluid" id="header">
        <div className="row">
          <div className="col-4">
          <Design />
          </div>
          <div className="col-8" id="stats-headers">
          { this.state.stats.length > 0 ? <Stats stats={this.state.stats} /> : <h4>Stats Loading...</h4>}
          </div>
        </div>
       </header>


      <main className="container-fluid h-100" id="home">
        <div className="row m-1">
          <CurrentlyReading currList={this.getCurr()} setBooks={(books) => this.setBooks(books)} updateInfo={this.updateInfo}
          />

          <div className="col-6" id="homePrimaryColumn">
            {this.state.bookList.length > 0 ? <Books books={this.state.bookList} setOpen={this.props.setOpen}/> : null}
          </div>

          <div className="col-3 col-lg" id="homeTertiaryColumn">
            <ReadingLists readingLists={this.state.readingLists}/>
          </div>
        </div>
      </main>
     </Layout>
    )
  }
}


// navbar?
  // logo
  // Home, 
  // myBooks, 
  // Browse 
  // search bar 
// character header
// 3 columns 
 // default reading lists 
 // quick list of google books from external api 
 // skill bars 

export default home
