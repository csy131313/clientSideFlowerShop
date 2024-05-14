import { useForm } from 'react-hook-form';
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToClinet } from './productSlice';
import { addProduct } from './productApi';

const AddProductForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    let { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "all",
        defaultValues: {
            name: "פרח",
            RoutingToImage: ""
        }
    });
    let dispatch = useDispatch();
    let admin = useSelector((state) => state.user.currentUser);

    const save = async (data) => {
        try {
            setIsLoading(true);
            let res = await addProduct(data, admin.token);
            // dispatch(addProductsToClinet(res.data));
            alert("Addition successful");
        } catch (err) {
            console.log(err);
            alert("Add failed: " + err);
        }finally{
            setIsLoading(false);
          }
        console.log(data);
    };

    return (<>
        <form style={{marginTop: "32vh"}} onSubmit={handleSubmit(save)}>
          
            <h1>Add a product</h1>

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

      <label>description</label>
      <input type="text" {...register("description", {
        required: "Type is a required field",
        minLength: { value: 2, message: "description must be at least 2 characters" },
        maxLength: { value: 2000, message: "description must not exceed 30 characters" }
      })} />
      {errors.description && <span className='error-msg'>{errors.description.message}</span>}
            <input type="submit" disabled={!isValid} />
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
