import SideNavBDStartups from '../components/SideNavBDStartups'
import bigData from '../assets/BigData.json'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Big = () => {
    // eslint-disable-next-line
  const [big, setBig] = useState(bigData)
  const names = big.map(d => d.name)
  const [itemOffset, setItemOffset] = useState(0)
  const totalParticipants = names.length
  const itemsPerPage = 10

  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = big.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(big.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % big.length
    window.scrollTo(0, 0)

    setItemOffset(newOffset)
  }
  return (
    <section className='wrapper'>
      <div className='flex items-center gap-2'>
        <span>
          <img
            src='https://flagcdn.com/w320/bd.png'
            className='h-4 w-6'
            alt='flag'
          />
        </span>
        <h1>Bangladesh Startups</h1>
      </div>
      <section className='flex gap-4 mt-8'>
        <SideNavBDStartups />
        <main className='flex-1 shadow p-4 '>
          <div className='space-y-4'>
            <h2>Bangabandhu innovation grant (BIG 2021)</h2>
            <p className='font-bold'>Final Participants: ({ totalParticipants})</p>
          </div>
          <ul className='grid grid-cols-4 mt-4 gap-3'>
            {names.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
          <div className='flex flex-col gap-6 mt-8'>
            <h2>Startup Video Presentation</h2>
            <div className='grid grid-cols-2 gap-6'>
              {currentItems.map((item, i) => (
                <div key={i} className='flex flex-col gap-4 text-dark'>
                  <h1 className='font-bold'>{item.name}</h1>
                  <iframe
                    width='560'
                    height='315'
                    src={item.link}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
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
        </main>
      </section>
    </section>
  )
}
export default Big
