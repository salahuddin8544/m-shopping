import React, { useState } from 'react';
import { Link ,Outlet} from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
const Dashboard = () => {
    const [open,setOpen] = useState(true)
    const [fixed,setFixed] = useState(true)
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex'>
            <div
            onMouseOver={()=> setOpen(!open)}
            className={`${open ? "w-72": "w-20"} duration-300 h-screen bg-slate-700 relative ${fixed ? "w-7": 'w-72'}`}>
                <img className={`abosulute cursor-pointer roudnded-full right-3 top-9 w-7 border-2 ${!fixed && 'rotate-180'}`} src="../../src/assets/img/contorl.png" alt="" 
                onClick={()=>setFixed(!fixed)}/>
                <div>
                    
                   <ul>
                    <li>
                        <Link to={'dahsboard/alusers'}>All Users</Link>
                    </li>
                    <li>
                        <Link to={'dashboard/allproducts'}>All Products</Link>
                    </li>
                   </ul>
                </div>
            </div>
            <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
               <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;