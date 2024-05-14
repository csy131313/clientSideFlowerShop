
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from './OrdersApi';
import { Link } from "react-router-dom";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
const OrderFrom = () => {
    const [isLoading, setIsLoading] = useState(false);

    // אני לא יודעת האם הוא שולח את מערך products  מלא או ריק ואני לא מצליחה לבדוק את זה
    let { register, handleSubmit, formState: { errors
        , dirtyFildes, isDirty, isValid
    } } = useForm({
        mode: "all",
        defaultValues: {
            // name:"shevi"
        }
    });
    const basket = useSelector((state) => state.order.basket);
    const user = useSelector((state) => state.user.currentUser);

    let dispatch = useDispatch();
    let products = [];
    //אין לי איך באמת להוסיף הזמנה היות והוספת הזמנה מתבססת על הID שנלקח מהTOKEN וא שלחנו TOKEN
   if(user){}
    const save = async (data) => {
     if(user){  products = basket.flatMap(item => {
        const duplicatedProducts = [];
        for (let i = 0; i < item.quantity; i++) {
            duplicatedProducts.push(item.name);
        }
        return duplicatedProducts;
    });

    try {
        setIsLoading(true);
        const orderData = { ...data, products };
        // לקחת תוקן אחרי שאגמור לעשות את יוזר
        let res = await addOrder(orderData, user.token);
        alert("Addition successful");
    } catch (err) {


        
        console.log(err.message);
        console.log(user.token);


        let newdata = { ...data, products };
        console.log(JSON.stringify(newdata, null, 2))
        alert(JSON.stringify(newdata, null, 2) + user.token);
        <ul>
            {products.map(it => <li>{it}</li>)}
        </ul>

        alert("Add failed" + err);
    }finally{
        setIsLoading(false);
      }}else{
        alert("חובה לבצע כניסה או הרשמה לפני ביצוע ההזמנהב")
      }
      
    }
    const validateDueDate = (value) => {
        const currentDate = new Date();
        const selectedDate = new Date(value);
    
        // const oneWeekFromNow = new Date(currentDate);
        // oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
        const newDueDate = new Date(currentDate.setDate(currentDate.getDate() + 7));

    
        if (selectedDate < newDueDate) {
            return "Delivery Date must be at least one week from today";
        }
    
        return true;
    };
    

    console.log(errors);
    return (
        <>
        <form style={{ marginTop: "32vh" }} onSubmit={handleSubmit(save)}>
            <h1>Order</h1>

            <label>Address</label>
            <input
                type="text"
                {...register("address", {
                    required: "Address is a required field",
                    pattern: {
                        value: /^[\u0590-\u05FF\s]{3,50}$/, // Allow Hebrew characters and spaces
                        message: "Address must contain between 3 and 50 characters"
                    }
                })}
            />
            {errors.address && <span className='error-msg'>{errors.address.message}</span>}

            <label>Delivery Date</label>
            <input
                type="date"
                {...register("DueDate", {
                    required: { value: true, message: "Delivery Date is required" },
                    validate: validateDueDate
                })}
            />
            {errors.dueDate && <span className='error-msg'>{errors.dueDate.message}</span>}

            <input type="submit" disabled={!isValid} />
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>
        </form>
        {isLoading && <div style={{ marginTop: "10vh"}}>
    {isLoading && <CircularProgress color="secondary" />}
    {isLoading && <CircularProgress color="primary" />}
    {isLoading &&<CircularProgress color="green" />}
    
    {isLoading &&<CircularProgress color="zaav" />}
    
    </div>}
        <Link to="/list">To products</Link>
    </>

    )
}
export default OrderFrom;
