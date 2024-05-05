import React, { useEffect, useState } from 'react'
import ProdItem from '../../components/ProdItem'
import { db } from '../../config/firebase'
import {getDocs , collection} from 'firebase/firestore'
import { useTranslation } from 'react-i18next'

interface IProduct{
  geoName: string,
  enName: string,
  geoDescr: string,
  enDescr: string,
  images: [],
  price: number,
  id: string,
}

function AdminBestSellers() {
  const [products, setProducts] = useState<IProduct[]>()

  const bestSellersRef = collection(db, 'bestSellers')
  const {t, i18n} = useTranslation()

  
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(bestSellersRef)
        const prodData: IProduct[] = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() } as IProduct
        })
        setProducts(prodData)
      } catch (error) {
        console.error(error)
      }
    }

    getProducts()
  }, [])

  return (
    <div className='admin-items-container'>
      <h1>{t("global.popularProds")}</h1>
      <div className='admin-list-container'>
        {products && products?.map(each => (
          <ProdItem key={each.id} id={each.id} prodName={i18n.language === 'en' ? each.enName : each.geoName} endpoint={'bestSellers'}/>
        ))}
      </div>
    </div>
  )
}

export default AdminBestSellers