import React from 'react'
import Layout from '../components/layout'
import CurrentlyReading from '../components/currentlyReading'

class home extends React.Component{
  constructor(){
    super()
    this.state= {
    readingLists: [],
    user: {}
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
    .then(data => this.setState({
      readingLists: data.reading_lists,
      user: {username: data.username, email: data.email}}))
  }

  getCurr = () => {
    let curr = this.state.readingLists.find(list => list.name === "Currently Reading")
    return curr
  }







  render(){
    return (
     <Layout>
      <main className="container">
        <div className="row">
          <CurrentlyReading currList= {this.getCurr()}/>
          <div className="col-6" id="homePrimaryColumn">
            Col 2
          </div>
          <div className="col-3 col-lg" id="homeTertiaryColumn">
            Col 3
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
