import ListJob from "./listJob"
import {useEffect, useState} from "react"
import {getCookie} from "../../helper/cookie"
import { getAllListJob } from "../../sevices/jobServices";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import {PlusOutlined} from "@ant-design/icons"
function ManageJob(){
    const id = getCookie("id")
    const [jobs,setJobs] = useState([]);

    const fetchApi =  async() =>{
        const response = await  getAllListJob(id);
        if(response){
            setJobs(response.reverse());
        };
    }
    useEffect(()=>{
        fetchApi();
    },[])
    const handleReload = () =>{
        fetchApi();
    }
    return(
        <>
       <NavLink to="/create-job"> <Button><PlusOutlined />Tạo việc mới</Button></NavLink>
        <h1>Danh sách việc làm </h1>
        <ListJob jobs={jobs} onReload={handleReload}/>
        </>
    )
}
export default ManageJob