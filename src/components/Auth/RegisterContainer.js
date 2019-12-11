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
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    handleSubmit = (event) => {
     
        event.preventDefault();
        console.log("handle submit clicked")
        console.log(this.state);
  
        axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
          .then((res) => {
            console.log(res);
            this.props.history.push('/');
          })
          .catch((err) => console.log(err));
    }
  
    render() {
      return (
        <section className="registersection">
        <div className="container mt-4">
        <h1>Start Manage Your Team Today!</h1>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={this.state.firstName} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={this.state.lastName} />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="userName" name="userName" value={this.state.userName} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
              </div>
              <div className="form-group">
                <label htmlFor="currentCity">Location: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="location" name="location" value={this.state.location} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password: </label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
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