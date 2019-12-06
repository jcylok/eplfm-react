import React, { Component } from 'react';
import axios from 'axios';

class LoginContainer extends Component {
    state = {
        userName: '', 
        password: '',
    };

    setCurrentUser = (userId) => {
        this.setState({ currentUser: userId });
        localStorage.setItem('uid', userId);
      };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
            withCredentials: true,
        })
          .then((res) => {
              console.log(res);
              this.setCurrentUser(res.data.data);
              
              this.props.history.push('/');
              window.location.reload(true);
          })
          .catch((err) => console.log(err))
    };

    render() {
        // console.log(this.props)
        return(
            <div className="container mt-4">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="UserName">Username</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="userName" name="userName" value={this.state.userName} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
                  </div>
                  <button id="login-button" onClick={this.handleSubmit} className="btn btn-primary float-right" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>        
        );
    };
};

export default LoginContainer;