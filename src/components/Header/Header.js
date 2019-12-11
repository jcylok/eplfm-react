import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'
import plbg from '../../images/plbg.png';

let userID = localStorage.getItem('uid');
// import axios from 'axios'

// const logout = () => {
//     axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
//       .then(res => {
//         localStorage.removeItem('uid');
//         this.setState({ currentUser: null });
//         this.props.history.push('/');
//       })
//       .catch(err => console.log(err));
//   }

const Header = (props) => {
    return (
        // <header>
        //     <h1>navbar</h1>
        //     <nav>
        //         <Link to={'/'}>Home</Link>
        //         <Link to={'/register'}>Register</Link>
        //         <Link to={'/login'}>Login</Link>
        //         <button onClick={() => props.logout() }>Logout</button>
        //     </nav>
        // </header>
<>
<nav className="navbar navbar-expand-md navbar-dark navbar-color">
<div className="container">
  {/* <Link className="navbar-brand title-color" id="supreme-emperor12" to="/">EPL Football Manager</Link> */}
  <img id="plbg" src={plbg} alt=""/>
  <p id="nav-title">EPL Football Manager</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarsExample04">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <NavLink className="navbutton" to={'/'}>Home</NavLink>
      </li>
      <li className="nav-item">
        {!userID && <NavLink className="navbutton" to={'/register'}>Register</NavLink>}
      </li>
      <li className="nav-item">
        {!userID &&  <NavLink className="navbutton" to={'/login'}>Login</NavLink>}
      </li>
    
      <li className="nav-item">
        {userID && <NavLink className="navbutton" to={'/myteam'}>My Team</NavLink>}
      </li>
      <li className="nav-item">
        {userID && <NavLink className="navbutton" to={'/market'}>Market</NavLink>}
      </li>
      <li className="nav-item">
        {/* {userID &&  <button className="navbutton" onClick={() => props.logout() }>Logout</button>} */}
        {userID &&  <NavLink className="navbuttonlogout" onClick={() => props.logout()} to={'/'}>Logout</NavLink>}
      </li>
    </ul>
  </div>
</div>
</nav>
</>




    );
};

export default Header;