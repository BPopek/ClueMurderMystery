import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ClueProvider from './context/ClueProvider'
import { BrowserRouter } from 'react-router-dom'
import './fonts/bloodlust.ttf'
import './fonts/BLOODY.TTF'

ReactDOM.render(
    <ClueProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClueProvider>
    , document.getElementById('root'))