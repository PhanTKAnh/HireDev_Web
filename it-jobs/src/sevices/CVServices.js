import { del, get, patch, post } from "../untils/request"

export const createCV = async (option) =>{
    const result = await post("cv",option);
    return result;
}

export const getlistCV = async (id) =>{
    const result = await get(`cv?idCompany=${id}`);
    return result;
}
export const getDetailCV = async (id) =>{
    const result = await get(`cv/${id}`);
    return result;
}
export const changeStatusCV = async (id,option) =>{
    const result = await patch(`cv/${id}`,option);
    return result;
}
export const deleteCV = async(id) =>{
    const result = await del(`cv/${id}`);
    return result;
}