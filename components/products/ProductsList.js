import React from 'react'
import Product from './Product'

const ProductsList = ({ productName, products }) => {
  return (
    <div className='w-full mb-8  '>
      <h1 className='text-xl border-b-2 border-gray-500 mb-4'>{productName}</h1>
      <div className='  rounded-lg  h-fit   px-4  bg-gray-900'>
        <div className='flex gap-4    pb-6 pt-4 overflow-x-scroll overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-700'>
          {products.map((p, i) => <Product key={productName + i} productName={p.product_name} brandName={p.brand_name}
            price={p.price} address={p.address} discription={p.discription}
            image={p.image} date={p.date}
          />)}
        </div>
      </div>
    </div>
  )
}

export default ProductsList