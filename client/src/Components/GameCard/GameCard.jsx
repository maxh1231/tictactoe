// asset imports
import icon_o from '../../assets/icon-o.svg'
import icon_x from '../../assets/icon-x.svg'
import icon_restart from '../../assets/icon-restart.svg'
import logo from '../../assets/logo.svg'
import { useLocation } from 'react-router'
import { useState, useRef, useEffect } from 'react'



const GameCard = () => {
    const blocks = useRef([])
    const location = useLocation();
    console.log(location.state)
    console.log(blocks)

    useEffect(() => {
        console.log('hit')
        if (location.state.mark === 'O') {
            makeAIMove();
        }
    }, [])


    const makeMove = (event) => {
        if (location.state.mark === 'X') {
            event.target.children[0].src = icon_x
        }
        if (location.state.mark === 'O') {
            event.target.children[0].src = icon_o;
        }
        setTimeout(makeAIMove, 1000)
    }


    let endGameArr = [];
    const makeAIMove = () => {
        if (location.state.mark === 'X' && endGameArr.length < 4) {
            let randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
            while (blocks.current[randomInt].getAttribute('src').includes('.svg') && endGameArr.length < 4) {
                randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
                console.log(randomInt)

            }
            blocks.current[randomInt].src = icon_o;
            endGameArr.push(randomInt);
            console.log(endGameArr)
        }

        if (location.state.mark === 'O') {
            let randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
            while (blocks.current[randomInt].getAttribute('src').includes('.svg') && endGameArr.length < 5) {
                randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
                console.log(randomInt)

            }
            blocks.current[randomInt].src = icon_x;
            endGameArr.push(randomInt);
            console.log(endGameArr)
        }
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
                    <img id='1' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='2' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='3' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
            </div>
            <div className="flex my-4">
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='4' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='5' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='6' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
            </div>
            <div className="flex my-4">
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='7' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='8' ref={(element) => blocks.current.push(element)} src=""></img>
                </div>
                <div className='flex justify-center items-center w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2 hover:cursor-pointer' onClick={makeMove}>
                    <img id='9' ref={(element) => blocks.current.push(element)} src=""></img>
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