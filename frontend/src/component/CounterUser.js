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

const CounterUser = ({ping,setPing,el}) => {
  const user = useSelector((state) => state.user?.user);
  const users = useSelector((state) => state.user?.users);
  const isAuth=localStorage.getItem('token')
const navigate=useNavigate()
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [Count, setCount] = useState(user?.abonner.value);
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
                    ...user,user:{abonner:{...user?.abonner,abonner:count-1}}
                      // ...user,user:{abonner:[...user.abonner,count-1]},

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
                updateUser(
                                // ...user,user:{abonner:[...user.abonner,count+1]},

                ),
                
              );
            }, 1500);console.log(el?.id,'idddddddd')}}
          >
            Abonner
          </button>
        )}

        <span>{count}</span>
        <h5>{users?.abonner}</h5>
        
      </div>
      <div></div>
    </div>
  );
};

export default CounterUser;
