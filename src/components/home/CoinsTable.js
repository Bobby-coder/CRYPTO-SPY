import { useEffect, useState } from "react";
import axios from "axios";
import { useCryptoState } from "../../context/ContextProvider";
import { numberWithCommas } from "../home/Slider";
import { useNavigate } from "react-router-dom";

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

  const history = useNavigate();

  const handleSearch = () => {
    return tableCoins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase().trim())
    );
  };

  return (
    <>
      <div className="w-[90%] mx-auto my-5 h-10 relative flex items-center">
        <input
          type="text"
          placeholder="Search for a crypto currency"
          className="w-full text-[12px] rounded bg-transparent h-full border-solid border-gray-500 border-2 outline-none px-2 hover:border-gray-50 capitalize placeholder:uppercase placeholder:text-[12px] placeholder:tracking-wide"
          onChange={(e) => setSearch(e.target.value)}
        />
         <svg className="svg-icon search-icon inline-block h-5 w-8 absolute right-1" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
      </div>

      <div className="overflow-x-auto relative w-[90%] mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 pl-12 pr-[48px] text-[14px] font-semibold">
                COIN
              </th>
              <th scope="col" className="py-2 px-[30px] text-[14px] font-semibold sm:text-center">
                PRICE
              </th>
              <th scope="col" className="py-2 text-center px-[30px] text-[14px] font-semibold hidden sm:table-cell">
                CHANGE
              </th>
              <th scope="col" className="py-2 text-center px-[30px] text-[14px] font-semibold hidden sm:table-cell">
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
                  <tr onClick={() => history(`coins/${coinObj.id}`)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">
                    <td
                      scope="row"
                      className="py-4 pl-3 pr-9 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex gap-3 items-center justify-start">
                        <img src={coinObj.image} className="h-[25px]" />
                        <div className="flex flex-col gap-[1px]">
                          <p className="uppercase text-[12px]">{coinObj.symbol}</p>
                          <p className="text-[12px]" >{coinObj.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pl-[30px] text-[12px] text-white sm:text-center sm:pl-0">
                      {` ${symbol} ${numberWithCommas(coinObj.current_price)}`}
                    </td>
                    <td
                      className={
                        profit > 0
                          ? "py-4 text-center text-[12px] text-green hidden sm:table-cell"
                          : "py-4 text-center text-[12px] text-red hidden sm:table-cell"
                      }    
                    >
                      {`${
                        profit > 0 ? `+${profit.toFixed(2)}` : profit.toFixed(2)
                      } %`}
                    </td>
                    <td className="py-4 text-[12px] text-center text-white hidden sm:table-cell">
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