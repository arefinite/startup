import { useEffect, useState } from 'react';
import data from '../assets/data.json';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import GoBack from '../components/GoBack';

const CountryStartups = () => {
  const { name } = useParams();
  const [startups, setStartups] = useState(data);
  useEffect(() => {
    setStartups(startups.filter((startup) => startup.country === name));
  }, [name]);

  const getFlag = (countryName) => {
    const country = startups.find((startup) => startup.country === countryName);
    return country ? country.flag : null;
  };

  const allTags = startups.flatMap((startup) => startup.tags.split(', '));

  const uniqueTags = [...new Set(allTags)];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const totalIdeas = startups.length;

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const filteredStartups = startups.filter((startup) =>
  startup.name.toLowerCase().includes(searchQuery.toLowerCase())
);

const currentItems = filteredStartups
  .filter((startup) =>
    selectedIndustry === 'All'
      ? true
      : startup.tags.includes(selectedIndustry)
  )
  .slice(itemOffset, endOffset);

  const pageCount = Math.ceil(
    filteredStartups.filter((idea) =>
      selectedIndustry === 'All' ? true : idea.industry === selectedIndustry
    ).length / itemsPerPage
  );

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) %
      filteredStartups.filter((idea) =>
        selectedIndustry === 'All' ? true : idea.industry === selectedIndustry
      ).length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setItemOffset(0);
  };

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
    setItemOffset(0);
  };

  return (
      <section className='wrapper'>
           <GoBack destination='/global-startups'/>
      <div className='flex items-center gap-2'>
        <span>
          <img src={getFlag(name)} className='h-4 w-6' alt='' />
        </span>
        <h1>{name} Startups:</h1>
        <span className='text-sm'>({totalIdeas} Startups)</span>
      </div>
      <div className='my-8 flex flex flex-col md:flex-row gap-4'>
        <input
          type='search'
          placeholder='Search for startups...'
          className='min-w-96'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          className='overflow-auto no-scrollbar max-w-70 cursor-pointer'
          value={selectedIndustry}
          onChange={handleIndustryChange}
        >
          <option value='All'>All</option>
          {uniqueTags.map((industry, i) => (
            <option key={i} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      <main className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {currentItems.length > 0 ? (
          currentItems.map((startup) => (
            <div
              key={startup.id}
              className='shadow py-6 px-4 flex flex-col gap-3 rounded-xl'
            >
              <div>
                <img src={startup.image} className='object-cover' alt='' />
              </div>
              <div className='mt-4 flex flex-col gap-3'>
                <div className='flex items-center  gap-2 bg-darker shadow-lg w-fit px-4 py-2 text-sm text-white rounded-full'>
                  <img src={getFlag(name)} className='h-4 w-6' alt='' />
                  <span>{startup.country}</span>
                </div>
                <h1>
                  <strong>Startup Name: </strong>
                  {startup.name}
                </h1>
                <p>
                  <strong>Description: </strong>
                  {startup.description}
                </p>
                <p>
                  <strong>Based In: </strong>
                  {startup.based}
                </p>
                <p>
                  <strong>Industries: </strong>
                  {startup.tags}
                </p>
                <p>
                  <strong>Website: </strong>
                  {startup.website}
                </p>
                <p>
                  <strong>Founded: </strong>
                  {startup.founded}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p className='text-red-600 font-bold drop-shadow'>
              No Available.
            </p>
          </div>
        )}
      </main>
      <div className='mt-8'>
        <ReactPaginate
          breakLabel='...'
          nextLabel='Next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< Previous'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </div>
    </section>
  );
};

export default CountryStartups;
