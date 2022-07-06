import React, { useState }  from 'react';
import Coins from './Coins';
import Pagination from './Pagination';

const Home = ({props}) => {
  
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.slice(indexOfFirstPost, indexOfLastPost);
  console.log();

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = currentPosts.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <div className='text-center my-4'>
                <h1>Rank #10 Cryto Coins</h1>
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
        <Coins props={filteredCoins} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={props.length}
        paginate={paginate}
        id={currentPage}
      />
    </div>
  )
}

export default Home