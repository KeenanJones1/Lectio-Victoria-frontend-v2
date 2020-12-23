import React from 'react'

const Book = (props) => {

 const handleBook = (book) => {
  // activate modal to make sure that user wants to add book.
  props.setOpen(book)
 }

 const {imageLinks} = props.book.volumeInfo
// debugger
 return (
  <div className="col book my-2" onClick={(book) => handleBook(props.book)}>
   <h5 className="book-title">{props.book.volumeInfo.title}</h5>
   <p>By { props.book.volumeInfo.authors && props.book.volumeInfo.authors.length > 0 ? props.book.volumeInfo.authors.join('& ') : props.book.volumeInfo.authors }</p>
   {imageLinks ? <img src={imageLinks.thumbnail} className="book-img"/> : <p>No image avaiable</p>}
  </div>
 )
}

export default Book
