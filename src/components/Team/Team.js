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
                
                <div className="container">
                    <h5 id="formation">Form: {props.defenderFull.length || 0}-{props.midfielderFull.length || 0}-{props.forwarderFull.length || 0}</h5>
                    <img id="pitch" src={pitch}  alt="Snow"/>
                    <div className="top"><Lineup line={props.forwarderFull}/></div>
                    <div className="centered"><Lineup line={props.midfielderFull}/></div>
                    <div className="bottom"><Lineup line={props.defenderFull}/></div>
                    <div className="goalkeeper"><Lineup line={props.goalkeeperFull}/></div>
                </div>
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