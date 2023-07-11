import React from 'react';
import background from '../../assets/knowledge/background.avif'
import img1 from '../../assets/projects/hotel-ashrafee.png'
import img2 from '../../assets/projects/doctors-portal.png'
import img3 from '../../assets/projects/assignment12-79962.web.app_.png'
import SingleProjects from '../SingleProjects/SingleProjects';
import { Link } from 'react-router-dom';
const Projects = () => {
    const projects = [
      
        {
            img:img1,
            title:'hotel-ashrafee',
            description:'Hotel ashrafe provide hotel booking services, You can choose 4 categories room. after booked a room will be open your dashboard. here is a list of your booking details. and get the pay button po pay and confirm your booking',
            live:'https://64a013ee04804b264a0f85e7--remarkable-churros-aec2d4.netlify.app/',
            client:'https://github.com/salahuddin8544/hotel-ashrafee-client',
            server:'https://github.com/salahuddin8544/hotel-ashrafee-server'
        },
        {
            img:img2,
            title:'Doctors Portal',
            description:" User (Add Appointment by Date and Dashboard- Manage Appointment and Appointment Status) Master Admin Panel (Manage all Appointment Details, Add Doctors, Manage Doctors and without login user can't access anything",
            live:'https://doctors-portal-60dbf.web.app/',
            client:'https://github.com/salahuddin8544/doctors-portal-client',
            server:'https://github.com/salahuddin8544/doctors-portal-server'
        },
        {
            img:img3,
            title:'Computer Home',
            description:"It's a e-commerce project, user can buy and report any product. 3 Types Users, these are  admin,buyer, and seller Admin delete any seller , buyer, make admin and verify. Seller add Product and delete Product from Dashboard that added.",
            live:'https://assignment12-79962.web.app/',
            client:'https://github.com/salahuddin8544/Assignment12_clint',
            server:'https://github.com/salahuddin8544/Assignment12_server'
        },     
    ]
    return (
        <div style={{background:`url(${background})`
        
        }} className='w-full border-t-4 border-b-4 border-b-blue border-t-yellow'>
            <div className='w-5/6 mx-auto py-20 text-white'>
            <h2 className='text-5xl'>Projects</h2>
            <p className='text-lg font-medium my-2'>Watch my projects I have done own</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                projects.map((project, i)=>
                    <SingleProjects
                    key={i}
                    project={project}
                    ></SingleProjects>)
            }
            </div>
            </div>
         <div className='w-3/5 mx-auto text-center'>
               <Link className='' to={'/projects'}>
                    <button className='btn btn-sm mx-auto mb-4 mdmy-6 bg-blue text-white'>See More</button>
            </Link>
         </div>
        </div>
    );
};

export default Projects;