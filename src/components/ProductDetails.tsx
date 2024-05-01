import React, { useState } from 'react'
import Arrow from '../assets/icons/arrow.png'

function ProductDetails({prodName} : {prodName: string}) {
    const [toggleDescr, setToggleDescr] = useState<boolean>(true)
  return (
    <div className='prod-details-container'>
        <h1>{prodName}</h1>
        <div className="availability-status">
            ხელმისაწვდომია
        </div>
        <div className="prod-price">00 ₾</div>
        <div className={`detailed-descr ${!toggleDescr ? 'toggled' : ''}`}>
            <div className={`detailed-descr-btn ${!toggleDescr ? 'toggled' : ''}`}onClick={() => setToggleDescr(prev => !prev)}>
                დეტალური არწერა
                <img src={Arrow} alt="" />
            </div>
            <div className="prod-descr">
                ცხარე წიწაკის ჯიში, რომელიც 2013 წელს გინესის
    რეკორდების წიგნში შეიტანეს,როგორც ყველაზე ცხარე წიწაკა მსოფლიოში;
                ცხარე წიწაკის ჯიში, რომელიც 2013 წელს გინესის
    რეკორდების წიგნში შეიტანეს,როგორც ყველაზე ცხარე წიწაკა მსოფლიოში;
                ცხარე წიწაკის ჯიში, რომელიც 2013 წელს გინესის
    რეკორდების წიგნში შეიტანეს,როგორც ყველაზე ცხარე წიწაკა მსოფლიოში;
                ცხარე წიწაკის ჯიში, რომელიც 2013 წელს გინესის
    რეკორდების წიგნში შეიტანეს,როგორც ყველაზე ცხარე წიწაკა მსოფლიოში;
                ცხარე წიწაკის ჯიში, რომელიც 2013 წელს გინესის
    რეკორდების წიგნში შეიტანეს,როგორც ყველაზე ცხარე წიწაკა მსოფლიოში;
                ცხარე წიწაკის ჯიში, რომელიც 2013 წელს გინესის
    რეკორდების წიგნში შეიტანეს,როგორც ყველაზე ცხარე წიწაკა მსოფლიოში;
                ცხარე წიწაკის ჯიში, რომელიც 2013 წელს გინესის
    რეკორდების წიგნში შეიტანეს,როგორც ყველაზე ცხარე წიწაკა მსოფლიოში;
            </div>
        </div>
        <div className="contact-for-details">
            <a href="/">შესაძენად დაგვიკავშირდით</a>
        </div>
    </div>
  )
}

export default ProductDetails