import React from 'react';
import pitch from  '../../images/pitch.png';
import './Team.css'

const Team = (props) => {
    if (props.profile.teamID) {
        return (
            <div className="sectionteam">
                <h2>Tactics</h2>
                <div className="row team-profile">
                <div className="col-sm tactics">

                    <h2>Squad</h2>
                    <p>123</p>
        

                </div>
                <div className="col-sm tactics">
                    <img id="pitch" src={pitch} alt="court-pic"/>
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