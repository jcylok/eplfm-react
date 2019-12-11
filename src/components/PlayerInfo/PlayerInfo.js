import React from 'react';
import './PlayerInfo.css'

// import jersey from '../../images/liverpool-jersey.png';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

const PlayerInfo = (props) => {
    console.log(props.infoNew.dribbles)
    console.log(props.infoNew && props.infoNew.dribbles && props.infoNew.dribbles.attempts)
    
        return (
            // <div className="profile-border" style={{paddingTop:50}}>
            <>
            <div className="row player-info">
            <div className="col-sm shirt">
                {/* <img src="data:image/jpeg;base64,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" alt="profile-pic"/> */}
                {/* <img src={jersey} alt="profile-pic" className="responsive"/> */}
                <img mode='fit' src={props.infoNew.team_name && images[`${props.infoNew.team_name.replace(/ /g,'').toLowerCase()}.png`]} alt="jersey-pic" className="responsive"/>
            </div>
            <div className="col-sm playerdetails">

                <h2>{props.infoNew.firstname} {props.infoNew.lastname}</h2>
                <p><strong>Position:</strong> <span className="playerbasic">&nbsp;&nbsp;&nbsp;{props.infoNew.position? props.infoNew.position:"N/A"}</span></p>
                <p><strong>Current Team:</strong><span className="playerbasic">&nbsp;&nbsp;&nbsp;{props.infoNew.team_name? props.infoNew.team_name:"N/A"}</span></p>
                <p><strong>Height:</strong><span className="playerbasic">&nbsp;&nbsp;&nbsp;{props.infoNew.height? props.infoNew.heightL:"N/A"}</span></p>
                <p><strong>Weight:</strong><span className="playerbasic">&nbsp;&nbsp;&nbsp;{props.infoNew.weight? props.infoNew.weight:"N/A"}</span></p>
                <p><strong>Birth Date:</strong> <span className="playerbasic">&nbsp;&nbsp;&nbsp;{props.infoNew.birth_date? props.infoNew.birth_date:"N/A"}</span></p>
                <p><strong>Nationality:</strong><span className="playerbasic">&nbsp;&nbsp;&nbsp;{props.infoNew.nationality? props.infoNew.nationality:"N/A"}</span></p>
                <p><strong>Rating:</strong><span className="playerbasic">&nbsp;&nbsp;&nbsp;{props.infoNew.rating? props.infoNew.rating:"N/A"}</span></p>


            </div>

            </div>
            <div className="action">
                <h3>Action</h3>
              <div className="actionbuttons">

                <button type="button" className="btn app-button" data-toggle="modal" data-target="#buy">
                Buy
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn app-button" data-toggle="modal" data-target="#sell">
                Sell
                </button>
              </div>

                {/* buy modal */}
                <div className="modal fade" id="buy" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Confirm to buy this player?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <strong>{props.infoNew.firstname} {props.infoNew.lastname}</strong>
                    </div>
                    <div>
                        Position:
                        <form action="myservlet.do" method="POST">
                            <select name="buyPlayerPosition" id="buyPlayerPosition" onChange={props.roleChange}>
                                <option value="forwarder" selected="selected">forwarder</option>
                                {/* <option value="1">One</option> */}
                                <option value="midfielder">midfielder</option>
                                <option value="defender">defender</option>
                                <option value="goalkeeper">goalkeeper</option>
                            </select>
                        </form>
                    </div>   
                    <div className="modal-footer">

                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.buysubmitted()} data-dismiss="modal">Buy</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* sell modal */}
                <div className="modal fade" id="sell" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Confirm to sell this player?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.infoNew.firstname} {props.infoNew.lastname}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.sellsubmitted()} data-dismiss="modal">Sell</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>





            <div className="row playerstat">
            <div className="container">
                <h3>Player's Statistics</h3>
                <p>The data will be updated once a week:</p>            
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Metric</th>
                        <th>Previous</th>
                        <th>Current</th>
                        {/* <th>Change</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Dribbles</td>
                        <td><p>attempts:</p><p>success:</p></td>
                        <td><p>{(props.infoOld && props.infoOld.dribbles && props.infoOld.dribbles.attempts) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.dribbles && props.infoOld.dribbles.success) || 0}</p></td>
                        <td><p>{(props.infoNew && props.infoNew.dribbles && props.infoNew.dribbles.attempts) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.dribbles && props.infoNew.dribbles.success) || 0}</p></td>
                        {/* <td>Passes</td> */}
  
                    </tr>
                    <tr>
                        <td>Duels</td>
                        <td><p>total:</p><p>won:</p></td>
                        <td><p>{(props.infoOld && props.infoOld.duels && props.infoOld.duels.total) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.duels && props.infoOld.duels.won) || 0}</p></td>
                        <td><p>{(props.infoNew && props.infoNew.duels && props.infoNew.duels.total) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.duels && props.infoNew.duels.won) || 0}</p></td>
                        {/* <td>Passes</td> */}
               
                    </tr>
                    <tr>
                        <td>Shots</td>
                        <td><p>on:</p><p>total:</p></td>
                        <td><p>{(props.infoOld && props.infoOld.shots && props.infoOld.shots.on) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.shots && props.infoOld.shots.total) || 0}</p></td>
                        <td><p>{(props.infoNew && props.infoNew.shots && props.infoNew.shots.on) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.shots && props.infoNew.shots.total) || 0}</p></td>
                        {/* <td>Passes</td> */}
           
                    </tr>
                    <tr>
                        <td>Goals</td>
                        <td><p>assists:</p><p>conceded:</p><p>total:</p></td>
                        <td><p>{(props.infoOld && props.infoOld.goals && props.infoOld.goals.assists) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.goals && props.infoOld.goals.conceded) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.goals && props.infoOld.goals.total) || 0}</p></td>
                        <td><p>{(props.infoNew && props.infoNew.goals && props.infoNew.goals.assists) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.goals && props.infoNew.goals.conceded) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.goals && props.infoNew.goals.total) || 0}</p></td>
                        {/* <td>Passes</td> */}
     
                    </tr>
                    <tr>
                        <td>Passes</td>
                        <td><p>accuracy:</p><p>key:</p><p>total:</p></td>
                        <td><p>{(props.infoOld && props.infoOld.passes && props.infoOld.passes.accuracy) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.passes && props.infoOld.passes.key) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.passes && props.infoOld.passes.total) || 0}</p></td>
                        <td><p>{(props.infoNew && props.infoNew.passes && props.infoNew.passes.accuracy) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.passes && props.infoNew.passes.key) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.passes && props.infoNew.passes.total) || 0}</p></td>
                        {/* <td>Passes</td> */}
        
                    </tr>
                    <tr>
                        <td>Tackles</td>
                        <td><p>blocks:</p><p>interceptions:</p><p>total:</p></td>
                        <td><p>{(props.infoOld && props.infoOld.tackles && props.infoOld.tackles.blocks) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.tackles && props.infoOld.tackles.interceptions) || 0}</p>
                            <p>{(props.infoOld && props.infoOld.tackles && props.infoOld.tackles.total) || 0}</p></td>
                        <td><p>{(props.infoNew && props.infoNew.tackles && props.infoNew.tackles.blocks) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.tackles && props.infoNew.tackles.interceptions) || 0}</p>
                            <p>{(props.infoNew && props.infoNew.tackles && props.infoNew.tackles.total) || 0}</p></td>
                        {/* <td>Passes</td> */}
                  
                    </tr>

                    </tbody>
                </table>
            </div>
            </div>
            </>
        )
    
};

export default PlayerInfo;