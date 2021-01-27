import React from 'react'
import {Link} from 'react-router-dom'


const ReadingList = ({list}) => {

 return (
  <Link to={`list/${list.id}`}>
   <p>{list.name}</p>
  </Link>
 )
}

export default ReadingList
