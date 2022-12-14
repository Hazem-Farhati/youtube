// // // import { useEffect, useRef } from "react";
// // // const UploadWidget = () => {
// // //   const cloudinaryRef = useRef();
// // //   const widgetRef = useRef();
// // //   useEffect(() => {
// // //     cloudinaryRef.current = window.cloudinary;
// // //     console.log(cloudinaryRef.current);
// // //     widgetRef.current = cloudinaryRef.current.createUploadWidget(
// // //       {
// // //         cloudName: "ddxsgmsd4",
// // //         uploadPreset: "nji576ud",
// // //       },
// // //       function (error, result) {
// // //         <div>{result}</div>;
// // //       }
// // //     );
// // //   }, []);

// // //   return (
// // //     <>
// // //       <button onClick={() => widgetRef.current.open()}>upload</button>
      
// // //     </>
// // //   );
// // // };
// // // export default UploadWidget;
// // import axios from 'axios';
// // import React, { useState } from 'react'
// // import { useDispatch } from 'react-redux';
// // import { createProduct } from '../../redux/productSlice/productSlice';

// // const UploadWidget = () => {
// //     const dispatch=useDispatch()
// //     const [image, setImage] = useState([]);
// //     const [file, setFile] = useState([]);

// //     const [url, setUrl] = useState("");
// //   function handleRemoveImg(imgObj){
  
// //   }
// //   function handleOpenWidget(){
// //     var myWidget = window.cloudinary.createUploadWidget({
// //         cloudName: 'ddxsgmsd4',
// //         uploadPreset: 'nji576ud'}, (error, result) => {
// //           if (!error && result && result.event === "success") {
// // setUrl((prev)=>[...prev,{url:result.info.url,public_id:result.info.public_id}])
// //           }
// //         }
// //       )

// //       //open widget
// //       myWidget.open()
// //       console.log(url)

// //   }
// //    const uploadImage=async()=>{
// //      //    const form=new FormData()
// //      //    form.append("file",file)
// //      //    form.append("upload_preset",'ddxsgmsd4')

// //    
// //      try {
// //        const result = await axios.post(
// //          "https://api.cloudinary.com/v1_1/ddxsgmsd4/upload",
// //          url
// //        );
// //        console.log(result.data);
// //      } catch (error) {
// //        console.log(error);
// //      }
// //      //    await axios.post('https://api.cloudinary.com/v1_1/ddxsgmsd4/upload',url).then((result)=>{
// //      //     setUrl(result.data.secure_url)
// //      // {    console.log(result)
// //      // }    dispatch(
// //      //         createProduct({
// //      //          video:url

// //      //         })
// //      //       );
// //      //    })
// //    }
// //   return (
// //     <div>
// //         <button onClick={()=>handleOpenWidget()}>
// //             Upload
// //         </button>
       
// //         <div>

// //             {image?.map((image)=><div>
// //                 <img src={image.url}/>
// //             </div>
            
// //             )}
// //              <button onClick={()=>uploadImage()}>zkdzd</button>
// //         </div>
// //     </div>
// //   )
// // }

// // export default UploadWidget

// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import axios from "axios";
// import { createProduct } from '../../redux/productSlice/productSlice';

// const UploadWidget = () => {
//   const product = useSelector((state) => state.product?.product);
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState("");
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();
//   // dsrmckm1q
//     // preset name : msa2hvog
//   const uploadImage = async () => {
//     const form = new FormData();
//     form.append("file", file);
//     form.append("upload_preset", "msa2hvog");
//     await axios
//       .post("https://api.cloudinary.com/v1_1/dsrmckm1q/upload", form)
//       .then((result) => {
//         setUrl(result.data.secure_url);
//         dispatch(
//           createProduct({
//             video: url,
//           })
//         );
//         // setPing(!ping);
//       });
//   };
//   return (
//     <div>
//       {!show ? (
//         <>
//           <input
//             className="choose_file"
//             type="file"
// accept="file_extension|audio/*|video/*|image/*|media_type"            value={""}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </>
//       ) : null}

//       <br />
//       <button className="upload_button" onClick={uploadImage}>
//         Save
//       </button>
//     </div>
//   );
// }

// export default UploadWidget