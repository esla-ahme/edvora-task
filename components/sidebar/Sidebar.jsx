import React from 'react'
import Dropdown from './Dropdown'

const Sidebar = (props) => {
  return (
    <div className='sm:w-1/4  w-full  pt-4'>
      <div className='filters  bg-gray-900 m-4 mt-0 p-4 rounded-xl'>
        <h4 className='text-gray-500 border-b-2 border-gray-500 mb-4 '>Filters</h4>
        {
          props.children
        }

      </div>
    </div>
  )
}

export default Sidebar

