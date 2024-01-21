import { NavLink } from 'react-router-dom'
import logo from '/logo.png'
import ict from '/ict.png'

const Footer = () => {
  return (
    <footer className='text-white mt-12 pt-10 pb-4 bg-darker'>
      <div className='wrapper '>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          <div>
            <div>
              <img src={logo} className='h-32' alt='logo' />
              <p className='text-sm leading-6'>
                Research and Development center. Here, we collect information of
                the tech startups all over the world, make competitive analysis,
                and conduct various market researches on demand. Moreover, we
                assist new startups by providing viable ideas.
              </p>
            </div>
          </div>
          <nav className='md:justify-self-end mt-8 md:mt-0'>
            <ul className='flex flex-col gap-2'>
              <li className='font-bold'>Quick Links:</li>
             
              <NavLink to='/global-startups'>
                <li className='font-thin'>Global Startup</li>
              </NavLink>
              <NavLink to='/bangladesh-startups'>
                <li className='font-thin'>Bangladesh Startup</li>
              </NavLink>
              <NavLink to='/pitch-decks'>
                <li className='font-thin'>Pitch Decks</li>
              </NavLink>
              <NavLink to='/ideas'>
                <li className='font-thin'>Idea Sharing</li>
              </NavLink>
              <NavLink to='/case-studies'>
                <li className='font-thin'>Case Studies</li>
              </NavLink>
            </ul>
          </nav>

          <nav className='md:justify-self-end mt-8 md:mt-0'>
            <ul className='flex flex-col gap-2'>
              <li className='font-bold'>External Links:</li>
              
              <li className='font-thin'>
                <a href='https://www.startupbangladesh.vc/' target='_blank' rel='noreferrer'>Startup Bangladesh</a>
                </li>
             
                <li className='font-thin'><a href='https://idea.gov.bd/' target='_blank' rel='noreferrer'>Idea Project</a></li>
          
              <NavLink to='/'>
                <li className='font-thin'><a href='https://ictd.gov.bd/'>ICTD</a></li>
              </NavLink>
              <NavLink to='/'>
                <li className='font-thin'><a href='http://ims.ictd.gov.bd/'>ICT Innovation</a></li>
              </NavLink>
            </ul>
          </nav>
          <nav className='md:justify-self-end mt-8 md:mt-0'>
            <nav className='place-self-end'>
              <ul className='flex flex-col gap-2'>
                <li className='font-bold'>Privacy & Terms:</li>
                <NavLink to='/privacy'>
                  <li className='font-thin'>Privacy & Policy</li>
                </NavLink>
                <NavLink to='/terms'>
                  <li className='font-thin'>Terms & Conditions</li>
                </NavLink>
              
              </ul>
            </nav>
          </nav>
        </div>
        <div className='flex text-right text-sm text-gray-400  justify-end'>
          <div className='flex flex-col items-end space-y-4  justify-end'>
            <div>
              <strong className='text-white'> Funded By,</strong>
              <img src={ict} className='h-16 w-28' alt='ict-logo' />
            </div>
            <div>
              <p>&copy; {new Date().getFullYear()} by WebSeta</p>
              <p>Design and Developed by iSovix Technology</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
