import React from "react";
import { useSelector } from "react-redux";
import ListItemBasket from "./ListItemBasket";
import { addOrder } from "./OrdersApi";
import { Link, useNavigate, useParams } from "react-router-dom";


const Basket = () => {
  const basket = useSelector((state) => state.order.basket);
  

  // let dispath=useDispatch();
  const save = async(data)=>{
    // alert("מנסה להכניס")
    try{
        let res=await addOrder(data);
        // dispatch(addProductsToClinet(res.data));
        alert("ההוספה הצלחה")
    }
    catch(err){
        console.log(err);
        alert("ההוספה נכשלה"+err)
    }
    console.log(data);

}

  return (
    <div style={{marginTop: "32vh"}}>
      <h1>Your Basket</h1>
      <ul>
        {basket.map((item) => {
          // Filter out items with quantity zero
          if (item.quantity > 0) {
            return (
              <li key={item._id}>
                <ListItemBasket one={item} />
              </li>
            );
          } else {
            return null; // Do not display items with quantity zero
          }
        }
        )}
      </ul>
      {/* לא מחזיר אותי למקום שהייתי בו במוצרים? */}
      {/* <input type="button" value="Back" onClick={() => navigate("/list")} /> */}
      <Link to={"/order"} >להזמנה </Link>
      <Link to={"/list"} >למוצרים </Link>



    </div>
  );
};

export default Basket;
