import React from 'react'

class signup extends React.Component{
 constructor(){
  super()
  this.state = {
   input: {},
   errors: {}
  }
 }

 handleInputChange = (e) => {
  let input = this.state.input
  input[e.target.name] = e.target.value;
  this.setState({
   input
  });
 }

 validate(){
  let input = this.state.input;
  let errors = {};
  let isValid = true;

  if (!input["name"]) {
    isValid = false;
    errors["name"] = "Please enter your name.";
  }

  if (!input["email"]) {
    isValid = false;
    errors["email"] = "Please enter your email Address.";
  }

  if (typeof input["email"] !== "undefined") {
      
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(input["email"])) {
      isValid = false;
      errors["email"] = "Please enter valid email address.";
    }
  }

  if (!input["password"]) {
    isValid = false;
    errors["password"] = "Please enter your password.";
  }

  if (!input["confirm_password"]) {
    isValid = false;
    errors["confirm_password"] = "Please enter your confirm password.";
  }

  if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
      
    if (input["password"] != input["confirm_password"]) {
      isValid = false;
      errors["password"] = "Passwords don't match.";
    }
  } 

  this.setState({
    errors: errors
  });

  return isValid;
}

handleSubmit(event) {
 event.preventDefault();

 if(this.validate()){
     console.log(this.state);

     let input = {};
     input["name"] = "";
     input["email"] = "";
     input["password"] = "";
     input["confirm_password"] = "";
     this.setState({input:input});

     alert('Demo Form is submited');
 }
}

 render(){
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
        <div className="form-group">
         <label>Username</label>
         <input name="username" class="form-control" id="exampleInputUsername" placeholder="Username"/>
         <small id="emailHelp" class="form-text text-muted">Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores.</small>
        </div>
        <div className="form-group">
         <label htmlFor="">Email Address</label>
         <input name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => {this.handleInputChange(event)}}/>
        </div>
       <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div className="form-group">
        <label for="exampleInputPassword1">Password Confimation</label>
        <input name="confirm_password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
       </div>
        <div className="form-check">
         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
         <label className="form-check-label" for="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(event) => this.handleSubmit(event)}>Submit</button>
       </form>
      </div>
     </div>
    </div>
   </section>
  )
 }
}

export default signup
