import React from 'react'

const Nav = (props) => {
  return (
    <div className='md:text-xl mb-4 mx-2 font-semibold px-2'>
      HOME {" > "} SHOP{" > "} <span className="capitalize">{props.category}</span> {" > "} <span className="text-blue-500">{props.title}</span>
    </div>
  )
}

export default Nav