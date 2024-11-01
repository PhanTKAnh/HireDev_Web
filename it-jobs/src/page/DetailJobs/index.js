import { Link, useParams } from "react-router-dom"
import { getDetailJob } from "../../sevices/jobServices";
import { useEffect, useState } from "react";
import { Button, Card, Tag } from "antd";

function DetailJobs() {
    const prams = useParams();
    const [data, setData] = useState({});
    const fetchApi = async () => {
        const response = await getDetailJob(prams.id);
        if (response) {
            setData(response);
        }
        console.log(response)
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <>
            <Link to='/manage-job'><Button>Trở lại</Button></Link>

            <Card title={<h5>{data.name}</h5>}>
                <p>Trạng thái: {data.status ? (<Tag color="green"> Đang bật</Tag>): (<Tag color="red">Đang tắt</Tag>)} </p>
                <p>Tags: {data.tags?.map((item, index) => (<Tag key={index} color="gold">{item}</Tag>))}</p>
                <p>Thành phố:  {data.city?.map((item, index) => (<Tag key={index} color="gold">{item}</Tag>))}</p>
                <p>Mức lương: <strong>{data.salary}</strong></p>
                <p>Địa chỉ công ty: <strong>{data.address}</strong></p>
                <p>Ngày tạo: <strong>{data.createAt}</strong></p>
                <p>Cập nhật: <strong>{data.updateAt}</strong></p>
                <p>Mô tả công việc: <br />{data.description}</p>
               
            </Card>
        </>
    )
}
export default DetailJobs 