import React from 'react';
import LineupName from './LineupName';

const Lineup = (props) => {
    console.log(props.line);
    let formation = []
    // console.log(formation[0], '123')
    // console.log(typeof formation[0], '123')
    // console.log(formation[0] && formation[0].player_name, '123')
    // console.log(props.line[0] && props.line.length, '456')
    let len = props.line[0] && props.line.length;
    console.log(len)
        // for (let i=0; i<len; i++) {
        //     console.log(props.line[i].lastname)
        // if (i !== 0) {
        //         formation = formation + "  " + "  " + "  " + props.line[i].lastname
        //     } else {
        //         formation = formation + props.line[i].lastname
        //     }
        
        // }
        // console.log(formation)
        for (let i=0; i<len; i++) {
            console.log(props.line[i].lastname)
            formation.push({
                name: props.line && props.line[i].lastname,
                playerID: props.line && props.line[i].player_id,
                concatname: props.line && (props.line[i].firstname + props.line[i].lastname).replace(/ /g,'').toLowerCase()
            })
        }
        console.log(formation)

        // return (
        //     <>
        //       {formation.length !== 0 && formation}
        //       <LineupName />
        //     </>
        //  )
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