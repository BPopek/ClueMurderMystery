import React from 'react'
import {withClue} from '../context/ClueProvider'

const Weapon = (props) => {

    const {name, description, imgUrl, path, handleChange, weapon} = props

    let filtered = props.foundClues.filter(ind => {
        return ind.name === name
    })

    let myClass
        path === '/accuse-suspect'
        ?
            name === weapon
            ?
            myClass = 'accusedSelected'
            :
            myClass = 'accusationWeapon'
        :
         myClass = 'weapon'

    return (
        <>
        {
            myClass === 'accusationWeapon' || myClass === 'accusedSelected'
            ?
            <button className={myClass} onClick={() => handleChange('weapon', name)} >
                <div className='accuseWeaponCards'>
                    {/* <h5>{name}</h5>
                    <p>{description}</p> */}
                    <img  className='accuseWeaponCardImage' src={imgUrl} alt="pic"/>
                </div>
            </button>
            :
            <div className={myClass} >
                <div className='weaponCards'>
                    <img  className='weaponCardImage' src={imgUrl} alt="pic"/>
                    <h5>{name}</h5>
                    <p>{description}</p>
                        {
                            filtered[0]
                            ?
                            <div className="weaponFound">FOUND</div>
                            :
                            null
                        }                    
                </div>
            </div>
        }
        </>
    )
}

export default withClue(Weapon)