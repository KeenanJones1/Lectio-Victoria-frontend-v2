import React from 'react'
import Book from './Book'

const Books = (props) => {
 return (
  <div className="row">
   {props.books.map( book => <Book book={book.volumeInfo} setOpen={props.setOpen}/>)}
  </div>
 )
}

export default Books

