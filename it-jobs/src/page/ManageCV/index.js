import { Table } from "antd"
import ListCV from "./listCV"
import { getCookie } from "../../helper/cookie"
import { getlistCV } from "../../sevices/CVServices";
import { useEffect, useState } from "react";

function ManageCV(){
    const idCompany = getCookie("id");
    const [dataCV,setDataCV] = useState([]);
    const handleReload = () =>{
        fetchApi();
    }
    const fetchApi = async () => {
        const response = await getlistCV(idCompany);
        setDataCV(response);
        
    }
    useEffect(()=>{
        fetchApi();
    },[])
   
    return(
        <>
        <h1>Danh sách CV</h1>
        <ListCV dataCV={dataCV} onReload={handleReload}/>
        </>
    )
}
export default ManageCV