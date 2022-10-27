import icon_o from '../../assets/icon-o.svg'
import icon_x from '../../assets/icon-x.svg'
import icon_restart from '../../assets/icon-restart.svg'
import logo from '../../assets/logo.svg'

import { Link } from "react-router-dom";

const MenuCard = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <img src={logo}></img>
            </div>
            <div className='flex flex-col justify-evenly bg-[#1F3641] rounded-xl h-[180px] px-6 mt-6'>
                <div>
                    <h2 className='text-sm text-[#A8BFC9]'>PICK PLAYER 1'S MARK</h2>
                </div>
                <div className='flex justify-around bg-[#1A2A33] rounded-lg w-[350px]'>
                    <div className=''>
                        <svg className='menu-icons' width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#a8BFC9" /></svg>
                    </div>
                    <div>
                        <svg className='menu-icons' width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#a8BFC9" /></svg>
                    </div>
                </div>
                <div>
                    <span className='text-sm text-[#A8BFC9]'>REMEMBER : X GOES FIRST</span>
                </div>
            </div>

            <div className='flex flex-col mt-8 w-full'>

                <Link className='text-sm bg-[#F2B137] py-3 w-full rounded-lg' to="/game">NEW GAME (VS CPU)</Link>

                <button className='text-sm bg-[#65E9E4] py-3 mt-4 rounded-lg'>NEW GAME (VS PLAYER)</button>
            </div>
        </div>
    )
}

export default MenuCard;