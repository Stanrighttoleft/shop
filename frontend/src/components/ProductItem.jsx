import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const{currency}=useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className="">
            <img className='minw-5xl h-40 flex justify-center object-contain hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            <p className="pt-1 pb-0 text-sm justify-start flex">{name}</p>
        <p className="text-sm font-medium justify-start flex">{currency}{price}</p>
        </div>
        

    </Link>
  )
}

export default ProductItem