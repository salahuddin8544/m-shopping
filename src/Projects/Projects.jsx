import React from 'react';
import background from '../assets/knowledge/background.avif'
import img1 from '../assets/projects/hotel-ashrafee.png'
import img2 from '../assets/projects/doctors-portal.png'
import img3 from '../assets/projects/assignment12-79962.web.app_.png'
import img4 from '../assets/projects/assignment11-c7c7d.web.app_.png'
import img5 from '../assets/projects/diploma-engineering.web.app_.png'
import img6 from '../assets/projects/quezee.png'
import { Link } from 'react-router-dom';
import SingleProjects from '../Home/SingleProjects/SingleProjects';

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
        {
            img:img4,
            title:'SU Photography',
            description:"Photography e-commerce project, Here kind of Pictures Swimming, Football, and Hockey After Clicked Details, You can see All of details about any photo, Price and Rate. You can add Review about any Photo After added review, You can see in Dashboard What is review Added Our team, They work hard to pick up Photo User Secure Login and Signup System",
            live:'https://assignment11-c7c7d.web.app/',
            client:'https://github.com/salahuddin8544/Assignment11_clint',
            server:'https://github.com/salahuddin8544/Assighment11_server'
        },
        {
            img:img5,
            title:'Diploma in Engineering',
            description:"this is a educational site.here added many types of education section of Diploma in Engineering You can know about Computer, Civil, Electrical, and Architectur Engineering When clicked any category link you can see category Details. After clicked Read more, It's open details about any Section, and checkout, and download pdf.",
            live:'https://diploma-engineering.web.app//',
            client:'https://github.com/salahuddin8544/Asssignment10_clint',
            server:'https://github.com/salahuddin8544/Assigenment10_server'
        },
        {
            img:img6,
            title:'Quezee',
            description:"Quezee is a educational site. here you can learn more html,css,javascript,react and github. when you click on start quiz you wil find many options about the every section. when you click on a item if it is correct you will find a modal your are correct and if it is not correct you will find a modal that is incorrect and if click to icon of eye you will find a correct answer",
            live:'https://profound-griffin-b768b6.netlify.app/',
            client:'https://github.com/salahuddin8544/Assignment09',
            server:'https://github.com/salahuddin8544/Assigenment10_server'
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
</div>
    );
};

export default Projects;