import React from 'react'
import { IProduct } from '../interfaces'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

function PopularProductBox({id, geoName, enName, enDescr, geoDescr, images, price, enCategory, geoCategory, isAvailable } : IProduct) {
    const {i18n} = useTranslation()
      
  return (
    <div className='popular-item'>

                <div className="info-upper">
                    <div className='popular-img'>
                        <img src={images[0]} alt="" />
                    </div>
                    <p>{price} {i18n.language === 'en' ? ' GEL' : ' ₾'}</p>
                </div>
                <div className="info-lower">
                    <p>{i18n.language === 'en' ? enName : geoName}</p>
                    <p>{i18n.language === 'en' ? enDescr : geoDescr}</p>
                    <div className='info-extras'>
                        <NavLink to={`/catalogue/pepper/${id}`}>{i18n.language === 'en' ? 'See more' : 'მეტის ნახვა'}</NavLink>
                        <p>{price} {i18n.language === 'en' ? ' GEL' : ' ₾'}</p>
                    </div>
                </div>
    </div>
  )
}

export default PopularProductBox