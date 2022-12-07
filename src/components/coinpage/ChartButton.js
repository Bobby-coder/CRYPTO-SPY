import { useCryptoState } from "../../context/ContextProvider";

const ChartButton = ({ days }) => {
  const { setDays } = useCryptoState();
  const paraStyle = 'mx-auto font-semibold'
  return (
    <>
      <button
        type="button"
        class="text-gray-900 bg-[#EEBC1D] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-sm text-sm px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mb-2 grow"
        onClick={() => setDays(days)}
      >
        
        {days === 1 && <p className={paraStyle}>24 HOURS</p>}
        {days === 30 && <p className={paraStyle}>1 MONTH</p>}
        {days === 180 && <p className={paraStyle}>6 MONTHS</p>}
        {days === 365 && <p className={paraStyle}>1 YEAR</p>}
      </button>
    </>
  );
};

export default ChartButton;
