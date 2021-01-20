import React from 'react'

const Book = (props) => {

 const handleBook = (book) => {
  // activate modal to make sure that user wants to add book.
  props.setOpen(book)
 }

 const {imageLinks} = props.book

 return (
  <div className="col book my-2" onClick={(book) => handleBook(props.book)}>
   <h5 className="book-title">{props.book.title}</h5>
   <p>By { props.book.authors && props.book.authors.length > 0 ? props.book.authors.join('& ') : props.book.authors }</p>
   {imageLinks ? <img src={imageLinks.thumbnail} className="book-img"/> : <p>No image avaiable</p>}
  </div>
 )
}

export default Book
