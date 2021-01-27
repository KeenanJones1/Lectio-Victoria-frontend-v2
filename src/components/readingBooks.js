import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";


const Book = styled.div`
 
`

const IconButton = styled.button`

`


const readingBooks = (props) => {

 const {book, listID} = props

 const removeFromList = () => {
  const token = localStorage.getItem('token');
   let reqObj = {
    method: 'DELETE',
    headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
    body: JSON.stringify({listID: listID})
   };

   fetch(`http://localhost:3000/book/${book.id}`, reqObj)
   .then(resp => resp.json())
   .then(data => props.updateBooks(data.reading_list_books))
 }

 const finishBook = (id) => {
  const token = localStorage.getItem('token');
  let reqObj = {
    method: 'PATCH',
    headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
    body: JSON.stringify({book: 'book'})
   };
   fetch(`http://localhost:3000/book/${book.id}`, reqObj)
   .then(resp => resp.json())
   .then(data => console.log(data));
 }


 return (
  <Book className="col">
   <h4>{book.title}</h4>
   <p>{book.published_year}</p>
   <img src={book.book_cover} alt=""/>
    <div className="book-actions">

    <IconButton onClick={() => removeFromList()}>
      <FontAwesomeIcon icon={faTrash} />
    </IconButton>

    <IconButton onClick={(id) => finishBook(book.id)}>
      <FontAwesomeIcon icon={faCheck} />
    </IconButton>

    </div>
  </Book>
 )
}



export default readingBooks
