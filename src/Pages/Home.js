import dice from "../Assets/Images/dices 1.png";


function Home({btn}) {
    return (
        <div className="main">
            <div className="img_container">
                <img src={dice} alt="Main-Dice-Logo" />
            </div>

            <div className="text-container">
                <h1>DICE GAME</h1>
                <button onClick={()=>btn()}>Play Now</button>
            </div>
        </div>
    )
};



export default Home;