import Image from 'next/image'
import React from 'react'

const Product = (props) => {
  return (
    <div className='w-60 flex-shrink-0 p-3
     bg-gray-800 rounded-lg
     hover:scale-105
     flex flex-col gap-2
     text-gray-300 text-sm
     '>
      <div className='flex gap-2'>
        <img className='w-20 h-20 ' src={props.image} alt="product" />
        <div className='flex flex-col'>
          <p className='text-white text-base'>{props.productName}</p>
          <p className='text-sm'>{props.brandName}</p>
          <p className=' text-lg text-gray-500text-gray-200'>{'$' + props.price}</p>

        </div>
      </div>
      <div className='flex gap-2'>
        <div className='w-24 text-xs'> {props.address.city + ", " + props.address.state}</div>
        <div>{props.date.substring(0, 10)}</div>
      </div>
      <div className='text-gray-400 text-xs'>{props.discription}</div>

    </div>
  )
}

export default Product