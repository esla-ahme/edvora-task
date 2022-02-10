import React from 'react'
import ProductsList from './products/ProductsList'

const Main = (props) => {
  return (
    <div className='w-3/4 p-4 '>
      <h1 className='text-5xl mb-4'>Edvora</h1>
      <h3 className='text-2xl mb-2 text-gray-200'>Products</h3>
      {props.children}
    </div>
  )
}

export default Main