import { UpdateOrderById } from "./OrdersApi";
import { useSelector } from "react-redux";
const OrderItem = ({ one }) => {
    let admin = useSelector((state) => state.user.currentUser);


    const startOrderoff = async () => {
        try {
           
                let res = await   UpdateOrderById(one._id,{"startOff":"true"},admin.token)
                alert("הצליח לשלוח הזמנה");
     
            } 
        catch (err) {
            console.log(err);
            alert("הזמנה לא יצאה לדרך");
        }
    }
      return (
        <div>
            <h1>{one._id}</h1>
               <h1>{one.startOff}</h1>
            <h2>{one.userId}</h2>
            <h2>{one.products}</h2>
          
            <h1>{one.DueDate}</h1>

            <h1>{one.address}</h1>

           {one.startOff&&<h1>{one.startOff}-יצאה לדרך</h1>}
            {!one.startOff&&<input type="button" value="start off" onClick={startOrderoff}/>}

    
        </div>
    );
}

export default OrderItem;
