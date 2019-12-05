import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider'

class Character extends Component { 

    constructor() {
        super()
        this.state = {
            canQuestion: false,
            showAlibi: false
        }
    }

    componentDidMount() {
        let filtered = this.props.foundClues.filter(ind => {
            return ind.character === this.props.name
        }) 
        filtered[0]
        ?
        this.setState({
           canQuestion: true
        })
         :
        this.setState({
            canQuestion: false
        })  
    }

    question = () => {
        this.props.updateClickCount()
        this.setState({
            showAlibi: true
        })     
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
       //change index in context showCharAlibi
       this.props.handleShowCharAlibi(this.props.index)
    }
    
    render() {
        const {name, age, description, imgUrl, path, handleChange, murderer, killer} = this.props

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
                    <button className = {myClass} onClick={() => handleChange('murderer', name)}>
                        <div className='accuseCharCards'>
                            {/* <h5>{name}</h5>
                            <h6>{gender}</h6>
                            <h6>{age}</h6>
                            <p>{description}</p> */}
                            <img className='accuseCharCardImage' src={imgUrl} alt="pic"/>
                        </div>
                    </button>
                    :
                    <div className = {myClass}>
                        <div className='charCards'>
                            <img className='charCardImage' src={imgUrl} alt="pic"/>
                            <h5>{name}, {age}</h5>
                            {/* <h6>{gender}</h6> */}
                            {/* <h6>{age}</h6> */}
                            <p>{description}</p>
                            {
                                this.state.canQuestion ?
                                <button className = "questionSuspectButton" onClick={this.question}>Question Suspect</button> 
                                :
                                null
                            }
                            {
                                this.props.showAlibi || this.props.showCharAlibi[this.props.index]
                                ?
                                
                                    name !== killer.name
                                    ?
                                    <h5 className='suspectAlibi'>"{this.props.alibiTxt}"</h5>
                                    :
                                    <h5 className='suspectGuilty'>"{this.props.guiltyTxt}"</h5>
                                :
                                null
                            }
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default withClue(Character)