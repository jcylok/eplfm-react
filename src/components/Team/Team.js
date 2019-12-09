import React from 'react';
import pitch from  '../../images/pitch.png';
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
                    <img id="pitch" src={pitch}  alt="Snow"/>
                    <div className="bottom-left">Bottom Left</div>
                    <div className="top-left">Top Left</div>
                    <div className="top-right">Top Right</div>
                    <div className="bottom-right">Bottom Right</div>
                    <div className="centered">left mid &nbsp;&nbsp;&nbsp;&nbsp; Centered &nbsp;&nbsp;&nbsp;&nbsp; right mid</div>
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