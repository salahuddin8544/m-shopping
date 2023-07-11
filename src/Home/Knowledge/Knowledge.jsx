import React from 'react';
import SingleKnowledge from '../SingleKnowledge/SingleKnowledge';
import img1 from '../../assets/knowledge/js.png'
import img2 from '../../assets/knowledge/react.png'
import img3 from '../../assets/knowledge/node.png'
import img4 from '../../assets/knowledge/mongo.png'
import img6 from '../../assets/knowledge/mern.webp'
const Knowledge = () => {
    const knowledges = [
      
        {
            img:img1,
            title:'JAVASCRIPT',
            description1:'Can solve problems',
            description2:'Good at DOM',
            description3:'Know Core Functions',
            update:'Last updated 3 mins ago',
        },
        {
            img:img2,
            title:'REACT',
            description1:'Core things and components',
            description2:'Good at Redux',
            description3:'NPM GIT JSX and More',
            update:'Last updated 3 mins ago',
        },
        {
            img:img3,
            title:'NODE JS',
            description1:'Package Management',
            description2:'Databases and Node JS NPM',
            description3:'Source & Security',
            update:'Last updated 3 mins ago',
        },
        {
            img:img4,
            title:'MongoDB',
            description1:'MongoDb Essential',
            description2:'Performance',
            description3:'Data Security',
            update:'Last updated 3 mins ago',
        },
        {
            img:'https://vladmrnv.gallerycdn.vsassets.io/extensions/vladmrnv/expresssnippet/0.2.4/1528939685286/Microsoft.VisualStudio.Services.Icons.Default',
            title:'EXPRESS JS',
            description1:'Done Concept',
            description2:'Good at Express',
            description3:'Good at Express',
            update:'Last updated 3 mins ago',
        },
        {
            img:img6,
            title:'MERN STACK',
            description1:'Whole things',
            description2:'Best in MERN',
            description3:'Projects',
            update:'Last updated 3 mins ago',
        },
        
    ]
    return (
        <div className='bg-yellow  w-full border-t-4 border-b-4 border-b-black border-t-yellow'>
        <div className='w-5/6 mx-auto py-20 text-white'>
        <h2 className='text-4xl mb-6'>KNOWLEDGE</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            knowledges.map((knowledge, i)=>
                <SingleKnowledge
                key={i}
                knowledge ={knowledge}
                ></SingleKnowledge>)
        }
        </div>
        </div>
        </div>
    );
};

export default Knowledge;