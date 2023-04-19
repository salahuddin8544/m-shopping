import React from 'react';
import { PRODUCT_CONTEXT, USE_CONTEXT } from '../Context/ProductProvider';
import { ACTION_TYPE } from '../State/ActionType/ActionType';
import { Link } from 'react-router-dom';

const ProductCart = ({product}) => {
    const {user} = USE_CONTEXT(PRODUCT_CONTEXT)
    console.log(product);
    return (
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto my-5'>
            <img src={product.photo} alt="" />
            <div className='card-heading'>
                <h2 className='text-3xl m-0'>{product.name}</h2>
            </div>
            <div className='flex justify-between my-4'>
                <button className='btn bg-cyan-500'>Price: {product.price}</button>
                <Link to={'/'}><button className='btn bg-cyan-700 text-white' onClick={()=>dispatch({type:ACTION_TYPE.ADD_TO_CARD,payload:product})}>Add to Cart</button></Link>
            </div>
        </div>
    );
};

export default ProductCart;