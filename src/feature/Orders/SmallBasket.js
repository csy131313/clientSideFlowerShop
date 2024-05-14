import React from "react";
import { useSelector } from "react-redux";
import SmallListItemBasket from "./SmallListItemBasket";
import { addOrder } from "./OrdersApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const SmallBasket = ({ handleCloseBasket }) => {
  const basket = useSelector((state) => state.order.basket);
  

 

  return (
    <>
 <div style={{
  
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(255, 255, 255, 0.9)", /* Adjust the alpha value for opacity */
  padding: "2vw", /* Padding as 2% of the viewport width */
  borderRadius: "5px",
  width: "60vw", /* Width as 60% of the viewport width */
  height: "60vh", /* Height as 60% of the viewport height */
  overflow: "auto",
  
  textAlign: "center",
  zIndex: "1000", /* Ensure the window appears above other elements */
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)", /* Add a shadow effect for emphasis */
  border: "1px solid olive", /* Add a 1px thick olive green border */
}}>



     
          <h1>Your Basket</h1>
          <div>המוצר נוסף בהצלחה לסל הקניות שלך !</div>
      <ul>
        {basket.map((item) => {
          // Filter out items with quantity zero
          if (item.quantity > 0) {
            return (
              <li key={item._id}>
                <SmallListItemBasket one={item} />
              </li>
            );
          } else {
            return null; // Do not display items with quantity zero
          }
        }
        )}
      </ul>
  
      <IconButton onClick={handleCloseBasket}>
    <CloseIcon />
</IconButton>      </div>


    </>
  );
};

export default SmallBasket;
// import React from "react";
// import { useSelector } from "react-redux";
// import SmallListItemBasket from "./SmallListItemBasket";
// import { addOrder } from "./OrdersApi";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const SmallBasket = ({ handleCloseBasket }) => {
//   const basket = useSelector((state) => state.order.basket);

//   return (
//     <>
//       <div style={{
//         background: "#fff",
//         padding: "20px",
//         borderRadius: "5px",
//         width: "300px",
//         height: "400px",
//         overflow: "auto",
//         textAlign: "center",
//       }}>
//         <h1>Your Basket</h1>
//         <ul>
//           {basket.map((item) => {
//             // Filter out items with zero quantity
//             if (item.quantity > 0) {
//               return (
//                 <li key={item._id}>
//                   <SmallListItemBasket one={item} />
//                 </li>
//               );
//             } else {
//               return null; // Do not display items with zero quantity
//             }
//           })}
//         </ul>
//         <button onClick={handleCloseBasket}>Close Basket</button>
//       </div>
//     </>
//   );
// };

// export default SmallBasket;
