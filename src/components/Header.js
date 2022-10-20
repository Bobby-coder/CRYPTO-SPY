const Header = () => {
  return (
    <>
      <div className="h-14 bg-gray-80 px-5% flex items-center justify-between">
        <p className="text-xl tracking-wide text-blue font-semibold">CRYPTO SPY</p>
        <div className="w-20 flex justify-center bg-gray-100 rounded">
        <select className="text-lg outline-0 h-10 w-16 bg-gray-100 cursor-pointer">
          <option value={'INR'}>INR</option>
          <option value={'USD'}>USD</option>
        </select>
        </div>
      </div>
    </>
  );
};

export default Header;
