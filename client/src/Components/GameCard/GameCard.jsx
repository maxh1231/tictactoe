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
    const [activeMark, setActiveMark] = useState(location.state.mark);
    const [endGameArr, setEndGameArr] = useState([]);

    useEffect(() => {
        if (location.state.mark === 'O') {
            makeAIMove();
        }
    }, [])

    const makeMove = (event) => {
        if (location.state.mark === 'X') {
            event.target.children[0].src = icon_x
            setActiveMark('O')
        }
        if (location.state.mark === 'O') {
            event.target.children[0].src = icon_o;
            setActiveMark('X')
        }
        setTimeout(makeAIMove, 1000)
    }

    const makeAIMove = () => {
        if (location.state.mark === 'X' && endGameArr.length < 4) {
            let randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
            while (blocks.current[randomInt].getAttribute('src').includes('.svg')) {
                randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
                console.log(randomInt)

            }
            blocks.current[randomInt].src = icon_o;
            setEndGameArr(current => [...current, randomInt])
            console.log(endGameArr)
            setActiveMark('X')
        }

        if (location.state.mark === 'O' && endGameArr.length < 5) {
            let randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
            while (blocks.current[randomInt].getAttribute('src').includes('.svg')) {
                randomInt = Math.floor(Math.random() * (9 - 1 + 1) + 0)
                console.log(randomInt)

            }
            blocks.current[randomInt].src = icon_x;
            setEndGameArr(current => [...current, randomInt])
            console.log(endGameArr)
            setActiveMark('O')
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between mx-2'>
                <div className=''>
                    <img className='logo' src={logo}></img>
                </div>
                <div className='flex w-[140px] h-[40px] rounded-xl bg-[#1F3641] '>
                    {activeMark === 'X' ?
                        <div className=''>
                            <svg width="64" height="64" className='inline game-icon' xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#A8BFC9" /></svg>
                            <span className='text-[#A8BFC9]'>TURN</span>
                        </div>
                        :
                        <span className='text-sm text-[#A8BFC9]'><svg width="64" height="64" className='inline game-icon' xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#A8BFC9" /></svg>TURN</span>
                    }
                </div>
                <div className='flex items-center bg-[#A8BFC9] p-3 rounded-xl ml-6'>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z" fill="#1F3641" /></svg>
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