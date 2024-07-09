import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import '../assets/styles/AboutUsPage.css'
import PageTitle from '../components/PageTitle'
import AboutImg from '../assets/img/aboutus.png'
import Prod6 from '../assets/img/Prod6.png'
import Prod3 from '../assets/img/Prod3.png'
import Prod1 from '../assets/img/Prod1.png'
import { useTranslation } from 'react-i18next'

function AboutUsPage() {
  const {t} = useTranslation()
  const {i18n} = useTranslation()
  return (
    <div className='full-page-container'>
      <Header />
      <Breadcrumbs secondaryUrl={'/about'} basePage={t("global.header.aboutus")} />
      <PageTitle pageTitle={t("global.header.aboutus")}link={'/'} />
      <div className="content-container">
          <div className="about-item">
            <div className="about-img">
              <img src={Prod3} alt="" />
            </div>
            <p>{i18n.language === 'en' ? 'Chitsako is an organic farm that offers beautiful ornamental vegetables to beautify your balconies.' : 'წიწაკო არის ბიო მეურნეობა, რომელიც გთავაზობთ ულამაზეს დეკორატიულ ბოსტნეულს, თქვენი აივნების გასალამაზებლად.'}</p>
          </div>
          <div className="about-item">
            <div className="about-img">
              <img src={AboutImg} alt="" />
            </div>
            <p>{i18n.language === 'en' ? 'Our plants are grown in a greenhouse, which protects them from external pollution, harmful insects and other natural phenomena and ensures exceptional taste properties.' : 'ჩვენი მცენარეები იზრდებიან სათბურში, რაც იცავს მათ გარე დაბინძურების, მავნე მწერებისა თუ სხვა ბუნებრივი მოვლენებისაგან და უზრუნველყოფს განსაკუთრებულ გემოვნურ თვისებებს.'}</p>
          </div>
          <div className="about-item">
            <div className="about-img">
              <img src={Prod6} alt="" />
            </div>
            <p>{i18n.language === 'en' ? 'Our plants are sold in appropriate pots with care instructions included.' : 'ჩვენი მცენარეების რეალიზება ხდება შესაბამის ქოთნებში, თანდართული მოვლის ინსტრუქციით. '}</p>
          </div>
          <div className="about-item">
            <div className="about-img">
              <img src={Prod1} alt="" />
            </div>
            <p>{i18n.language === 'en' ? 'The goal of our idea is to widely introduce the culture of growing vegetables with good taste properties with biological additives, which will help to encourage the production of organic farming among the local population, promote and develop urban gardening in city conditions.' : 'ჩვენი იდეის მიზანია, რომ ფართოდ დავნერგოთ ბიოლოგიური დანამატებით კარგი გემოვნური თვისებების მქონე ბოსტნეულის მოყვანის კულტურა, რაც ხელს შეუწყობს ადგილობრივ მოსახლეობაში ბიო მეურნეობის წარმოების წახალისებას, ურბანული მებაღეობის  ხელშეწყობას და განვითარებას ქალაქის პირობებში.'}</p>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUsPage