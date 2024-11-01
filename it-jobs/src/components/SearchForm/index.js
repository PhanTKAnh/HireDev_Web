import { useEffect, useState } from "react";
import {Menu, Button, Form, Input, Row, Col, Select } from 'antd';
import { getListCities } from "../../sevices/citiesServices";
import { useNavigate } from "react-router-dom"

function SearchForm() {
    const [dataCities, setDataCities] = useState([]);

    const [form] = Form.useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListCities();
            if(response){
                const objAll = {
                    key: 0,
                    value: "ALL",
                }
                setDataCities([objAll,...response]);
            }
  
        };
        fetchApi();
    }, []);

    const handleFinish = (values) => {
        let city = values.city || "";
        city = values.city == "ALL" ? "" : city;
        navigate(`/search?city=${city}&keyword=${values.keyword ||""}`);

    };

    return (
        <> <Row justify="center">

            <Col span={22}> <h1>1000+ IT Jobs For Developers</h1></Col>

        </Row>
            <Form form={form} onFinish={handleFinish}>
                <Row justify="center" >
                    <Col span={8}>
                        <Form.Item name="city">
                           <Select options={dataCities} placeholder ="Chọn thành phố"  />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item name="keyword">
                            <Input placeholder="Nhập từ khóa tìm kiếm" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Tìm kiếm
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default SearchForm;
