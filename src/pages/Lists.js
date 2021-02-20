import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Lists = () => {
 const [userLists, setUserLists] = useState(null);

 const token = localStorage.getItem('token')
 const reqObj = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    }


 useEffect(() => {
  function handleData(data){
   setUserLists(data)
  }
  fetch('http://localhost:3000/reading_list', reqObj)
  .then(resp => resp.json())
  .then(data => userLists !== null ? null : handleData(data))
 })


 const renderBooks = (books) => {
  // Each reading list book return a carasale that shows the book.
  if(books.length > 0){
   console.log(books);
   return books.map(rlb => 
    <Book className="col-3 mx-2">
      <p>{rlb.book.title}</p>
      {/* check why images arent being passed through */}
      {/* <img src={rlb.book.img} alt=""/> */}
    </Book> 
   )
  }else{
   return <p>Add Books to this list</p>
  }
 }


 
 const renderList = () => {
 return userLists.map(list => { 
  return <div className="row">
   <ListContainer className="col">
    <h4>{list.name}</h4>
    <Carousel className="row">
      {renderBooks(list.reading_list_books)}
    </Carousel>
   </ListContainer>
   </div>
 })
}

 return (
  <div className="container">
    {userLists === null ? null : renderList()}
  </div>
 )
}

const ListContainer = styled.div`
  margin: auto;
  border: solid green 2px;
  text-align: center;
`

// figure out how to make books flow horizontally and scroll horizontally
const Carousel = styled.div`
  height: 35vh;
  background-color: green;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  overflow: auto;
  white-space: nowrap;
`

const Book = styled.div`
  border: solid black 2px;
  height: 33vh;
  width: 20vw;
`

export default Lists
