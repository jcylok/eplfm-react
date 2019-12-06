import React from "react";
import Search from "../../components/Search/Search";
import Results from "../../components/Results/Results";
import axios from "axios";
import './MarketContainer.css';
// import api from './sample.json';

class MarketContainer extends React.Component {

    state = {
        query: "",
        submitted: false,
        response: {},
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState(
            {
                query: event.target.value,
                submitted: false
            }  
        )
        // this.search();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                submitted: true,
            }
        )
        // console.log(this.state.query)

        // axios.get(`https://api-football-v1.p.rapidapi.com/v2/players/squad/40/2019-2020`)
        // .then(res => {
        //     console.log(res.data)
        //     this.setState({
        //         response: res.data
        //     })
        // })
        // .catch(err => {
        //     console.log(err);
        // })

        axios({
            "method":"GET",
            "url":"https://api-football-v1.p.rapidapi.com/v2/players/squad/40/2019-2020",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"api-football-v1.p.rapidapi.com",
            "x-rapidapi-key":"ae34dc57cbmshfbd27c9d54b4ae0p157852jsnb36c3e4228b5"
            }
            })
            .then((res)=>{
              console.log(res.data.api.players)
              this.setState({
                response: res.data.api.players
              })
            })
            .catch((error)=>{
              console.log(error)
            })


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

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.submitted !== this.state.submitted){
            this.setState({
                submitted: true
            })
        }
    }

    displayResults = () => {
        
        if (this.state.submitted){
            return this.state.response.map(object => {
                return (
                    <Results key={object.player_id} playerdata={object} />
                )
            })
        }
    
    }

    render () {
        return (
            <>
                <div className="searchContainer">
                    <Search handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
                </div>
                <div className="row resultContainer">
                    {this.displayResults()}
                </div>
   
            </>        
        )
    }

}

export default MarketContainer;