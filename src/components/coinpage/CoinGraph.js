import { useEffect } from "react";
import { useState } from "react";
import { useCryptoState } from "../../context/ContextProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import ChartButton from "./ChartButton";

const CoinGraph = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const { currency, days } = useCryptoState();
  const { id } = useParams();

  const getGraphData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );
    setHistoricalData(data.prices);
  };

  useEffect(() => {
    getGraphData();
  }, [currency, days]);

  const graphDays = [1, 30, 180, 365]

  return (
    <>
      <div className="w-full flex-col px-[2%] xl:w-[75%] xl:px-[0] xl:pr-[20px]">
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
        <div className="flex justify-between mt-3 gap-2">
          {
            graphDays.map(
              currEle => {
                return(
                  <ChartButton days = {currEle} /> 
                )
              }
            )
          }
        </div>
      </div>
    </>
  );
};

export default CoinGraph;
