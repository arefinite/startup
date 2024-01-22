import { FcIdea } from 'react-icons/fc'
import { useState } from 'react'
import ideaData from '../assets/IdeasData.json'
import ReactPaginate from 'react-paginate'

const Ideas = () => {
  // eslint-disable-next-line
  const [ideas, setIdeas] = useState(ideaData)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const totalIdeas = ideas.length
  const industries = ['All', ...new Set(ideas.map(startup => startup.industry))]

  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 20

  const endOffset = itemOffset + itemsPerPage

  const filteredIdeas = ideas.filter(idea =>
    idea.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const currentItems = filteredIdeas
    .filter(idea =>
      selectedIndustry === 'All' ? true : idea.industry === selectedIndustry
    )
    .slice(itemOffset, endOffset)

  const pageCount = Math.ceil(
    filteredIdeas.filter(idea =>
      selectedIndustry === 'All' ? true : idea.industry === selectedIndustry
    ).length / itemsPerPage
  )

  const handlePageClick = event => {
    const newOffset =
      (event.selected * itemsPerPage) %
      filteredIdeas.filter(idea =>
        selectedIndustry === 'All' ? true : idea.industry === selectedIndustry
      ).length
    setItemOffset(newOffset)
    window.scrollTo(0, 0)
  }

  const handleSearchChange = event => {
    setSearchQuery(event.target.value)
    setItemOffset(0)
  }

  const handleIndustryChange = event => {
    setSelectedIndustry(event.target.value)
    setItemOffset(0)
  }

  return (
    <section className='wrapper'>
      <div className='flex items-center gap-2'>
        <span>
          <FcIdea className='text-2xl' />
        </span>
        <h1>Idea Hub</h1>
        <span className='text-sm'>({totalIdeas} shared ideas)</span>
      </div>
      <div className='my-8 flex flex-col md:flex-row gap-4'>
        <input
          type='search'
          placeholder='Search for ideas...'
          className='w-full md:max-w-96'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          className='overflow-auto no-scrollbar cursor-pointer'
          value={selectedIndustry}
          onChange={handleIndustryChange}
        >
          {industries.map((industry, i) => (
            <option key={i} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      <main className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-8'>
        {currentItems.length > 0 ? (
          currentItems.map(idea => (
            <div
              key={idea.id}
              className='shadow py-6 px-4 flex flex-col gap-3 rounded-xl'
            >
              <p className='bg-darker shadow-lg w-fit px-4 py-1 text-sm text-white rounded-full'>
                {idea.industry}
              </p>
              <div className='flex flex-col gap-2'>
                <p className='text-dark font-bold'>{idea.name}</p>
                <p>
                  <strong className='block'>Target Audience: </strong>
                  {idea.target_audience}
                </p>
                <p>
                  <strong className='block'>Details:</strong>
                  {idea.details}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p className='text-red-600 font-bold drop-shadow'>
              No Ideas Available.
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
  )
}

export default Ideas
