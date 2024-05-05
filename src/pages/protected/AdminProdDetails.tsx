import React, { useEffect, useState } from 'react' 
import { Navigate, useNavigate, useParams } from 'react-router-dom' 
import { storage } from '../../config/firebase' 
import { useTranslation } from 'react-i18next' 
import { IProduct } from '../../interfaces' 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage' 
import ProdNameInput from '../../components/ProdNameInput' 
import ProdDescrInput from '../../components/ProdDescrInput' 
import ProdPriceInput from '../../components/ProdPriceInput' 
import ProdImageInput from '../../components/ProdImageInput' 
import useFetch from '../../hooks/useFetch'
import useRequest from '../../hooks/useRequest'
import ProdAvailabilityInput from '../../components/ProdAvailabilityInput'

function AdminProdDetails() {
  const {bestSellers, products, prodId } = useParams() 
  const [prodInfo, setProdInfo] = useState<IProduct | null>(null) 
  const { i18n } = useTranslation()
  const {getData, data} = useFetch()
  const {requestData} = useRequest()
  const navigate = useNavigate()
  
  const endpointToUse = bestSellers ? bestSellers : products || ''
  useEffect(() => {
    getData({endpoint: endpointToUse.toString(), id: prodId})
  }, [])

  useEffect(() => {
    setProdInfo(data as IProduct)
    console.log(data)
  }, [data])

  const handleProdInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldToChange: string) => {
    if (prodInfo) {
      setProdInfo({ ...prodInfo, [fieldToChange]: e.target.value }) 
    }
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files) 
  
      const imageURLs: string[] = [] 
  
      for (const file of filesArray) {
        const storageRef = ref(storage, `images/${file.name}`) 
        const snapshot = await uploadBytes(storageRef, file) 
        const downloadURL = await getDownloadURL(snapshot.ref) 
  
        imageURLs.push(downloadURL) 
      }
  
      setProdInfo((prevProdInfo: IProduct | null) => ({
        ...prevProdInfo!,
        images: [...(prevProdInfo?.images || []), ...imageURLs]
      })) 
    }
  }

  const handleToggleAvailability = () => {
    if (prodInfo) {
      setProdInfo({ ...prodInfo, isAvailable: !prodInfo.isAvailable })
    }
  }
  const onDeleteImage = (index: number) => {
    if (prodInfo) {
      const updatedImages = prodInfo.images.filter((_, i) => i !== index)
      setProdInfo({ ...prodInfo, images: updatedImages })
    }
  }

  const updateProdInfo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault() 
    // await setDoc(docRef, prodInfo) 
    if (prodInfo && prodId) {
      await requestData({ endpoint: endpointToUse.toString(), id: prodId, prodInfo })
    }

    navigate(`/admin/${endpointToUse}`)
  }

  return (
    <div className="admin-items-container">
      <h1>{i18n.language === 'en' ? prodInfo?.enName : prodInfo?.geoName}</h1>
      <div className='admin-list-container inputs-container'>
        <div className="short-fields">
          <ProdNameInput
            label="ქართული სახელი"
            value={prodInfo?.geoName || ''}
            onChange={(e) => handleProdInfoChange(e, 'geoName')}
          />
          <ProdNameInput
            label="ინგლისური სახელი"
            value={prodInfo?.enName || ''}
            onChange={(e) => handleProdInfoChange(e, 'enName')}
          />
          <ProdNameInput
            label="ინგლისური კატეგორია"
            value={prodInfo?.enCategory || ''}
            onChange={(e) => handleProdInfoChange(e, 'enCategory')}
          />
          <ProdNameInput
            label="ქართული კატეგორია"
            value={prodInfo?.geoCategory || ''}
            onChange={(e) => handleProdInfoChange(e, 'geoCategory')}
          />
          <ProdPriceInput
            label="პროდუქტის ფასი"
            value={prodInfo?.price || ''}
            onChange={(e) => handleProdInfoChange(e, 'price')}
          />
          <ProdAvailabilityInput isAvailable={prodInfo?.isAvailable ?? false} onToggle={handleToggleAvailability} />
        </div>
        <div className="big-inputs">
          <ProdDescrInput
            label="ინგლისური აღწერა"
            value={prodInfo?.enDescr || ''}
            onChange={(e) => handleProdInfoChange(e, 'enDescr')}
          />
          <ProdDescrInput
            label="ქართული აღწერა"
            value={prodInfo?.geoDescr || ''}
            onChange={(e) => handleProdInfoChange(e, 'geoDescr')}
          />
        </div>
        <ProdImageInput onChange={handleImageChange} onDeleteImage={onDeleteImage} prodImages={prodInfo?.images ?? []}/>
        <button id='save-btn' onClick={(e) => updateProdInfo(e)}>{i18n.language === 'en' ? 'Save' : 'შენახვა'}</button>
      </div>
    </div>
  ) 
}

export default AdminProdDetails 
