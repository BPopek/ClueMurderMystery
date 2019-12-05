import React, {Component} from 'react'
import {withClue} from '../context/ClueProvider' 

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            title: 'Sleuth'
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }
    handleClick = (e) => {
        e.preventDefault()
        this.props.getAll()
        this.props.chooseName(this.state.name, this.state.title)
        this.props.history.push('/game')
        this.props.sound()
    }
        //route to main page of game, call getAll function

    render(){    
        return(
            <div className='landingDivImage'>
                <div className='landingDiv'>
                    {/* <form onSubmit={(e) => this.handleSubmit(e, this.state.name, this.state.title)} className='landingForm'>  */}
                    <form className='landingForm'> 
                        <h1 className='landingWelcome'>Welcome to Tudor Manor</h1>
                        <p className='landingWelcomeExplanation'>Set up your player character and help us find the murderer:</p>
                        <select onChange={this.handleChange} name='title' id="title" className='landingTitle'>
                            <option value="chooseTitle">Choose Title</option>
                            <option value='Mr.' >Mr.</option>
                            <option value='Mrs.' >Mrs.</option>
                            <option value='Ms.' >Ms.</option>
                            <option value='Doctor' >Doctor</option>
                            <option value='Professor' >Professor</option>
                            <option value='Reverend' >Reverend</option>
                            <option value='Detective' >Detective</option>
                            <option value='Inspector' >Inspector</option>
                        </select>
                        <input onChange={this.handleChange} value={this.state.name} name='name' type="text" placeholder="Name"className='landingTitleInput' />
                        {/* <button className='landingTitleSubmit' >Submit</button> */}
                        <button onClick={this.handleClick} className='startGameButton'>Start Game</button>
                    </form>
                    {/* <div className='startGameButtonDiv'>
                        <button onClick={this.handleClick} className='startGameButton'>Start Game</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withClue(LandingPage)