import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import Team from '../../components/Team/Team';
import CreateTeam from '../../components/CreateTeam/CreateTeam';
import './ProfileContainer.css';
// import ProfileEditContainer from '../ProfileEditContainer/ProfileEditContainer';
// import ProfileEditModal from '../../components/ProfileEditModal/ProfileEditModal';
import axios from 'axios';


class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            team: {},
            location: '',
            profilePicture: '',
            createName: '',
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
                this.props.history.push('/myteam');
            })
            .catch((err) => console.log(err)); 
    }

    createTeamChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createTeamSubmit = (event) => {
        event.preventDefault();
        console.log('create team submitted')
        console.log( event.target.value)
        axios.post(`${process.env.REACT_APP_API_URL}/teams/`, {
            user: localStorage.getItem('uid'),
            name: this.state.createName,
            nameURL: this.state.createName.replace(/ /g,'').toLowerCase()
        })
        .then((res) => {
        //   this.props.history.push('/myteam')
          console.log(res)

          axios.put(`${process.env.REACT_APP_API_URL}/users/${localStorage.getItem('uid')}`, 
          {
              teamID: res.data.data._id,
              teamName: res.data.data.name,
              teamNameURL: res.data.data.nameURL
          }, 
          {
            withCredentials: true,
          })
            .then((res) => {
                this.componentDidMount();
                this.props.history.push('/myteam');
            })
            .catch((err) => console.log(err)); 

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
                 location: res.data.data.location,
                 profilePicture: res.data.data.profilePicture,
             });
         })
         .catch((err) => console.log(err));

    }


    render () {
        
        if (localStorage.getItem('uid') && this.state && this.state.profile.teamName) {
            return (
                <>
                <section id='teamname'>
                    <h1>{this.state.profile.teamName}</h1>
                </section>
                <Profile 
                    profile={this.state.profile}
                    location={this.state.location}
                    dateJoined={this.state.dateJoined}
                    profilePicture={this.state.profilePicture} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    
                />
                <Team profile={this.state.profile} /> 
               </>
            )            
        } else if (localStorage.getItem('uid') && this.state && !this.state.profile.teamName) {
            return (
                <>
                {/* <section id='teamname'>
                    <h1>Create Your Dream Team Today</h1>
                    <div>
                    <button>Start</button>
                    </div>
          
                </section> */}
                <CreateTeam createTeamSubmit={this.createTeamSubmit} createName={this.state.createName} createTeamChange={this.createTeamChange}/>
                <Profile 
                    profile={this.state.profile}
                    location={this.state.location}
                    dateJoined={this.state.dateJoined}
                    profilePicture={this.state.profilePicture} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Team profile={this.state.profile} /> 
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