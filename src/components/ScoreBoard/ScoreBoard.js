import React from "react";
import './ScoreBoard.css';

const ScoreBoard = props => {

    // forwarder statistics
    let fStat = [];
    let forwarderLen = props.forwarderFull[0] && props.forwarderFull.length;
    console.log(forwarderLen)
    for (let i=0; i<forwarderLen; i++) {
        fStat.push({
            dribbles: props.forwarderFull && props.forwarderFull[i].dribbles.success,
            duels: props.forwarderFull && props.forwarderFull[i].duels.won,
            shots: props.forwarderFull && props.forwarderFull[i].shots.total,
            goals: props.forwarderFull && props.forwarderFull[i].goals.total,
            passes: props.forwarderFull && props.forwarderFull[i].passes.total,
            tackles: props.forwarderFull && props.forwarderFull[i].tackles.total,
        })
    }
    console.log(fStat, 'fStat');
    let fTotal = 0;
    for (let i=0; i<fStat.length; i++) {
        fTotal = fTotal + fStat[i].dribbles * 0.8 + fStat[i].duels * 0.8 + fStat[i].shots * 0.95 + fStat[i].goals * 0.95 + fStat[i].passes * 0.9 + fStat[i].tackles * 0.8
    }
    console.log(Math.round(fTotal), "fTotal")

    // midfielder statistics
    let mStat = [];
    let midfielderLen = props.midfielderFull[0] && props.midfielderFull.length;
    console.log(midfielderLen)
    for (let i=0; i<midfielderLen; i++) {
        mStat.push({
            dribbles: props.midfielderFull && props.midfielderFull[i].dribbles.success,
            duels: props.midfielderFull && props.midfielderFull[i].duels.won,
            shots: props.midfielderFull && props.midfielderFull[i].shots.total,
            goals: props.midfielderFull && props.midfielderFull[i].goals.total,
            passes: props.midfielderFull && props.midfielderFull[i].passes.total,
            tackles: props.midfielderFull && props.midfielderFull[i].tackles.total,
        })
    }
    console.log(mStat, 'mStat');
    let mTotal = 0;
    for (let i=0; i<mStat.length; i++) {
        mTotal = mTotal + mStat[i].dribbles * 0.85 + mStat[i].duels * 0.85 + mStat[i].shots * 0.9 + mStat[i].goals * 0.9 + mStat[i].passes * 0.95 + mStat[i].tackles * 0.9
    }
    console.log(Math.round(mTotal), "mTotal")

    // defender statistics
    let dStat = [];
    let defenderLen = props.defenderFull[0] && props.defenderFull.length;
    console.log(defenderLen)
    for (let i=0; i<defenderLen; i++) {
        dStat.push({
            dribbles: props.defenderFull && props.defenderFull[i].dribbles.success,
            duels: props.defenderFull && props.defenderFull[i].duels.won,
            shots: props.defenderFull && props.defenderFull[i].shots.total,
            goals: props.defenderFull && props.defenderFull[i].goals.total,
            passes: props.defenderFull && props.defenderFull[i].passes.total,
            tackles: props.defenderFull && props.defenderFull[i].tackles.total,
        })
    }
    console.log(dStat, 'dStat');
    let dTotal = 0;
    for (let i=0; i<dStat.length; i++) {
        dTotal = dTotal + dStat[i].dribbles * 0.9 + dStat[i].duels * 0.9 + dStat[i].shots * 0.8 + dStat[i].goals * 0.8 + dStat[i].passes * 0.95 + dStat[i].tackles * 0.95
    }
    console.log(Math.round(dTotal), "dTotal")

    // goalkeeper statistics
    let gStat = props.goalkeeperFull[0] && (
        props.goalkeeperFull[0].passes.accuracy + props.goalkeeperFull[0].passes.total - props.goalkeeperFull[0].goals.conceded 
    )
    console.log(gStat, "gStat")


    return (
        <div className="sectionscore">
        <h2>Score Board</h2>
        {/* <div className="row team-profile"> */}
        
        <div className="container">
            {/* <h5 id="formation">Form: 123</h5> */}
            <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>


  
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>

     
    
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
            

        </div>
        {/* </div> */}
    </div>

    )

}

export default ScoreBoard;