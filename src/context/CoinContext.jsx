import React, { createContext, useState, useEffect } from "react";

// Create content using create content hook
export const CoinContext = createContext();

const CoinContextProvider = (props)=>{
// update state variable
    const[allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] =useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoin = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-xV2JcsDs73qgoDBrg1nQ5yfq'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }
// to execute once when the coin loaded
    useEffect(()=>{
        fetchAllCoin();
    },[currency])

    // to pass the variables usin the context value
    const contextValue = {
        allCoin, currency, setCurrency

    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>

    )

}
export default CoinContextProvider;