import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import Team from '../../components/Team/Team';
import CreateTeam from '../../components/CreateTeam/CreateTeam';
import ScoreBoard from  '../../components/ScoreBoard/ScoreBoard';
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
            error: '',
            forwarder: [],
            midfielder: [],
            defender: [],
            goalkeeper: [],
            forwarderFull: [],
            midfielderFull: [],
            defenderFull: [],
            goalkeeperFull: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    createTeamValidation() {
        let field = this.state.createName;
        let error = '';
        let formIsValid = true;
  
        // team name
        if(!field){
          formIsValid = false;
          error = "Team Name cannot be empty";
        }
        if (/\s/.test(field)) {
            formIsValid = false;
            error = "Team Name cannot contain whitespace";
        }
        if(field.length < 4){
            formIsValid = false;
            error = "The length of team name must be at least 4";
        }
        if(typeof field!== "undefined"){
          if(!field.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            error = "Team Name can only contain letters";
          }
        }
      
        this.setState({error: error});
        return formIsValid;
      }

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
                    // this.componentDidMount();
                    this.setState({
                        location: this.state.location,
                        profilePicture: this.state.profilePicture,
                    })
                    
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
        if (this.createTeamValidation()) {
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

    }
 
    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
            withCredentials: true,
        })
         .then((res) => {
             console.log(res)
             this.setState({
                 profile: res.data.data,
                 location: res.data.data.location,
                 profilePicture: res.data.data.profilePicture,
             });
             // get team data
             console.log(this.state.profile._id)
             axios.get(`${process.env.REACT_APP_API_URL}/teams/${this.state.profile._id}`,{
                withCredentials: true,
            })
             .then((res) => {
                 console.log(res)
                 this.setState({
                     forwarder: res.data.data.forwarder,
                     midfielder: res.data.data.midfielder,
                     defender: res.data.data.defender,
                     goalkeeper: res.data.data.goalkeeper,
                 });
                 // get user's players name and statistics
                 const roles = ["forwarder", "midfielder", "defender", "goalkeeper"]
                 for (let i=0; i<4; i++) {
                     for (let j=0; j<this.state[roles[i]].length; j++) {

                        axios({
                            "method":"GET",
                            "url":`https://api-football-v1.p.rapidapi.com/v2/players/player/${this.state[roles[i]][j]}/2018-2019`,
                            "headers":{
                            "content-type":"application/octet-stream",
                            "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
                            "x-rapidapi-key":"ae34dc57cbmshfbd27c9d54b4ae0p157852jsnb36c3e4228b5"
                            }
                            })
                            .then((response)=>{
                              console.log(response.data.api.players[0])
                              let full = roles[i] + "Full"
                              console.log(full)
                              console.log(this.state[full])
                              this.setState({
                                [this.state[full]]:  this.state[full].push(response.data.api.players[0])
                              })
                            })
                            .catch((error)=>{
                              console.log(error)
                            })
                         

                     }
                 }
             })
             .catch((err) => console.log(err));
    

         })
         .catch((err) => console.log(err));

    }


    render () {
        
        if (localStorage.getItem('uid') && this.state && this.state.profile.teamName) {
            return (
                <div id="test">
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
                <Team 
                    profile={this.state.profile}
                    forwarderFull={this.state.forwarderFull}
                    midfielderFull={this.state.midfielderFull}
                    defenderFull={this.state.defenderFull}
                    goalkeeperFull={this.state.goalkeeperFull}  
                /> 
                <ScoreBoard 
                    forwarderFull={this.state.forwarderFull}
                    midfielderFull={this.state.midfielderFull}
                    defenderFull={this.state.defenderFull}
                    goalkeeperFull={this.state.goalkeeperFull}  
                /> 
               </div>
            )            
        } else if (localStorage.getItem('uid') && this.state && !this.state.profile.teamName) {
            return (
                <div id="test">
                <CreateTeam createTeamSubmit={this.createTeamSubmit} createName={this.state.createName} createTeamChange={this.createTeamChange} error={this.state.error}/>
                <Profile 
                    profile={this.state.profile}
                    location={this.state.location}
                    dateJoined={this.state.dateJoined}
                    profilePicture={this.state.profilePicture} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Team 
                    profile={this.state.profile}
                    // forwarderFull={this.state.forwarderFull}
                    // midfielderFull={this.state.midfielderFull}
                    // defenderFull={this.state.defenderFull}
                    // goalkeeperFull={this.state.goalkeeperFull}                
                /> 
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