import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/intro'

const landing = (props) => {
 return (
  <Layout className="static-wrapper">
   <Intro routeProps={props}/>
  </Layout>
 )
}

// has a navbar 
// has about 5 sections for all important infomation
// has the signup form 
// login nav button in navbar 
// implement google facebook and twitter signup options. 
// component list all sections
     // Header 
     // Footer
     // signup
     // Details
     // HowtoUse

export default landing
