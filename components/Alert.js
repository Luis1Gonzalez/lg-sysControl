import React from 'react'

export default function Alert({ msg }) {
  return (
    <div className='from-red-400 to-red-600 bg-gradient-to-br text-center p-3 rounded-xl text-white font-bold text-sm my-10'>
        {msg}
    </div>
  )
}
