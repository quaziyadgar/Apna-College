import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
        <div className='col-6'>
            <h2>{props.product.name}</h2>
            <span className='col-4'>{props.product.price}</span>
        </div>
    </div>
  )
}
