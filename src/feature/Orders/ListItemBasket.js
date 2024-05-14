import QuantityUpdater from "./QuantityUpdater";
import { Link } from "react-router-dom";
const ListItemBasket = ({ one }) => {
    return (
        <div >
          <Link to={"" + one._id}><h1>{one.name}</h1></Link>
            <h2>{one.price}</h2>
            <img src={one.RoutingToImage} style={{ width: "40%" }} />
          
            <h1>{one.quantity}כמות-</h1>
            {one.quantity > 1 && // Display total price only if quantity is greater than 1
                <div>
                    <h2>Total price</h2>
                    <h2>{one.quantity * one.price}</h2>
                </div>
            }
            <QuantityUpdater productId={one._id} currentQuantity={one.quantity} />
            
        </div>

    );
}
 
export default ListItemBasket;
