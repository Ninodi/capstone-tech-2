import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import ProductGallery from '../components/ProductGallery'
import '../assets/styles/ProductPage.css'
import ProductDetails from '../components/ProductDetails'

function ProductPage() {
    const {product} = useParams()
    const prodLoc = useLocation()

    const extractFirstTwoPaths = (path: string) => {
      const extractedPaths = path.match(/^\/([^/]+\/[^/]+)/);
      return extractedPaths && extractedPaths.length >= 2 ? extractedPaths[1] : "Invalid path format";
    }
    
    const prevPage = extractFirstTwoPaths(prodLoc.pathname)

    console.log(prevPage)

  return (
    <div className='prod-page'>
      <Header />
      <Breadcrumbs secondaryUrl={'/catalogue/pepper'} basePage={'კატალოგი'} product={product} prodUrl={prodLoc.pathname}/>
      <div className="product-title-cont">
        {product && <PageTitle pageTitle={product} link={'/catalogue/peper'} />}
      </div>
      <div className="content-container">
        <div className="prod-content-container">
          <ProductGallery />
          {product && <ProductDetails prodName={product} />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage