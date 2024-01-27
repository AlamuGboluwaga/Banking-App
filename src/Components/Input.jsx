import React from 'react'

const Input = (onChange) => {
  return (
    <div>
      <input type="text" className='border rounded outline-none focus:border-red-300' onChange={onChange}  />
    </div>
  )
}

export default Input
