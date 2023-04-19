import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { PRODUCT_CONTEXT, USE_CONTEXT } from '../../Context/ProductProvider';
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const {user,logOut}= USE_CONTEXT(PRODUCT_CONTEXT);
  const [open,setOpen] = useState(false)

console.log('this is admin',"this is user", user);
  const signOut=()=>{
    logOut()
    .then(()=>{
    })
    .catch(err=>console.log(err))

  }
    //navbar action here
     


//   const Menu = ()=>{
//   const ul = document.getElementById('list-item');
//   ul.style.display='block';
  
// }
    return (
      <nav className='p-5 shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
      <span className='text-4xl text-cyan-400 font-[poppins] cursor-pointer'>
         <h3>Salah Uddin</h3>
         
       </span>
       <div onClick={()=> setOpen(!open)} name="menu" className='md:hidden  text-black text-3xl cursor-pointer '>
      {
        open?  <HiOutlineX></HiOutlineX> 
        :
        <HiMenu></HiMenu>
      }
     
       
       </div>
      
      </div>
      <ul id='list-item' className={`md:flex bg-white w-full absolute left-0 items-center transition-all top-20 ease-in md:static md:w-auto duration-500 ${open? 'top-20': 'top-[-490px]'}`}>
       <li className='mx-4 my-6 md:my-0'>
            <Link to={'/allproducts'} className='text-xl text-cyan-400 hover:text-cyan-600 duration-500'>My Card</Link>
 
           
       </li>
       <li className='mx-4 my-6 md:my-0'>
            <Link to={'/dahsboard'} className='text- text-cyan-400 hover:text-cyan-600 duration-500'>Dashboard</Link>
       </li>
       <li className='mx-4 my-6 md:my-0'>
        {

          user?.uid? <>
           <Link to={''} className='text- text-cyan-400 hover:text-cyan-600 duration-500'>
           <button onClick={signOut} className='bg-cyan-400 text-white font-[poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>Sign Out</button>
           </Link>
          </>
          :
          <>
           <Link to={'/signup'} className='text- text-cyan-200 hover:text-cyan-500 duration-500'>
           <button className='bg-cyan-400 text-white font-[poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>Sign up</button>
           </Link>
          </>
        }
          
       
       </li>
      
      </ul>
   </nav>
        
    );
};

export default Navbar;