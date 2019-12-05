import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {withClue} from '../context/ClueProvider';
import LogoWide from '../images/MM-wide.png'
import song from '../sounds/dark-winter.mp3'

class Navbar extends Component {

    componentDidUpdate(){
        const themeSong = new Audio(song)
        if(!this.props.hasPlayed && this.props.canPlay) {
           themeSong.play() 
           this.props.stopPlay()
           this.props.songHasPlayed()
        }    
    }

    render() {

        return(
            <div>
                {this.props.murderWeapon === '' ? 
                    <div id='NavbarBare'>
                        <NavLink exact to='/' className='Navbar-link' activeClassName='Navbar-link-active'>
                            <img src={LogoWide} className='logoWide' alt='logo' />
                        </NavLink>
                    </div>
                :
                <div id='Navbar'>
                    <NavLink exact to='/' className='Navbar-link' activeClassName='Navbar-link-active'>
                        <img src={LogoWide} className='logo' alt='logo' />
                    </NavLink>
                    <NavLink to='/game' className='Navbar-link' activeClassName='Navbar-link-active'>Game</NavLink>
                    <NavLink exact to='/characters' className='Navbar-link' activeClassName='Navbar-link-active'>Characters</NavLink>
                    <NavLink exact to='/weapons' className='Navbar-link' activeClassName='Navbar-link-active'>Weapons</NavLink>
                    <NavLink exact to='/accuse-suspect' className='Navbar-link' activeClassName='Navbar-link-active'>Make Accusation</NavLink>
                </div>
                }
            </div>
        )
    }
}

export default withClue(Navbar)