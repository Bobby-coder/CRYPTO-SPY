const Header = () => {
  return (
    <>
      <div className="h-14 bg-gray-80 px-5% flex items-center justify-between">
        <p className="text-xl tracking-wide text-blue font-semibold">
          CRYPTO SPY
        </p>

        <select
          class="
      appearance-none
      w-20
      text-center
      py-2
      text-xl
      font-normal
      bg-gray-100
      rounded
      transition
      ease-in-out
      outline-none"
          
        >
          <option value={"INR"}>₹ INR</option>
          <option value={"USD"}>$ USD</option>
        </select>
      </div>
    </>
  );
};

export default Header;
