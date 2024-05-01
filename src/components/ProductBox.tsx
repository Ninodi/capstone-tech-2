import React from 'react'
import Peper from '../assets/img/peper.png'
import { NavLink } from 'react-router-dom'

function ProductBox({id, link, content} : {id?: number, link: string, content: number}) {
  return (
    <NavLink to={`/catalogue/pepper/${link}`} className='product-box'>
        <div className="product-img">
            <img src={Peper} alt="" />
        </div>
        <div className="product-info">
            <p className='product-descr'>დეკორატიული წიწაკა</p>
            <p className='product-name'>კაროლინა რიპერი</p>
            {/* <p>{id}</p> */}
            <p className='product-price'>10 ₾</p>
            <p>{content}</p>
        </div>
    </NavLink>
  )
}

export default ProductBox