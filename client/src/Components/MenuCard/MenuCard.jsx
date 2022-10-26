import { Link } from "react-router-dom";

const MenuCard = () => {
    return (
        <div>
            <div>
                <h2>PICK PLAYER 1'S MARK</h2>
                <div>
                    X
                </div>
                <div>
                    O
                </div>
                <span>REMEMBER : X GOES FIRST</span>
            </div>

            <div>
                <Link to="/game">NEW GAME (VS CPU)</Link>
                <button>NEW GAME (VS PLAYER)</button>
            </div>
        </div>
    )
}

export default MenuCard;