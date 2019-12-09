import React from 'react';

const Lineup = (props) => {
    console.log(props.line);
    let formation = props.line
    console.log(formation[0], '123')
    console.log(typeof formation[0], '123')
    // console.log(formation[0].nationality, '123')


    // let newList = [];
    // for (let i=0; i<formation.length; i++) {
    //     newList.push(formation[i])
    // }
    // console.log(newList)
    // console.log(typeof newList)



    // for (let i=1; i<2; i++) {
    //     if (i !== 0) {
    //         formation = formation + '&nbsp;&nbsp;&nbsp;&nbsp;' + props.line[i].player_name
    //     } else {
    //         formation = formation + props.line[i].player_name
    //     }
        
    // }
  

        return (
            <>
              {/* {formation} */}
            </>
        )
    
};

export default Lineup;