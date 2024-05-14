
import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { getAllOrder } from "./OrdersApi.js";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { UseDispatch } from "react-redux";

const OrdersList = () => {
    
    let admin = useSelector((state) => state.user.currentUser);

   
    const [arr, setArr] = useState( []);

    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const perPage = 26; // Number of items per page
    let accountProduct;
    let account;
   


    useEffect(() => {
        setIsLoading(true);

        // getAllorder(currentPage, perPage, "").then(res => {
            if (admin && admin.token) {
            getAllOrder(admin.token).then(res => {
            alert("Succeeded in fetching the data");
            let newArr = res.data;
    
            // if (newArr.length > 0 && basket.length > 0) {
            //     newArr = newArr.map(product => {
            //         const foundInBasket = basket.find(item => item._id === product._id);
            //         return foundInBasket ? foundInBasket : product;
            //     });
            // }
    
            setArr(newArr);
     

               
            
        }).catch(error => {
            console.log(error);
            alert("Failed to fetch data");
        }).finally(() => {
            setIsLoading(false);
        });}
        else{
            alert("בעיה בתרקן אתה לא מנהל או שאין לך תוקו")
        }

        // getLength().then(res => {
        //     accountProduct = res.data;
        //     // account=accountProduct.length;
        //     alert("Accountable Product: " + accountProduct);
        // }).catch(error => {
        //     console.log(error);
        //     alert("Error: " + error.message);
        // });
    }, [currentPage]);

    const goToNextPage = () => {
        alert(account);
        alert(perPage);
        alert("האם אני קטן מ"+Math.ceil(account / perPage))
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
        <div style={{marginTop: "32vh"}}>
            {isLoading && <h1>Loading......</h1>}
            <h1>Our Orders</h1>
            <ul>
                {arr.map(item => <li key={item._id}><OrderItem one={item} /></li>)}
            </ul>
            <div>
                <button onClick={goToPrevPage}>Previous</button>
                <input
                    type="number"
                    min="1"
                    max={String(Math.ceil(account / perPage))}
                    value={currentPage}
                    onChange={handlePageChange}
                />
                <button onClick={goToNextPage}>Next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export default OrdersList;
