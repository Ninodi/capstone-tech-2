import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import ProductBox from '../components/ProductBox'
import '../assets/styles/CataloguePage.css'
import Pagination from '../components/Pagination'
import PageTitle from '../components/PageTitle'

function CataloguePage() {
  const {type} = useParams()
  const products = new Array(150).fill(null).map((each, index) => index+1)
  const [currPage, setCurrPage] = useState<number>(1)

  const prodPerPage = 16
  const startIndex = (currPage - 1) * prodPerPage
  const endIndex = startIndex + prodPerPage
  const displayedProds = products?.slice(startIndex, endIndex)
  const totalPages = Math.ceil(products?.length / prodPerPage)

  useEffect(() => {
    setCurrPage(1)
  }, [type])

  const currLoc = useLocation()

  return (
    <div>
      <Header />
      <Breadcrumbs secondaryUrl={currLoc.pathname} basePage={'კატალოგი'}/>
      <PageTitle link='/' pageTitle='ჩვენი მცენარეები' />
      <div className="content-container">
        <div className="products-container">
          {
            displayedProds?.map((each, index) => (
              <ProductBox key={index} link={'racxa'} id={index} content={each}/>
            ))
          }
        </div>
      </div>
      <Pagination totalPages={totalPages} setCurrPage={setCurrPage} currPage={currPage}/>
      <Footer />
    </div>
  )
}

export default CataloguePage