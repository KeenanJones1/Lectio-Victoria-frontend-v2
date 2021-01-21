import React, { Component } from 'react'
import Books from '../components/Books'
import ReadingBooks from '../components/readingBooks'

class readingList extends Component {
 constructor(){
  super()
  this.state={
   readingBooks: [],
   listInfo:{}
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
  .then( data => this.setState({readingBooks: data.reading_list_books, listInfo: {name: data.name, id: data.id}}))
 }

 renderBooks = () => {
  return this.state.readingBooks.map( book => <ReadingBooks listID={this.state.listInfo.id} book={book.book}/>)
 }


 render() {
  console.log(this.state.readingBooks);
  return (
   <div className="container">
    <h1>{this.state.listInfo.name ? this.state.listInfo.name : "Please Wait" }</h1>
    <div className="row">
     {this.state.readingBooks.length > 0 ? this.renderBooks() :  null }
    </div>
   </div>
  )
 }
}

export default readingList

