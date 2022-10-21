import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import { CryptoState } from "./ContextProvider";

const Slider = () => {
  const {symbol, currency} = CryptoState();
  const [trendingCoins, setTrendingCoins] = useState([]);

  const getTrendingCoins = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    setTrendingCoins(res.data);
  };

  useEffect(() => {
    getTrendingCoins();
  }, [currency]);

  
  const items = trendingCoins.map(
        coinObj => {
            return(
                <div className="flex flex-col items-center justify-between ">
                <img src={coinObj.image} className="h-20 mb-3"/>
                <p className="text-center text-2xl">{coinObj.name}</p>
                <p className="text-center"><span>{symbol}</span> {coinObj.current_price}</p>
                </div>
            )
        }
    )
  

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <>
      <AliceCarousel mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay />
    </>
  );
};

export default Slider;
