import Diceroll from "../Components/DiceRoll";
import Diceselector from "../Components/DiceSelector";
import Score from "../Components/TotalScore";
import { useState } from "react";



function Play({ score, setScore }) {


    const [currentDice, setCurrentDice] = useState(0);

    const [selected, setSelected] = useState();
    const [error, setError] = useState();

const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const update = () => {
        if (!selected) {
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber); //Check

        if (selected === randomNumber) {
            setScore((score) => score + randomNumber);
        } else {
            setScore((score) => score - 2);
        }
        setSelected();
        console.log("selected", selected)
        console.log("randomNumber", randomNumber)
    };



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
