import React from 'react'
import Welcome from './welcomeMessage'
import Signup from './signup'

class intro extends React.Component{

 render(){
  return (
   <section className="intro-signup">
    <div className="container">
     <div className="row">
      <Welcome/>
      <Signup routeProps={this.props}/>
     </div>
    </div>
   </section>
  )
 }
}

export default intro
