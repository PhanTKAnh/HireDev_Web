import { useEffect, useState } from "react"
import { getAllListJob } from "../../sevices/jobServices";
import { Card } from 'antd';
function JobStatic(props) {
    const {id} = props;

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getAllListJob(id);
            if (response) {
                let obj = {
                    total: 0,
                    statusTrue: 0,
                    statusfalse: 0
                }
                obj.total = response.length;
                response.forEach(item => {
                    item.status ? obj.statusTrue++ : obj.statusfalse++;
                    
                });
                setData(obj);
                
            };
        };
        fetchApi();
    }, [])
    return (
        <>
            <Card title="Job">
                        <p>Số lượng job: <strong>{data.total}</strong> </p>
                        <p>Job đang bật: <strong>{data.statusTrue}</strong>  </p>
                        <p>Job đang tắt: <strong>{data.statusfalse}</strong> </p>
                
            </Card>
        </>
    )
}
export default JobStatic