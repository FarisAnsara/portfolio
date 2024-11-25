import React from 'react'

const BodyText = ({bodyText, className}) => {
  return (
    <div className={`text-base ${className}`}>
        {bodyText}
    </div>
  )
}

export default BodyText