import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ProfileEditModal from '../../components/ProfileEditModal/ProfileEditModal';

// let userID = localStorage.getItem('uid');

class ProfileEditContainer extends React.Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     location: '',
    //     profilePicture: '',
    // }
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            profilePicture: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }  

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/users/${localStorage.getItem('uid')}`, this.state, {
            withCredentials: true,
        })
            .then((res) => {
                window.location.reload(true);
                this.props.history.push('/profile');

            })
            .catch((err) => console.log(err)); 
    }

    render () {
        return (
        <div>
            <ProfileEditModal
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                location={this.state.location}
                profilePicture={this.state.profilePicture}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
        </div>
        )
    }
}

export default withRouter(ProfileEditContainer);