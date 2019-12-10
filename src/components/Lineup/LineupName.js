import React from 'react';
import './LineupName.css';

const LineupName = (props) => {
    console.log(props.playerID)
          return (
            <a href={`/player/${props.playerID}/${props.concatname}`}>
                <span className="singleName"><strong>{props.name}</strong></span>
            </a>
          )
    
};

export default LineupName;