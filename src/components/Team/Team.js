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
                    <img id="pitch" src={pitch}  alt="Snow"/>
                    {/* <div className="top">Top Left &nbsp;&nbsp;&nbsp;&nbsp; Top right</div> */}
                    <div className="top"><Lineup line={props.forwarderFull}/></div>
                    <div className="centered">left mid &nbsp;&nbsp;&nbsp;&nbsp; Centered &nbsp;&nbsp;&nbsp;&nbsp; right mid &nbsp;&nbsp;&nbsp;&nbsp; right mid 2 &nbsp;&nbsp;&nbsp;&nbsp; right mid 3</div>
                    <div className="bottom">Bottom Left &nbsp;&nbsp;&nbsp;&nbsp; Bottom right</div>
                    <div className="goalkeeper">Keeper</div>
                </div>
                <div className="formation">
                    <h5>Formation: 3-5-2</h5>
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