import React from 'react'
import Navbar from './navbar'

const layout = (props) => {
 return (
  <>
   <Navbar />
   {props.children}
  </>
 )
}

export default layout
