import axios from "axios";
let baseUrl="http://localhost:3000/api/order";

export const getAllOrder = (token) => {
    return axios.get(baseUrl,{headers:{
      "x-access-token":token,
      data: null
  }})
}
//לפי התוקן של המשתמש
export const getOrderById=(token)=>{
    return axios.get(`${baseUrl}/only`);
}
export const addOrder = (order, token) => {
    return axios.post(baseUrl,order,{headers:{
      "x-access-token":token
    
  }});
  };
export const UpdateOrderById=(id,order,token)=>{
    return axios.put(`${baseUrl}/${id}`,order,{headers:{
      "x-access-token":token
    
  }});
}

export const deleteOrderById=(id)=>{
    return axios.delete(`${baseUrl}/${id}`);
}