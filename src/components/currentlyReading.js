import React, { Component } from 'react'

class currentlyReading extends Component {
 constructor(){
  super()
  this.state = {
  name: "",
  books:[],
  bookSearch: ""
  }
 }


 renderList = () => {
  if(this.props.currList){
   let bookList = this.props.currList.reading_list_books.map(ele => ele.book)

  return bookList.map(book => <p>Are you still reading {book.title}?</p>)
  }
 }

 handleSearch = (e) => {
  this.setState({
   bookSearch: e.target.value
  })
 }

 render() {
  return (
   <div className="col-3" id="homeSecondaryColumn">
    <h5>Currently Reading</h5>

    <div className="my-3">What are you reading?
     <form action="">
      <input type="text" onChange={(e) => this.handleSearch(e)} value={this.state.bookSearch}/>
      <input type="submit" name="" id="" />
     </form>
    </div>
    {/* {this.props.currList !== 'undefined' ? this.renderList() : null} */}
    {this.renderList()}

   </div>
  )
 }
}

export default currentlyReading;