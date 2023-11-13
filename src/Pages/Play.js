import Diceroll from "../Components/DiceRoll";
import Diceselector from "../Components/DiceSelector";
import Score from "../Components/TotalScore";
import { useState } from "react";



function Play({ score, setScore }) {


    const [currentDice, setCurrentDice] = useState(0);

    const [selected, setSelected] = useState();
    const [error, setError] = useState();



    const update = () => {
        if (!selected) {
            return (
                setError("You have not selected any number")
            )
        }
        setCurrentDice(Math.floor(Math.random() * 6))


        if (selected === currentDice + 1) {
            setScore((score) => score + selected)
            console.log("done")
        } else {
            setScore((score) => score - 2)
            console.log("gaya")
        }
        setSelected();
    }




    return (
        <div className="main2">
            <div className="top">
                <Score score={score} />
                <Diceselector
                    selected={selected}
                    setSelected={setSelected}
                    error={error}
                    setError={setError}
                />
            </div>
            <Diceroll
                currentDice={currentDice}
                update={update}
                setScore={setScore}

            />
        </div>
    )
};



export default Play;