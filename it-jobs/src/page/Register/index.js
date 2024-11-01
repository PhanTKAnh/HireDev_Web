import { Button, Card, Form, Input } from "antd";
import { generateToken } from "../../helper/generateToken";
import { postCompany } from "../../sevices/companySevice";

function Register() {
    const rule = [
        {
            required: true,
            message: 'Please input your username!',
        }
    ];
    const onFinish = async (value) =>{
        
        const options = {
            ...value,
            token :generateToken()
        }
        const response = await postCompany(options);
        console.log(response);
    }
    return (
        <>

            <Card
                title="Đăng ký Tài Khoản"
                style={{
                    width: 600,
                    margin: "80px",
                }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    
                    <Form.Item
                        label="Tên công ty "
                        name="companyName"
                        rules={rule}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="email"
                        name="email"
                        rules={rule}
                    >
                        <Input />
                    </Form.Item>

                    
                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={rule}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </>
    )
}
export default Register