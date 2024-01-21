import { useState } from 'react'
import data from '../assets/data.json'
import { Link } from 'react-router-dom'
import { RiGlobalLine } from 'react-icons/ri'

const GlobalStartups = () => {
  // eslint-disable-next-line
  const [startups, setStartups] = useState(data)

  const totalStartups = startups.map(startup => startup).length

  const getTotal = countryName => {
    return startups.filter(country => country.country == countryName).length
  }
  const getFlag = countryName => {
    const country = startups.find(startup => startup.country === countryName)
    return country ? country.flag : null
  }

  const countries = [...new Set(startups.map(startup => startup.country))]

  return (
    <section>
      <div className='wrapper'>
        <div className='flex items-center gap-2'>
          <span>
            <RiGlobalLine className='text-2xl text-dark' />
          </span>
          <h1>Global Startups</h1>
          <span className='text-sm'>({totalStartups} startups)</span>
        </div>
        <div className='mt-8'>
          <p className='font-bold text-dark'>Explore by Countries</p>
          <ul className='grid mt-6 grid-cols-5 space-y-4'>
            {countries.length > 0 &&
              countries.map((country, i) => (
                <li key={i} className='flex gap-3 items-center'>
                  <img src={getFlag(country)} className='h-4 w-6' alt='flag' />
                  <div className='flex gap-2 items-center'>
                    <span>
                      <Link to={`${country}`}>{country}</Link>
                    </span>
                    <span className='text-sm text-dark'>
                      ({getTotal(country)})
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default GlobalStartups
