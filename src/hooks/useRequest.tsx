import React, { useState } from 'react'
import { db } from '../config/firebase'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { IProduct } from '../interfaces'

function useRequest() {
    const requestData = async ({endpoint, id, prodInfo} : {endpoint: string, id: string, prodInfo: IProduct}) => {
        const prodRef = doc(db, `${endpoint}`, `${id}`)
        try {
            await setDoc(prodRef, prodInfo)
        } catch (error) {
            console.error(error)
        }
    }
  return {requestData}
}

export default useRequest