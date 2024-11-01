import { Button, Card, Col, Form, Input, message, Row } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import { getCookie } from "../../helper/cookie"
import { editCompany, getCompany } from "../../sevices/companySevice";
function InfoCompany() {
    const id = getCookie("id");
    const [form] = Form.useForm();
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    const rules = [
        {
            required: true,
            message: 'Please input!',
        }
    ]
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getCompany(id);
            if (response) {
                setData(response);
                form.setFieldsValue(response);
            }
        };
        fetchApi();
    }, []);
    const onClickEdit = () => {
        setIsEdit(true);

    }
    const onClickCancel = () => {
        setIsEdit(false);
        form.resetFields();
    }
    const onFinish = async (value) => {
        console.log(value);
        const response = await editCompany(id, value);
        if (response) {
            messageApi.open({
                type: 'success',
                content: 'Cập nhật thành công',
            });
            setIsEdit(false);
        }

    }
    return (
        <>
            {contextHolder}
            <Card title="Thông tin công ty"
                extra={!isEdit ? (<Button onClick={onClickEdit}>Chỉnh sửa</Button>) : (<Button onClick={onClickCancel}>Hủy</Button>)}
            >
                <Form
                    onFinish={onFinish}
                    disabled={!isEdit}
                    layout="vertical"
                    initialValues={data}
                    form={form} >
                    <Row gutter={[16, 16]} >
                        <Col span={24}>
                            <Form.Item
                                label="Tên công ty:"
                                name="companyName"
                                rules={rules}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Email: "
                                name="email"
                                rules={rules} >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Số điện thoại: "
                                name="phone"
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                        <Col span={8}>
                            <Form.Item label="Địa chỉ: "
                                name="address"
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                        <Col span={8}>
                            <Form.Item label="Số lượng nhân sự: "
                                name="quantityPeople"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Thời gian làm việc: "
                                name="workingTime"
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                        <Col span={8}>
                            <Form.Item label="Link website: "
                                name="website"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Mô tả ngắn: "
                                name="description"
                            >
                                <TextArea />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Mô tả chi tiết: "
                                name="detail"
                            >
                                <TextArea />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>

        </>
    )
}
export default InfoCompany