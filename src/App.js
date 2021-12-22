import React,{useState} from 'react'

const App = () => {
    //  let a = 10
    //  a = a+10 
    //  a = 20
    let [coins, setCoins] = useState(0)
    //  a => setA 
    //  kite => setKite 
    //  ramisDancing => setRamisDancing
    return(
        <div> 
            <h1> Number of Coins: {coins}</h1>
            <button onClick = {() => ( coins<=9 ? setCoins(coins+1) : "")}> Increment </button>
            <button onClick = {() => (coins>= 1? setCoins(coins-1) : "")}> Decrement </button>
            <button onClick = {() => {setCoins(0)}}> Reset </button>
        
        </div>
    )


}
export default App