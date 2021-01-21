import React, {useState} from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0, 0, 0, 0.6);
 display: flex; 
 align-items: center; 
 justify-content: center;
 color: white;
 #modal{
  background: white;
 }
`;

const Modal = (props) => {
  const [selectedList, setSelectedList] = useState(0)
 
 const makeBook = () => {
  const token = localStorage.getItem('token')
  const reqObj = {
   method: 'POST',
   headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
   body: JSON.stringify({book: props.book, list_id: selectedList })
  }

  fetch('http://localhost:3000/book', reqObj)
  .then(resp => resp.json())
  .then(data => console.log(data))
  props.setOpen()
 }

 const {title, authors, publishedDate, description} = props.book
 const {imageLinks} = props.book


 const renderLists = () => {
   return <select className="" onChange={(event) => setSelectedList(event.target.value)} name="" id="" >
     <option>Please select a list</option>
     {props.readingLists.map(list => <option key={list.id} value={list.id}>{list.name}</option>)}
   </select>
}

console.log(props)
 return (
  <ModalContainer >
   <div className="container">
    <div className="row">
     <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-captialize p-5">
       <div className="book-info">
        <h3>{title}</h3>
        <h5>{authors.length ? authors.join(' & ') : authors}</h5>
        <h6>Published {publishedDate} </h6>
       </div>

       <div className="book-img">
        {imageLinks ? <img src={imageLinks.thumbnail} className="book-img"/> : <p>No image avaiable</p>}
       </div>

       <div className="row modal-btn py-3">
        <button className="col my-2" onClick={() => makeBook()}>Add Book to List</button>
        <button className="col my-2" onClick={() => props.setOpen()}>Close</button>
        {renderLists()}
       </div>

     </div>
    </div>
   </div>
  </ModalContainer>
 )
}



export default Modal
