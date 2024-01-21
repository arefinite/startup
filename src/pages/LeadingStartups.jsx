import SideNavBDStartups from '../components/SideNavBDStartups'
import leadingStartupData from '../assets/LeadingStartupData.json'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
const LeadingStartups = () => {
    // eslint-disable-next-line
  const [leadingStartup, setLeadingStartup] = useState(leadingStartupData)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5

  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = leadingStartup.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(leadingStartup.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % leadingStartup.length
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
        <main className='flex-1 shadow p-4'>
          <h2>Leading Startup of Bangladesh</h2>

          <div className='mt-8 flex flex-col gap-6'>
            {currentItems.map((l, i) => (
              <div key={i} className='flex flex-col gap-2 shadow p-4'>
                <img src={`https://logo.clearbit.com/${l.website}`} alt="logo" className='h-24 w-24 object-contain' />
                <p className='font-bold'>{l.name}</p>
                <p>
                  <strong>Information:</strong>
                </p>
                <p>{l['description-1']}</p>
                <p>{l['description-2']}</p>
                <p>
                  <strong>Website: </strong>
                  {l.website}
                </p>
              </div>
            ))}
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
export default LeadingStartups
