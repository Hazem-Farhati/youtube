import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateUser } from "../redux/userSlice/userSlice";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../redux/userSlice/counterSlice";

const CounterUser = ({ping,setPing}) => {
  const user = useSelector((state) => state.user?.user);

  const isAuth=localStorage.getItem('token')
const navigate=useNavigate()
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [Count, setCount] = useState(0);
  return (
    <div>
      <div>
        {count ? (
          <button style={{backgroundColor:"#f2f2f2",width:"100px",height:"37px" ,color:"black",border:"none" ,borderRadius:"20px", marginLeft:"20px"}}
            aria-label="Increment value"
            onClick={isAuth?() => dispatch(decrement(),
              setTimeout(() => {
                dispatch(updateUser(
                  {
                    ...user,user:{abonner:count-1},
                      id: user?._id,
                     
                    }
                ),
                setPing(!ping)
                )
              }, 1500)
              ):<>{navigate("/register")}</>}
          >
            S'abonner
          </button>
        ) : (
          <button style={{backgroundColor:"black",width:"100px",height:"37px" ,color:"white" ,border:"none",borderRadius:"20px", marginLeft:"20px"}}
            aria-label="Increment value"
            onClick={() =>{ dispatch(increment())
            setTimeout(() => {
              dispatch(
                updateUser({
                ...user,user:{abonner:count+1},
                  id: user?._id,
                }),
              );
            }, 1500);}}
          >
            Abonner
          </button>
        )}

        <span>{count}</span>
        <h5>{user?.abonner}</h5>
        
      </div>
      <div></div>
    </div>
  );
};

export default CounterUser;
