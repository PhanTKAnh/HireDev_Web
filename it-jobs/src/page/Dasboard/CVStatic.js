import { Card } from "antd"
import { useEffect, useState } from "react"
import { getlistCV } from "../../sevices/CVServices";
function CVStatic(props) {
    const {id} = props;
    const [data,setData]=useState([]);
useEffect(()=>{
    const fetchApi =async() => {
        const response = await getlistCV(id);
        if(response){
            let obj ={
                total:0,
                statusTrue:0,
                statusFalse:0
            }; 
            obj.total = response.length;
            response.forEach(item => {
                item .statusRead ? obj.statusTrue++ : obj.statusFalse++;
            });
            setData(obj);
        }
    };
    
    fetchApi();
},[])
    return(
        <>
        <Card title="CV">
            <p>số lượng CV: <strong>{data.total}</strong></p>
            <p>CV đã đọc: <strong>{data.statusTrue}</strong></p>
            <p>CV chưa đọc : <strong>{data.statusFalse}</strong></p>
        </Card>
        </>
    )
}
export default CVStatic