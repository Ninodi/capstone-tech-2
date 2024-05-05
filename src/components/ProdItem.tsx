import React from 'react'
import Edit from '../assets/icons/edit.png'
import Delete from '../assets/icons/delete.png'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore"
import { db } from '../config/firebase'
import useFetch from '../hooks/useFetch'

function ProdItem({id, prodName, endpoint} : {id: string, prodName: string, endpoint: string}) {
    const navigate = useNavigate()
    const {bestSellers} = useParams()
    const {getData} = useFetch()
    const editItem = () => {
        navigate(`/admin/${endpoint}/${id}`)
    }

    const deleteItem = async () => {
        await deleteDoc(doc(db, 'products', id))
        getData({endpoint: 'products'})
    }

  return (
    <div className='admin-prod-item'>
        <p>{prodName}</p>
        <div className="item-controls">
            <div className="edit-btn" onClick={editItem}>
                <img src={Edit} alt="" />
            </div>
            <div className="delete-btn" onClick={deleteItem} style={{display: `${bestSellers ? 'none' : 'block'}`}}>
                <img src={Delete} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProdItem