import { FaBook } from 'react-icons/fa'
import { useState } from 'react'
import caseStudyData from '../assets/AllCaseStudyData.json'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  // eslint-disable-next-line
  const [caseStudies, setCaseStudies] = useState(caseStudyData)
  const [searchQuery, setSearchQuery] = useState('')
  const totalCase = caseStudies.length

  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10

  const endOffset = itemOffset + itemsPerPage

  const filteredCaseStudies = caseStudies.filter(caseStudy =>
    caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const currentItems = filteredCaseStudies.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredCaseStudies.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredCaseStudies.length
    setItemOffset(newOffset)
    window.scrollTo(0, 0)
  }

  const handleSearchChange = event => {
    setSearchQuery(event.target.value)
    setItemOffset(0) 
  }

  return (
    <section className='wrapper'>
      <div className='flex items-center gap-2'>
        <span>
          <FaBook className='text-2xl text-dark' />
        </span>
        <h1>Case Studies</h1>
        <span className='text-sm'>({totalCase} shared case studies)</span>
      </div>
      <div className='my-8 flex gap-4'>
        <input
          type='search'
          placeholder='Search for case study...'
          className='min-w-96'
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <main className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {currentItems.length > 0 ? (
          currentItems.map(d => (
            <div
              key={d.id} // Assuming case studies have a unique identifier (replace with the actual property name)
              className='shadow py-6 px-4 flex flex-col gap-3 rounded-xl'
            >
              <img
                src={d.image}
                className='h-16 object-contain w-full'
                alt=''
              />
              <p>{d.title}</p>
              <Link
                to={`${d.id}`}
                className='medium-button justify-self-end mt-auto text-center'
              >
                <button>See Case Study</button>
              </Link>
            </div>
          ))
        ) : (
          <div>
            <p className='text-red-600 font-bold drop-shadow'>
              No Case Study Available.
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

export default CaseStudies
