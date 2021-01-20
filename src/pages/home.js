import React from 'react'
import Layout from '../components/layout'
import CurrentlyReading from '../components/currentlyReading'
import Books from '../components/Books'
import ReadingLists from '../components/ReadingLists'

class home extends React.Component{
  constructor(){
    super()
    this.state= {
    readingLists: [],
    user: {},
    bookList: [],
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    const reqObj = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    }
    fetch('http://localhost:3000/myuser', reqObj)
    .then(resp => resp.json())
    .then(data => {this.setState({
      readingLists: data.reading_lists,
      user: {username: data.username, email: data.email}})

      this.props.setLists(data.reading_lists)}
      )
  }

  getCurr = () => {
    if(this.state.readingLists){
    let curr = this.state.readingLists.find(list => list.name === "Currently Reading")
    return curr
    }
    
  }

  setBooks = (books) => {
    console.log(books);
    this.setState({
      bookList: books
    })
  }






  render(){
    return (
     <Layout>
      <main className="container">
        <div className="row m-3">
          <CurrentlyReading currList= {this.getCurr()} setBooks={(books) => this.setBooks(books)} />
          <div className="col-6" id="homePrimaryColumn">
            {this.state.bookList.length > 0 ? <Books books={this.state.bookList} setOpen={this.props.setOpen}/> : null}
          </div>
          <div className="col-3 col-lg" id="homeTertiaryColumn">
            Show readingLists and ReadingList Books here
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
