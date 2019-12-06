import React from 'react'


function PlayerCard (props) {

    return (
    <div >
        <h1>Name: {props.player.name}</h1>
        <p>Country:{props.player.country}</p>
        <p>{props.player.searches}</p> 
    </div>
    )
}

export default PlayerCard;