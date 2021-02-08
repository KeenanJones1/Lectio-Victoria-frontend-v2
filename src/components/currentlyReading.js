import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";


class currentlyReading extends Component {
 constructor(){
  super()
  this.state = {
  name: "",
  books:[],
  bookSearch: ""
  }
 }


 renderList = () => {
  if(this.props.currList){
   let bookList = this.props.currList.reading_list_books.map(ele => ele.book)
  return bookList.map(book => <div key={book.id}>
    <p className="h6">Have you finished reading {book.title}?
     <IconButton onClick={() => this.finishReading(this.props.currList.reading_list_books[0].book_id, this.props.currList.reading_list_books[0].id )}>
       <FontAwesomeIcon icon={faCheck}/>
     </IconButton>
{/* Write a function to delete reading list book */}
     <IconButton onClick={() => this.removeFromReading(this.props.currList.reading_list_books[0].book_id, this.props.currList.reading_list_books[0].id )}>
       <FontAwesomeIcon icon={faTimes}/>
     </IconButton>
    </p>
   </div>)
  }
 }

 finishReading = (id) => {
  const token = localStorage.getItem('token')
  let reqObj = {
   method: "PATCH", 
   headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
  }

  fetch(`http://localhost:3000/book/${id}`, reqObj)
  .then(resp => resp.json())
  .then(data => this.props.updateInfo(data))
 }

 removeFromReading = (id) => {
  const token = localStorage.getItem('token')
  let reqObj = {
    method: "DELETE", 
    headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
   }

   fetch(`http://localhost:3000/book/${id}`, reqObj)
  .then(resp => resp.json())
  .then(data => this.props.updateInfo(data))
}

 handleSearch = (e) => {
  this.setState({
   bookSearch: e.target.value
  })
 }

 handleSubmit = (event) => {
  event.preventDefault();
   fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookSearch}`)
   .then(resp => resp.json())
   .then(data =>this.props.setBooks(data.items))
   .catch(err => console.log(err))
  }

 render() {
  return (
   <div className="col-3 mr-5" id="homeSecondaryColumn">
    <h5>Currently Reading</h5>
    <div className="my-3">What are you reading?
     <form action="">
      <input type="text" onChange={(e) => this.handleSearch(e)} value={this.state.bookSearch}/>
      <input type="submit" name="" id=""onClick={(event) => this.handleSubmit(event)} />
     </form>
    </div>
    {/* {this.props.currList !== 'undefined' ? this.renderList() : null} */}
    {this.renderList()}
   </div>
  )
 }
}


const IconButton = styled.button`
  margin: 0.4px 2px;
  font-size:0.9em;
  border-radius: 25px;
  color: white;
  background-color: #503047;
  border:solid 0.5px #503047;

  &:hover{
    background-color: #19535f;
  }
`

export default currentlyReading;