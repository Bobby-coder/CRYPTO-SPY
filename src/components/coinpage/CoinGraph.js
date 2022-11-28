import { useEffect } from "react";
import { useState } from "react";
import { useCryptoState } from "../../context/ContextProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

const CoinGraph = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency } = useCryptoState();
  const { id } = useParams();

  const getGraphData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );
    setHistoricalData(res.data?.prices);
  };

  useEffect(() => {
    getGraphData();
  }, [currency, days]);

  return (
    <>
      {!historicalData ? (
        <p>...Loading</p>
      ) : (
        <div className="w-full px-[2%]">
        <Line
          data={{
            labels: historicalData.map((currEle) => {
              let date = new Date(currEle[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicalData.map((currEle) => currEle[1]),
                label: `Price ( Past ${days} Days ) in ${currency}`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        </div>
      )}
    </>
  );
};

export default CoinGraph;
