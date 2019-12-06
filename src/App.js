import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Routes from './config/routes';
import axios from 'axios'
// import Home from './components/Home';
// import LoginContainer from './containers/LoginContainer';


class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    console.log("logout button clicked...")
    axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        localStorage.removeItem('uid');
        this.setState({ currentUser: null });
        
        this.props.history.push('/');
        window.location.reload(true);
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
      <>
        <Header currentUser={this.state.currentUser} logout={this.logout}/>
        <Routes currentUser={this.state.setCurrentUser} />
      </>
    );
  };
};

export default withRouter(App);


