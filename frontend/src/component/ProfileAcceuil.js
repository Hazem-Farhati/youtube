import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/profileaccueil.css";
import CardVideoProfile from './CardVideoProfile';

const ProfileAcceuil = () => {
    const product = useSelector((state) => state.product?.product);

  return (
    <div className='profileacceuil'>
 {product?.map((el)=>
    <>
    <CardVideoProfile el={el}/>
    </>
 )}
    </div>
  )
}

export default ProfileAcceuil