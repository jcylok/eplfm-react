import React from "react";
import './Results.css'

const Results = props => {
    return (
        <div className="col-md-4 resultPlayer">
            <div className="playerCard">
            <p>{props.playerdata.firstname} {props.playerdata.lastname}</p>
            <img mode='fit'
                src="https://resources.premierleague.com/photos/2019/06/20/056b6aca-a668-4b77-aeb8-a18516e8e5b6/LIV_HK_516.png?width=260&height=330"
                alt="jersey" />
            </div>
        </div>

    )

}

export default Results;
