import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const {product} = useParams()
  return (
    <div>ProductPage {product}</div>
  )
}

export default ProductPage