import React, { Component } from 'react'
import Books from '../components/Books'

class readingList extends Component {
 constructor(){
  super()
  this.state={
   readingBooks: {}
  }
 }


 componentDidMount(){
    const token = localStorage.getItem('token')
    const reqObj = {
     method: 'GET',
     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
 }
  fetch(`http://localhost:3000/reading_list/${this.props.routerProps.match.params.id}`, reqObj)
  .then( resp => resp.json())
  .then( data => this.setState({readingBooks: data.reading_list_books}))
 }

 render() {
  console.log(this.state);
  return (
   <div>
    
   </div>
  )
 }
}

export default readingList

