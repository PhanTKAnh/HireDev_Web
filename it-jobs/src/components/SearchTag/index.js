import { useEffect, useState } from "react"
import { getListTag } from "../../sevices/tagsSevices";
import { Col, Form, Row, Tag } from "antd";
import { useNavigate } from "react-router-dom";
function SearchTag() {
    const [dataTag, setDataTag] = useState();
    
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTag();
            setDataTag(response);
        };
        fetchApi();
    }, []);
    const handleClick = (e) => {
        e.preventDefault();
        let tags = e.target.innerText
        navigate(`/search?keyword=${tags||""}`);

    }
    return (
        <>
            {dataTag && ( 
                    <Row justify="start" gutter={[16, 16]} >
                        <Col span={8}>
                            {dataTag.map(item => (
                                <Tag onClick={handleClick} key={item.id} color="magenta">{item.value}</Tag>
                            ))}
                        </Col>
                    </Row>

            )}
        </>
    )
}
export default SearchTag