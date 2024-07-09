import React from 'react'
import FB from '../assets/icons/fb.png'
import IG from '../assets/icons/ig.png'
import Whatsapp from '../assets/icons/whatssapp.png'
import Phone from '../assets/icons/phone.png'
import Email from '../assets/icons/email.png'
import Location from '../assets/icons/location.png'
import { useTranslation } from 'react-i18next'

function Footer() {
    const {i18n} = useTranslation()
  return (
    <footer>
        <div className="footer-container content-container">
            <div className="footer-left">
                <div className="contact-item">
                    <div className="icon-container">
                        <img src={Phone} alt="" />
                    </div>
                    <a href="tel:+995577093525">+995 577 09 35 25</a>
                </div>
                <div className="contact-item">
                    <div className="icon-container">
                        <img src={Email} alt="" />
                    </div>
                    <a href="mailto: ttsitsako@gmail.com">ttsitsako@gmail.com</a>
                </div>
                <div className="contact-item">
                    <div className="icon-container">
                        <img src={Location} alt="" />
                    </div>
                    <p>{i18n.language === 'en' ? 'Anton tsopurashvili N1, Norio' : 'ანტონ წოფურაშვილის ქ. 1, ნორიო'}</p>
                </div>
            </div>
            <div className="footer-right">
                <a href="https://www.facebook.com/profile.php?id=100093285667212" className="soc-img">
                    <img src={FB} alt="" />
                </a>
                <a href="https://www.instagram.com/tsitsako" className="soc-img">
                    <img src={IG} alt="" />
                </a>
                <a href="https://www.tiktok.com/@tsitsako" className="soc-img">
                    <img src={Whatsapp} alt="" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer