import React from 'react'
import { useParams } from 'react-router-dom'

function CataloguePage() {
    const {type} = useParams()
  return (
    <div>CataloguePage {type}</div>
  )
}

export default CataloguePage