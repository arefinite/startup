import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'

const GoBack = ({ destination = '/' }) => {
  return (
    <Link to={destination}>
      <button className='bg-dark px-3 py-1 rounded text-sm mb-10 text-white flex items-center space-x-1 cursor-pointer'>
        <IoIosArrowDropleftCircle />
        <span>Go Back</span>
      </button>
    </Link>
  )
}
export default GoBack
