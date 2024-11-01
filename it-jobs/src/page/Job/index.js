import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getDetailJob } from "../../sevices/jobServices";
import { Button, Card, Col, Input, Row, Select, Tag, Form, notification } from "antd";
import { getAllCompany } from "../../sevices/companySevice";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";

import { createCV } from "../../sevices/CVServices";
import { getTimeCurent } from "../../helper";
function Job() {
    const params = useParams();
    const [dataJobs, setDataJobs] = useState([]);
    const [dataCompany, setDataCompany] = useState([]);
    const [form] = Form.useForm();
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getDetailJob(params.id);
            const company = await getAllCompany();
            const result = company.find(item => item.id == response.idCompany);
            setDataCompany(result);
            setDataJobs(response);
        };
        fetchApi();
    }, []);
    const rules = [
        {
            required: true,
        },
    ];
    const handleFinish = async (value) => {
       value.idJob = dataJobs.id;
       value.idCompany = dataCompany.id;
       value.createAt = getTimeCurent();
       const response = await createCV(value);
       if(response){
        form.resetFields();
        notification.success(
            {
                message:`Gửi yêu cầu thành công!`,
                description:"Nhà tuyển dụng sẽ liên hệ với bạn trong thời gian sơm nhất.",
            }
        )
       }else{
        notification.error(
            {
                message:`Gửi yêu cầu không thành công!`,
                description:"Hệ thống đang gặp lỗi, vui lòng gửi lại yêu cầu.",
            }
        )
       }

    }
    return (
        <>
            <Link to='/'><Button>Trở lại</Button></Link>

            <Card title={<h1>{dataJobs.name}</h1>}>

                <Button href="#apply-form" type="primary" size="large">ỨNG TUYỂN NGAY</Button>

                <p>Tags: {dataJobs.tags?.map((item, index) => (<Tag key={index} color="gold">{item}</Tag>))}</p>
                <p>Thành phố:  {dataJobs.city?.map((item, index) => (<Tag key={index} color="gold">{item}</Tag>))}</p>
                <p>Mức lương: <strong>{dataJobs.salary}</strong></p>
                <p>Địa chỉ công ty: <strong>{dataCompany.address}</strong></p>
                <p>Thời gian đăng bài : <strong>{dataJobs.createAt}</strong></p>
                <p>Mô tả công việc: <br />{dataJobs.description}</p>
                <p>Ứng tuyển ngay</p>
            </Card>
            <Card id="apply-form">
                <Form name="apply-form" layout="vertical" form={form} onFinish={handleFinish}>
                    <Row gutter={[20, 20]}>
                        <Col span={6}>
                            <Form.Item
                                label="Họ tên"
                                name="name"
                                rules={rules}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                rules={rules}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={rules}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="Thành phố"
                                name="city"
                                rules={rules}
                            >
                                <Select >
                                    {dataJobs.city?.map((item, index) => (<Option key={index} label={item} value={item}></Option>))}

                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Gới thiệu bản thân"
                                name="description"
                                rules={rules}
                            >
                                <TextArea rows={4} />
                            </Form.Item></Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Danh sách link project dã làm "
                                name="linkProject"
                                rules={rules}
                            >
                                <TextArea rows={4} />
                            </Form.Item></Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label=" ">
                                <Button type="primary" htmlType="Gửi yêu cầu">
                                Gửi yêu cầu
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Card>




        </>
    )
}
export default Job 