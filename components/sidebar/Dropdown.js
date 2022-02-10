import React, { Fragment, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
const Dropdown = (props) => {
  const [hidden, setHidden] = useState(true)
  const [title, setTitle] = useState(props.title)

  const handleSelect = (e) => {
    props.select((old) => {
      const temp = old.slice()
      if (temp[props.index] === e.target.innerText) {

        temp[props.index] = null
        setTitle(props.title)
      }
      else {
        temp[props.index] = e.target.innerText
        setTitle(e.target.innerText)
      }
      return temp;
    })
  }


  return (
    <div onBlurCapture={() => setHidden(true)}
      className='w-full '
    >
      <button
        onClick={() => setHidden(!hidden)}
        className='  bg-gray-800 w-full p-2 
      rounded flex justify-between items-center mb-2'>
        <span>{title}</span>
        <AiFillCaretDown /></button>

      {/* content */}
      <div id="dropdown"
        className={(hidden ? 'hidden' : 'block') + " w-60 shadow-sm shadow-gray-700"
        }>
        <ul className=" py-1  absolute z-50 
        overflow-y-scroll overflow-x-hidden max-h-60   
        scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-700
        text-base list-none bg-slate-700 rounded " >
          {props.options.map(op =>
          (<li key={op}>
            <span onMouseDown={handleSelect} className="block  py-2 px-2 text-sm text-gray-200 hover:bg-gray-900 ">{op}</span>
          </li>
          )
          )}

        </ul>
      </div>
    </div>
  )
}

export default Dropdown