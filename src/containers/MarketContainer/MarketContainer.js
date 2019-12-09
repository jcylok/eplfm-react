import React from "react";
import Search from "../../components/Search/Search";
import Results from "../../components/Results/Results";
import axios from "axios";
import './MarketContainer.css';
import teamSeed from '../../seed/team.json';

class MarketContainer extends React.Component {

    state = {
        query: "",
        submitted: false,
        response: {},
        teamID: "",
    }

    nameToID = (name) => {
        let newName = name.replace(/ /g,'').toLowerCase();
        for (let i=0; i<2; i++){
            if (newName === teamSeed[i].name) {
                let test = teamSeed[i].team_id;
                return test
            }
        }
        return('oops')

    };

    handleInput = (event) => {
        event.preventDefault();
        this.setState(
            {
                query: event.target.value,
                submitted: false,
            }  
        )
        // this.setState({
        //     teamID: this.nameToID(this.state.query)
        // })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.setState(
        //     {
        //         submitted: true,
        //     }
        // )
        console.log(this.state.query)
        // let queryID = this.nameToID(this.state.query)

        // var results = teams.filter(function (team) { return team.name === "manchesterunited"; });
        // console.log(results[0].team_id)
        this.setState({
            teamID: this.nameToID(this.state.query)
        })
        if (typeof this.nameToID(this.state.query) == 'number') {
            
            axios({
                "method":"GET",
                "url":`https://api-football-v1.p.rapidapi.com/v2/players/squad/${this.nameToID(this.state.query)}/2019-2020`,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
                "x-rapidapi-key":"ae34dc57cbmshfbd27c9d54b4ae0p157852jsnb36c3e4228b5"
                }
                })
                .then((res)=>{
                  console.log(res.data.api.players)
                  this.setState({
                    response: res.data.api.players,
                    submitted: true,
                  })
                })
                .catch((error)=>{
                  console.log(error)
                })


        } else {
            return
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextState.submitted && this.state.response !== nextState.response) {
            return true;
        }
        if (nextState.query !== this.state.query) {
            return true;
        }
        return false;
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevState.submitted !== this.state.submitted){
    //         this.setState({
    //             submitted: true
    //         })
    //     }
    // }

    

    displayResults = () => {
        
        if (this.state.submitted){
            return this.state.response.map(object => {
                return (
                    <Results key={object.player_id} playerdata={object} team={this.state.query} />
                )
            })
        }
    
    }

    render () {
        console.log(teamSeed)
        return (
            <div id="marketSection">
                <div className="searchContainer">
                    <Search handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
                </div>
                <div className="row resultContainer">                 
                    {this.displayResults()}
                </div>
   
            </div>        
        )
    }

}

export default MarketContainer;