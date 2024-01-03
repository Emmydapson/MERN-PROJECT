import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-blue-500 text-white shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-lg sm:text-xl flex flex-wrap'>
              <span className='text-yellow-300'>Dapson</span>
              <span className='text-yellow-100'>Estate</span>
            </h1>
          </Link>
            <form className='bg-white p-2 rounded-lg flex items-center'>
                <input type="text" 
                placeholder='Search...' 
                className='bg-transparent focus:outline-none w-24 sm:w-64 text-gray-800'/>
                <FaSearch className='text-gray-600' />
            </form>
            <ul className='flex gap-4'>
              <Link to='/'>
              <li className='hidden sm:inline  hover:text-yellow-300'>Home</li>
              </Link>
              <Link to='/about'>
              <li className='hidden sm:inline hover:text-yellow-300'>About</li>
              </Link>
              <Link to='/sign-in'>
              <li className='hover:text-yellow-300'>Sign in</li> 
              </Link>             
            </ul>
        </div>
        
    </header>
  )
}
