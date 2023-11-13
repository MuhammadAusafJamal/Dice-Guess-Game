import styled from "styled-components";

function Diceselector({ selected, setSelected, error, setError }) {


    const dic = [1, 2, 3, 4, 5, 6]
    // console.log(selected)
    return (
        <div className="di">
            <p style={{ color: "red" }}>{error}</p>
            <div className="dice">
                {dic.map((v, i) => (<Box
                    isselected={v === selected}
                    className="num" key={i}
                    onClick={() => {
                        setSelected(v)
                        setError()
                    }}
                >{v}</Box>))}
            </div>
            <p>Select Number</p>
        </div>
    )



}



export default Diceselector;


const Box = styled.div`
height: 72px;
width: 72px;
border: 2px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color:${(props) => props.isselected ? "black" : "white"};
Color:${(props) => !props.isselected ? "black" : "white"};

@media only screen and (max-width: 800px) {
    height: 50px;
    width: 50px;
    font-size: 24px;
    font-weight: 700;
}

@media only screen and (max-width: 590px) {
    height: 50px;
    width: 50px;
    font-size: 20px;
    font-weight: 600;
}

@media only screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
    font-size: 15px;
    font-weight: 500;
}

@media only screen and (max-width: 425px) {
    height: 30px;
    width: 30px;
    font-size: 15px;
    font-weight: 500;
}
`



// const NumberSelector = styled.div`
// .dice{
//     display: flex;
//     padding:24px;
// }
// ;`