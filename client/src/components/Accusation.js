import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider' 
import Character from './Character'
import Weapon from './Weapon'
import Particles from 'react-particles-js'
import particlesJSON from '../particlesjs-config.json'

const particlesVar = particlesJSON

class Accusation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            murderer: '',
            weapon: '',
        }
    }
        
    handleChange = (type, inputName, e) => {
        this.setState ({
            [type]: inputName
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.murderer === '' || this.state.weapon === '') {
            (alert("You must select a murderer and a weapon"))
        } else if (this.state.murderer === this.props.killer.name && this.state.weapon === this.props.murderWeapon.name) {
            this.props.history.push('/gameWon')
        } else {
            console.log(this.props.lostCount)
            if(this.props.lostCount === true){
                this.props.history.push('/gameOver')     
            } else {
                alert("You accused the wrong person, try again")
                this.props.tries()
            this.props.guess(this.state.murderer, this.state.weapon)
            } 
        }
    }

    
    render() {
        const mappedCharacter = this.props.characters.map((character) => <Character {...character} name={character.name} path={this.props.location.pathname} key={character._id} handleChange={this.handleChange} murderer={this.state.murderer} />)
        const mappedWeapon = this.props.weapons.map((weapon) => <Weapon {...weapon} key={weapon._id}  path={this.props.location.pathname} weapon={this.state.weapon} handleChange={this.handleChange}/>)

        return (
            <div className ="accuseDiv">
                <div className='accuseBtnDiv'>
                    <button className="accuseBtn" onClick={this.handleSubmit}>Submit accusation</button>
                <span className='triesLeft'>Attempts Remaining: {this.props.attempts}</span>
                </div>
                <div className='ChooseOne'>
                    Select One Character
                </div>
                <div className="accusationMap">
                    {mappedCharacter}
                </div>
                <div className='ChooseOne'>
                    Select One Weapon
                </div>
                <div className="accusationMap">
                    {mappedWeapon}
                </div>
                <div className='particles'>
                    <Particles params={particlesVar} />
                </div>
        </div>   
    )}
}

export default withClue(Accusation)