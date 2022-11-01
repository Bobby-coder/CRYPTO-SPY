import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useCryptoState } from "../context/ContextProvider";
import { Link } from "react-router-dom";

export function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Slider = () => {
  const { symbol, currency } = useCryptoState();
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

  const items = trendingCoins.map((coinObj) => {
    let profit = coinObj.price_change_percentage_24h;
    return (
      <Link to = {`coins/${coinObj.id}`} >
      <div className="flex flex-col items-center justify-between ">
        <img src={coinObj.image} className="h-[50px] mb-3" />
        <p className="text-center text-[14px] uppercase font-semibold">
          {coinObj.symbol} &nbsp;
          <span className={profit < 0 ? "text-red font-semibold" : "text-green font-semibold"}>
            {profit < 0 ? profit.toFixed(2) : `+${profit.toFixed(2)}`} %
          </span>
        </p>
        <p className="text-center text-[14px]">
          <span>{symbol}</span> {numberWithCommas(coinObj.current_price)}
        </p>
      </div>
      </Link>
    );
  });

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
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </>
  );
};

export default Slider;
