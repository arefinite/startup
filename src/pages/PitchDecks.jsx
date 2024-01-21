import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import pitchDeckData from '../assets/PitchDecksData.json'
import { FcVoicePresentation } from 'react-icons/fc'

const PitchDecks = () => {
  // eslint-disable-next-line
  const [pitches, setPitches] = useState(pitchDeckData)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [itemOffset, setItemOffset] = useState(0)
  const categories = ['All', ...new Set(pitches.map(pitch => pitch.category))]
  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage

  const filteredPitches = pitches.filter(pitch =>
    pitch.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filterPitches = () => {
    return filteredPitches
      .filter(pitch =>
        selectedIndustry === 'All' ? true : pitch.category === selectedIndustry
      )
      .slice(itemOffset, endOffset)
  }

  const currentItems = filterPitches()

  const pageCount = Math.ceil(
    filteredPitches.filter(pitch =>
      selectedIndustry === 'All' ? true : pitch.category === selectedIndustry
    ).length / itemsPerPage
  )

  const handlePageClick = event => {
    const newOffset =
      (event.selected * itemsPerPage) %
      filteredPitches.filter(pitch =>
        selectedIndustry === 'All' ? true : pitch.category === selectedIndustry
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
          <FcVoicePresentation className='text-2xl' />
        </span>
        <h1>Pitch Decks</h1>
        <span className='text-sm'>({pitches.length} shared ideas)</span>
      </div>
      <div className='my-8 flex gap-4'>
        <input
          type='search'
          placeholder='Search for company pitch...'
          className='min-w-96'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select
          className='overflow-auto no-scrollbar cursor-pointer'
          value={selectedIndustry}
          onChange={handleIndustryChange}
        >
          {categories.map((industry, i) => (
            <option key={i} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      <main className='grid grid-cols-2 gap-8'>
        {currentItems.length > 0 ? (
          currentItems.map((pitch, i) => (
            <div
              key={i}
              className='shadow py-6 px-4 flex flex-col gap-3 rounded-xl'
            >
              <div className='flex justify-center'>
                <img
                  src={`https://logo.clearbit.com/${pitch.website}`}
                  alt='logo'
                  className='h-24 w-24 object-contain'
                />
              </div>
              <div>
                <iframe
                  src={pitch.url.slice(13,73)}
                  height={485}
                  style={{
                    border: '1px solid #CCC',
                    borderWidth: '1px',
                    marginBottom: '5px',
                    maxWidth: '100%',
                  }}
                  className='w-full'
                  allowFullScreen
                >
                  {' '}
                </iframe>
              </div>
              <p className='bg-darker shadow-lg w-fit px-4 py-1 text-sm text-white rounded-full'>
                {pitch.category}
              </p>
              <div className='flex flex-col gap-2'>
                <p className='text-dark font-bold'>{pitch.name}</p>
                <p>
                  <strong>Pitched Year: </strong> {pitch.year}
                </p>

                <p>
                  <strong className='block'>Website:</strong>
                  {pitch.website}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p className='text-red-600 font-bold drop-shadow'>
              No Pitch Available.
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

export default PitchDecks
