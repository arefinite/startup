import SideNavBDStartups from '../components/SideNavBDStartups'
import vcInfoData from '../assets/VCData.json'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const VCInfo = () => {
  // eslint-disable-next-line
  const [vcInfos, setVcInfos] = useState(vcInfoData)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5

  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = vcInfos.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(vcInfos.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % vcInfos.length
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
      <section className='flex gap-4 flex-col md:flex-row mt-8'>
        <SideNavBDStartups />
        <main className='flex-1 shadow p-4 '>
          <h2>VC/Investor Information</h2>
          <div className='flex flex-col gap-6 mt-8'>
            {currentItems.map((vc, i) => (
              <div key={i} className='p-4 md:shadow space-y-3'>
                <p>
                  <strong>Name: </strong>
                  {vc.name}
                </p>
                <p>{vc.description}</p>
                <p>
                  <strong>Focus Area: </strong>
                  {vc.investmentFocusArea}
                </p>
                <p>
                  <strong>Investment Level: </strong>
                  {vc.investmentFocusLevel}
                </p>
                <p>
                  <strong>Portfolio Country:</strong>
                  {vc.portfolioFeatureCountry}
                </p>
                <p>
                  <strong>Invested In:</strong>
                </p>
                <p>{vc.portfolioListOne}</p>
                <p>{vc.portfolioListTwo}</p>
                <p>{vc.portfolioListThree}</p>
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
export default VCInfo
