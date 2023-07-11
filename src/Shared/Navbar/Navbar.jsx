import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { HiLogin, HiMenu, HiOutlineX, HiShoppingCart } from "react-icons/hi";
import { FaSignOutAlt, FaSignInAlt, FaHome, FaRProject, FaBloggerB, FaCloudDownloadAlt, FaQuestionCircle, FaUserFriends } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='p-5 shadow-lg border-b-4 border-b-yellow md:flex md:items-center md:justify-between sticky top-0 z-10 bg-white'> 
      <div className='flex justify-between items-center'>
        <Link to='/' className='text-4xl text-gray-400 font-[poppins] cursor-pointer'>
          <h3 className='text-grey'><span className='text-yellow'>S</span>ALAH <span className='text-yellow'>U</span>DDIN</h3>
        </Link>
        <div onClick={() => setOpen(!open)} name="menu" className='md:hidden  text-black text-3xl cursor-pointer '>
          {
            open ? <HiOutlineX></HiOutlineX>
              :
              <HiMenu></HiMenu>
          }

        </div>

      </div>
      <ul id='list-item' className={`md:flex bg-white w-full absolute left-0 items-center transition-all top-20 ease-in md:static md:w-auto duration-500 ${open ? 'top-20' : 'top-[-490px]'}`}>

        <li className='mx-4  my-6 md:my-0'>
          <Link to={'/'} className='text-grey flex items-center hover:text-gray'>
          <FaHome className='me-1'></FaHome>
            Home
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/projects'} className='text-grey flex items-center hover:text-gray'>
          <FaRProject className='me-1'></FaRProject>
            Projects
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/blog'} className='text-grey flex items-center hover:text-gray'>
          <FaBloggerB className='me-1'></FaBloggerB>
            Blog
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/resume'} className='text-grey flex items-center hover:text-gray'>
           
          <FaCloudDownloadAlt className='me-1'></FaCloudDownloadAlt> Resume
          </Link>
        </li>
        
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/upcoming'} className='text-grey flex items-center hover:text-gray'>
            <FaQuestionCircle className='me-1'></FaQuestionCircle>
            Upcoming
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/about'} className='text-grey flex items-center hover:text-gray'>
            <FaUserFriends className='me-1'></FaUserFriends>
            About
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;