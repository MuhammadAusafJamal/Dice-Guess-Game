import logo1 from "../Assets/Images/dice_1.png"
import logo2 from "../Assets/Images/dice_2.png"
import logo3 from "../Assets/Images/dice_3.png"
import logo4 from "../Assets/Images/dice_4.png"
import logo5 from "../Assets/Images/dice_5.png"
import logo6 from "../Assets/Images/dice_6.png"
import Showrules from "./ShowRules"
import { useState } from "react"

function Diceroll({ currentDice, update, setScore }) {
    const Dicearr = [logo1, logo2, logo3, logo4, logo5, logo6]
    const [showRules, setShowRules] = useState(true);



    return (
        <div className="dicecontainer">
            <div className="diceimg" onClick={() => update()}>

                <img src={Dicearr[currentDice]} alt="dice" />

            </div>
            <p>Click on Dice to roll</p>


            <button className="btn1" onClick={() => setScore(0)}>Reset Score</button>
            <button className="btn2"
            onClick={()=>{setShowRules((prev) => !prev)}}
            >{showRules ? "Hide" : "Show"} Rules</button>



            {showRules && <Showrules/>}
        </div>
    )
};



export default Diceroll;