import { NavLink } from "react-router-dom"

const SideNavBDStartups = () => {
   
  return (
    <aside className='w-fit h-fit shadow p-4'>
          <h2>Navigation</h2>
          <ul className='mt-4 space-y-2'>

            <li>
              <NavLink to='/bangladesh-startups/leading-startups'>
                35+ Leading BD Startup 2023
              </NavLink>
            </li>
            <li>
              <NavLink to='/bangladesh-startups/big'>
                Bangabandhu innovation grant (BIG 2021)
              </NavLink>
            </li>
            <li>
              <NavLink to='/bangladesh-startups/vc-info'>50 BD Startup Investors</NavLink>
            </li>
          </ul>
        </aside>
  )
}
export default SideNavBDStartups