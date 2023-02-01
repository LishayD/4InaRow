import React from 'react'
import logo from '../img/logo.svg'
import play from '../img/play.png'

export default function Homepage(props) {
    return (
        <div className="main">
            <img src={logo} alt="" className="mainlogo" />
            <button className="btn1"><img src={play} />Start Game</button>
            <button className="btn2" onClick={props.onClick}>Game Rules</button>
        </div>
    )
}