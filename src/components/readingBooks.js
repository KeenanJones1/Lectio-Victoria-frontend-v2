import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Book = styled.div`
 
`

const IconButton = styled.button`

`


const readingBooks = ({book, listID}) => {

 const removeFromList = () => {
  const token = localStorage.getItem('token');
   let reqObj = {
    method: 'DELETE',
    headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
    body: JSON.stringify({listID: listID})
   };

   fetch(`http://localhost:3000/book/${book.id}`, reqObj)
   .then(resp => resp.json())
   .then(data => console.log(data))
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

  </div>
  </Book>
 )
}



export default readingBooks
