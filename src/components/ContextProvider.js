import { createContext, useContext, useEffect, useState } from "react";

export const cryptoContext = createContext()

const ContextProvider = ({children}) => {
    const [currency, setCurrency] = useState('INR')
    const [symbol, setSymbol] = useState('₹')

    useEffect(
        () => {
            if (currency === 'INR') setSymbol('₹')
            else if (currency === 'USD') setSymbol('$')
        }, [currency]
    )

    return(
        <cryptoContext.Provider value={{currency,setCurrency,symbol}}>{children}</cryptoContext.Provider>
    )
}

export const CryptoState = () => {
    return useContext(cryptoContext);
  };

export default ContextProvider;