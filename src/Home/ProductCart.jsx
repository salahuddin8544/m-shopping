import React from 'react';
import { PRODUCT_CONTEXT, USE_CONTEXT } from '../Context/ProductProvider';
import { ACTION_TYPE } from '../State/ActionType/ActionType';
import { Link } from 'react-router-dom';


const ProductCart = ({product}) => {
    const {user,dispatch} = USE_CONTEXT(PRODUCT_CONTEXT)
    console.log(product);
    
    return (
        <div className=''>
            <img className='rounded-lg' src={product.photo} alt="" />
            <div className=''>
                <h2 className='text-start text-gray-700 text-xl my-2'>{product.name}</h2>
            </div>
            <div className='flex justify-between my-4'>
                <span className='text-xl font-bold text-slate-950'>BDT: {product.price}</span>
                <Link to={'/'}><button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={()=>dispatch({type:ACTION_TYPE.ADD_TO_CARD,payload:product})}>Add to Cart</button></Link>
            </div>
        </div>
    );
};

export default ProductCart;