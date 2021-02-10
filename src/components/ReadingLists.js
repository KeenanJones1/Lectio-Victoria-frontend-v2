import React from 'react'
import ReadingList from './ReadingList'

const ReadingLists = ({readingLists}) => {
 return (
  <div>
   {readingLists.map( list => <ReadingList key={list.id} list={list}/>)}
  </div>
 )
}

export default ReadingLists

