import React from 'react'
import {Link} from 'react-router-dom'


const ReadingList = ({list}) => {
console.log(list)
 return (
  <Link to={`list/${list.id}`}>
   <p>{list.name}({list.reading_list_books.length})</p>
  </Link>
 )
}

export default ReadingList
