import React, { useEffect } from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import '../assets/styles/ContactPage.css'
import ContactLinks from '../components/ContactLinks'
import ContactForm from '../components/ContactForm'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ContactPage() {
  const currLoc = useLocation()
  const {t} = useTranslation()


  return (
    <div className='full-page-container'>
      <Header />
      <Breadcrumbs secondaryUrl={currLoc.pathname} basePage={t('global.header.contact')}/>
      <PageTitle pageTitle={t('global.header.contact')} link={'/'} />
      <div className="content-container">
        <div className="contact-page">
          <div className="contact-content">
            <ContactLinks />
            <ContactForm />
          </div>
          <div className="maps">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.95184493168222!2d44.98616102987045!3d41.78026697747418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404414fb9439fb9f%3A0xe489aa41d13930e1!2sNorio!5e0!3m2!1sen!2sge!4v1720538266663!5m2!1sen!2sge"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage