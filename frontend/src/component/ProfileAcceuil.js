import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/profileaccueil.css";
import CardVideoProfile from './CardVideoProfile';

const ProfileAcceuil = ({search}) => {
    const product = useSelector((state) => state.product?.product);
    const user = useSelector((state) => state.user?.user);
    const isAuth=localStorage.getItem("token")
  return (
    <div className="profileacceuil">
      {isAuth && (
        <>
          {product?.filter((el) => el?.user_id === user?._id).filter((el)=>el.title?.toLowerCase().includes(search.toLowerCase())).map((el) => (
              <div>
                <CardVideoProfile el={el} />
              </div>
            ))}
        </>
      )}
      {/* {product?.map((el) => (
        <>
          <CardVideoProfile el={el} />
        </>
      ))} */}
    </div>
  );
}

export default ProfileAcceuil