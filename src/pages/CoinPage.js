import CoinInfo from "../components/coinpage/CoinInfo";
import CoinGraph from "../components/coinpage/CoinGraph";

const CoinPage = () => {
  return (
    <>
      <div className="flex flex-col gap-[30px] py-[20px] xl:flex-row">
        <CoinInfo />
        <CoinGraph />
      </div>
    </>
  );
};

export default CoinPage;
