import React, {Component} from 'react'
import axios from 'axios';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';
import { array } from 'prop-types';

let userID = localStorage.getItem('uid');
class PlayerContainer extends Component {
  state = {
    playerInfoNew: {},
    playerInfoOld: {},
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
                alert("You've own this player.")
            } else {
                let newList = [];
                let tempJSON = res.data.data["playerslist"];
                console.log(typeof tempJSON)
                console.log(typeof tempJSON.length)
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
        <PlayerInfo infoNew={this.state.playerInfoNew} infoOld={this.state.playerInfoOld} buysubmitted={this.buysubmitted}/>
      </>
    );
  };
};
export default PlayerContainer;
