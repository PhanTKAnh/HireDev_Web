import { useEffect, useState } from "react"
import { Card } from 'antd';
import { getCompany } from "../../sevices/companySevice";
function InfoStatic(props) {
    const {id} = props;

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getCompany(id);
           setData(response);
        };
        fetchApi();
    }, [])
    return (
        <>
            <Card title="Thông tin công ty">
                        <p>Tên công ty: <strong>{data.companyName}</strong> </p>
                        <p>Email: <strong>{data.email}</strong>  </p>
                        <p>Số điện thoại: <strong>{data.phone}</strong> </p>
                        <p>Số nhân viên: <strong>{data.quantityPeople}</strong> </p>

            </Card>
        </>
    )
}
export default InfoStatic