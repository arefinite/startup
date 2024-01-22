import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaXmark } from 'react-icons/fa6';
import logoIcon from '/logo-icon.png';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <header className='bg-darker text-white py-6 flex items-center mb-12'>
      <section className='wrapper flex items-center justify-between'>
        <div>
          <NavLink to='/' onClick={closeMobileNav}>
            <h1 className='flex items-center gap-3'>
              <img src={logoIcon} className='h-12 w-11' alt="" />
              WebSeta
            </h1>
          </NavLink>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex items-center space-x-10'>
            <NavLink to='/' onClick={closeMobileNav}>
              <li className='flex gap-2'>
                <span>
                  <MdHomeFilled className='text-xl' />
                </span>
                <span>Home</span>
              </li>
            </NavLink>
            <NavLink to='/global-startups' onClick={closeMobileNav}>
              <li>Global Startups</li>
            </NavLink>
            <NavLink to='/bangladesh-startups' onClick={closeMobileNav}>
              <li>Bangladesh Startups</li>
            </NavLink>
            <NavLink to='/pitch-decks' onClick={closeMobileNav}>
              <li>Pitch Decks</li>
            </NavLink>
            <NavLink to='/ideas' onClick={closeMobileNav}>
              <li>Idea Sharing</li>
            </NavLink>
            <NavLink to='/case-studies' onClick={closeMobileNav}>
              <li>Case Studies</li>
            </NavLink>
          </ul>
        </nav>
        <nav className='md:hidden'>
          <div>
            {!showMobileNav ? (
              <GiHamburgerMenu
                className='text-4xl cursor-pointer'
                onClick={() => setShowMobileNav(true)}
              />
            ) : (
              <FaXmark
                className='text-4xl cursor-pointer'
                onClick={() => setShowMobileNav(false)}
              />
            )}
          </div>
          {showMobileNav && (
            <div className='bg-darker text-white absolute top-24 right-0 left-0 z-10'>
              <ul className='flex flex-col items-center py-4 space-y-4'>
                <NavLink to='/' onClick={closeMobileNav}>
                  <li>Home</li>
                </NavLink>
                <NavLink to='/global-startups' onClick={closeMobileNav}>
                  <li>Global Startups</li>
                </NavLink>
                <NavLink to='/bangladesh-startups' onClick={closeMobileNav}>
                  <li>Bangladesh Startups</li>
                </NavLink>
                <NavLink to='/pitch-decks' onClick={closeMobileNav}>
                  <li>Pitch Decks</li>
                </NavLink>
                <NavLink to='/ideas' onClick={closeMobileNav}>
                  <li>Idea Sharing</li>
                </NavLink>
                <NavLink to='/case-studies' onClick={closeMobileNav}>
                  <li>Case Studies</li>
                </NavLink>
              </ul>
            </div>
          )}
        </nav>
      </section>
    </header>
  );
};

export default Header;
