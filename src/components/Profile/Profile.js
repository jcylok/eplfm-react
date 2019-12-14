import React from 'react';
import ProfileEditModal from '../ProfileEditModal/ProfileEditModal';
import './Profile.css'
import defaultPic from '../../images/default-pic.png';

const Profile = (props) => {
        return (
            <div className="sectionmanager">
                <h2>Manager</h2>
                <div className="row manager-profile">
                <div className="col-sm managerinfo">

                    <h2>{props.profile.firstName}  {props.profile.lastName}</h2>
                    <p><strong>Location: </strong>{props.location}</p>
                    <p id="secondline"><strong>Member Since: </strong> {props.profile.dateJoined && props.profile.dateJoined.toLocaleString().substring(0, 10)}</p>
                    <ProfileEditModal
                        location={props.location}
                        dateJoined={props.dateJoined}
                        profilePicture={props.profilePicture} 
                        handleChange={props.handleChange}
                        handleSubmit={props.handleSubmit}/>

                </div>
                <div className="col-sm managerinfo">
                    <img src={props.profilePicture?`${props.profilePicture}`: `${defaultPic}`} alt="profile-pic"/>
                </div>
                </div>
            </div>
        )
    
};

export default Profile;