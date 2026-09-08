import {useState} from 'react'

export default function Player({initialName, symbol, isActive}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName)
    const inputField = <input 
        className='player' 
        type='text' 
        required 
        value={playerName}
        onChange={handleChange}
    ></input>
    const playerNameDisplay = <span className="player-name">{playerName}</span>
    function handleClick() {
        setIsEditing((editing)=>!editing); // sets to opposite value
    }
    function handleChange(event) { //react will give us event as object as result of onChange
        console.log(event)
        setPlayerName(event.target.value)
    }
    return(
        <li className={isActive?'active':undefined}>
            {!isEditing && playerNameDisplay || inputField}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
    
}
