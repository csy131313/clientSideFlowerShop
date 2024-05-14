import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerInServer } from "./UserApi";
import { userIn } from "./UserSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const SignIn = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm();

  const signIn = async (data) => {
    try {
      setIsLoading(true);
      let res = await registerInServer(data);
      alert("Registered successfully");
      dispatch(userIn(res.data));
      navigate(-1);


    } catch (err) {
        alert(JSON.stringify(data, null, 2));
        alert(err + " An error occurred" + err.message);
    }finally{
      setIsLoading(false);
    }
  };

  return (<>
    <form style={{marginTop: "32vh"}} onSubmit={handleSubmit(signIn)}>
    
      <h1>Register</h1>

      <label>Username</label>
      <input
        type="text"
        {...register("userName", {
          required: "Username is required",
          minLength: { value: 3, message: "Username must be at least 3 characters" },
          maxLength: { value: 30, message: "Username must not exceed 30 characters" }
        })}
      />
      {errors.userName && <span className='error-msg'>{errors.userName.message}</span>}

      <label>Email</label>
      <input
        type="text"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <span className='error-msg'>{errors.email.message}</span>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^[a-zA-Z0-9]{3,30}$/,
            message: "Password must contain alphanumeric characters and be between 3 and 30 characters"
          }
        })}
      />
      {errors.password && <span className='error-msg'>{errors.password.message}</span>}

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

export default SignIn;
