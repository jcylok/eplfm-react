import React from 'react';
// import './Profile.css'

const Profile = (props) => {
        return (
            <div className="profile-border" style={{paddingTop:50}}>

                <h1>Welcome back, {props.firstName}  {props.lastName}!</h1>
                {/* <img className="profile-image" src={props.profilePhoto} alt=""/> */}
                <p><strong>Location: </strong>{props.location}</p>
                {/* <p><strong>Current City: </strong>{props.currentCity && props.currentCity}</p>
                <p><strong>Date Joined: </strong> {props.profile.dateJoined && props.profile.dateJoined.toLocaleString().substring(0, 10)}</p>
                <button id="edit-button1" className="btn-warning1 editButton" onClick={() => props.onEdit()}>Edit</button> */}

            </div>
        )
    
};

export default Profile;