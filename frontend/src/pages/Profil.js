import React from 'react'
import { useSelector } from 'react-redux';

const Profil = () => {
    const user = useSelector((state) => state.user?.user);

  return (
    <div>
{user?.name}
    </div>
  )
}

export default Profil