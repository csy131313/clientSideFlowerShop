import axios from "axios";
let baseUrl="http://localhost:3000/api/product";

export const getProducts = (page, perPage, search) => {
    return axios.get(`${baseUrl}?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts100 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/100?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts200 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/200?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts300 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/300?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts400 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/400?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts500 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/500?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts600 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/600?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts700 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/700?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts800 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/800?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getProducts900 = (page, perPage, search) => {
    return axios.get(`${baseUrl}/900?page=${page}&perPage=${perPage}&search=${search}`)
}
export const getLength = () => {
    return axios.get(`${baseUrl}/length`)
}
export const getLength100 = () => {
    return axios.get(`${baseUrl}/length100`)
}
export const getLength200 = () => {
    return axios.get(`${baseUrl}/length200`)
}
export const getLength300 = () => {
    return axios.get(`${baseUrl}/length300`)
}
export const getLength400 = () => {
    return axios.get(`${baseUrl}/length400`)
}
export const getLength500 = () => {
    return axios.get(`${baseUrl}/length500`)
}
export const getLength600 = () => {
    return axios.get(`${baseUrl}/length600`)
}
export const getLength700 = () => {
    return axios.get(`${baseUrl}/length700`)
}
export const getLength800 = () => {
    return axios.get(`${baseUrl}/length800`)
}
export const getLength900 = () => {
    return axios.get(`${baseUrl}/length900`)
}

export const getProductById=(id)=>{
    return axios.get(`${baseUrl}/${id}`);
}
export const addProduct=(product,token)=>{
    return axios.post(`${baseUrl}`,product,{
        headers:{
            "x-access-token":token,
        }
    });
}
export const updateProduct=(id,product,token)=>{
    return axios.put(`${baseUrl}/${id}`,product,{
        headers:{
            "x-access-token":token,
        }
    });
}
export const deleteProductById=(id,token)=>{
    return axios.delete(`${baseUrl}/${id}`,{headers:{
        "x-access-token":token,
        data: null
    }});
}