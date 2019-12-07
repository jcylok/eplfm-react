import React, {Component} from 'react'
import axios from 'axios';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';

class PlayerContainer extends Component {
  state = {
    playerInfoNew: {},
    playerInfoOld: {},
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
        <PlayerInfo infoNew={this.state.playerInfoNew} infoOld={this.state.playerInfoOld}/>
      </>
    );
  };
};
export default PlayerContainer;
