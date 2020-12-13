import React from 'react'

const signup = () => {
 return (
  <section className="intro-signup">
   <div className="container">
    <div className="row">
     <div className="col-12 col-md-6 col-lg-6 my-4">
      Welcome Message
     </div>
     <div className="col-12 col-md-6 col-lg-6 my-4">
      <h3 className="text-center">Signup For Free</h3>
      <form action="">
       <div class="form-group">
        <label for="exampleInputPassword1">Username</label>
        <input type="username" class="form-control" id="exampleInputUsername" placeholder="Username"/>
        <small id="emailHelp" class="form-text text-muted">Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores.</small>
       </div>
       <div className="form-group">
        <label htmlFor="">Email Address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>
      <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
       <label for="exampleInputPassword1">Password Confimation</label>
       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
       <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
       </div>
       <button type="submit" class="btn btn-primary">Submit</button>
      </form>
     </div>
    </div>
   </div>
  </section>
 )
}

export default signup
