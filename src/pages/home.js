import React from 'react'
import Layout from '../components/layout'

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
      readingLists: [data.reading_lists],
      user: {username: data.username, email: data.email}}))
  }





  render(){
    console.log(this.state)
    return (
     <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm">
            Col 1
          </div>
          <div className="col-12 col-sm">
            Col 2
          </div>
          <div className="col-12 col-sm">
            Col 3
          </div>
        </div>
      </div>
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
