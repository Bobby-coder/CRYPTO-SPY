import { createContext, useContext, useEffect, useState } from "react";

export const cryptoContext = createContext()

const ContextProvider = ({children}) => {
    const [currency, setCurrency] = useState('INR')
    const [symbol, setSymbol] = useState('₹')
    const [page, setPage] = useState(1);
    const [days, setDays] = useState(1);

    useEffect(
        () => {
            if (currency === 'INR') setSymbol('₹')
            else if (currency === 'USD') setSymbol('$')
        }, [currency]
    )

    return(
        <cryptoContext.Provider value={{currency,setCurrency,symbol,page,setPage,days,setDays}}>{children}</cryptoContext.Provider>
    )
}

export const useCryptoState = () => useContext(cryptoContext);

export default ContextProvider;