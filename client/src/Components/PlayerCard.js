import React from 'react'


function PlayerCard (props) {

    return (
    <div >
        <h1>Name: {props.player.name}</h1>
        <h2>Country:{props.player.country}</h2>
        <p>{props.player.searches}</p> 
    </div>
    )
}

export default PlayerCard;