import React, { useState } from 'react';
import Coins from './Coins';
import Pagination from './Pagination';

const Home = ({ props }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const handleChange = e => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

  const filteredCoins = props.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredCoins.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='text-center my-4'>
        <h1>Rank #10 Crypto Coins</h1>
      </div>
      <form className='flex justify-center items-center'>
        <input
          className='w-[80%] py-1 px-2 border-none outline-none bg-primary rounded'
          type='text'
          autoFocus
          onChange={handleChange}
          placeholder='Search Coin'
        />
      </form>
      <Coins props={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredCoins.length}
        paginate={paginate}
        id={currentPage}
      />
    </div>
  );
};

export default Home;
