import React, { Component } from 'react'

class currentlyReading extends Component {
 constructor(){
  super()
  this.state = {
  name: "",
  books:[]
  }
 }

 componentDidMount(){
  // this.setState({
  //  name: this.props.currList.name,
  //  books: this.props.currList.reading_list_books
  // })
 }

 renderList = () => {
  if(this.props.currList){
   let bookList = this.props.currList.reading_list_books.map(ele => ele.book)

  return bookList.map(book => <p>{book.title}</p>)
  }
 }

 render() {
  return (
   <div className="col-3" id="homeSecondaryColumn">
    <h5>Currently Reading</h5>
    {/* {this.props.currList !== 'undefined' ? this.renderList() : null} */}
    {this.renderList()}
   </div>
  )
 }
}

export default currentlyReading;