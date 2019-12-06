import React from "react";

const Results = props => {
    return (
        <div className="col-md-4" style={{marginBottom:30, marginTop:30}}>
                <h2 style={{fontSize:16}}>{props.playerdata.player_name}</h2>
                {/* <img width={200} height={120} mode='fit'
                    src={props.gifdata.images.fixed_height.url} 
                    alt={props.gifdata.source_post_url} /> */}
        </div>

    )

}

export default Results;
