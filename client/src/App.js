import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './CSS-Stylesheets/styles.css'
import './CSS-Stylesheets/gameStyles.css'
import './CSS-Stylesheets/accuseStyles.css'
import './CSS-Stylesheets/characterStyles.css'
import './CSS-Stylesheets/weaponStyles.css'
import './CSS-Stylesheets/gameOver.css'

// my components
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Game from './components/Game'
import Accusation from './components/Accusation'
import CharacterList from './components/CharacterList'
import WeaponList from './components/WeaponList'
import GameOver from './components/GameOver'
import GameWon from './components/GameWon'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' render={rprops => <LandingPage {...rprops} />} />
                <Route path='/game' component={Game} />
                <Route path='/characters' render={rprops => <CharacterList {...rprops} />} />
                <Route path='/weapons' render={rprops => <WeaponList {...rprops} />} />
                <Route path='/accuse-suspect' render={rprops => <Accusation {...rprops} />} />
                <Route path='/gameOver' component={GameOver} />
                <Route path='/gameWon' component={GameWon} />
            </Switch>
        </div>
    )
}

export default App