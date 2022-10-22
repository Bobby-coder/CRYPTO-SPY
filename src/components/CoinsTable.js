import { useEffect, useState } from "react";
import axios from "axios";
import { useCryptoState } from "./ContextProvider";
import { numberWithCommas } from "./Slider";

const CoinsTable = () => {
  const { currency, symbol, page } = useCryptoState();
  const [tableCoins, setTableCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getTableCoins = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    setTableCoins(res.data);
  };

  useEffect(() => {
    getTableCoins();
  }, [currency]);

  const handleSearch = () => {
    return tableCoins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase().trim())
    );
  };

  return (
    <>
      <div className="w-[90%] mx-auto my-5 h-12">
        <input
          type="text"
          placeholder="Search for a crypto currency"
          className="w-full rounded bg-transparent h-full border-solid border-gray-500 border-2 outline-none px-5 hover:border-gray-50 capitalize placeholder:uppercase placeholder:text-[14px] placeholder:tracking-wide"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto relative w-[90%] mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 pl-3 pr-[48px] text-center text-lg font-semibold">
                COIN
              </th>
              <th scope="col" className="py-2 text-center px-[30px] text-lg font-semibold">
                PRICE
              </th>
              <th scope="col" className="py-2 text-center px-[30px] text-lg font-semibold">
                CHANGE
              </th>
              <th scope="col" className="py-2 text-center px-[30px] text-lg font-semibold">
                VOLUME
              </th>
            </tr>
          </thead>
          <tbody>
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((coinObj) => {
                let profit = coinObj.price_change_percentage_24h;
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">
                    <td
                      scope="row"
                      className="py-4 pl-3 pr-9 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex gap-3 items-center justify-start">
                        <img src={coinObj.image} className="h-[25px]" />
                        <div className="flex flex-col gap-[1px]">
                          <p className="uppercase text-[16px]">{coinObj.symbol}</p>
                          <p>{coinObj.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center text-[15px] text-white">
                      {` ${symbol} ${numberWithCommas(coinObj.current_price)}`}
                    </td>
                    <td
                      className={
                        profit > 0
                          ? "py-4 text-center text-[15px] text-green"
                          : "py-4 text-center text-[15px] text-red"
                      }    
                    >
                      {`${
                        profit > 0 ? `+${profit.toFixed(2)}` : profit.toFixed(2)
                      } %`}
                    </td>
                    <td className="py-4 text-[15px] text-center text-white">
                      <span>{symbol}</span>{" "}
                      {coinObj.market_cap.toString().slice(0, -6)}
                      <span>M</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoinsTable;
