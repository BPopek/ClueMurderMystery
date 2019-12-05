import React from 'react'
import {withClue} from '../context/ClueProvider'

const FoundClue = (props) => {
    return (
        <h5>{props.name}</h5>
    )
}

export default withClue(FoundClue)