
import { useEffect, useState } from "react";
import ListItem from "../ListItem.js";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLength700, getProducts700 } from "../productApi.js";


const ProductList = () => {
    const [arr, setArr] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const perPage = 10; // Number of items per page
    // let accountProduct;
    // let account;
    const [account, setAccount] = useState(0)
    const basket = useSelector((state) => state.order.basket);


    useEffect(() => {
        setIsLoading(true);

        getProducts700(currentPage, perPage, "").then(res => {
            // alert("Succeeded in fetching the data");
            let newArr = res.data;

            if (newArr.length > 0 && basket.length > 0) {
                newArr = newArr.map(product => {
                    const foundInBasket = basket.find(item => item._id === product._id);
                    return foundInBasket ? foundInBasket : product;
                });
            }

            setArr(newArr);




        }).catch(error => {
            console.log(error);
            alert("Failed to fetch data");
        }).finally(() => {
            setIsLoading(false);
        });

        getLength700().then(res => {
            setAccount(res.data);
            // alert("כמות המוצרים במונגו היא: " + account);
        }).catch(error => {
            console.log(error);
            alert(" לא הצליח לשלוף כמות מוצרים מהשרתError: " + error.message);
        });
    }, [currentPage, basket]);

    const goToNextPage = () => {
        // alert(account);
        // alert(perPage);
        // alert("האם אני קטן מ"+Math.ceil(account / perPage))
        if (currentPage < Math.ceil(account / perPage)) {
            setCurrentPage(currentPage + 1);
        } else {
            alert("You are on the last page");
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            alert("You are on the first page");
        }
    };

    const handlePageChange = (e) => {
        const newPage = parseInt(e.target.value);
        if (newPage > 0 && newPage <= Math.ceil(account / perPage)) {
            setCurrentPage(newPage);
        } else {
            alert("Invalid page number");
        }
    };


    return (

        <div style={{ marginTop: "32vh" }}>

            {isLoading && <h1>Loading......</h1>}
            <h1>Our Products</h1>
            <div style={{display: "grid",
            placeItems: "center",
            gridTemplateColumns: "auto auto auto auto",
            gap: "12vh",
            justifyContent: "center",
            alignContent:"space-between",
            
            justifyContent: "center",
            alignItems: "center",
              gridOutoRows: "100px",
              marginLeft:"4vh",
              marginRight:"4vh"}}>
                {arr.map(item => <ListItem one={item} />)}
            </div>
            <div style={{margin:"15px"}}>
                <button onClick={goToPrevPage}>{"0<<"}</button>

                <input
                    type="number"
                    min="1"
                    max={String(Math.ceil(account / perPage))}
                    value={currentPage}
                    onChange={handlePageChange}
                />
                <button onClick={goToNextPage}>{">>"+String(Math.ceil(account / perPage))}</button>
            </div>
            <Outlet />
        </div>
    );
};

export default ProductList;
