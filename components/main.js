import React from 'react'
import ProductsList from './products/ProductsList'

const Main = (props) => {
  return (
    <div className='sm:w-3/4 p-4 w-full flex-col justify-center items-center'>
      <h1 className='text-5xl mb-4 text-center sm:text-left'>Edvora</h1>
      <h3 className='text-2xl mb-2 text-gray-200 text-center sm:text-left'>Products</h3>
      {props.children}
    </div>
  )
}

export default Main