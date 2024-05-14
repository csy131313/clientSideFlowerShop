import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UpdateFrom from "../products/UpdateFrom.js"
import Basket from "../Orders/Basket";
import { useState } from "react";
import SmallBasket from "../Orders/SmallBasket.js";


import OrderFrom from "../Orders/OrderForm";
import AddProductFrom from "../products/AddProductFrom";
import ProductDetails from "../products/ProductDetails";
import ProductList from "../products/ProductList";
import Login from "../Users/Login";
import LogOut from "../Users/LogOut";
import SignIn from "../Users/SignIn";
import { userOut } from "../Users/UserSlice.js"
import OrderList from "../Orders/OrderList";
import ListProduct100 from "../products/lists/ListProduct100"

import ListProduct200 from "../products/lists/ListProduct200"
import ListProduct300 from "../products/lists/ListProduct300"
import ListProduct400 from "../products/lists/ListProduct400"
import ListProduct500 from "../products/lists/ListProduct500"
import ListProduct600 from "../products/lists/ListProduct600"
import ListProduct700 from "../products/lists/ListProduct700"
import ListProduct800 from "../products/lists/ListProduct800"
import ListProduct900 from "../products/lists/ListProduct900"
import ImageList from "./ImageList.js";
import { useTheme } from '@mui/material/styles';


// const UserNavBar = () => {
//   let user = useSelector((state) => state.user.currentUser);
//   let role;
//   if (user)
//     role = user.role;
//   else
//     role = "anonimi";
//   if (user)
//     alert(user.role + "אתה");
//   let dispatch = useDispatch();
//   const [showListLinks, setShowListLinks] = useState(false);

//   const handleMouseEnter = () => {
//     setShowListLinks(true);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       setShowListLinks(false);
//     }, 10000); // Hide after 3 seconds
//   };
//   return (
//     <>
//       <div style={{ position: "fixed", top: 0, height: "32vh", width: "100%", zIndex: 1000, backgroundColor: "#bbb" }} >
//         {user && <h1>שלום ל+{user.userName}+{user.role} </h1>}

//         {!user && <h1>ללא משתמש  </h1>}

//         <img src="/logo.png" style={{ width: "20%" }}></img>

//         <div>
//           {role == "admin" && <Link to={"/addProduct"} >להוספת מוצר </Link>}
//           {role == "admin" && <Link to={"/OrderList"} >לכל ההזמנות  </Link>}
//           <Link to={"/list"} >למוצרים </Link>
//           <Link to={"/"} >לבית </Link>

//           {user && <Link to={"/basket"} >לסל </Link>}
//           {user && <Link to={"/SmallBasket"} > לסל מוקטן </Link>}

//           {!user && <Link to={"/login"} >login </Link>}

//           {!user && <Link to={"/signIn"} >הרשמה </Link>}
//           <div>
//             <Link to={"/list"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//               To products
//             </Link>
//             <div style={{ marginLeft: "10px" ,  background: "rgba(255, 200, 220, 0.5)"}}>
//               {showListLinks && (
//                 <>
//                  <Link to={"/list100"}>חישוק חי</Link> {' '}
//           <Link to={"/list200"}>עגול חי</Link> {' '}
//           <Link to={"/list300"}>סחלבים נשפך</Link> {' '}
//           <Link to={"/list400"}>טוליפים נשפך</Link> {' '}
//           <Link to={"/list500"}>נשפך קאלות</Link> {' '}
//           <Link to={"/list600"}>מדורג חי</Link> {' '}
//           <Link to={"/list700"}>סחלבים מלאכותי</Link> {' '}
//           <Link to={"/list800"}>חישוק מלאכותי</Link> {' '}
//           <Link to={"/list900"}>עגול מלאכותי</Link> {' '}
//                 </>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>

//       {user && <input type={"button"} value={"log out"} onClick={() => { dispatch(userOut()) }} />}

//     </>
//   );
// }

// export default UserNavBar;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';

// const UserNavBar = () => {
//   let user = useSelector((state) => state.user.currentUser);
//   let role = user ? user.role : 'anonymous';
//   let dispatch = useDispatch();
//   const [showListLinks, setShowListLinks] = useState(false);

//   const handleMouseEnter = () => {
//     setShowListLinks(true);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       setShowListLinks(false);
//     }, 3000); // Hide after 3 seconds
//   };

//   return (
//     <>

//     <div style={{
//        position: "fixed",
//         top: 0, height: "32vh", width: "100%", zIndex: 1000, backgroundColor: "#bbb" }}>

//         {user && <h1>שלום ל+{user.userName}+{user.role} </h1>}

//          {!user && <h1>ללא משתמש  </h1>}
//         <img src="/logo.png" style={{ width: "20%" }} alt="Logo" />
//       </div>
//      <Drawer
//   variant="permanent"
//   anchor="top" // Set the anchor to 'top'
//   sx={{
//  //  width: '100%',
//  flexShrink: 0,
//  '& .MuiDrawer-paper': {
//    width: '100%',
//    overflow: 'hidden',
//    boxSizing: 'border-box',
//    display: 'flex',
//    flexDirection: 'row',
//    justifyContent: 'flex-start',
//    paddingLeft: 16,
//    paddingRight: 16,

//     },
//   }}
// >
// <List sx={{ display: 'flex', flexDirection: 'row' }}>
// <ListItem 
//             button 
//             component={Link} 
//             to="/list" 
//             onMouseEnter={handleMouseEnter} 
//             onMouseLeave={handleMouseLeave}
//           >
//             <ListItemText primary="Products" />

//           </ListItem>
//   <ListItem  button
//   sx={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50%', // Adjust the width as needed
//   }}  component={Link} to="/">
//     <ListItemText primary="Home" />
//   </ListItem >
//   <ListItem  button
//   sx={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50%', // Adjust the width as needed
//   }} component={Link} to="/list">
//     <ListItemText primary="Products" />
//   </ListItem>
//           {user && (
//             <ListItem  button
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '50%', // Adjust the width as needed
//             }}>
//               <ListItemText primary="Logout" onClick={() => dispatch(userOut())} />
//             </ListItem>
//           )}
//           {!user && (
//             <>
//               <ListItem  button
//   sx={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50%', // Adjust the width as needed
//   }} component={Link} to="/login">
//                 <ListItemText primary="Login" />
//               </ListItem>
//               <ListItem  button
//   sx={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50%', // Adjust the width as needed
//   }} component={Link} to="/signIn">
//                 <ListItemText primary="Register" />
//               </ListItem>
//             </>
//           )}

//         </List>

//         {showListLinks && (
//     <div style={{ display: 'flex', justifyContent: 'space-between', background: "rgba(255, 200, 220, 0.5)", padding: '10px' }}>
//       <Link to="/list100">Live Hoop</Link>
//       <Link to="/list200">Live Round</Link>
//       {/* Add other links as needed */}
//     </div>
//   )}
//       </Drawer>


// </>
// );
// }

// export default UserNavBar;



import { IconButton } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Typography } from '@mui/material';



const UserNavBar = () => {
  const theme = useTheme();

  let user = useSelector((state) => state.user.currentUser);
  let role = user ? user.role : 'anonymous';
  let dispatch = useDispatch();
  const [showListLinks, setShowListLinks] = useState(false);

  const handleMouseEnter = () => {
    setShowListLinks(true);
  };

  const handleMouseLeave = () => {
    // setTimeout(() => {
    //   setShowListLinks(false);
    // }, 10000); // Hide after 3 seconds
    setShowListLinks(false);
  };

  return (
    <>
      <div style={{
        position: "fixed",
        top: "8vh", height: "22vh", width: "100vw", zIndex: 1000, backgroundColor:   theme.palette.secondary.main
      }}>

        {user && <h3>Hello to {user.userName} {user.role}</h3>}

        {!user && <h3 style={ { color:  theme.palette.secondary.contrastText}}>ברוך הבא לאתרנו אנו מזמינים אותך לבצע הרשמה</h3>}
        <img src="/logo.png" style={{ width: "20%" }} alt="Logo" />
      </div>
      <Drawer
      color="primary"
        variant="permanent"
        anchor="top" // Set the anchor to 'top'
        sx={{
          // width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 16,
            paddingRight: 16,
            backgroundColor: theme => theme.palette.primary.main, // Set background color to primary
            color: theme => theme.palette.primary.contrastText, 
            

          },
        }}
      >
        <List sx={{ display: 'flex', flexDirection: 'row' }}>
          <ListItem
            button
            component={Link}
            to="/list"
            onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%', // Adjust the width as needed
            }} component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          {/* <ListItem button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%', // Adjust the width as needed
            }} component={Link} to="/list">
            <ListItemText primary="Products" />
          </ListItem> */}
          {user && (<>
            <ListItem button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
              }}>


              <ListItemText primary="Logout" onClick={() => dispatch(userOut())} />
            </ListItem>

      


          </>
          )}
                <ListItem button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
              }} component={Link} to="/basket">
              <ListItemText primary="basket" />
            </ListItem>


          {!user && (
            <>
              <ListItem button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50%', // Adjust the width as needed
                }} component={Link} to="/login">
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50%', // Adjust the width as needed
                }} component={Link} to="/signIn">
                <ListItemText primary="Register" />
              </ListItem>
            </>
          )}
          {role == "admin" && <ListItem button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%', // Adjust the width as needed
            }} component={Link} to="/addProduct">
            <ListItemText primary="adding" />
          </ListItem>
          }
          {role == "admin" && <ListItem button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%', // Adjust the width as needed
            }} component={Link} to="/OrderList">
            <ListItemText primary="orders" />
          </ListItem>
          }
          {user && <ListItem button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%', // Adjust the width as needed
            }} component={Link} to="/basket">
            <ListItemText primary="basket" />
          </ListItem>}




        </List>


      </Drawer>



      {showListLinks && (
        <div style={{ position: 'fixed', top: '29vh', width: '100vw', backgroundColor: '#ddd', zIndex: 1000 }}>

          <List sx={{ display: 'flex', flexDirection: 'row',paddingRight:"2vw",paddingLeft:"2vw"  , backgroundColor: theme => theme.palette.secondary.main, // Set background color to primary
      color: theme => theme.palette.secondary.contrastText, 
      }}>
          <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
               
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,
                  color: theme => theme.palette.primary.contrastText, 
                },
              }}
              component={Link}
              to="/list100"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
                חישוק חי
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.dark, 
       
                }, 
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,

                },
              }}
              component={Link}
              to="/list200"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
עגול חי                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.dark, 
       
                }, 
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,

                },
              }}
              component={Link}
              to="/list300"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
                 סחלבים נשפך
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.dark, 
       
                }, 
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,

                },
              }}
              component={Link}
              to="/list400"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
                  טוליפים נשפך
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.dark, 
       
                }, 
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,

                },
              }}
              component={Link}
              to="/list500"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
                 קאלות נשפך
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.dark, 
       
                }, 
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,

                },
              }}
              component={Link}
              to="/list600"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
                וורדים מדורג
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.dark, 
       
                }, 
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,

                },
              }}
              component={Link}
              to="/list700"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
                  סחלב מלאכותי
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%', // Adjust the width as needed
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.dark, 
       
                }, 
              
                '&:focus': {
                  backgroundColor: theme => theme.palette.primary.main,

                },
              }}
              component={Link}
              to="/list800"
            >
              <ListItemText>
                <Typography variant="body2" style={{ fontSize: '0.75rem' }}>
                  חישוק מלאכותי
                </Typography>
              </ListItemText>
            </ListItem>

            <IconButton onClick={handleMouseLeave}>
            <ArrowDropUpIcon />
          </IconButton>

          </List>
      


        </div>
      )}
    </>
  );
}

export default UserNavBar;
