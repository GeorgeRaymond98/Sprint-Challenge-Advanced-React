import React from 'react'


function PlayerCard (props) {

    return (
    <div>
        <span>Randome test</span>
        <h2>Name: {props.player.name}</h2>
        <h3>Country:{props.player.country}</h3>
        <p>{props.player.searches}</p> 
    </div>
    )
}

export default PlayerCard;