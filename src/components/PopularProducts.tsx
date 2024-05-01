import React from 'react'
import ProductBox from './ProductBox'

function PopularProducts() {
  const popularProds = new Array(3).fill(null).map((each, index) => index+1)
  return (
    <div className='popular-items-container'>
        <div className="popular-title-container">
          <div className="popular-title">
            <h2>პოპულარული პოდუქტები</h2>
          </div>
        </div>
        <div className='content-container'>
          <div className="popular-items">
            {popularProds.map((each, index) => (
              <ProductBox key={index} link='racxa' content={each}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default PopularProducts