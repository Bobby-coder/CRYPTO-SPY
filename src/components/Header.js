import { CryptoState } from "./ContextProvider";

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  return (
    <>
      <div className="h-14 bg-gray-80 px-[5%] flex items-center justify-between">
        <p className="text-xl tracking-wide text-blue font-semibold">
          CRYPTO SPY
        </p>

        <select
          className="
      appearance-none
      w-20
      text-center
      py-2
      text-lg
      font-normal
      bg-gray-100
      rounded
      transition
      ease-in-out
      outline-none"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
        >
          <option value={"USD"}>$ USD</option>
          <option value={"INR"}>₹ INR</option>
        </select>
      </div>
    </>
  );
};

export default Header;
