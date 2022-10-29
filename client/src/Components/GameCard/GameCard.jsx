// asset imports
import icon_o from '../../assets/icon-o.svg'
import icon_x from '../../assets/icon-x.svg'
import icon_restart from '../../assets/icon-restart.svg'
import logo from '../../assets/logo.svg'
import { useLocation } from 'react-router'
import { useState, useRef } from 'react'



const GameCard = () => {
    const blocks = useRef([])
    const location = useLocation();
    console.log(location.state)
    console.log(blocks)



    const makeMove = (event) => {
        if (location.state.mark === 'X') {
            event.target.children[0].setAttribute('src', icon_x)
            makeAIMove()
        }
        if (location.state.mark === 'O') {
            event.target.children[0].setAttribute('src', icon_o);
        }
    }

    const makeAIMove = () => {

        let randomInt = Math.floor(Math.random() * (10 - 1) + 1)
        blocks.current[randomInt].src = icon_o

    }

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div>
                    <img src={logo}></img>
                </div>
                <div>
                    <button>{location.state.mark} TURN</button>
                </div>
                <div>
                    <img src={icon_restart}></img>
                </div>
            </div>

            <div className="flex my-4">
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
            </div>
            <div className="flex my-4">
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
            </div>
            <div className="flex my-4">
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img ref={(element) => blocks.current.push(element)} src=''></img>
                </div>
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default GameCard;