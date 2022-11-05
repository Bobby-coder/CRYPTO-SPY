import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useCryptoState } from "../../context/ContextProvider";
import { numberWithCommas } from "../home/Slider";

const CoinInfo = () => {
    const [singleCoin, setSingleCoin] = useState([])
    const {id} = useParams();
    const {currency, symbol} = useCryptoState();

    const coin = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        setSingleCoin(res.data)
    }

    useEffect(
        () => {
            coin()
        }, []
    )
    return(
        <>
        <div className="py-5 px-[5%] flex flex-col xl:flex-row">
        <div className="flex flex-col gap-2 xl:w-[30%]">
            <img src={singleCoin.image?.large} className='h-32 self-center'/>
            <h1 className="text-center text-3xl font-semibold uppercase">{singleCoin.name}</h1>
            <p className="text-justify opacity-70">{singleCoin.description?.en.split('.')[0]}.</p>
            <p className="tracking-wide font-bold">Rank: <span className="opacity-70 font-normal">{singleCoin.market_cap_rank}</span></p>
            <p className="tracking-wide font-bold">Current Price: <span className="opacity-70 font-normal" >{symbol}{numberWithCommas(singleCoin.market_data?.current_price[currency.toLowerCase()])}</span></p>
            <p className="tracking-wide font-bold">Market Cap: <span className="opacity-70 font-normal" >{numberWithCommas(singleCoin.market_data?.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M</span></p>
        </div>
        </div>
        </>
    )
}

export default CoinInfo;