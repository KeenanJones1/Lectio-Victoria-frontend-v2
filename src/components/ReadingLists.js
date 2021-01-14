import React from 'react'
import ReadingList from './ReadingList'

const ReadingLists = (props) => {
 return (
  <div>
   { props.readingLists.map( list => <ReadingList key={list.id} list={list}/>)}
  </div>
 )
}

export default ReadingLists

