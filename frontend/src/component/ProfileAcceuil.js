import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "../styles/profileaccueil.css";
import CardVideoProfile from './CardVideoProfile';

const ProfileAcceuil = ({search}) => {
    const product = useSelector((state) => state.product?.product);
    const user = useSelector((state) => state.user?.user);
    const isAuth=localStorage.getItem("token")
    const { id } = useParams();
  const [upId, setUpId] = useState(id)
  return (
    <div className="profileacceuil">
      {isAuth && (
        <>
          {product?.filter((el) => el?.user_id === user?._id).filter((el)=>el.title?.toLowerCase().includes(search.toLowerCase())).map((el) => (
              <Link to={`/view/${el?._id}`}>
              <div>
                <CardVideoProfile el={el}  onClick={() => setUpId(id) }/>
              </div></Link>
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