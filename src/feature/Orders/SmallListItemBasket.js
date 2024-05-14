import QuantityUpdater from "./QuantityUpdater";
import { Link } from "react-router-dom";
const SmallListItemBasket = ({ one }) => {
    return (
        <div>
            <Link to={"" + one._id}><h1>{one.name}</h1></Link>
            <h2>{one.price}</h2>
            <img src={one.RoutingToImage} style={{ width: "40%" }} />

            <h1>{one.quantity}-כמות-</h1>
          
    
        </div>
    );
}
 
export default SmallListItemBasket;
