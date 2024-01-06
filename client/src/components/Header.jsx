import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-black text-white shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-2xl sm:text-3xl flex items-center'>
              <span className='text-white'>Dapson</span>
              <span className='text-gray-400'>Estate</span>
            </h1>
          </Link>
            <form className='bg-white p-2 rounded-lg flex items-center ml-4'>
                <input type="text" 
                placeholder='Search...' 
                className='bg-transparent focus:outline-none w-24 sm:w-64 text-gray-800'/>
                <FaSearch className='text-gray-600 ml-2' />
            </form>
            <ul className='flex gap-4'>
              <Link to='/' className='hover:text-gray-400'>
              <li className='hidden sm:inline'>Home</li>
              </Link>
              <Link to='/about' className='hover:text-gray-400'>
              <li className='hidden sm:inline'>About</li>
              </Link>
              <Link to='/sign-in' className='hover:text-gray-400'>
              <li>Sign in</li> 
              </Link>             
            </ul>
        </div>
        
    </header>
  )
}
