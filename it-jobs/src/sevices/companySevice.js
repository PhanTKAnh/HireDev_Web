import { get, patch, post } from "../untils/request"

export const getAllCompany = async () => {
    const result = await get("companies");
    return result ; 
}
export const getCompany = async (id) => {
    const result = await get(`companies/${id}`);
    return result ; 
}
export const getUserCompany = async (email,password) => {
    const result = await get(`companies?email=${email}&&password=${password}`);
    return result ; 
}
export const  postCompany = async(options) =>{
    const result = await post("companies",options);
    return result;
}
export const editCompany = async (id,options) => {
    const result = await patch(`companies/${id}`,options);
    return result;
}
