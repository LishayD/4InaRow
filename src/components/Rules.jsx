import React from 'react'
import vIcon from '../img/vIcon.png'

export default function Rules(props) {
    return (
        <div className='Rules'>
            <h2>Rules</h2>
            <h3>Objective</h3>
            <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
            <h3>How To Play</h3>
            <ol>
                <li>Red goes first in the first game.</li>
                <li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
                <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                <li>The starter of the previous game goes second on the next game.</li>
            </ol>

            <div className='check-mark' onClick={props.onClick}>
                <img src={vIcon} alt="" />
            </div>
        </div>
    )
}