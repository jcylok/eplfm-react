import React, {Component} from 'react'
import axios from 'axios';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';
import { array } from 'prop-types';

let userID = localStorage.getItem('uid');
class PlayerContainer extends Component {
    constructor() {
        super();
        this.state = {
            playerInfoNew: {},
            playerInfoOld: {},
            buyPlayerPosition: 'forwarder',
        }
        this.roleChange = this.roleChange.bind(this);
        this.buysubmitted = this.buysubmitted.bind(this);
        this.sellsubmitted = this.sellsubmitted.bind(this);
    }  
//   state = {
//     playerInfoNew: {},
//     playerInfoOld: {},
//     buyPlayerPosition: '',
//   }

  roleChange (event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  buysubmitted () {    
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
        withCredentials: true,
    })
     .then((res) => {
        console.log(res.data.data.teamNameURL)
        axios.get(`${process.env.REACT_APP_API_URL}/teams/${res.data.data.teamNameURL}`)
         .then((res) => {
            console.log(res.data.data.playerslist)
            if (res.data.data.playerslist.includes(window.location.pathname.split('/')[2])) {
                alert("You've already bought this player.")
            } else if (res.data.data.playerslist.length === 11) {
                alert("You have 11 players in your team already.")
            } else {
                let newList = [];
                let tempJSON = res.data.data["playerslist"];
                for (let i=0; i<tempJSON.length; i++) {
                    newList.push(tempJSON[i])
                }
                newList.push(window.location.pathname.split('/')[2])
                console.log(newList)
    
                axios.put(`${process.env.REACT_APP_API_URL}/teams/${res.data.data.teamNameURL}`, {"playerslist": newList}, {
                    withCredentials: true,
                })
                    .then((res) => {
                        console.log(res)
                        // Add to position array
                        let positionList = [];
                        let positionJSON = res.data.data[`${this.state.buyPlayerPosition}`];
                        for (let i=0; i<positionJSON.length; i++) {
                            positionList.push(positionJSON[i])
                        }
                        positionList.push(window.location.pathname.split('/')[2])
                        console.log(positionList)
                        let position = this.state.buyPlayerPosition 
                        axios.put(`${process.env.REACT_APP_API_URL}/teams/${res.data.data.teamNameURL}`, { [position] : positionList}, {
                            withCredentials: true,
                        })
            
                    })
                    .catch((err) => console.log(err));
            }
            
         })
         .catch((err) => console.log(err));

     })
     .catch((err) => console.log(err));
  }

  sellsubmitted () {    
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
        withCredentials: true,
    })
     .then((res) => {
        console.log(res.data.data.teamNameURL)
        axios.get(`${process.env.REACT_APP_API_URL}/teams/${res.data.data.teamNameURL}`)
         .then((res) => {
            console.log(res.data.data.playerslist)
            if (!res.data.data.playerslist.includes(window.location.pathname.split('/')[2])) {
                alert("You don't own this player.")
            } else {
                let newList = [];
                let tempJSON = res.data.data["playerslist"];
                for (let i=0; i<tempJSON.length; i++) {
                    newList.push(tempJSON[i])
                }
                let filteredList = newList.filter(e => e !== `${window.location.pathname.split('/')[2]}`)
                console.log(filteredList)
    
             
                axios.put(`${process.env.REACT_APP_API_URL}/teams/${res.data.data.teamNameURL}`, {"playerslist": filteredList}, {
                    withCredentials: true,
                })
                    .then((res) => {
                        console.log(res)
                        // remove player in position array
                        const roles = ["forwarder", "midfielder", "defender", "goalkeeper"]
                        for (let i=0; i<4; i++) {
                            let newList = [];
                            let tempJSON = res.data.data[`${roles[i]}`];
                            console.log(tempJSON)
                            for (let j=0; j<tempJSON.length; j++) {
                                newList.push(tempJSON[j])
                            }
                            let filteredList = newList.filter(e => e !== `${window.location.pathname.split('/')[2]}`)
                            console.log(filteredList)
                
                         
                            axios.put(`${process.env.REACT_APP_API_URL}/teams/${res.data.data.teamNameURL}`, {[`${roles[i]}`]: filteredList}, {
                                withCredentials: true,
                            })
                             .then((res) => {
                                 console.log(res)
                             })
                             .catch((err) => console.log(err));

                        }

            
                    })
                    .catch((err) => console.log(err));
            }
            
         })
         .catch((err) => console.log(err));

     })
     .catch((err) => console.log(err));
  }

  componentDidMount () {
    axios({
        "method":"GET",
        "url":`https://api-football-v1.p.rapidapi.com/v2/players/player/${window.location.pathname.split('/')[2]}/2018-2019`,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
        "x-rapidapi-key":"ae34dc57cbmshfbd27c9d54b4ae0p157852jsnb36c3e4228b5"
        }
        })
        .then((response)=>{
          console.log(response)
          this.setState({
              playerInfoNew: response.data.api.players[0]
          })
          if (response.data.api.players[1]) {
              this.setState({
                playerInfoOld: response.data.api.players[1]
              })    
          }
        })
        .catch((error)=>{
          console.log(error)
        })
    

    
  }


  render () {
    return (
      <>
        <PlayerInfo infoNew={this.state.playerInfoNew} infoOld={this.state.playerInfoOld} buysubmitted={this.buysubmitted} sellsubmitted={this.sellsubmitted} roleChange={this.roleChange}/>
      </>
    );
  };
};
export default PlayerContainer;
