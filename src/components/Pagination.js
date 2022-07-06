import React, {useState} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, id }) => {

  const pageNumbers = [];
  
  const [click, setClick] = useState(false);
 
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = () => {
    setClick(!click);
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} onClick={handleClick} className=''>
        <button onClick={() => {paginate(number) }} className={ id === number ? ('bg-green-600 px-2 rounded mx-2 cursor-pointer') : ('bg-indigo-600 px-2 rounded mx-2 cursor-pointer')}>
          {number}
          </button>
      </li>
      );
    } else {
      return null;
    }
  });



  const handleNextbtn = () => {
    paginate(id + 1);

    if (id + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    paginate(id - 1);

    if ((id - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }
  return (
    <div className='flex justify-center'>
      <ul className='w-[80%] flex p-4 mt-4 justify-center items-center'>

        <li>
          <button
            onClick={handlePrevbtn}
            disabled={id === pageNumbers[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={id === pageNumbers[pageNumbers.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;