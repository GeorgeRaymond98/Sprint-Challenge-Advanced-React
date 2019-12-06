import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerData (props) {
    return(
    <div >
        {props.players.map(player => 
            <PlayerCard  player={player} />
        )}
    </div>
    )
}

export default PlayerData