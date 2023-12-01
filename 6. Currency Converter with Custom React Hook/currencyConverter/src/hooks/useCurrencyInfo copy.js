import {useState, useEffect} from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});
    
    const getCurrencyExchangeDate = (currency) => {
      const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
      fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response[currency]));
      return data;
    };

    useEffect( () => {
        getCurrencyExchangeDate(currency);
    }, [currency]);
}

export default useCurrencyInfo;




// ChatGPT
// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   const getCurrencyExchangeRate = async (currency) => {
//     try {
//       const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
//       const response = await fetch(url);
//       const currencyData = await response.json();
//       setData(currencyData[currency]);
//     } catch (error) {
//       console.error("Error fetching currency data:", error);
//     }
//   };

//   useEffect(() => {
//     getCurrencyExchangeRate(currency);
//   }, [currency]);

//   // Return the currency data you fetched
//   return data;
// }

// export default useCurrencyInfo;
