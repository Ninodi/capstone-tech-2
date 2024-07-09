import React, { useState } from 'react'
import Arrow from '../assets/icons/arrow.png'
import { useTranslation } from 'react-i18next'
import Light from '../assets/icons/light.png'
import { NavLink } from 'react-router-dom'


function ProductDetails({prodName, prodPrice, prodDescr, isAvailable} : {prodName: string, prodPrice: string, prodDescr: string, isAvailable: boolean}) {
    const [toggleDescr, setToggleDescr] = useState<boolean>(true)
    const {i18n} = useTranslation()
    const separateTextsByEnter = (text: string) => {
        const textsArray = text.split('\n');
        return textsArray
    }

    const dividedDescr = separateTextsByEnter(prodDescr)
    
  return (
    <div className='prod-details-container'>
        <h1>{prodName}</h1>
        <div className="availability-status" style={{color: `${isAvailable ? '#578C40' : '#C61915'}`}}>
            {isAvailable ? `${i18n.language === 'en' ? 'Available' : 'ხელმისაწვდომია'}` : `${i18n.language === 'en' ? 'Temporarily Unavailable': 'დროებით არ არის  ხელმისაწვდომი'}`}
        </div>
        <div className="prod-price">{prodPrice} {i18n.language === 'en' ? ' GEL' : ' ₾'}</div>
        <div className={`detailed-descr ${!toggleDescr ? 'toggled' : ''}`}>
            <div className={`detailed-descr-btn ${!toggleDescr ? 'toggled' : ''}`}onClick={() => setToggleDescr(prev => !prev)}>
                {i18n.language === 'en' ? 'Detailed desription' : 'დეტალური არწერა'}
                <img src={Arrow} alt="" />
            </div>
            <div className="prod-descr">
                {dividedDescr.map((each, index) => (
                    <div key={index} className="parahraph-container">
                        <img src={Light} alt="" />
                        <p>{each}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="contact-for-details">
            <NavLink to={'/contact'}>{i18n.language === 'en' ? 'Interested? Contact Us' : 'შესაძენად დაგვიკავშირდით'}</NavLink>
        </div>
    </div>
  )
}

export default ProductDetails