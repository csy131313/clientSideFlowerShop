// import { useForm } from 'react-hook-form';

// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { getProductById } from "./productApi";
// import { useDispatch, useSelector } from 'react-redux';
// import { addProductsToClinet } from './productSlice';
// import { addProduct } from './productApi';


// const AddProductForm = () => {
//     const [product, setProduct] = useState({});
//     let { id } = useParams();
//     let navigate = useNavigate();

   
   


//     let { register, handleSubmit, formState: { errors, isValid } } = useForm({
//         mode: "all",
//         defaultValues: {
           
//             name: "product.name",
//             RoutingToImage: product.RoutingToImage,
//             type:product.type,
//             price:"product.price"
//         }
//     });
//     let dispatch = useDispatch();
//     let admin = useSelector((state) => state.user.currentUser);

//     useEffect(() => {
//         getProductById(id).then(res => {
//             alert("Succeeded in fetching the data");
//             setProduct(res.data);
//         }).catch(err => {
//             console.log(err);
//             alert("Failed to fetch data");
//         });
      
       
//     }, []);

//     const save = async (data) => {
//         try {
//             let res = await addProduct(data, admin.token);
//             dispatch(addProductsToClinet(res.data));
//             alert("Addition successful");
//         } catch (err) {
//             console.log(err);
//             alert("Add failed: " + err);
//         }
//         console.log(data);
//     };

//     return (
//         <form style={{marginTop: "32vh"}} onSubmit={handleSubmit(save)}>
          
//             <h1>Update a product</h1>

//             <label>Name</label>
//             <input type="text" {...register("name", { required: { value: true, message: "Name is a required field" } })} />
//             {errors.name && <span className='error-msg'>{errors.name.message}</span>}

//             <label>RoutingToImage</label>
//             <input type="text" {...register("RoutingToImage", {
//               validate: (value) => {
//     const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp']; // Add 'webp' to the list of accepted extensions
//     const extension = value.split('.').pop().toLowerCase();
    
//     if (!imageExtensions.includes(extension)) {
//         return "Invalid image URL";
//     }
    
//     return true;
// }

//             })} />
//             {errors.RoutingToImage && <span className='error-msg'>{errors.RoutingToImage.message}</span>}
//             <label>price</label>
//             <input type="number" {...register("price",{min:{value:20,message:"מחיר מתחת ל20"}, max:{value:800,message:"מחיר מעל800"}})}/>
//             {errors.price&&<span className='error-msg'>{errors.price.message}</span>}


//             <label>Type</label>
//       <input type="text" {...register("type", {
//         required: "Type is a required field",
//         minLength: { value: 2, message: "Type must be at least 2 characters" },
//         maxLength: { value: 30, message: "Type must not exceed 30 characters" }
//       })} />
//       {errors.type && <span className='error-msg'>{errors.type.message}</span>}
//             <input type="submit" disabled={!isValid} />
//         </form>
//     );
// };

// export default AddProductForm;
import { useForm } from 'react-hook-form';

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "./productApi";
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToClinet } from './productSlice';
import { addProduct } from './productApi';
import CircularProgress from '@mui/material/CircularProgress';




const AddProductForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm({
        mode: "all"
    });
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        getProductById(id)
            .then(res => {
              
                // alert("Succeeded in fetching the data");
                setProduct(res.data);
                setFormDefaultValues(res.data); 
                navigate(-1);// Set default form values after fetching product data
            })
            .catch(err => {
                console.log(err);
                alert("Failed to fetch data");
            })
                
            
    }, [id]); // Include id in the dependency array to fetch data when id changes

    const setFormDefaultValues = (productData) => {
        if (Object.keys(productData).length > 0) {
            setValue('name', productData.name);
            setValue('RoutingToImage', productData.RoutingToImage);
            setValue('type', productData.type);
            setValue('price', productData.price);
        }
    };

    const save = async (data) => {
        try {
            setIsLoading(true);
            const res = await updateProduct(id,data, admin.token);
            // dispatch(addProductsToClient(res.data));
            alert("Addition successful");
        } catch (err) {
            console.log(err);
            alert(JSON.stringify(product, null, 2)+admin.token);
            alert("Add failed: " + err);
        }finally{
            setIsLoading(false);
          }
        console.log(data);
    };



    return (
        <>
        <form style={{marginTop: "32vh"}} onSubmit={handleSubmit(save)}>
          
            <h1>Update a product</h1>

            <label>Name</label>
            <input type="text" {...register("name", { required: { value: true, message: "Name is a required field" } })} />
            {errors.name && <span className='error-msg'>{errors.name.message}</span>}

            <label>RoutingToImage</label>
            <input type="text" {...register("RoutingToImage", {
              validate: (value) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp']; // Add 'webp' to the list of accepted extensions
    const extension = value.split('.').pop().toLowerCase();
    
    if (!imageExtensions.includes(extension)) {
        return "Invalid image URL";
    }
    
    return true;
}

            })} />
            {errors.RoutingToImage && <span className='error-msg'>{errors.RoutingToImage.message}</span>}
            <label>price</label>
            <input type="number" {...register("price",{min:{value:20,message:"מחיר מתחת ל20"}, max:{value:800,message:"מחיר מעל800"}})}/>
            {errors.price&&<span className='error-msg'>{errors.price.message}</span>}


            <label>Type</label>
      <input type="text" {...register("type", {
        required: "Type is a required field",
        minLength: { value: 2, message: "Type must be at least 2 characters" },
        maxLength: { value: 30, message: "Type must not exceed 30 characters" }
      })} />
      {errors.type && <span className='error-msg'>{errors.type.message}</span>}
            <input type="submit" disabled={!isValid} />
            <input type="button" value="Back" onClick={() => navigate(-1)} />

        </form>
         {isLoading && <div style={{ marginTop: "10vh"}}>
         {isLoading && <CircularProgress color="secondary" />}
         {isLoading && <CircularProgress color="primary" />}
         {isLoading &&<CircularProgress color="green" />}
         
         {isLoading &&<CircularProgress color="zaav" />}
         
         </div>}
         </>
    );
};

export default AddProductForm;
