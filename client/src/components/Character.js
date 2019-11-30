import React from 'react'
import {withClue} from '../context/ClueProvider'


const Character = (props) => {
    const {name, gender, age, description, imgUrl, path, handleChange, murderer} = props
    let myClass
    
        path === '/accuse-suspect'
        ?
            name === murderer
            ?
            myClass = 'accusedSelected'
            :
            myClass = 'accusationChar'
        :
         myClass = 'character'
    
    return (
        <>
        {
            myClass === 'accusationChar' || myClass === 'accusedSelected'
            ?
            <button className = {myClass} onClick={() => handleChange('murderer', name)} style={{border: "1px solid black"}}>
                <h5>{name}</h5>
                <h6>{gender}</h6>
                <h6>{age}</h6>
                <p>{description}</p>
                <img src={imgUrl} alt="pic"/>
            </button>
            :
            <div className = {myClass} style={{border: "1px solid black"}}>
                <img src={imgUrl} alt="pic"/>
                <h5>{name}</h5>
                <h6>{gender}</h6>
                <h6>{age}</h6>
                <p>{description}</p>
                
            </div>
            
        }
        
            
        </>
    )
}

export default withClue(Character)