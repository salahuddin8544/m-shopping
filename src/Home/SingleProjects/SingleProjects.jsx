import React from 'react';
import { FaCircle, FaGithub, FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProjects = ({project}) => {
    const {title, description,img,live,client,server} = project;
    return (
        <div className=''>
            <img className='h-56 w-full' src={img} alt="" />
            <div className='p-4 bg-white text-black'>
                <h3 className='text-2xl py-2'>{title}</h3>
                <p className='text-sm text-grey'>{description}</p>
                <div className='flex gap-2 md:gap-4'>
                    <Link className='flex items-center' to={live} target='_blank'>
                        <FaCircle></FaCircle>
                        <p className='ms-1'>LIVE</p>
                    </Link>
                    <Link className='flex items-center' to={client} target='_blank'>
                    <FaGithub></FaGithub>
                        <p className='ms-1'>C-CODE</p>
                    </Link>
                    <Link className='flex items-center' to={server} target='_blank'>
                    <FaGithub></FaGithub>
                        <p className='ms-1'>S-CODE</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProjects;