import React, {Component} from 'react'
import { withClue } from '../context/ClueProvider'
// import ding from '../sounds/Ding.mp3'


class Game extends Component {
    constructor(){
        super()
        this.state = {
            tutorial: 'main',
            interviewToggle: false,
            openClues: [false, false, false, false, false, false, false, false, false, false, false],
            clueName: '',
            clueDesc: ''
        }
    }

    handleTutorialToggle = e => {       
        if(e.target.value === 'tutorial'){
            this.setState({tutorial: 'tutorial'})
        } else {
            this.setState({tutorial: 'play'})
            this.props.handleTutorial()
        }
    }

    handleClueToggle = (clueNum) => {
        const currentArr = this.state.openClues
        const isOpen = !this.state.openClues[clueNum]
        currentArr.splice(clueNum, 1, isOpen)
        // const themeDing = new Audio(ding)
        // themeDing.play()
        this.setState(() => ({
            openClues: currentArr
        }))
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
    }

    addFoundClue = (inputClue, idName, clueNum) => {    
        this.props.saveClue(inputClue)
        this.props.updateClickCount()
        if(this.props.dead === true){
            this.props.history.push('/gameOver')
        }
        let foundDiv = document.getElementById(idName)
        foundDiv.classList.add('hidden')
        this.props.handleHideClues(clueNum)
    }

    render() {   
        return(
            <div className='gameDiv'>
                {this.props.needTutorial
                ?
                <div>
                    {this.state.tutorial === 'main' 
                    ?
                        <div className='gameTutorial'>
                            <h1 className='gameTutorialHeader'>Would you like to read the tutorial?</h1>
                            <button onClick={this.handleTutorialToggle} value='tutorial' className='gameTutorialButton'>Yes</button>
                            <button onClick={this.handleTutorialToggle} value='play' className='gameTutorialButton'>No</button>
                        </div>
                    : 
                        this.state.tutorial === 'tutorial' 
                        ?
                        <div className='gameTutorial'>
                            <p className='gameTutorialName'>{`Welcome to Clue: Murder Mystery, ${this.props.title} ${this.props.name}!`}</p>
                            <p className='gameTutorialText'>• Scroll <b>up, down</b> and <b>side to side</b> and click around the Game page to find hidden clues</p>
                            <p className='gameTutorialText'>• Interview suspects on the Characters page to eliminate them after finding their clues</p>
                            <p className='gameTutorialText'>• Found weapons are not the murder weapon and  will show on the Weapons page</p>
                            <p className='gameTutorialText'>• You get three chances to guess the murderer and weapon on the Accusation page</p>
                            <p className='gameTutorialText'>• If you take too long to guess the murderer will kill you</p>
                            <button onClick={this.handleTutorialToggle} value='play' className='gameTutorialButton'>Play</button>
                        </div>
                        :
                        null
                    }
                </div>
                :
                <div className='gameClueDiv'>
                    {this.state.openClues[0] ? 
                            <div id='clue1' className='gameClueDivSHOW-1'>
                                <div className='gameClueTitle'>{this.props.clues[0].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[0].description}</h3>  
                                <button onClick={() => this.addFoundClue(this.props.clues[0], 'clue1', 0)} className='gameAddClueButton'>Gather Evidence</button>                      
                            </div>
                            :
                            <div id='clue1B' style={this.props.hideClues[0] ? {display: 'none'} : {}} className='gameClueDivHIDE-1' onClick={() => this.handleClueToggle(0)}>
                                <div></div> 
                                {/* HIDE INFO 1 */}
                            </div>   
                        }
                        {
                            this.state.openClues[1] ? 
                            <div id='clue2' className='gameClueDivSHOW-2'>
                                <div className='gameClueTitle'>{this.props.clues[1].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[1].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[1], 'clue2', 1)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            : 
                            <div id='clue2B' style={this.props.hideClues[1] ? {display: 'none'} : {}} className='gameClueDivHIDE-2' onClick={() => this.handleClueToggle(1)}>
                                <div></div>
                                {/* HIDE INFO 2 */}
                            </div>
                        }
                        {this.state.openClues[2] ? 
                            <div id='clue3' className='gameClueDivSHOW-3'>
                                <div className='gameClueTitle'>{this.props.clues[2].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[2].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[2], 'clue3', 2)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue3B' style={this.props.hideClues[2] ? {display: 'none'} : {}} className='gameClueDivHIDE-3' onClick={() => this.handleClueToggle(2)}>
                                <div></div>
                                {/* HIDE INFO 3 */}
                            </div>   
                        }
                        {this.state.openClues[3] ? 
                            <div id='clue4' className='gameClueDivSHOW-4'>
                                <div className='gameClueTitle'>{this.props.clues[3].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[3].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[3], 'clue4', 3)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue4B' style={this.props.hideClues[3] ? {display: 'none'} : {}} className='gameClueDivHIDE-4' onClick={() => this.handleClueToggle(3)}>
                                <div></div>
                                {/* HIDE INFO 4 */}
                            </div>   
                        }
                        {this.state.openClues[4] ? 
                            <div id='clue5' className='gameClueDivSHOW-5'>
                                <div className='gameClueTitle'>{this.props.clues[4].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[4].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[4], 'clue5', 4)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue5B' style={this.props.hideClues[4] ? {display: 'none'} : {}} className='gameClueDivHIDE-5' onClick={() => this.handleClueToggle(4)}>
                                <div></div>
                                {/* HIDE INFO 5 */}
                            </div>   
                        }
                        {this.state.openClues[5] ? 
                            <div id='clue6' className='gameClueDivSHOW-6'>
                                <div className='gameClueTitle'>{this.props.clues[5].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[5].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[5], 'clue6', 5)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue6B' style={this.props.hideClues[5] ? {display: 'none'} : {}} className='gameClueDivHIDE-6' onClick={() => this.handleClueToggle(5)}>
                                <div></div>
                                {/* HIDE INFO 6 */}
                            </div>   
                        }
                        {this.state.openClues[6] ?
                            <div id='clue7' className='gameClueDivSHOW-7'>
                                <div className='gameClueTitle'>{this.props.clues[6].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[6].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[6], 'clue7', 6)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue7B' style={this.props.hideClues[6] ? {display: 'none'} : {}} className='gameClueDivHIDE-7' onClick={() => this.handleClueToggle(6)}>
                                <div></div>
                                {/* HIDE INFO 7 */}
                            </div>   
                        }
                        {this.state.openClues[7] ? 
                            <div id='clue8' className='gameClueDivSHOW-8'>
                                <div className='gameClueTitle'>{this.props.clues[7].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[7].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[7], 'clue8', 7)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue8B' style={this.props.hideClues[7] ? {display: 'none'} : {}} className='gameClueDivHIDE-8' onClick={() => this.handleClueToggle(7)}>
                                <div></div>
                                {/* HIDE INFO 8 */}
                            </div>   
                        }
                        {this.state.openClues[8] ? 
                            <div id='clue9' className='gameClueDivSHOW-9'>
                                <div className='gameClueTitle'>{this.props.clues[8].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[8].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[8], 'clue9', 8)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue9B' style={this.props.hideClues[8] ? {display: 'none'} : {}} className='gameClueDivHIDE-9' onClick={() => this.handleClueToggle(8)}>
                                <div></div>
                                {/* HIDE INFO 9 */}
                            </div>   
                        }
                        {this.state.openClues[9] ? 
                            <div id='clue10' className='gameClueDivSHOW-10'>
                                <div className='gameClueTitle'>{this.props.clues[9].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[9].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[9], 'clue10', 9)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue10B' style={this.props.hideClues[9] ? {display: 'none'} : {}} className='gameClueDivHIDE-10' onClick={() => this.handleClueToggle(9)}>
                                <div></div>
                                {/* HIDE INFO 10 */}
                            </div>   
                        }
                        {this.state.openClues[10] ? 
                            <div id='clue11' className='gameClueDivSHOW-11'>
                                <div className='gameClueTitle'>{this.props.clues[10].name}</div>
                                <h3 className='gameClueDescription'>{this.props.clues[10].description}</h3>
                                <button onClick={() => this.addFoundClue(this.props.clues[10], 'clue11', 10)} className='gameAddClueButton'>Gather Evidence</button>
                            </div>
                            :
                            <div id='clue11B' style={this.props.hideClues[10] ? {display: 'none'} : {}} className='gameClueDivHIDE-11' onClick={() => this.handleClueToggle(10)}>
                                <div></div>
                                {/* HIDE INFO 11 */}
                            </div>   
                        }
                    </div>
                }
            </div>
        )
    }
}

export default withClue(Game)