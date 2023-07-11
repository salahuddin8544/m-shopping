import React from 'react';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

const SingleKnowledge = ({knowledge}) => {
    const {img,title,description1,description2,description3,update }= knowledge

    return (
        <div className='bg-white grid grid-cols-12'>
            <img className='w-full md:w-20 col-span-12 md:col-span-4' src={img} alt="" />
            <div className='col-span-12 md:col-span-8 bg-white text-black ms-2'>
                <h3 className='text-2xl my-4'>{title}</h3>
                    <div>
                        <p className='flex items-center text-gray text-lg'><FaCheckCircle className='mr-2'></FaCheckCircle>{description1}</p>
                    </div>
                    <div className='my-4'>
                        <p className='flex items-center text-gray text-lg'><FaCheckCircle className='mr-2'></FaCheckCircle>{description2}</p>
                    </div>
                    <div>
                        <p className='flex items-center text-gray text-lg'><FaCheckCircle className='mr-2'></FaCheckCircle>{description3}</p>
                    </div>
                    <div className='flex items-center gap-2 my-4 text-lg'>
                        <FaCircle></FaCircle>
                        <FaCircle></FaCircle>
                        <FaCircle></FaCircle>
                        <FaCircle></FaCircle>
                    </div>
                    <p className='flex items-center text-sm'>{update}</p>
                </div>
            </div>
    );
};

export default SingleKnowledge;