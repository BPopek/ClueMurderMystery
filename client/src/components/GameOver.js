import React, {Component} from 'react'
import { withClue } from '../context/ClueProvider';

class GameOver extends Component {
    
    handleClick = () => {
        this.props.history.push('/')
        this.props.handleRestartClick()
    }
    render() {
    return (
        <div className='gameOver'>
            { this.props.lostCount === true
            ?
            <div className='wrongGuessDiv'>
                <h1 className='lostHeader'>YOU'RE DEAD, {this.props.title} {this.props.name}</h1>
                <h1 className='lostMessage'>You guessed incorrectly and the murderer silenced you permanently.</h1>
                <button className='restartBtn' onClick={this.handleClick} style ={{border: '1px solid black'}} >
              Play Again</button>
            </div>
            :
            <div className='clicksDeathDiv'>
                <h1 className='lostHeader'>YOU'RE DEAD, {this.props.title} {this.props.name}</h1>
                <h1 className='lostMessage'>You took too long investigating, and the murderer took you out.</h1>
                <button className='restartBtn' onClick={this.handleClick} style ={{border: '1px solid black'}} >
              Play Again</button>
            </div>
            }
        </div>
        )
    }
}

export default withClue(GameOver)