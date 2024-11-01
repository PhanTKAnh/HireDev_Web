import { Button, Form, Input, InputNumber, message, Select, Switch } from "antd"
import { Link } from "react-router-dom"
import { getListTag } from "../../sevices/tagsSevices";
import { useEffect, useState } from "react";
import { getListCities } from "../../sevices/citiesServices";
import { getTimeCurent } from "../../helper";
import { createJobs } from "../../sevices/jobServices";

function CreateJobs() {
    const [form] = Form.useForm();
    const [tags, setTags] = useState();
    const [city,setCity] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    const rules = [{
        required: true,
        message: 'Bắt buộc!',
    }]
    const fetchApi = async () => {
        const tag = await getListTag();
        const city = await getListCities();
        setTags(tag);
        setCity(city);

    }
    useEffect(() => {
        fetchApi();
    }, []);
    const handleFinish = async (value) =>{
        
        const option ={
            ...value,
            createAt:getTimeCurent()
        }
        const response = await createJobs(option);
        setTimeout(() => {
            if (response) {
                form.resetFields();
                messageApi.success({
                    type: 'success',
                    content: `Bạn đã thêm jobs thành công `

                });

            } else {
                messageApi.error({
                    type: 'error',
                    content: `Bạn đã thêm jobs không thành công jobs`

                });
            }
        }, 1000)
    }
    return (
        <>
        {contextHolder}
            <Link to='/manage-job'><Button>Trở lại</Button></Link>
            <h1>Thêm jobs</h1>
            <Form layout="vertical" form={form} name="create-job" onFinish={handleFinish}>
                <Form.Item
                    label="Tên công việc: "
                    name="name"
                    rules={rules}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Tag: "
                    name="tags"
                    rules={rules}
                >
                    <Select
                        mode="multiple"
                        placeholder="Chọn tags"
                        style={{
                            width: '100%',
                        }}
                        options={tags }
                        
                    />
                   
                </Form.Item>

                <Form.Item
                    label="Lương: "
                    name="salary"
                    rules={rules}
                >
                        <InputNumber min={1} addonAfter="$" />
                </Form.Item>
                <Form.Item
                    label="Thành phố: "
                    name="city"
                    rules={rules}
                >
                   <Select
                        mode="multiple"
                        placeholder="Chọn thành phố "
                        style={{
                            width: '100%',
                        }}
                        options={city }
                        
                    />
                </Form.Item>
                <Form.Item
                    label="Mô tả: "
                    name="description"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Trạng thái" name="status" valuePropName="checked">
                    <Switch checkedChildren="Đang bật" unCheckedChildren="Đang tắt" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Tạo mới
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}
export default CreateJobs