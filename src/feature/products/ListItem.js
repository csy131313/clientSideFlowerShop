import {useDispatch,useSelector} from "react-redux";
import ProductDetails from "./ProductDetails";
import { deleteProductById } from "./productApi";
import { useState } from "react";
import ProductList from "./ProductList";
import { addToBasket, removeFromBasket,updateQuantity } from "../Orders/OrdersSlice";
import { deleteProductsFromClinet } from "./productSlice.js";
import { Link } from "react-router-dom";
import './ListItem.css';
import SmallBasket from "../Orders/SmallBasket";

// const ListItem=({one})=>{
//        // State to manage display of SmallBasket component
//        const [showBasket, setShowBasket] = useState(false);

//        // Function to handle closing the SmallBasket component
//        const handleCloseBasket = () => {
//            setShowBasket(false);
//        };
       
//     const handleAddToBasket = () => {
//         dispatch(addToBasket(one));
//         setShowBasket(true);
//     };

// let dispatch=useDispatch();
// let pimg="nan";
// if(one.RoutingToImage)
// pimg=one.RoutingToImage;
// let role;
// const user = useSelector((state) => state.user.currentUser);

// if(user)
// role=user.role;
// else
// role="anonimi";
// // const deleteFromServer=async()=>{
// //     try{
// //         let res=await deleteProductById(one._id,user.token);
// //         alert("המחיקה הצליחה");
// //         dispatch(deleteProductsFromClinet(one._id))
// //     }catch(err){
// //         alert("המחיקה נכשלה");
// //         console.log(err);
// //     }
  
// // }
// const deleteFromServer = async () => {
//     try {
//         // Display a confirmation dialog to the user
//         const userConfirmation = window.confirm("Are you sure you want to delete this product?");
        
//         if (userConfirmation) {
//             let res = await deleteProductById(one._id, user.token);
//             alert("The deletion was successful");
//             dispatch(deleteProductsFromClinet(one._id));
//         } else {
//             // If the user cancels the deletion
//             alert("Deletion canceled by user");
//         }
//     } catch (err) {
//         alert("Deletion failed");
//         console.log(err);
//     }
// }

// return(

// <div style={{
//     background: one.quantity > 0 ? "inherit" : "none",
//     width: "25%",
//     height: "25%",
//     border: one.quantity > 0 ? "2px solid black" : "none",
//     position: "relative",
//     paddingLeft: one.quantity > 0 ? "10%" : "0",
    


 
//     // margin: "10px",
//     // textAlign: "center"
// }}>
//     {one.quantity > 0 && (
//         <img src="https://www.reches.co.il/img/layout/empty-cart-icon.svg" style={{
//             position: "absolute",
//             top: "5%",
//             left: "10%",
//             transform: "translateY(-50%)",
//             width: "10%"
//         }} />
//         )}
//         <h2>{one.price} ש"ח</h2>
//     {one.quantity>0&&<h2>{one.quantity}כמות-</h2>}
//     {one.description&&<h2>{one.description}</h2>}
//     {/* {one.quantity>0&&<input type="button" value="להסרה מהסל" onClick={()=>{  dispatch(updateQuantity({ _id:one._id, quantity: 0}))}}/>} */}

//     {one.quantity>0&&<input type="button" value="להסרה מהסל" onClick={()=>{  dispatch(removeFromBasket({ _id:one._id}))}}/>}
//     {pimg !== "nan" && <img src={pimg} style={{ width: "80%" }} />}
//     {role === "admin" && <input type="button" onClick={deleteFromServer} />}
//     {role === "admin" && <Link to={"/UpdateFrom/" + one._id}>לעריכה</Link>}
    
//     <Link to={"" + one._id}><h1>{one.name}</h1></Link>
//     {/* {user && <input type="button" value="to order" onClick={() => { dispatch(addToBasket(one));        setShowBasket(true);
//  }} />} */}
//  {user&& <button onClick={handleAddToBasket}>to order</button>}

// {showBasket && <SmallBasket handleCloseBasket={handleCloseBasket} />}
//     {/* {alert(one.quantity)} */}


// </div>




// )

// }
// export default ListItem;
// import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListItem({one}) {
  const [expanded, setExpanded] = React.useState(false);
         const [showBasket, setShowBasket] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  let dispatch=useDispatch();
  let pimg="nan";
  if(one.RoutingToImage)
  pimg=one.RoutingToImage;
  if(one.RoutingToImage)
  pimg=one.RoutingToImage;
  let role;
if(user)
role=user.role;
else
role="anonimi";
const deleteFromServer = async () => {
        try {
            // Display a confirmation dialog to the user
            const userConfirmation = window.confirm("Are you sure you want to delete this product?");
            
            if (userConfirmation) {
                let res = await deleteProductById(one._id, user.token);
                alert("The deletion was successful");
                dispatch(deleteProductsFromClinet(one._id));
            } else {
                // If the user cancels the deletion
                alert("Deletion canceled by user");
            }
        } catch (err) {
            alert("Deletion failed");
            console.log(err);
        }
    }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleAddToBasket = () => {
            dispatch(addToBasket(one));
            setShowBasket(true);
        };
        const handleCloseBasket = () => {
                       setShowBasket(false);
                   };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            (
                <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src="/10.png" alt="Logo" style={{ width: '80px', height: '40px', borderRadius: '50%' }} 
                //   onClick={handleAddToBasket}
                  
                  />
                </Link>
              )
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={
            <Link to={"" + one._id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2>{one.name} מק"ט</h2>
            </Link>
          }
          subheader={
            <h2>{one.price} NIS</h2>
          }
        
      />
    
      <CardMedia
  component="img"
  height="300"
  image={one?.RoutingToImage || ""}
  alt="Paella dish"
/>
{/* 
      <CardContent>
      <Typography variant="body2" color="text.secondary">
  {one.quantity > 0 && <h2>{one.quantity} quantity -</h2>}
</Typography>


      </CardContent> */}
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}


        {/* <IconButton aria-label="order" style={{ color: one.quantity > 0 ? 'pink' : 'inherit' }}>
  <Link to={user ? "/order" : "#"} style={{ textDecoration: 'none', color: 'inherit' }}>
    <ShoppingCartIcon onClick={handleAddToBasket} />
  </Link>
</IconButton> */}




{/* <IconButton aria-label="order">
      {one.quantity > 0 ? (
        <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <RemoveShoppingCartIcon onClick={() => { dispatch(removeFromBasket({ _id: one._id })) }} />
        </Link>
      ) : user ? (
        <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ShoppingCartIcon onClick={handleAddToBasket} />
        </Link>
      ) : (
        <button onClick={() => alert("You must register before placing an order")}>
          <ShoppingCartIcon />
        </button>
      )}
    </IconButton> */}


{/* {user ? ( */}
    <IconButton aria-label="order">
      {one.quantity > 0 ? (
        <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <RemoveShoppingCartIcon onClick={() => { dispatch(removeFromBasket({ _id: one._id })) }} />
        </Link>
      ) : (
        <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ShoppingCartIcon onClick={handleAddToBasket} />
        </Link>
      )}
    </IconButton>
  {/* ) : null} */}

<IconButton aria-label="delete">
  {role === "admin" && (
    <>
      <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <DeleteIcon onClick={deleteFromServer} />
      </Link>
      {/* <input type="button" onClick={deleteFromServer} style={{ display: 'none' }} /> */}
    </>
  )}
</IconButton>

<IconButton aria-label="edit">
  {role === "admin" && (
    <Link to={"/UpdateFrom/" + one._id} style={{ textDecoration: 'none', color: 'inherit' }}>
      <EditIcon />
    </Link>
  )}
</IconButton>


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
        {one.description||"פרח יפה"}
          </Typography>
        
         
          
        </CardContent>
      </Collapse>
       {showBasket && <SmallBasket handleCloseBasket={handleCloseBasket} />}
    </Card>
  );
}


