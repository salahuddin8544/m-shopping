import React,{useState} from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineThumbUp } from "react-icons/hi";
const Slide = () => {
    const sldies = [
        {
            url: 'https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg'
        },
        {
            url: 'https://5.imimg.com/data5/AC/GM/LF/SELLER-51536152/lux-rose-shoap-500x500.jpg'
        },
        {
            url: 'https://5.imimg.com/data5/ANDROID/Default/2022/2/TL/VA/KO/11667563/product-jpeg-500x500.jpg'
        },
       
    ]
    const [currentIndex,setCurrentIndex] = useState(0)

    const prevSlide =()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sldies.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }
    const nextSlide =()=>{
        const isLastSlide = currentIndex === sldies.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex)
        
    }
    return (
        <div className='max-w-[1400px] h-[780px] relative group'>
            <div style={{backgroundImage:`url(${sldies[currentIndex].url})`}} className=' w-full h-full bg-center bg-cover duration-500'>
            </div>
          <div className='hidden group-hover:block absolute top-[50%] translate-x-0 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <HiOutlineChevronLeft onClick={prevSlide} size={30}></HiOutlineChevronLeft>
          </div >
          <div className='hidden group-hover:block absolute top-[50%] translate-x-0 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <HiOutlineChevronRight onClick={nextSlide} size={30}></HiOutlineChevronRight>
          </div>
        </div>
    );
};

export default Slide;