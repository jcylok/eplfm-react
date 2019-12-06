import React from 'react';
import ProfileEditContainer from '../../containers/ProfileEditContainer/ProfileEditContainer';
// import './Profile.css'

const Profile = (props) => {
        return (
            <div className="profile-border" style={{paddingTop:50}}>

                <h1>Welcome back, {props.firstName}  {props.lastName}!</h1>
                {/* <img className="profile-image" src={props.profilePhoto} alt=""/> */}
                <p><strong>Location: </strong>{props.location}</p>
                {/* <p><strong>Current City: </strong>{props.currentCity && props.currentCity}</p> */}
                <p><strong>Member Since: </strong> {props.dateJoined && props.dateJoined.toLocaleString().substring(0, 10)}</p>
                {/* <button onClick={() => props.onEdit()}>Edit</button> */}
                <ProfileEditContainer />

            </div>
        )
    
};

export default Profile;