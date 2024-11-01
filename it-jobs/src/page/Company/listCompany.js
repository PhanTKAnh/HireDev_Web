import { useEffect, useState } from "react"
import { getAllCompany } from "../../sevices/companySevice";
import { Card, Space } from "antd";
import { Link} from "react-router-dom";

function ListCompany() {
    const [company, setCompany] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getAllCompany();
            setCompany(response);
        };
        fetchApi();
    }, [])

    return (
        <>
            <h1>Danh sách công ty </h1>
            <Space direction="horizontal" size={16}>

                {company && (company.map(item => (
                    <Link to={`/company/${item.id}`}>
                        <Card key={item.id}

                            style={{
                                width: 300,
                            }}
                        >
                            <p>Công ty: <strong>{item.companyName}</strong></p>
                            <p>Số điện thoại: <strong>{item.phone}</strong> </p>
                            <p>Số nhân sự: <strong>{item.quantityPeople}</strong></p>
                            <p>Website: <strong>{item.website} </strong> </p>
                            <p>Địa chỉ: <strong>{item.address}</strong> </p>
                        </Card>
                    </Link>

                )))}
            </Space>



        </>

    )
}
export default ListCompany