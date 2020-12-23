import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0, 0, 0, 0.3);
 display: flex; 
 align-items: center; 
 justify-content: center;
 #modal{
  background: white;
 }
`;

const Modal = (props) => {
 
 const makeBook = () => {
  const token = localStorage.getItem('token')
  const reqObj = {
   method: 'POST',
   headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
   body: JSON.stringify({book: props.book})
  }

  fetch('http://localhost:3000/book', reqObj)
  .then(resp => resp.json())
  .then(data => console.log(data))
  props.setOpen()
 }

 const {title, authors, publishedDate, description} = props.book.volumeInfo
 const {imageLinks} = props.book.volumeInfo
 console.log();

 return (
  <ModalContainer >
   <div className="container">
    <div className="row">
     <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-captialize p-5">
       <h3>{title}</h3>
       <h5>{authors.length > 1 ? authors.join('& ') : authors}</h5>
       <h6>Published {publishedDate} </h6>
       {imageLinks ? <img src={imageLinks.thumbnail} className="book-img"/> : <p>No image avaiable</p>}
       {/* Description needs a function that reduces the amount of words and */}
       {/* <p>{description}</p> */}
       <button onClick={() => makeBook()}>Add Book to List</button>
       <button onClick={() => props.setOpen()}>Close</button>
     </div>
    </div>
   </div>
  </ModalContainer>
 )
}



export default Modal
