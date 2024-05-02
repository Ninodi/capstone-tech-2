import React from 'react'
import { useParams } from 'react-router-dom'

function AdminBestSellersDetails() {
    const {bestSeller} = useParams()
  return (
    <div className='admin-items-container'>{bestSeller}</div>
  )
}

export default AdminBestSellersDetails