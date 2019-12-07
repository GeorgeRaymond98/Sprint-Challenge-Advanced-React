import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerData ({players}) {
    return(
    <div >
        {players.map(player => 
            <PlayerCard  player={player} />
        )}
    </div>
    )
}

export default PlayerData