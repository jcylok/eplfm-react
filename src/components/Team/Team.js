import React from 'react';
import pitch from  '../../images/pitch.png';
import Lineup from '../../components/Lineup/Lineup';
import './Team.css'

const Team = (props) => {
    if (props.profile.teamID) {
        return (
            
            <div className="sectionteam">
                <h2>Tactics</h2>
                <div className="row team-profile">
                {/* <div className="col-sm tactics">

                    <h2>Squad</h2>
                    <p>123</p>
        

                </div> */}
                {/* <div className="col-sm tactics visualization">
                    <img id="pitch" src={pitch} alt="court-pic"/>
                    <div id="example">This is my div</div>

                </div> */}
                
                <div className="container">
                    <h5 id="formation">Form: {props.defenderFull.length}-{props.midfielderFull.length}-{props.forwarderFull.length}</h5>
                    <img id="pitch" src={pitch}  alt="Snow"/>
                    <div className="top"><Lineup line={props.forwarderFull}/></div>
                    <div className="centered"><Lineup line={props.midfielderFull}/></div>
                    <div className="bottom"><Lineup line={props.defenderFull}/></div>
                    <div className="goalkeeper"><Lineup line={props.goalkeeperFull}/></div>
                </div>
                {/* <div className="formation">
                    <h5>Form: {props.defenderFull.length}-{props.midfielderFull.length}-{props.forwarderFull.length}</h5>
                </div> */}




                </div>
            </div>
        )

    } else {
        return (
            <>
            </>
        )
    }

    
};

export default Team;