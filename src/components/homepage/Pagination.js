import { useCryptoState } from "../../context/ContextProvider";
const Pagination = () => {
  const { page, setPage } = useCryptoState();
  const paginationPreviousStyle = 'hidden cursor-pointer py-2 px-3 ml-0 leading-tight rounded-l-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white sm:block'
  const paginationNumberStyle = 'cursor-pointer py-2 px-3 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
  const paginationNextStyle = 'hidden cursor-pointer py-2 px-3 leading-tight rounded-r-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white sm:block'

  return (
    <>
      <div className="w-full flex justify-center my-8">
        <ul className="inline-flex items-center -space-x-px">
          <li
            onClick={() => (page > 1) && setPage(page - 1) (window.scroll(0, 450))}
            className={paginationPreviousStyle}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(1);
               window.scroll(0, 450);
            }}
          >
            1
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(2);
               window.scroll(0, 450);
            }}
          >
            2
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(3);
               window.scroll(0, 450);
            }}
          >
            3
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(4);
               window.scroll(0, 450);
            }}
          >
            4
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(5);
               window.scroll(0, 450);
            }}
          >
            5
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(6);
               window.scroll(0, 450);
            }}
          >
            6
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(7);
               window.scroll(0, 450);
            }}
          >
            7
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(8);
               window.scroll(0, 450);
            }}
          >
            8
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(9);
               window.scroll(0, 450);
            }}
          >
            9
          </li>

          <li
            className={paginationNumberStyle}
            onClick={() => {
              setPage(10);
               window.scroll(0, 450);
            }}
          >
            10
          </li>

          <li className={paginationNextStyle} onClick={() => (page < 10) && (setPage(page + 1) (window.scroll(0, 450)) )}>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
