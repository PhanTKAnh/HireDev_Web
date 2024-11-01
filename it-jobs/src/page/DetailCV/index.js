import { Button, Card, Tag } from "antd"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { changeStatusCV, getDetailCV } from "../../sevices/CVServices";
import { getDetailJob } from "../../sevices/jobServices";

function DetailCV(){
    const prams = useParams();
    const [dataCV,setDataCV] = useState([]);
    const [dataJob,setDataJob] = useState([]);
    const fetchApi = async () =>{
        const response = await getDetailCV(prams.id);
        if(response){ 
            const job = await getDetailJob(response.idJob);
            setDataCV(response);
            setDataJob(job);
        }
        changeStatusCV(prams.id,{statusRead:true})
    }
    useEffect(()=>{
        fetchApi();
    },[]);
    console.log(dataCV,dataJob)
    return (
        <>
        <Link to='/manage-CV'><Button>Trở lại</Button></Link>
        <Card title={`Ứng cử viên: ${dataCV.name}`}>
            <p>Ngày gửi: <strong>{dataCV.createAt}</strong></p>
            <p>Số điện thoại: <strong>{dataCV.phone}</strong></p>
            <p>Email: <strong>{dataCV.phone}</strong></p>
            <p>Thành phố ứng tuyển: <strong>{dataCV.city}</strong></p>
            <p>Giới thiệu bản thân: {dataCV.description }</p>
            <p>Link project: <strong>{dataCV.linkProject}</strong></p>
        </Card>
        <Card title="Thông tin Job">
            <p>Tags: {dataJob.tags?.map((item,index)=>(<Tag key={index}>{item}</Tag>))} </p>
            <p>Mức lương <strong>{dataJob.salary} $</strong></p>
            <p>Mô tả: {dataJob.description}</p>

        </Card>
        </>
    )
}
export default DetailCV