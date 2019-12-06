import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         profile: {},
    //         editProfile: false,
    //         firstName: '',
    //         lastName: '',
    //         currentCity: '',
    //         profilePhoto: '',
    //     }
    //     this.onEdit = this.onEdit.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    state = {
        firstName: '',
        lastName: '',
        location: '',
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
            withCredentials: true,
        })
         .then((res) => {
             this.setState({
                //  profile: res.data.data,
                 firstName: res.data.data.firstName,
                 lastName: res.data.data.lastName,
                 location: res.data.data.location,
                //  currentCity: res.data.data.currentCity,
                //  profilePhoto: res.data.data.profilePhoto,
             });
         })
         .catch((err) => console.log(err));
    }

    // onEdit() {
    //     this.setState({
    //         editProfile: true,
    //     })
    // }

    // handleChange (event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const userId = localStorage.getItem('uid');        
    //     let newObj = Object.assign({}, this.state);
    //     delete newObj.profile;
    //     delete newObj.editProfile;
    //     axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, newObj, {
    //         withCredentials: true,
    //     })
    //         .then((res) => {
    //             this.props.setCurrentUser(res.data.data);
    //             this.props.history.push('/profile');

    //         })
    //         .catch((err) => console.log(err));
    //         this.setState({
    //             editProfile: false,
    //         });  
    // };

    render () {
        if (localStorage.getItem('uid')) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <Profile 
                            // profile={this.state.profile}
                            // editProfile={this.state.editProfile}
                            // onEdit={this.onEdit}
                            // handleChange={this.handleChange}
                            // handleSubmit={this.handleSubmit}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            location={this.state.location}
                            // profilePhoto={this.state.profilePhoto}
                            />
                        </div>
                        {/* <div className="col-sm">
                            <ProfilePostsContainer />
                        </div> */}
                    </div>
                </div>
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