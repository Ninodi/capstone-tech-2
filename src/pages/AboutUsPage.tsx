import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import AboutImg from '../assets/img/aboutus.png'
import '../assets/styles/AboutUsPage.css'
import PageTitle from '../components/PageTitle'
import AboutImg2 from '../assets/img/aboutus2.png'

function AboutUsPage() {
  return (
    <div className='about-page-container'>
      <Header />
      <Breadcrumbs secondaryUrl={'/about'} basePage={'ჩვენ შესახებ'} />
      <PageTitle pageTitle={'ჩვენ შესახებ'} link={'/'} />
      <div className="about-content">
            <div className="about-img">
              {/* <img src={AboutImg} alt="" /> */}
              <img src={AboutImg2} alt="" />
            </div>
          <div className="content-container">
            <div className="about-txt">
              <p>წიწაკო არის ბიო მეურნეობა, რომელიც გთავაზობთ ულამაზეს დეკორატიულ ბოსტნეულს, თქვენი აივნების გასალამაზებლად. ჩვენი მცენარეები იზრდებიან სათბურში, რაც იცავს გარე დაბინძურებისაგან, მავნე მწერებისა თუ სხვა ბუნებრივი მოვლენებისაგან და უზრუნველყოფს განსაკუთრებბულ გემოვნურ თვისებებს.ჩვენი მცენარეების რეალიზება ხდება შესაბამის ქოთნებში, თანდართული მოვლის ინსტრუქციით. ჩვენი იდეის მიზანია, რომ ფართოდ დავნერგოთ ბიოლოგიური დანამატებით კარგი გემოვნური თვისებების მქონე ბოსტნეულის მოყვანის კულტურა, რაც ხელს შეუწყობს ადგილობრივ მოსახლეობაში ბიო მეურნეობის წარმოების წახალისებას, ურბანული მებაღეობის  ხელშეწყობას და განვითარებას ქალაქის პირობებში.</p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUsPage