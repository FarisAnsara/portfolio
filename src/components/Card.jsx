import React from 'react'

const Card = ({ children , onHover}) => {
  return (
    <div className= {`max-w-sm p-6 bg-gray-800 hover:bg-gray-600 border border-gray-50 rounded-lg shadow ${onHover}`}>
        {children}
    </div>
  )
}

export default Card