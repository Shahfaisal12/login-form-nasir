import React from 'react'
// import Header from './Header'
// import Footer from './Footer'

const Base = (props) => {
  return (
    <div className='d-flex justify-content-between flex-column' style={{ minHeight: '100vh' }}>

      {props.children}
      
    </div>
  )
}

export default Base
