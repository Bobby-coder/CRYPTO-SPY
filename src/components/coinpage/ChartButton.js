import { TiChartLine } from "react-icons/ti";
import { useCryptoState } from "../../context/ContextProvider";

const ChartButton = ({ days }) => {
  const { setDays } = useCryptoState();
  return (
    <>
      <button
        type="button"
        class="text-gray-900 bg-[#EEBC1D] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
        onClick={() => setDays(days)}
      >
        <TiChartLine />
        {
            days === 1 && <p>24 HOURS</p>
        }
        {
            days === 30 && <p>1 MONTH</p>
        }
        {
            days === 180 && <p>6 MONTHS</p>
        }
        {
            days === 365 && <p>1 YEAR</p>
        }
      </button>
    </>
  );
};

export default ChartButton;
