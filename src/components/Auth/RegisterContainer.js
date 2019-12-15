import React, { Component } from 'react';
import axios from 'axios';
import './RegisterContainer.css';

class RegisterContainer extends Component {
    state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      location: '',
      password: '',
      password2: '',
      errors: {},
    }

    handleValidation() {
      let fields = this.state;
      let errors = {};
      let formIsValid = true;

      // first name
      if(!fields["firstName"]){
        formIsValid = false;
        errors["firstName"] = "First name cannot be empty";
      }
      if(typeof fields["firstName"] !== "undefined"){
        if(!fields["firstName"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["firstName"] = "First name can only contain letters";
        }
      }
      // last name
      if(!fields["lastName"]){
        formIsValid = false;
        errors["lastName"] = "Last name cannot be empty";
      }
      if(typeof fields["lastName"] !== "undefined"){
        if(!fields["lastName"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["lastName"] = "Last name can only contain letters";
        }
      }
      // userName
      if(!fields["userName"]){
        formIsValid = false;
        errors["userName"] = "Username cannot be empty";
      }
      if(fields["userName"].length < 4){
        formIsValid = false;
        errors["userName"] = "The length of username must be at least 4";
      }
      //Email
      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Email cannot be empty";
      }

      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }

      }
      // password
      if(!fields["password"]){
        formIsValid = false;
        errors["password"] = "Password cannot be empty";
      }
      if (/\s/.test(fields["password"])) {
        formIsValid = false;
        errors["password"] = "Password cannot contain whitespace";
      }
      if(fields["password"].length < 5){
        formIsValid = false;
        errors["password"] = "The length of password must be at least 5";
      }
      // password2
      if(!fields["password2"]){
        formIsValid = false;
        errors["password2"] = "Password cannot be empty";
      }
      if (/\s/.test(fields["password2"])) {
        formIsValid = false;
        errors["password2"] = "Password cannot contain whitespace";
      }
      if(fields["password2"].length < 5){
        formIsValid = false;
        errors["password2"] = "The length of password must be at least 5";
      }

      // check matching of password and password2
      if(fields["password"] !== fields["password2"]){
        formIsValid = false;
        errors["password2"] = "Password not matched";
      }

      this.setState({errors: errors});
      return formIsValid;
    }

    

  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    handleSubmit = (event) => {
     
        event.preventDefault();
        // console.log("handle submit clicked")
        // console.log(this.state);
        if(this.handleValidation()){
          alert("Thanks for registration!");
          axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
          .then((res) => {
            console.log(res);
            this.props.history.push('/');
          })
          .catch((err) => console.log(err));
        } else {
          // alert("Form has errors.")
        }
    }
  
    render() {
      return (
        <section className="registersection">
        <div className="container mt-4">
        <h1>Manage Your Team Today!</h1>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={this.state.firstName} />
                <span style={{color: "red"}}>{this.state.errors["firstName"]}</span>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={this.state.lastName} />
                <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="userName" name="userName" value={this.state.userName} />
                <span style={{color: "red"}}>{this.state.errors["userName"]}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
              </div>
              <div className="form-group">
                <label htmlFor="currentCity">Location: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="location" name="location" value={this.state.location} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
                <span style={{color: "red"}}>{this.state.errors["password"]}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
                <span style={{color: "red"}}>{this.state.errors["password2"]}</span>
              </div>
           
              <button id="register-button" onClick={this.handleSubmit} className="btn" type="submit"><span>Register</span></button>

            </form>
          </div>
        </div>
      </div>
      </section>
      )
    };
  }

export default RegisterContainer;