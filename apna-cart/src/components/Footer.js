import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
        <button className='btn btn-danger col-2' onClick={()=>props.resetProduct()}>Reset</button>
        <div className='col-8 bg-dark text-white text-center'>
            Total : ₹ {props.totalAmount}
        </div>
        <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  )
}
