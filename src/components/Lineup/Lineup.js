import React from 'react';
import LineupName from './LineupName';

const Lineup = (props) => {
    console.log(props.line);
    let formation = []
    let len = props.line[0] && props.line.length;
    console.log(len)
  
        for (let i=0; i<len; i++) {
            console.log(props.line[i].lastname)
            formation.push({
                name: props.line && props.line[i].lastname,
                playerID: props.line && props.line[i].player_id,
                concatname: props.line && (props.line[i].firstname + props.line[i].lastname).replace(/ /g,'').toLowerCase()
            })
        }
        console.log(formation)
        let playerName = formation.map((obj) => {
            return (
              <LineupName 
                playerID={obj.playerID}
                name={obj.name}
                concatname={obj.concatname}
              />
            );
          })
          return (
            <>
              {playerName}
            </>
          )
    
};

export default Lineup;