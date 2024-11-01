import { Card, Col, Row, Tag } from "antd";
import { useEffect, useState } from "react";
import { getAllCompany } from "../../sevices/companySevice";
import JobsItem from "../../components/jobsItem";

function SearchList(props) {
    const {dataSearch = []} = props;
    const [dataFinal,setDataFinal] = useState([]);
   useEffect(()=>{
    const fetchApi = async () => {
        const company= await getAllCompany();

        const newData = dataSearch.map(item => {
            const infoCompany = company.find(itemCompany => itemCompany.id == item.idCompany && itemCompany);
          return {
            infoCompany:infoCompany,
            ...item
          }
        });
        setDataFinal(newData);
    
        
    };
    fetchApi();
   },[])
    return (
        <>
            <Row justify="start" gutter={[16, 16]}>
                {dataFinal && (dataFinal.map((item) => (
                    <Col  key={item.id} span={6}>
                        <JobsItem item={item}/>
                    </Col>)))}

            </Row>
        </>
    )
}
export default SearchList