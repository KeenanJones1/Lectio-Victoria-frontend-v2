import React from 'react'
import {Link} from 'react-router-dom'


const ReadingList = (props) => {

 return (
  <Link to={`list/${props.list.id}`}>
   <p>{props.list.name}</p>
  </Link>
 )
}

export default ReadingList
