// asset imports
import icon_o from '../../assets/icon-o.svg'
import icon_x from '../../assets/icon-x.svg'
import icon_restart from '../../assets/icon-restart.svg'
import logo from '../../assets/logo.svg'
import { useLocation } from 'react-router'
import { useState } from 'react'

const GameCard = () => {
    const [active, setActive] = useState(null);
    const location = useLocation();
    console.log(location.state)

    const makeMove = (event) => {
        if (location.state.mark === 'X') {
            event.target.children[0].setAttribute('src', icon_x)
        }
        if (location.state.mark === 'O') {
            event.target.children[0].setAttribute('src', icon_o);
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div>
                    <img src={logo}></img>
                </div>
                <div>
                    <button>X TURN</button>
                </div>
                <div>
                    <img src={icon_restart}></img>
                </div>
            </div>

            <div className="flex my-4">
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2' onClick={makeMove}>
                    <img src=''></img>
                </div>
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'>
                    <img src=''></img>
                </div>
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'>
                    <img src=''></img>
                </div>
            </div>
            <div className="flex my-4">
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'></div>
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'></div>
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'></div>
            </div>
            <div className="flex my-4">
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'></div>
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'></div>
                <div className='w-[140px] h-[140px] bg-[#1F3641] rounded-xl mx-2'></div>
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