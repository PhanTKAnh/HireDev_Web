import { del, get, patch, post } from "../untils/request";

export const getAllJob = async () => {

    const result = await get('jobs');
    return result; 
}
export const getAllListJob = async (id) => {

    const result = await get(`jobs?idCompany=${id}`);
    return result; 
}
export const getDetailJob = async (id) => {
    const result = await get(`jobs/${id}`);
    return result; 
}
export const updateJobs = async (id,options)=>{
    const result = await patch(`jobs/${id}`,options);
    return result;
}
export const deleteJobs = async(id) =>{
    const result = await del(`jobs/${id}`);
    return result;
}
export const createJobs = async (option) =>{
    const result = await post("jobs",option);
    return result;
}