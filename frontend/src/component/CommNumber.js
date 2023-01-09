import React, { useState } from "react";
import { useSelector } from "react-redux";

const CommNumber = ({ id }) => {
//   const [commNum, setCommNum] = useState([el?.content]);
    const commentaire = useSelector((state) => state.commentaire?.commentaire);


    return (
      <div>
        {commentaire
          ?.filter((el) => id == el?.product_id)
                .map((el) => (
              
            console.log([el?.length], "commnum")

          ))}
            
            
      </div>
    );
};

export default CommNumber;
