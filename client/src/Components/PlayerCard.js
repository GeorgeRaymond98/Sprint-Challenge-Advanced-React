import React, { useEffect } from 'react'
import { useLocalStorage } from "../Hooks/UselocalStorage";
function PlayerCard (props) {

    const [someValue, setSomeValue] = useLocalStorage('key', false);

    useEffect(() => {
        const body = document.querySelector('body')
        if (someValue === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }

    }, [someValue])
    return (
    <div>
        <h2>Name: {props.player.name}</h2>
        <h3>Country:{props.player.country}</h3>
        <p>{props.player.searches}</p> 
    </div>
    )
}

export default PlayerCard;