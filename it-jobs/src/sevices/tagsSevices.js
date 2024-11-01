import { get } from "../untils/request"

export const getListTag = async () => {
    const result = await get("tags");
    return result;
}