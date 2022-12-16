import React from 'react'

const BackCard = ({formCard}) => {
  return (
    <div className='card backCard'>
        <span>{formCard.cvc}</span>
    </div>
  )
}

export default BackCard