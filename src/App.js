import logo from './logo.svg';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import './App.css';
import {userIn} from "./feature/Users/UserSlice.js"

import UserNavBar from "./feature/NavBars/UserNavBar.js";
import ImageList from './ImageList';

import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UpdateFrom from "./feature/products/UpdateFrom.js"
import Basket from "./feature/Orders/Basket";
import { useState } from "react";
import SmallBasket from "./feature/Orders/SmallBasket.js";

import { ThemeProvider } from '@mui/material/styles';
import theme from './them';


import OrderFrom from "./feature/Orders/OrderForm";
import AddProductFrom from "./feature/products/AddProductFrom";
import ProductDetails from "./feature/products/ProductDetails";
import ProductList from "./feature/products/ProductList";
import Login from "./feature/Users/Login";
import LogOut from "./feature/Users/LogOut";
import SignIn from "./feature/Users/SignIn";
import { userOut } from "./feature/Users/UserSlice.js"
import OrderList from "./feature/Orders/OrderList";
import ListProduct100 from "./feature/products/lists/ListProduct100"

import ListProduct200 from "./feature/products/lists/ListProduct200"
import ListProduct300 from "./feature/products/lists/ListProduct300"
import ListProduct400 from "./feature/products/lists/ListProduct400"
import ListProduct500 from "./feature/products/lists/ListProduct500"
import ListProduct600 from "./feature/products/lists/ListProduct600"
import ListProduct700 from "./feature/products/lists/ListProduct700"
import ListProduct800 from "./feature/products/lists/ListProduct800"
import ListProduct900 from "./feature/products/lists/ListProduct900"

import MyImageGallery from './feature/products/MyImageGallery'

 

function App() {
    // let dispatch=useDispatch();
    // useEffect(()=>{
    // getAllProduct().then(res=>{
    // console.log(res.data);
    // dispatch(saveProductsInClient(res.data));
    // alert("Succeeded in fetching products")
    // }).catch(er=>{
    // console.log(er);
    // alert("Failed to fetch products")
    // })
    // },[]);
    let dispatch = useDispatch();
    // useEffect(() => {
    //   let u = localStorage.getItem("currentUser");
    //   if (u) {
    //     dispatch(userIn(JSON.parse(u)));
    //   }
    // }, []);
    return (
        <ThemeProvider theme={theme}>

        <div className="App" style={{}}>
            {/* <ResponsiveAppBar/> */}
            <UserNavBar /> Apply inline fixed position styling
            {/* <ImageList/> */}
            {/* <MyImageGallery/> */}
         
            <Routes>
       
       <Route path='/UpdateFrom/:id' element={<UpdateFrom />} />
       <Route path='/' element={<ImageList/>} />
       <Route path='/login' element={<Login />} />
       <Route path='/order' element={<OrderFrom />} />
       <Route path='/basket' element={<Basket />} />
       <Route path='/SmallBasket' element={<SmallBasket />} />

       
       <Route path="/list" element={<ProductList />}><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list100' element={<ListProduct100 />}><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list200' element={<ListProduct200 />}><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list300' element={<ListProduct300 />} ><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list400' element={<ListProduct400 />} ><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list500' element={<ListProduct500 />} ><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list600' element={<ListProduct600 />} ><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list700' element={<ListProduct700 />} ><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list800' element={<ListProduct800 />} ><Route path=":id" element={<ProductDetails />} /></Route>
       <Route path='/list900' element={<ListProduct900 />} ><Route path=":id" element={<ProductDetails />} /></Route>

       <Route path='/OrderList' element={<OrderList />} />

       <Route path='/signIn' element={<SignIn />} />

       <Route path='/addProduct' element={<AddProductFrom />} />

     </Routes>
        </div>
        </ThemeProvider>
    );
}

export default App;
