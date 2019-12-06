import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
// import ProfileEditContainer from '../ProfileEditContainer/ProfileEditContainer';
import ProfileEditModal from '../../components/ProfileEditModal/ProfileEditModal';
import axios from 'axios';


class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            // firstName: '',
            // lastName: '',
            location: '',
            profilePicture: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }  
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     location: '',
    // }
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newObj = Object.assign({}, this.state);
        delete newObj.profile;
        axios.put(`${process.env.REACT_APP_API_URL}/users/${localStorage.getItem('uid')}`, newObj, {
            withCredentials: true,
        })
            .then((res) => {
                this.componentDidMount();
                this.props.history.push('/profile');
            })
            .catch((err) => console.log(err)); 
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
            withCredentials: true,
        })
         .then((res) => {
             this.setState({
                 profile: res.data.data,
                //  firstName: res.data.data.firstName,
                //  lastName: res.data.data.lastName,
                 location: res.data.data.location,
                 profilePicture: res.data.data.profilePicture,
                //  profilePhoto: res.data.data.profilePhoto,
             });
         })
         .catch((err) => console.log(err));
    }


    render () {
        if (localStorage.getItem('uid')) {
            return (
                <>
                <Profile 
                    profile={this.state.profile}
                    location={this.state.location}
                    dateJoined={this.state.dateJoined}
                    profilePicture={this.state.profilePicture} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
               </> 
            )            
        } else {
            return (
                <>
                Please register or login to access to your profile.
                </>
            )
        };
    };
};

export default ProfileContainer;