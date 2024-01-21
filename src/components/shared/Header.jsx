import { NavLink } from 'react-router-dom'
import { MdHomeFilled } from "react-icons/md";

import logoIcon from '/logo-icon.png'

const Header = () => {
  return (
    <header className='bg-darker text-white py-6 flex items-center mb-12'>
      <section className='wrapper flex items-center justify-between'>
        <div>
          <NavLink to='/'>
            <h1 className='flex items-center gap-3'>
              <img src={ logoIcon} className='h-12 w-11' alt="" />
              WebSeta
            </h1>
          </NavLink>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex items-center space-x-10'>
            <NavLink to='/'>
              <li className='flex  gap-2'>
                <span>
                  <MdHomeFilled className='text-xl' />
                </span>
                <span>Home</span>
              </li>
            </NavLink>
            <NavLink to='/global-startups'>
              <li>Global Startups</li>
            </NavLink>
            <NavLink to='/bangladesh-startups'>
              <li>Bangladesh Startups</li>
            </NavLink>
            <NavLink to='/pitch-decks'>
              <li>Pitch Decks</li>
            </NavLink>
            <NavLink to='/ideas'>
              <li>Idea Sharing</li>
            </NavLink>
            <NavLink to='/case-studies'>
              <li>Case Studies</li>
            </NavLink>
          </ul>
        </nav>
      </section>
    </header>
  )
}
export default Header
